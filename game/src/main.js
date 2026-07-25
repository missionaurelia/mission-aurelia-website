import Phaser from 'phaser'
import { VIEW } from './config.js'
import { state } from './systems/state.js'
import { BootScene } from './scenes/BootScene.js'
import { TitleScene } from './scenes/TitleScene.js'
import { WorldScene } from './scenes/WorldScene.js'
import { UIScene } from './scenes/UIScene.js'
import { EndScene } from './scenes/EndScene.js'

// Scene order matters for rendering: 'ui' sits after 'world' so the HUD and
// dialogue box draw on top of the world.
const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  width: VIEW.width,
  height: VIEW.height,
  pixelArt: true,
  backgroundColor: '#0d0b14',
  physics: {
    default: 'arcade',
    arcade: { gravity: { x: 0, y: 0 }, debug: false },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [BootScene, TitleScene, WorldScene, UIScene, EndScene],
})

// Handy while building levels: in the browser console you can do
//   __emberlight.state.flags.sword = true
//   __emberlight.state.map = 'barrow'; __emberlight.game.scene.getScene('world').scene.restart()
window.__emberlight = { game, state }
