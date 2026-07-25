import Phaser from 'phaser'
import { buildAllTextures, registerAnimations } from '../art/textures.js'

/**
 * There is nothing to download - all art is generated here in a few
 * milliseconds. If you later swap in a real asset pack, this is the scene that
 * grows a preload() with loader calls; everything downstream stays the same.
 */
export class BootScene extends Phaser.Scene {
  constructor() {
    super('boot')
  }

  create() {
    buildAllTextures(this)
    registerAnimations(this)
    this.scene.start('title')
  }
}
