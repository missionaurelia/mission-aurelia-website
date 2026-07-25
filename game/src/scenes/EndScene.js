import Phaser from 'phaser'
import { VIEW } from '../config.js'
import { P } from '../art/palette.js'
import { clearSave, resetState } from '../systems/state.js'

const BODY_FONT = 'Georgia, "Times New Roman", serif'

const CLOSING = [
  'Maren set the Emberheart back in the shrine with both hands,',
  'the way you set down something that is heavier than it looks.',
  '',
  'The light came up slowly. Not a blaze - a hearth.',
  'By morning the thornwall had gone brittle and grey,',
  'and someone had already started clearing a path through it.',
  '',
  'The barrow is still down there. It is quieter now.',
]

export class EndScene extends Phaser.Scene {
  constructor() {
    super('end')
  }

  create() {
    const cx = VIEW.width / 2

    const bg = this.add.graphics()
    bg.fillGradientStyle(0x120e18, 0x120e18, 0x2a1c14, 0x3d2a16, 1)
    bg.fillRect(0, 0, VIEW.width, VIEW.height)

    const glow = this.add.image(cx, 120, 'items', 'emberheart').setScale(2.4).setAlpha(0)
    this.tweens.add({ targets: glow, alpha: 1, duration: 2000 })
    this.tweens.add({ targets: glow, scale: 2.6, duration: 2200, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' })

    CLOSING.forEach((line, i) => {
      const text = this.add
        .text(cx, 210 + i * 30, line, { fontFamily: BODY_FONT, fontSize: '21px', color: P.paper })
        .setOrigin(0.5)
        .setAlpha(0)
      this.tweens.add({ targets: text, alpha: line ? 0.92 : 0, delay: 600 + i * 700, duration: 900 })
    })

    const theEnd = this.add
      .text(cx, VIEW.height - 108, 'THE END', {
        fontFamily: BODY_FONT,
        fontSize: '40px',
        color: P.ember,
        stroke: '#1c1626',
        strokeThickness: 6,
      })
      .setOrigin(0.5)
      .setAlpha(0)
    this.tweens.add({ targets: theEnd, alpha: 1, delay: 600 + CLOSING.length * 700, duration: 1200 })

    const prompt = this.add
      .text(cx, VIEW.height - 48, 'press any key', { fontFamily: BODY_FONT, fontSize: '17px', color: P.paper })
      .setOrigin(0.5)
      .setAlpha(0)
    this.tweens.add({ targets: prompt, alpha: 0.6, delay: 1400 + CLOSING.length * 700, duration: 900 })

    this.time.delayedCall(2500, () => {
      const restart = () => {
        clearSave()
        resetState()
        this.scene.start('title')
      }
      this.input.keyboard.once('keydown', restart)
      this.input.once('pointerdown', restart)
    })
  }
}
