import Phaser from 'phaser'

/**
 * A single event emitter shared by every scene.
 *
 * The world scene never reaches into the UI scene directly - it emits, and the
 * UI listens. That keeps the HUD, the dialogue box and the boss bar from
 * becoming tangled up in gameplay code.
 *
 * Events:
 *   hud            -> redraw hearts / keys
 *   dialogue       (lines[], onDone?)
 *   dialogue:done
 *   toast          (text)
 *   boss:show      (maxHp)
 *   boss:hp        (hp, maxHp)
 *   boss:hide
 *   fade           (durationMs, onMidpoint)
 */
export const bus = new Phaser.Events.EventEmitter()
