import Phaser from 'phaser'
import { PLAYER, TILE } from '../config.js'
import { state } from '../systems/state.js'
import { bus } from '../systems/bus.js'

export class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player', 'down0')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    // A small body around the feet, not the whole 32x32 cell. This is what
    // makes top-down movement feel forgiving instead of boxy.
    this.body.setSize(14, 12)
    this.body.setOffset(9, 18)
    this.setOrigin(0.5, 0.5)

    this.facing = 'down'
    this.attacking = false
    this.lastAttack = -9999
    this.invulnUntil = 0
    this.knockbackUntil = 0
    this.frozen = false

    // Sword hitbox - a zone we park in front of the hero during a swing.
    this.hitbox = scene.add.zone(x, y, 26, 26)
    scene.physics.add.existing(this.hitbox)
    this.hitbox.body.setAllowGravity(false)
    this.hitbox.body.enable = false
  }

  get isInvulnerable() {
    return this.scene.time.now < this.invulnUntil
  }

  handleInput(input, time) {
    if (this.frozen || time < this.knockbackUntil) {
      if (this.frozen) this.setVelocity(0, 0)
      return
    }

    let vx = 0
    let vy = 0
    if (input.left) vx -= 1
    if (input.right) vx += 1
    if (input.up) vy -= 1
    if (input.down) vy += 1

    const moving = vx !== 0 || vy !== 0
    if (moving) {
      const len = Math.hypot(vx, vy)
      this.setVelocity((vx / len) * PLAYER.speed, (vy / len) * PLAYER.speed)
      // Horizontal wins ties, which reads better than diagonal-facing sprites.
      if (vx !== 0) this.facing = vx > 0 ? 'right' : 'left'
      else this.facing = vy > 0 ? 'down' : 'up'
    } else {
      this.setVelocity(0, 0)
    }

    if (!this.attacking) this.updateAnimation(moving)
  }

  updateAnimation(moving) {
    const key = this.facing === 'up' ? 'walk-up' : this.facing === 'down' ? 'walk-down' : 'walk-side'
    this.setFlipX(this.facing === 'left')
    if (moving) {
      this.anims.play(key, true)
    } else {
      this.anims.stop()
      const frame = this.facing === 'up' ? 'up0' : this.facing === 'down' ? 'down0' : 'side0'
      this.setFrame(frame)
    }
  }

  /** Returns true if a swing actually started. */
  attack(time) {
    if (this.frozen || !state.flags.sword) return false
    if (this.attacking || time < this.lastAttack + PLAYER.attackCooldown) return false

    this.attacking = true
    this.lastAttack = time

    const dir = this.facing
    const dx = dir === 'left' ? -PLAYER.attackReach : dir === 'right' ? PLAYER.attackReach : 0
    const dy = dir === 'up' ? -PLAYER.attackReach : dir === 'down' ? PLAYER.attackReach : 0

    this.hitbox.setPosition(this.x + dx, this.y + dy + 6)
    this.hitbox.body.reset(this.x + dx, this.y + dy + 6)
    this.hitbox.body.enable = true

    this.showSlash(dx, dy, dir)

    this.scene.time.delayedCall(PLAYER.attackDuration, () => {
      this.attacking = false
      this.hitbox.body.enable = false
      if (this.active) this.updateAnimation(this.body.speed > 5)
    })
    return true
  }

  showSlash(dx, dy, dir) {
    const angle = dir === 'right' ? 0 : dir === 'down' ? 90 : dir === 'left' ? 180 : 270
    const slash = this.scene.add
      .sprite(this.x + dx * 0.7, this.y + dy * 0.7 + 6, 'fx', 'slash')
      .setAngle(angle)
      .setDepth(this.y + 100)
      .setScale(0.7)
    this.scene.tweens.add({
      targets: slash,
      scale: 1.05,
      alpha: 0,
      duration: PLAYER.attackDuration + 60,
      onComplete: () => slash.destroy(),
    })
  }

  /** Returns true if the hit landed (i.e. the player was not invulnerable). */
  hurt(amount, fromX, fromY) {
    const time = this.scene.time.now
    if (this.isInvulnerable || this.frozen) return false

    state.hearts = Math.max(0, state.hearts - amount)
    this.invulnUntil = time + PLAYER.hurtInvulnerable
    this.knockbackUntil = time + 200

    const angle = Math.atan2(this.y - fromY, this.x - fromX)
    this.setVelocity(Math.cos(angle) * PLAYER.knockback, Math.sin(angle) * PLAYER.knockback)

    this.scene.cameras.main.shake(120, 0.006)
    this.blink()
    bus.emit('hud')

    if (state.hearts <= 0) this.scene.onPlayerDeath()
    return true
  }

  blink() {
    this.scene.tweens.add({
      targets: this,
      alpha: 0.25,
      duration: 90,
      yoyo: true,
      repeat: Math.floor(PLAYER.hurtInvulnerable / 180),
      onComplete: () => this.setAlpha(1),
    })
  }

  heal(amount) {
    state.hearts = Math.min(state.maxHearts, state.hearts + amount)
    bus.emit('hud')
  }

  /** Tile the player is standing on. */
  tilePos() {
    return { x: Math.floor(this.x / TILE), y: Math.floor(this.y / TILE) }
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta)
    this.setDepth(this.y)
  }

  destroy(fromScene) {
    if (this.hitbox) this.hitbox.destroy()
    super.destroy(fromScene)
  }
}
