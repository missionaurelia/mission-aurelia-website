import Phaser from 'phaser'
import { VIEW } from '../config.js'
import { P } from '../art/palette.js'
import { state } from '../systems/state.js'
import { bus } from '../systems/bus.js'

const BODY_FONT = 'Georgia, "Times New Roman", serif'
const HUD_FONT = '"Trebuchet MS", "Segoe UI", sans-serif'
const TYPE_SPEED = 22 // ms per character

/**
 * Everything the player reads. This scene runs on top of the world scene and
 * never touches gameplay directly - it only reacts to events on the bus.
 */
export class UIScene extends Phaser.Scene {
  constructor() {
    super('ui')
  }

  create() {
    this.buildHud()
    this.buildDialogue()
    this.buildBossBar()

    this.toast = this.add
      .text(VIEW.width / 2, VIEW.height - 190, '', {
        fontFamily: BODY_FONT,
        fontSize: '20px',
        color: P.paper,
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setAlpha(0)

    this.areaLabel = this.add
      .text(VIEW.width / 2, 90, '', {
        fontFamily: BODY_FONT,
        fontSize: '34px',
        color: P.paper,
        stroke: '#000000',
        strokeThickness: 5,
      })
      .setOrigin(0.5)
      .setAlpha(0)

    const on = (event, handler) => {
      bus.on(event, handler, this)
      this.events.once('shutdown', () => bus.off(event, handler, this))
    }
    on('hud', this.refreshHud)
    on('dialogue', this.showDialogue)
    on('toast', this.showToast)
    on('area', this.showArea)
    on('boss:show', this.showBossBar)
    on('boss:hp', this.setBossHp)
    on('boss:hide', this.hideBossBar)
    on('dialogue:cancel', this.cancelDialogue)

    const advance = () => this.advanceDialogue()
    for (const key of ['keydown-E', 'keydown-ENTER', 'keydown-SPACE', 'keydown-J']) {
      this.input.keyboard.on(key, advance)
    }
    this.input.on('pointerdown', advance)

    this.refreshHud()
  }

  // -------------------------------------------------------------------------
  // HUD
  // -------------------------------------------------------------------------

  buildHud() {
    this.heartIcons = []
    this.hudPlate = this.add.graphics()
    this.hudPlate.fillStyle(0x000000, 0.35)
    this.hudPlate.fillRoundedRect(14, 12, 250, 42, 10)

    this.keyIcon = this.add.image(190, 33, 'items', 'key').setScale(0.85).setVisible(false)
    this.keyText = this.add
      .text(208, 33, '', { fontFamily: HUD_FONT, fontSize: '18px', color: P.paper })
      .setOrigin(0, 0.5)
    this.emberIcon = this.add.image(240, 33, 'items', 'emberheart').setScale(0.8).setVisible(false)
  }

  refreshHud() {
    // Rebuild the heart row whenever the maximum changes, otherwise just retint.
    if (this.heartIcons.length !== state.maxHearts) {
      this.heartIcons.forEach((h) => h.destroy())
      this.heartIcons = []
      for (let i = 0; i < state.maxHearts; i++) {
        this.heartIcons.push(this.add.image(38 + i * 34, 33, 'items', 'heart').setScale(0.95))
      }
    }
    this.heartIcons.forEach((icon, i) => {
      const full = i < state.hearts
      icon.setAlpha(full ? 1 : 0.9)
      if (full) icon.clearTint()
      else icon.setTint(0x33262e)
    })

    const hasKeys = state.keys > 0
    this.keyIcon.setVisible(hasKeys)
    this.keyText.setText(hasKeys ? `x${state.keys}` : '')
    this.emberIcon.setVisible(!!state.flags.emberheart)
  }

  // -------------------------------------------------------------------------
  // Dialogue
  // -------------------------------------------------------------------------

  buildDialogue() {
    const w = 780
    const h = 156
    const x = (VIEW.width - w) / 2
    const y = VIEW.height - h - 26

    this.dialogueBox = this.add.container(0, 0).setVisible(false).setDepth(100)

    const panel = this.add.graphics()
    panel.fillStyle(0x1c1626, 0.94)
    panel.fillRoundedRect(x, y, w, h, 14)
    panel.lineStyle(3, 0xe0b354, 0.85)
    panel.strokeRoundedRect(x, y, w, h, 14)

    this.dialogueText = this.add.text(x + 28, y + 26, '', {
      fontFamily: BODY_FONT,
      fontSize: '22px',
      color: P.paper,
      wordWrap: { width: w - 56 },
      lineSpacing: 6,
    })

    this.dialoguePrompt = this.add
      .text(x + w - 28, y + h - 26, '▾', { fontFamily: HUD_FONT, fontSize: '20px', color: P.gold })
      .setOrigin(1, 1)
      .setAlpha(0)

    this.tweens.add({
      targets: this.dialoguePrompt,
      y: this.dialoguePrompt.y - 4,
      duration: 600,
      yoyo: true,
      repeat: -1,
    })

    this.dialogueBox.add([panel, this.dialogueText, this.dialoguePrompt])

    this.lines = []
    this.lineIndex = 0
    this.typing = false
    this.acceptInputAt = 0
    this.onDialogueDone = null
  }

  showDialogue(lines, onDone) {
    this.lines = lines
    this.lineIndex = 0
    this.onDialogueDone = onDone
    this.dialogueBox.setVisible(true)
    this.acceptInputAt = this.time.now + 260
    this.typeLine(this.lines[0])
  }

  typeLine(text) {
    this.typing = true
    this.dialoguePrompt.setAlpha(0)
    this.dialogueText.setText('')
    if (this.typeEvent) this.typeEvent.remove()

    let i = 0
    this.typeEvent = this.time.addEvent({
      delay: TYPE_SPEED,
      repeat: text.length - 1,
      callback: () => {
        i++
        this.dialogueText.setText(text.slice(0, i))
        if (i >= text.length) {
          this.typing = false
          this.dialoguePrompt.setAlpha(1)
        }
      },
    })
  }

  /** Close the box without running its callback - the owner scene is gone. */
  cancelDialogue() {
    if (this.typeEvent) this.typeEvent.remove()
    this.typing = false
    this.onDialogueDone = null
    this.lines = []
    this.lineIndex = 0
    this.dialogueBox.setVisible(false)
  }

  advanceDialogue() {
    if (!this.dialogueBox.visible) return
    if (this.time.now < this.acceptInputAt) return
    this.acceptInputAt = this.time.now + 120

    if (this.typing) {
      // Second press skips the typewriter rather than the line.
      if (this.typeEvent) this.typeEvent.remove()
      this.dialogueText.setText(this.lines[this.lineIndex])
      this.typing = false
      this.dialoguePrompt.setAlpha(1)
      return
    }

    this.lineIndex++
    if (this.lineIndex >= this.lines.length) {
      this.dialogueBox.setVisible(false)
      const done = this.onDialogueDone
      this.onDialogueDone = null
      bus.emit('dialogue:done')
      if (done) done()
      return
    }
    this.typeLine(this.lines[this.lineIndex])
  }

  // -------------------------------------------------------------------------
  // Boss bar, toasts, area titles
  // -------------------------------------------------------------------------

  buildBossBar() {
    this.bossBar = this.add.container(0, 0).setVisible(false).setDepth(90)
    const w = 420
    const x = (VIEW.width - w) / 2

    this.bossBarBg = this.add.graphics()
    this.bossBarBg.fillStyle(0x000000, 0.55)
    this.bossBarBg.fillRoundedRect(x - 4, 24, w + 8, 26, 6)
    this.bossBarFill = this.add.graphics()
    this.bossBarLabel = this.add
      .text(VIEW.width / 2, 62, 'The Warden of the Barrow', {
        fontFamily: BODY_FONT,
        fontSize: '18px',
        color: P.paper,
        stroke: '#000000',
        strokeThickness: 3,
      })
      .setOrigin(0.5)

    this.bossBar.add([this.bossBarBg, this.bossBarFill, this.bossBarLabel])
    this._bossBarGeom = { x, w }
  }

  showBossBar(maxHp) {
    this.bossBar.setVisible(true)
    this.setBossHp(maxHp, maxHp)
  }

  setBossHp(hp, maxHp) {
    const { x, w } = this._bossBarGeom
    const frac = Phaser.Math.Clamp(hp / maxHp, 0, 1)
    this.bossBarFill.clear()
    this.bossBarFill.fillStyle(0x8f2d3a, 1)
    this.bossBarFill.fillRoundedRect(x, 28, w, 18, 4)
    if (frac > 0) {
      this.bossBarFill.fillStyle(0xe04f5f, 1)
      this.bossBarFill.fillRoundedRect(x, 28, w * frac, 18, 4)
    }
  }

  hideBossBar() {
    this.bossBar.setVisible(false)
  }

  showToast(text) {
    this.toast.setText(text).setAlpha(1)
    this.tweens.killTweensOf(this.toast)
    this.tweens.add({ targets: this.toast, alpha: 0, delay: 1600, duration: 700 })
  }

  showArea(name) {
    this.areaLabel.setText(name).setAlpha(1)
    this.tweens.killTweensOf(this.areaLabel)
    this.tweens.add({ targets: this.areaLabel, alpha: 0, delay: 1500, duration: 900 })
  }
}
