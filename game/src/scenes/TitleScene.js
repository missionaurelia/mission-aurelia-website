import Phaser from 'phaser'
import { VIEW } from '../config.js'
import { P } from '../art/palette.js'
import { state, resetState, hasSave, loadGame, clearSave } from '../systems/state.js'

const BODY_FONT = 'Georgia, "Times New Roman", serif'
const HUD_FONT = '"Trebuchet MS", "Segoe UI", sans-serif'

export class TitleScene extends Phaser.Scene {
  constructor() {
    super('title')
  }

  create() {
    const cx = VIEW.width / 2

    const bg = this.add.graphics()
    bg.fillGradientStyle(0x1a1226, 0x1a1226, 0x2c1d2a, 0x3a2418, 1)
    bg.fillRect(0, 0, VIEW.width, VIEW.height)

    // A slow drift of embers, so the title screen is not a still image.
    for (let i = 0; i < 26; i++) {
      const ember = this.add
        .image(Phaser.Math.Between(0, VIEW.width), Phaser.Math.Between(0, VIEW.height), 'fx', 'spark')
        .setScale(Phaser.Math.FloatBetween(0.1, 0.28))
        .setAlpha(Phaser.Math.FloatBetween(0.15, 0.5))
      this.tweens.add({
        targets: ember,
        y: ember.y - Phaser.Math.Between(80, 240),
        alpha: 0,
        duration: Phaser.Math.Between(5000, 11000),
        repeat: -1,
        delay: Phaser.Math.Between(0, 4000),
        onRepeat: () => {
          ember.y = VIEW.height + 20
          ember.x = Phaser.Math.Between(0, VIEW.width)
          ember.setAlpha(Phaser.Math.FloatBetween(0.15, 0.5))
        },
      })
    }

    const emblem = this.add.image(cx, 168, 'items', 'emberheart').setScale(3)
    this.tweens.add({ targets: emblem, scale: 3.25, duration: 1800, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' })

    this.add
      .text(cx, 262, 'EMBERLIGHT', {
        fontFamily: BODY_FONT,
        fontSize: '68px',
        color: P.ember,
        stroke: '#1c1626',
        strokeThickness: 8,
      })
      .setOrigin(0.5)

    this.add
      .text(cx, 310, 'a small errand in a cold season', {
        fontFamily: BODY_FONT,
        fontSize: '20px',
        color: P.paper,
      })
      .setOrigin(0.5)
      .setAlpha(0.75)

    this.canContinue = hasSave()
    this.options = this.canContinue ? ['Continue', 'New journey'] : ['Begin']
    this.selected = 0

    this.optionTexts = this.options.map((label, i) =>
      this.add
        .text(cx, 382 + i * 42, label, { fontFamily: BODY_FONT, fontSize: '28px', color: P.paper })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => this.select(i))
        .on('pointerdown', () => this.confirm())
    )

    this.add
      .text(cx, VIEW.height - 54, 'Arrows / WASD  move     J or SPACE  swing     E  talk, open, read', {
        fontFamily: HUD_FONT,
        fontSize: '17px',
        color: P.paper,
      })
      .setOrigin(0.5)
      .setAlpha(0.6)

    this.select(0)

    this.input.keyboard.on('keydown-UP', () => this.select(this.selected - 1))
    this.input.keyboard.on('keydown-DOWN', () => this.select(this.selected + 1))
    this.input.keyboard.on('keydown-W', () => this.select(this.selected - 1))
    this.input.keyboard.on('keydown-S', () => this.select(this.selected + 1))
    this.input.keyboard.on('keydown-ENTER', () => this.confirm())
    this.input.keyboard.on('keydown-SPACE', () => this.confirm())
    this.input.keyboard.on('keydown-E', () => this.confirm())
  }

  select(index) {
    this.selected = Phaser.Math.Wrap(index, 0, this.options.length)
    this.optionTexts.forEach((t, i) => {
      const on = i === this.selected
      t.setColor(on ? P.ember : P.paper)
      t.setAlpha(on ? 1 : 0.6)
      t.setScale(on ? 1.08 : 1)
    })
  }

  confirm() {
    const label = this.options[this.selected]
    if (label === 'Continue') {
      loadGame()
    } else {
      clearSave()
      resetState()
      state.map = 'village'
    }
    this.cameras.main.fadeOut(400, 0, 0, 0)
    this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('world'))
  }
}
