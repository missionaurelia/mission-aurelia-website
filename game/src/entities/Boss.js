import Phaser from 'phaser'
import { bus } from '../systems/bus.js'

const MAX_HP = 12

/**
 * The Warden of the Barrow.
 *
 * A four-state loop - chase, telegraph, charge, recover - with two escalations
 * layered on top as its health drops. Everything is readable and telegraphed:
 * the fight should be beatable on the second try without ever feeling cheap.
 */
export class Boss extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'warden', 'f0')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.maxHp = MAX_HP
    this.hp = MAX_HP
    this.damage = 1
    this.body.setSize(40, 42)
    this.body.setOffset(12, 20)
    this.body.setCollideWorldBounds(true)
    this.anims.play('warden-idle')

    this.mode = 'sleep'
    this.modeUntil = 0
    this.nextSummon = 0
    this.chargeVector = new Phaser.Math.Vector2()
    this.setDepth(this.y)
  }

  get phase() {
    const frac = this.hp / this.maxHp
    if (frac > 0.66) return 1
    if (frac > 0.33) return 2
    return 3
  }

  wake(time) {
    this.mode = 'chase'
    this.modeUntil = time + 1600
    this.nextSummon = time + 5000
  }

  update(time, player) {
    if (!this.active) return
    this.setDepth(this.y)
    if (this.mode === 'sleep') return

    // Phase 2 and up: call for help on a timer, independent of the main loop.
    if (this.phase >= 2 && time > this.nextSummon) {
      this.nextSummon = time + (this.phase === 3 ? 5200 : 7000)
      this.scene.summonForBoss(this)
    }

    switch (this.mode) {
      case 'chase': {
        const speed = this.phase === 3 ? 78 : this.phase === 2 ? 64 : 54
        this.scene.physics.moveTo(this, player.x, player.y, speed)
        if (time > this.modeUntil) this.enterTelegraph(time, player)
        break
      }

      case 'telegraph': {
        this.setVelocity(0, 0)
        if (time > this.modeUntil) this.enterCharge(time)
        break
      }

      case 'charge': {
        if (time > this.modeUntil) this.enterRecover(time)
        break
      }

      case 'recover': {
        this.setVelocity(0, 0)
        if (time > this.modeUntil) {
          this.mode = 'chase'
          this.modeUntil = time + (this.phase === 3 ? 1200 : 1700)
        }
        break
      }
    }
  }

  enterTelegraph(time, player) {
    this.mode = 'telegraph'
    this.modeUntil = time + (this.phase === 3 ? 480 : 650)
    this.setVelocity(0, 0)
    // Lock in the direction now - the charge is dodgeable precisely because
    // it aims at where you were, not where you'll be.
    this.chargeVector.set(player.x - this.x, player.y - this.y).normalize()
    this.setTintFill(0xffd9a0)
    this.scene.tweens.add({
      targets: this,
      scaleX: 1.12,
      scaleY: 0.9,
      duration: this.modeUntil - time,
      yoyo: false,
    })
  }

  enterCharge(time) {
    this.mode = 'charge'
    this.modeUntil = time + 620
    this.clearTint()
    this.setScale(1)
    const speed = this.phase === 3 ? 420 : 340
    this.setVelocity(this.chargeVector.x * speed, this.chargeVector.y * speed)
    this.scene.cameras.main.shake(90, 0.004)
  }

  enterRecover(time) {
    this.mode = 'recover'
    this.modeUntil = time + (this.phase === 3 ? 700 : 950)
    this.setVelocity(0, 0)
    if (this.phase === 3) this.scene.bossShockwave(this)
  }

  takeDamage(amount, fromX, fromY) {
    const time = this.scene.time.now
    if (this.mode === 'sleep') return false
    if (time < this._lastHit + 250) return false
    this._lastHit = time

    this.hp = Math.max(0, this.hp - amount)
    bus.emit('boss:hp', this.hp, this.maxHp)

    this.setTintFill(0xffffff)
    this.scene.time.delayedCall(90, () => this.active && this.clearTint())

    const angle = Math.atan2(this.y - fromY, this.x - fromX)
    if (this.mode !== 'charge') {
      this.setVelocity(Math.cos(angle) * 120, Math.sin(angle) * 120)
    }

    if (this.hp <= 0) {
      this.die()
      return true
    }
    return false
  }

  die() {
    this.mode = 'dead'
    this.setVelocity(0, 0)
    this.scene.onBossDefeated(this)
  }
}

Boss.prototype._lastHit = -9999
