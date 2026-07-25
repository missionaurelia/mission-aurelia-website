import Phaser from 'phaser'
import { COMBAT } from '../config.js'

/**
 * Enemy behaviour is data, not subclasses. Adding a new enemy means adding an
 * entry here plus a draw function in art/textures.js - nothing else.
 *
 *   aggroRange 0  -> never chases, just wanders (the slime)
 *   body          -> [width, height, offsetX, offsetY] inside the 32x32 cell
 */
export const ENEMY_TYPES = {
  slime: {
    texture: 'slime',
    anim: 'slime-idle',
    hp: 2,
    speed: 38,
    damage: 1,
    aggroRange: 0,
    body: [18, 12, 7, 16],
  },
  wisp: {
    texture: 'wisp',
    anim: 'wisp-idle',
    hp: 1,
    speed: 84,
    damage: 1,
    aggroRange: 190,
    body: [16, 16, 8, 8],
  },
  husk: {
    texture: 'husk',
    anim: 'husk-idle',
    hp: 3,
    speed: 58,
    damage: 1,
    aggroRange: 240,
    body: [14, 14, 9, 15],
  },
}

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, type) {
    const def = ENEMY_TYPES[type] || ENEMY_TYPES.slime
    super(scene, x, y, def.texture, 'f0')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.def = def
    this.enemyType = type
    this.hp = def.hp
    this.stunUntil = 0
    this.wanderUntil = 0

    const [w, h, ox, oy] = def.body
    this.body.setSize(w, h)
    this.body.setOffset(ox, oy)
    this.body.setCollideWorldBounds(true)
    this.anims.play(def.anim)
  }

  update(time, player) {
    if (!this.active) return
    this.setDepth(this.y)

    if (time < this.stunUntil) return

    const dist = Phaser.Math.Distance.Between(this.x, this.y, player.x, player.y)

    if (this.def.aggroRange > 0 && dist < this.def.aggroRange) {
      this.scene.physics.moveTo(this, player.x, player.y, this.def.speed)
      return
    }

    // Wander: pick a new heading every couple of seconds, sometimes stand still.
    if (time > this.wanderUntil) {
      this.wanderUntil = time + Phaser.Math.Between(900, 2200)
      if (Phaser.Math.FloatBetween(0, 1) < 0.25) {
        this.setVelocity(0, 0)
      } else {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2)
        this.setVelocity(Math.cos(angle) * this.def.speed * 0.7, Math.sin(angle) * this.def.speed * 0.7)
      }
    }
  }

  /** Returns true if this hit killed the enemy. */
  takeDamage(amount, fromX, fromY) {
    const time = this.scene.time.now
    if (time < this.stunUntil - 100) return false // already reeling from this swing

    this.hp -= amount
    this.stunUntil = time + 260

    const angle = Math.atan2(this.y - fromY, this.x - fromX)
    this.setVelocity(Math.cos(angle) * COMBAT.enemyKnockback, Math.sin(angle) * COMBAT.enemyKnockback)

    this.setTintFill(0xffffff)
    this.scene.time.delayedCall(90, () => this.active && this.clearTint())

    if (this.hp <= 0) {
      this.die()
      return true
    }
    return false
  }

  die() {
    this.scene.spawnSpark(this.x, this.y)
    if (Math.random() < COMBAT.heartDropChance) this.scene.spawnHeartPickup(this.x, this.y)
    this.destroy()
  }
}
