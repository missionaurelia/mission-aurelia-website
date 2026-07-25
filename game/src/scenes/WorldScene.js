import Phaser from 'phaser'
import { TILE, ZOOM, LEGEND, SOLID_TILES, T, COMBAT } from '../config.js'
import { MAPS } from '../data/maps.js'
import { getDialogue } from '../data/dialogue.js'
import { state, saveGame } from '../systems/state.js'
import { bus } from '../systems/bus.js'
import { Player } from '../entities/Player.js'
import { Enemy } from '../entities/Enemy.js'
import { Boss } from '../entities/Boss.js'
import { PushBlock } from '../entities/PushBlock.js'

const BUMP_COOLDOWN = 1400

export class WorldScene extends Phaser.Scene {
  constructor() {
    super('world')
  }

  create() {
    this.mapKey = state.map
    this.def = MAPS[this.mapKey]
    this.dialogueActive = false
    this.transitioning = false
    this.lastBump = 0
    this.pushTimer = 0
    this.blockContact = null
    // Phaser reuses the scene instance across restarts, so anything set up in
    // a previous map is still hanging off `this`. Clear it explicitly.
    this.boss = null

    this.buildMap()
    this.createGroups()
    this.createPlayer()
    this.createObjects()
    this.createColliders()
    this.setupCamera()
    this.setupInput()

    if (!this.scene.isActive('ui')) this.scene.launch('ui')

    // A restart can happen with a dialogue box still open (a portal or a death
    // during a conversation). Its "done" callback belongs to the scene we just
    // threw away, so close it rather than leaving a dead box on screen.
    bus.emit('dialogue:cancel')
    this.events.once('shutdown', () => bus.emit('dialogue:cancel'))

    bus.emit('hud')
    bus.emit('boss:hide')
    bus.emit('area', this.def.name)

    this.cameras.main.fadeIn(300, 0, 0, 0)
    if (this.def.boss) this.setupBossRoom()
  }

  // -------------------------------------------------------------------------
  // World construction
  // -------------------------------------------------------------------------

  buildMap() {
    const rows = this.def.rows
    const data = rows.map((row, y) =>
      [...row].map((ch, x) => {
        const override = state.tiles[`${this.mapKey}:${x}:${y}`]
        return override !== undefined ? override : LEGEND[ch]
      })
    )

    this.map = this.make.tilemap({ data, tileWidth: TILE, tileHeight: TILE })
    const tileset = this.map.addTilesetImage('tiles', 'tiles', TILE, TILE, 0, 0)
    this.layer = this.map.createLayer(0, tileset, 0, 0)
    this.layer.setCollision(SOLID_TILES)
    this.layer.setDepth(-10)

    this.worldW = this.map.widthInPixels
    this.worldH = this.map.heightInPixels
    this.physics.world.setBounds(0, 0, this.worldW, this.worldH)
  }

  /** True while the world should not react to anything: dialogue or a fade. */
  get busy() {
    return this.dialogueActive || this.transitioning
  }

  tileIndexAt(tx, ty) {
    const tile = this.layer.getTileAt(tx, ty)
    return tile ? tile.index : -1
  }

  setTileAt(tx, ty, index, persist = true) {
    const tile = this.layer.putTileAt(index, tx, ty)
    if (!tile) return
    const solid = SOLID_TILES.includes(index)
    tile.setCollision(solid, solid, solid, solid)
    this.map.calculateFacesAt(tx, ty, this.layer)
    if (persist) state.tiles[`${this.mapKey}:${tx}:${ty}`] = index
  }

  createGroups() {
    this.enemies = this.add.group()
    this.blocks = this.physics.add.group()
    this.pickups = this.physics.add.group()
    this.bossShots = this.physics.add.group()
    this.solids = this.physics.add.staticGroup()
    this.interactables = []
  }

  createPlayer() {
    const at = state.at || this.def.spawn
    state.at = null
    this.player = new Player(this, at.x * TILE + TILE / 2, at.y * TILE + TILE / 2)
    this.player.body.setCollideWorldBounds(true)
    // Seed the edge detector with the arrival tile so we don't immediately
    // travel back through the portal we just came out of.
    this.lastTile = { x: at.x, y: at.y }
  }

  createObjects() {
    const centre = (t) => t * TILE + TILE / 2

    for (const npc of this.def.npcs || []) {
      const sprite = this.physics.add
        .staticSprite(centre(npc.x), centre(npc.y), 'elder', 'f0')
        .setDepth(centre(npc.y))
      sprite.body.setSize(20, 16).setOffset(6, 14)
      sprite.anims.play('elder-idle')
      this.solids.add(sprite)
      this.interactables.push({ sprite, kind: 'npc', data: npc })
    }

    for (const sign of this.def.signs || []) {
      const sprite = this.physics.add
        .staticSprite(centre(sign.x), centre(sign.y), 'items', 'sign')
        .setDepth(centre(sign.y))
      sprite.body.setSize(20, 12).setOffset(6, 18)
      this.solids.add(sprite)
      this.interactables.push({ sprite, kind: 'sign', data: sign })
    }

    for (const chest of this.def.chests || []) {
      const opened = !!state.chests[chest.id]
      const sprite = this.physics.add
        .staticSprite(centre(chest.x), centre(chest.y), 'items', opened ? 'chestOpen' : 'chest')
        .setDepth(centre(chest.y))
      sprite.body.setSize(24, 16).setOffset(4, 12)
      this.solids.add(sprite)
      this.interactables.push({ sprite, kind: 'chest', data: chest })
    }

    for (const b of this.def.blocks || []) {
      const saved = state.blocks[b.id]
      const bx = saved ? saved.x : b.x
      const by = saved ? saved.y : b.y
      const block = new PushBlock(this, bx, by, b.id)
      this.blocks.add(block)
      block.lockBody() // must come after the group add - see PushBlock.lockBody
    }

    if (!this.def.boss) {
      for (const e of this.def.enemies || []) {
        this.enemies.add(new Enemy(this, centre(e.x), centre(e.y), e.type))
      }
    }

    this.refreshPlates(false)
  }

  createColliders() {
    this.physics.add.collider(this.player, this.layer)
    this.physics.add.collider(this.player, this.solids)
    this.physics.add.collider(this.enemies, this.layer)
    this.physics.add.collider(this.enemies, this.solids)
    this.physics.add.collider(this.enemies, this.blocks)
    this.physics.add.collider(this.bossShots, this.layer, (shot) => shot.destroy())

    this.physics.add.collider(this.player, this.blocks, (_player, block) => {
      this.blockContact = { block, time: this.time.now }
    })

    // Physics overlaps keep firing while a dialogue box is open, so every
    // damage path has to check for itself. Dying mid-sentence is not a feature.
    this.physics.add.overlap(this.player, this.enemies, (_p, enemy) => {
      if (this.busy) return
      this.player.hurt(enemy.def ? enemy.def.damage : 1, enemy.x, enemy.y)
    })

    this.physics.add.overlap(this.player.hitbox, this.enemies, (_hb, enemy) => {
      if (this.busy || !this.player.attacking) return
      enemy.takeDamage(COMBAT.swordDamage, this.player.x, this.player.y)
    })

    this.physics.add.overlap(this.player, this.pickups, (_p, pickup) => {
      if (this.busy) return
      pickup.onCollect()
      pickup.destroy()
    })

    this.physics.add.overlap(this.player, this.bossShots, (_p, shot) => {
      if (this.busy) return
      if (this.player.hurt(1, shot.x, shot.y)) shot.destroy()
    })
  }

  setupCamera() {
    const cam = this.cameras.main
    cam.setBounds(0, 0, this.worldW, this.worldH)
    cam.setZoom(ZOOM)
    cam.setRoundPixels(true)
    cam.startFollow(this.player, true, 0.12, 0.12)
    cam.setBackgroundColor(this.def.outdoor ? '#2a3d24' : '#0f0c16')
  }

  setupInput() {
    this.keys = this.input.keyboard.addKeys({
      up: 'UP',
      down: 'DOWN',
      left: 'LEFT',
      right: 'RIGHT',
      w: 'W',
      a: 'A',
      s: 'S',
      d: 'D',
      attack: 'J',
      space: 'SPACE',
      interact: 'E',
      enter: 'ENTER',
    })
  }

  readInput() {
    const k = this.keys
    return {
      up: k.up.isDown || k.w.isDown,
      down: k.down.isDown || k.s.isDown,
      left: k.left.isDown || k.a.isDown,
      right: k.right.isDown || k.d.isDown,
      attackJust: Phaser.Input.Keyboard.JustDown(k.attack) || Phaser.Input.Keyboard.JustDown(k.space),
      interactJust: Phaser.Input.Keyboard.JustDown(k.interact) || Phaser.Input.Keyboard.JustDown(k.enter),
    }
  }

  // -------------------------------------------------------------------------
  // Frame
  // -------------------------------------------------------------------------

  update(time, delta) {
    if (!this.player || !this.player.active) return
    const input = this.readInput()

    if (this.busy) {
      this.player.setVelocity(0, 0)
      this.enemies.getChildren().forEach((e) => e.setVelocity(0, 0))
      if (this.boss && this.boss.active) this.boss.setVelocity(0, 0)
      return
    }

    this.player.handleInput(input, time)
    if (input.attackJust) this.doAttack(time)
    if (input.interactJust) this.doInteract()

    this.enemies.getChildren().forEach((e) => e.update(time, this.player))
    if (this.boss && this.boss.active) {
      this.boss.update(time, this.player)
      if (this.physics.overlap(this.player, this.boss)) {
        this.player.hurt(this.boss.damage, this.boss.x, this.boss.y)
      }
    }

    this.updatePush(delta, input)
    this.checkBump(time)
    this.checkPortals()
  }

  doAttack(time) {
    if (!this.player.attack(time)) return
    this.cutThornsInFront()
  }

  /** The sword clears thorn tiles in the swing arc - the game's one "item gate". */
  cutThornsInFront() {
    const hb = this.player.hitbox
    const around = [
      [hb.x, hb.y],
      [hb.x - 10, hb.y],
      [hb.x + 10, hb.y],
      [hb.x, hb.y - 10],
      [hb.x, hb.y + 10],
    ]
    let cut = false
    for (const [px, py] of around) {
      const tx = Math.floor(px / TILE)
      const ty = Math.floor(py / TILE)
      if (this.tileIndexAt(tx, ty) === T.THORNS) {
        this.setTileAt(tx, ty, this.def.outdoor ? T.GRASS : T.FLOOR)
        this.spawnSpark(tx * TILE + TILE / 2, ty * TILE + TILE / 2)
        cut = true
      }
    }
    if (cut) saveGame()
  }

  doInteract() {
    const p = this.player
    let best = null
    let bestDist = 46
    for (const item of this.interactables) {
      const d = Phaser.Math.Distance.Between(p.x, p.y, item.sprite.x, item.sprite.y)
      if (d < bestDist) {
        bestDist = d
        best = item
      }
    }
    if (!best) return

    if (best.kind === 'sign') {
      this.say(best.data.dialogue)
    } else if (best.kind === 'npc') {
      this.talkToNpc(best.data)
    } else if (best.kind === 'chest') {
      this.openChest(best)
    }
  }

  talkToNpc(npc) {
    if (npc.id === 'elder' && state.flags.emberheart) {
      this.say('elder', () => this.finishGame())
      return
    }
    state.flags.metElder = true
    this.say(npc.dialogue)
    saveGame()
  }

  openChest(entry) {
    const chest = entry.data
    if (state.chests[chest.id]) return

    state.chests[chest.id] = true
    entry.sprite.setFrame('chestOpen')
    this.spawnSpark(entry.sprite.x, entry.sprite.y - 8)

    if (chest.item === 'sword') {
      state.flags.sword = true
      this.say('chest-sword')
    } else if (chest.item === 'smallkey') {
      state.keys += 1
      this.say('chest-smallkey')
    }
    bus.emit('hud')
    saveGame()
  }

  // -------------------------------------------------------------------------
  // Bumping into things: doors, gates, thorns
  // -------------------------------------------------------------------------

  tileInFront() {
    const p = this.player
    const reach = 16
    const dx = p.facing === 'left' ? -reach : p.facing === 'right' ? reach : 0
    const dy = p.facing === 'up' ? -reach : p.facing === 'down' ? reach : 0
    return {
      x: Math.floor((p.x + dx) / TILE),
      y: Math.floor((p.y + dy + 6) / TILE),
    }
  }

  checkBump(time) {
    if (this.player.body.speed < 8) return
    if (time < this.lastBump + BUMP_COOLDOWN) return

    const { x, y } = this.tileInFront()
    const index = this.tileIndexAt(x, y)

    if (index === T.DOOR) {
      this.lastBump = time
      if (state.keys > 0) {
        state.keys -= 1
        this.setTileAt(x, y, T.FLOOR)
        bus.emit('hud')
        this.say('door-opened')
        saveGame()
      } else {
        this.say('door-locked')
      }
    } else if (index === T.GATE) {
      this.lastBump = time
      this.say('gate-closed')
    } else if (index === T.THORNS && !state.flags.sword) {
      this.lastBump = time
      this.say('no-sword')
    }
  }

  // -------------------------------------------------------------------------
  // Push blocks and pressure plates
  // -------------------------------------------------------------------------

  updatePush(delta, input) {
    const contact = this.blockContact
    if (!contact || this.time.now - contact.time > 60) {
      this.pushTimer = 0
      return
    }

    const p = this.player
    const dx = contact.block.x - p.x
    const dy = contact.block.y - p.y
    const dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : dy > 0 ? 'down' : 'up'

    if (!input[dir]) {
      this.pushTimer = 0
      return
    }

    this.pushTimer += delta
    if (this.pushTimer < 240) return
    this.pushTimer = 0

    contact.block.push(
      dir,
      (tx, ty) => this.isFreeForBlock(tx, ty, contact.block),
      () => {
        this.refreshPlates(true)
        saveGame()
      }
    )
  }

  isFreeForBlock(tx, ty, self) {
    const index = this.tileIndexAt(tx, ty)
    if (index === -1) return false
    if (SOLID_TILES.includes(index)) return false
    for (const other of this.blocks.getChildren()) {
      if (other === self) continue
      const t = other.tile
      if (t.x === tx && t.y === ty) return false
    }
    for (const item of this.interactables) {
      if (Math.floor(item.sprite.x / TILE) === tx && Math.floor(item.sprite.y / TILE) === ty) return false
    }
    return true
  }

  /** A plate is pressed while a block sits on it. All plates down -> gates open. */
  refreshPlates(announce) {
    const plates = this.def.plates || []
    if (plates.length === 0) return

    let allPressed = true
    for (const plate of plates) {
      const covered = this.blocks.getChildren().some((b) => {
        const t = b.tile
        return t.x === plate.x && t.y === plate.y
      })
      const wanted = covered ? T.PLATE_DOWN : T.PLATE
      if (this.tileIndexAt(plate.x, plate.y) !== wanted) {
        this.setTileAt(plate.x, plate.y, wanted)
        if (covered && announce) {
          bus.emit('toast', 'The plate sinks.')
          this.spawnSpark(plate.x * TILE + TILE / 2, plate.y * TILE + TILE / 2)
        }
      }
      if (!covered) allPressed = false
    }

    if (allPressed && !state.flags.gateOpen) {
      state.flags.gateOpen = true
      this.openGates(announce)
    }
  }

  openGates(announce) {
    let opened = 0
    for (let y = 0; y < this.map.height; y++) {
      for (let x = 0; x < this.map.width; x++) {
        if (this.tileIndexAt(x, y) === T.GATE) {
          this.setTileAt(x, y, T.FLOOR)
          opened++
        }
      }
    }
    if (opened > 0 && announce) {
      this.cameras.main.shake(400, 0.005)
      this.say('gate-opened')
    }
  }

  // -------------------------------------------------------------------------
  // Transitions
  // -------------------------------------------------------------------------

  /** True once the Warden is awake and still standing. */
  get bossFightActive() {
    return !!this.boss && this.boss.active && this.boss.mode !== 'sleep' && this.boss.mode !== 'dead'
  }

  checkPortals() {
    if (this.transitioning) return

    // Portals fire on *entering* a tile, never on standing in one. Otherwise
    // you arrive on the far side already touching a portal and bounce back and
    // forth, and a boss that knocks you onto the stairs ejects you the instant
    // it dies - before you can pick up what it was guarding.
    const { x, y } = this.player.tilePos()
    const moved = !this.lastTile || this.lastTile.x !== x || this.lastTile.y !== y
    this.lastTile = { x, y }
    if (!moved) return

    const portal = (this.def.portals || []).find((p) => p.x === x && p.y === y)
    if (!portal) return

    // The Warden can knock you clean into the stairs you came in by. Being
    // ejected from a fight you were winning is miserable, so seal the door.
    if (this.bossFightActive) {
      if (this.time.now > this.lastBump + BUMP_COOLDOWN) {
        this.lastBump = this.time.now
        bus.emit('toast', 'The stair has sealed itself behind you.')
      }
      return
    }

    this.transitioning = true
    this.player.setVelocity(0, 0)
    this.player.frozen = true
    this.cameras.main.fadeOut(260, 0, 0, 0)
    this.cameras.main.once('camerafadeoutcomplete', () => {
      state.map = portal.to
      state.at = { ...portal.at }
      saveGame()
      this.scene.restart()
    })
  }

  // -------------------------------------------------------------------------
  // Boss room
  // -------------------------------------------------------------------------

  setupBossRoom() {
    const centre = (t) => t * TILE + TILE / 2

    if (state.flags.wardenDead) {
      if (!state.flags.emberheart) {
        this.spawnEmberheart(centre(this.def.bossSpawn.x), centre(this.def.bossSpawn.y))
      }
      return
    }

    this.boss = new Boss(this, centre(this.def.bossSpawn.x), centre(this.def.bossSpawn.y))
    this.physics.add.collider(this.boss, this.layer)
    this.physics.add.overlap(this.player.hitbox, this.boss, () => {
      if (!this.player.attacking) return
      this.boss.takeDamage(1, this.player.x, this.player.y)
    })

    // You enter at the far end of the hall, so the Warden would otherwise
    // deliver its whole introduction off-screen. Pan to it, talk, pan back.
    this.dialogueActive = true
    this.player.frozen = true
    this.time.delayedCall(500, () => {
      const cam = this.cameras.main
      cam.stopFollow()
      cam.pan(this.boss.x, this.boss.y, 800, 'Sine.easeInOut')
      this.time.delayedCall(900, () => {
        this.say('boss-intro', () => {
          cam.startFollow(this.player, true, 0.12, 0.12)
          bus.emit('boss:show', this.boss.maxHp)
          this.boss.wake(this.time.now)
        })
      })
    })
  }

  summonForBoss(boss) {
    for (let i = 0; i < 2; i++) {
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2)
      const x = Phaser.Math.Clamp(boss.x + Math.cos(angle) * 70, TILE, this.worldW - TILE)
      const y = Phaser.Math.Clamp(boss.y + Math.sin(angle) * 70, TILE, this.worldH - TILE)
      const wisp = new Enemy(this, x, y, 'wisp')
      this.enemies.add(wisp)
      this.spawnSpark(x, y)
    }
  }

  bossShockwave(boss) {
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const shot = this.physics.add.sprite(boss.x, boss.y + 8, 'fx', 'spark')
      shot.setScale(0.45).setDepth(boss.y + 1)
      shot.body.setSize(16, 16).setOffset(16, 16)
      shot.body.setAllowGravity(false)
      shot.setVelocity(Math.cos(angle) * 150, Math.sin(angle) * 150)
      this.bossShots.add(shot)
      this.time.delayedCall(2600, () => shot.active && shot.destroy())
    }
  }

  onBossDefeated(boss) {
    state.flags.wardenDead = true
    bus.emit('boss:hide')
    this.cameras.main.shake(600, 0.008)
    this.enemies.getChildren().forEach((e) => e.destroy())
    this.bossShots.getChildren().forEach((s) => s.destroy())

    for (let i = 0; i < 6; i++) {
      this.time.delayedCall(i * 120, () =>
        this.spawnSpark(boss.x + Phaser.Math.Between(-24, 24), boss.y + Phaser.Math.Between(-24, 24))
      )
    }

    const bx = boss.x
    const by = boss.y
    this.time.delayedCall(800, () => {
      boss.destroy()
      this.say('boss-defeated', () => this.spawnEmberheart(bx, by))
      saveGame()
    })
  }

  spawnEmberheart(x, y) {
    const heart = this.physics.add.sprite(x, y, 'items', 'emberheart').setDepth(y)
    heart.body.setAllowGravity(false)
    heart.onCollect = () => {
      state.flags.emberheart = true
      bus.emit('hud')
      this.say('emberheart')
      saveGame()
    }
    this.pickups.add(heart)
    this.tweens.add({ targets: heart, y: y - 6, duration: 900, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' })
  }

  // -------------------------------------------------------------------------
  // Shared effects, used by entities
  // -------------------------------------------------------------------------

  spawnSpark(x, y) {
    const spark = this.add.sprite(x, y, 'fx', 'spark').setDepth(y + 50).setScale(0.6)
    this.tweens.add({
      targets: spark,
      scale: 1.2,
      alpha: 0,
      duration: 320,
      onComplete: () => spark.destroy(),
    })
  }

  spawnHeartPickup(x, y) {
    const heart = this.physics.add.sprite(x, y, 'items', 'heart').setDepth(y)
    heart.body.setAllowGravity(false)
    heart.setScale(0.8)
    heart.onCollect = () => this.player.heal(1)
    this.pickups.add(heart)
    this.time.delayedCall(9000, () => heart.active && heart.destroy())
  }

  // -------------------------------------------------------------------------
  // Dialogue, death, ending
  // -------------------------------------------------------------------------

  say(key, onDone) {
    const lines = getDialogue(key, state)
    this.dialogueActive = true
    this.player.frozen = true
    bus.emit('dialogue', lines, () => {
      this.dialogueActive = false
      this.player.frozen = false
      if (onDone) onDone()
    })
  }

  onPlayerDeath() {
    if (this.transitioning) return
    this.transitioning = true
    this.player.frozen = true
    this.player.setVelocity(0, 0)
    bus.emit('toast', 'You fall. The dark takes you back.')
    this.cameras.main.fadeOut(800, 0, 0, 0)
    this.cameras.main.once('camerafadeoutcomplete', () => {
      state.hearts = state.maxHearts
      state.at = { ...this.def.spawn }
      saveGame()
      this.scene.restart()
    })
  }

  finishGame() {
    this.transitioning = true
    this.player.frozen = true
    this.cameras.main.fadeOut(1200, 0, 0, 0)
    this.cameras.main.once('camerafadeoutcomplete', () => {
      bus.emit('boss:hide')
      this.scene.stop('ui')
      this.scene.start('end')
    })
  }
}
