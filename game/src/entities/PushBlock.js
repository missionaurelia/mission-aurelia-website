import Phaser from 'phaser'
import { TILE } from '../config.js'
import { state } from '../systems/state.js'

const PUSH_MS = 190

export class PushBlock extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, tileX, tileY, id) {
    super(scene, tileX * TILE + TILE / 2, tileY * TILE + TILE / 2, 'items', 'block')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.blockId = id
    this.moving = false
    this.body.setSize(30, 30)
    this.body.setOffset(1, 1)
    this.setDepth(this.y)
    this.lockBody()
  }

  /**
   * Blocks may only ever move one whole tile at a time, under our control.
   *
   * This has to be re-applied after the block is added to a physics group:
   * Arcade.Group stamps its own body defaults onto every child it accepts,
   * which quietly turns immovable back off. Without this the player can simply
   * shove the block around freely and the tile puzzle falls apart.
   */
  lockBody() {
    this.body.setImmovable(true)
    this.body.pushable = false
    this.body.setVelocity(0, 0)
  }

  get tile() {
    return { x: Math.round((this.x - TILE / 2) / TILE), y: Math.round((this.y - TILE / 2) / TILE) }
  }

  /**
   * Try to shove this block one tile. The scene decides what "free" means,
   * so the block itself stays ignorant of walls, pits and other blocks.
   */
  push(dir, isFree, onSettled) {
    if (this.moving) return false

    const { x, y } = this.tile
    const dx = dir === 'left' ? -1 : dir === 'right' ? 1 : 0
    const dy = dir === 'up' ? -1 : dir === 'down' ? 1 : 0
    const tx = x + dx
    const ty = y + dy
    if (!isFree(tx, ty)) return false

    this.moving = true
    this.scene.tweens.add({
      targets: this,
      x: tx * TILE + TILE / 2,
      y: ty * TILE + TILE / 2,
      duration: PUSH_MS,
      ease: 'Quad.easeOut',
      onUpdate: () => {
        this.body.reset(this.x, this.y)
        this.setDepth(this.y)
      },
      onComplete: () => {
        this.moving = false
        this.body.reset(this.x, this.y)
        state.blocks[this.blockId] = { x: tx, y: ty }
        onSettled(this)
      },
    })
    return true
  }
}
