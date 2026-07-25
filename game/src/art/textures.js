// ---------------------------------------------------------------------------
// THE ART SEAM
// ---------------------------------------------------------------------------
// Every pixel in this game is drawn here, at runtime, into canvas textures.
// Nothing else in the codebase knows how the art is produced - the rest of the
// game only ever asks for texture keys and frame names.
//
// To swap in a real asset pack later, replace buildAllTextures() with loader
// calls in BootScene and keep these keys/frames:
//
//   'tiles'   spritesheet, 32x32 frames, in the order of T in config.js
//   'player'  frames: down0 down1 up0 up1 side0 side1   (32x32)
//   'slime' / 'wisp' / 'husk'  frames: f0 f1            (32x32)
//   'warden'  frames: f0 f1                             (64x64)
//   'items'   frames: chest chestOpen key emberheart heart block sign
//   'fx'      frames: slash spark
//
// Nothing else has to change.
// ---------------------------------------------------------------------------

import { TILE, TILE_COUNT, T } from '../config.js'
import { P } from './palette.js'

/** Small deterministic PRNG so the "random" speckles look identical every run. */
function makeRng(seed) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function canvasTexture(scene, key, w, h, draw) {
  if (scene.textures.exists(key)) scene.textures.remove(key)
  const tex = scene.textures.createCanvas(key, w, h)
  const ctx = tex.getContext()
  ctx.imageSmoothingEnabled = false
  draw(ctx, tex)
  tex.refresh()
  return tex
}

function speckle(ctx, x, y, w, h, color, count, rand, size = 2) {
  ctx.fillStyle = color
  for (let i = 0; i < count; i++) {
    ctx.fillRect(x + Math.floor(rand() * w), y + Math.floor(rand() * h), size, size)
  }
}

function rect(ctx, x, y, w, h, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, w, h)
}

function circle(ctx, cx, cy, r, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.fill()
}

function ellipse(ctx, cx, cy, rx, ry, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
  ctx.fill()
}

// ---------------------------------------------------------------------------
// Tiles
// ---------------------------------------------------------------------------

const tileDrawers = {
  [T.GRASS]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.grass)
    speckle(ctx, o, 0, TILE, TILE, P.grassLight, 14, rand)
    speckle(ctx, o, 0, TILE, TILE, P.grassDark, 10, rand)
  },
  [T.FLOWERS]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.grass)
    speckle(ctx, o, 0, TILE, TILE, P.grassLight, 10, rand)
    for (let i = 0; i < 5; i++) {
      const x = o + 3 + Math.floor(rand() * 25)
      const y = 3 + Math.floor(rand() * 25)
      rect(ctx, x, y, 3, 3, rand() > 0.5 ? P.flowerA : P.flowerB)
      rect(ctx, x + 1, y + 3, 1, 2, P.grassDark)
    }
  },
  [T.PATH]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.path)
    speckle(ctx, o, 0, TILE, TILE, P.pathDark, 18, rand)
    speckle(ctx, o, 0, TILE, TILE, P.grassDark, 4, rand, 1)
  },
  [T.WATER]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.water)
    rect(ctx, o, 0, TILE, 6, P.waterDark)
    for (let i = 0; i < 4; i++) {
      const y = 6 + i * 7 + Math.floor(rand() * 3)
      rect(ctx, o + 3 + Math.floor(rand() * 12), y, 9, 2, P.waterLight)
    }
  },
  [T.TREE]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.grass)
    speckle(ctx, o, 0, TILE, TILE, P.grassDark, 8, rand)
    rect(ctx, o + 14, 20, 5, 10, P.trunk)
    circle(ctx, o + 16, 15, 12, P.canopyDark)
    circle(ctx, o + 13, 13, 9, P.canopy)
    circle(ctx, o + 20, 12, 7, P.canopyLight)
    speckle(ctx, o + 6, 4, 20, 18, P.canopyDark, 8, rand)
  },
  [T.ROCK]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.grass)
    speckle(ctx, o, 0, TILE, TILE, P.grassDark, 6, rand)
    ellipse(ctx, o + 16, 20, 13, 10, P.rockDark)
    ellipse(ctx, o + 15, 17, 11, 8, P.rock)
    ellipse(ctx, o + 12, 14, 5, 3, P.rockLight)
  },
  [T.HOUSE]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.wall)
    rect(ctx, o, 0, TILE, 12, P.roof)
    rect(ctx, o, 10, TILE, 2, P.roofDark)
    speckle(ctx, o, 0, TILE, 10, P.roofDark, 8, rand, 1)
    rect(ctx, o + 4, 16, TILE - 8, 2, P.wallDark)
    rect(ctx, o + 4, 24, TILE - 8, 2, P.wallDark)
  },
  [T.THORNS]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.grassDark)
    for (let i = 0; i < 9; i++) {
      const x = o + 2 + Math.floor(rand() * 27)
      const y = 2 + Math.floor(rand() * 27)
      ctx.strokeStyle = P.thorn
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(x, y + 6)
      ctx.lineTo(x + 3, y)
      ctx.lineTo(x + 6, y + 6)
      ctx.stroke()
      rect(ctx, x + 2, y - 1, 2, 2, P.thornTip)
    }
  },
  [T.SHRINE]: (ctx, o) => {
    rect(ctx, o, 0, TILE, TILE, P.grass)
    rect(ctx, o + 6, 8, 20, 22, P.shrineDark)
    rect(ctx, o + 8, 6, 16, 22, P.shrine)
    circle(ctx, o + 16, 15, 5, P.ember)
    circle(ctx, o + 16, 15, 3, P.flameCore)
  },
  [T.FLOOR]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.floor)
    rect(ctx, o, 0, TILE, 1, P.floorDark)
    rect(ctx, o, 0, 1, TILE, P.floorDark)
    speckle(ctx, o, 0, TILE, TILE, P.floorLight, 7, rand, 1)
    speckle(ctx, o, 0, TILE, TILE, P.floorDark, 5, rand, 1)
  },
  [T.FLOOR_ALT]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.floorAlt)
    rect(ctx, o, 0, TILE, 1, P.floorDark)
    speckle(ctx, o, 0, TILE, TILE, P.floorDark, 8, rand, 1)
  },
  [T.WALL]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.dwall)
    rect(ctx, o, 0, TILE, 10, P.dwallTop)
    rect(ctx, o, 9, TILE, 2, P.dwallDark)
    // brick seams
    rect(ctx, o, 18, TILE, 1, P.dwallDark)
    rect(ctx, o + 10, 11, 1, 7, P.dwallDark)
    rect(ctx, o + 22, 19, 1, 13, P.dwallDark)
    speckle(ctx, o, 11, TILE, 21, P.dwallDark, 6, rand, 1)
  },
  [T.PIT]: (ctx, o) => {
    rect(ctx, o, 0, TILE, TILE, P.pit)
    rect(ctx, o, 0, TILE, 4, P.dwallDark)
  },
  [T.PLATE]: (ctx, o) => {
    rect(ctx, o, 0, TILE, TILE, P.floor)
    rect(ctx, o + 5, 5, 22, 22, P.floorDark)
    rect(ctx, o + 7, 7, 18, 18, P.plate)
    rect(ctx, o + 11, 11, 10, 10, P.floorDark)
  },
  [T.PLATE_DOWN]: (ctx, o) => {
    rect(ctx, o, 0, TILE, TILE, P.floor)
    rect(ctx, o + 5, 5, 22, 22, P.floorDark)
    rect(ctx, o + 8, 8, 16, 16, P.plateDown)
    circle(ctx, o + 16, 16, 3, P.ember)
  },
  [T.DOOR]: (ctx, o) => {
    rect(ctx, o, 0, TILE, TILE, P.dwall)
    rect(ctx, o + 3, 2, 26, 30, P.woodDark)
    rect(ctx, o + 5, 4, 22, 28, P.wood)
    rect(ctx, o + 15, 4, 2, 28, P.woodDark)
    circle(ctx, o + 16, 17, 5, P.gold)
    rect(ctx, o + 15, 17, 2, 6, P.woodDark)
  },
  [T.GATE]: (ctx, o) => {
    rect(ctx, o, 0, TILE, TILE, P.pit)
    for (let i = 0; i < 4; i++) {
      rect(ctx, o + 3 + i * 8, 0, 4, TILE, P.iron)
      rect(ctx, o + 3 + i * 8, 0, 1, TILE, P.ironDark)
    }
    rect(ctx, o, 4, TILE, 3, P.ironDark)
    rect(ctx, o, 24, TILE, 3, P.ironDark)
  },
  [T.BRAZIER]: (ctx, o) => {
    rect(ctx, o, 0, TILE, TILE, P.floor)
    rect(ctx, o + 11, 20, 10, 10, P.dwallTop)
    rect(ctx, o + 8, 16, 16, 6, P.rockDark)
    ellipse(ctx, o + 16, 13, 7, 8, P.flame)
    ellipse(ctx, o + 16, 12, 3, 5, P.flameCore)
  },
  [T.STAIRS]: (ctx, o) => {
    rect(ctx, o, 0, TILE, TILE, P.pit)
    for (let i = 0; i < 5; i++) {
      const shade = i % 2 === 0 ? P.rock : P.rockDark
      rect(ctx, o + 2 + i, 4 + i * 6, TILE - 4 - i * 2, 5, shade)
    }
  },
  [T.BRIDGE]: (ctx, o, rand) => {
    rect(ctx, o, 0, TILE, TILE, P.water)
    rect(ctx, o, 2, TILE, 28, P.plankDark)
    for (let i = 0; i < 4; i++) rect(ctx, o, 4 + i * 7, TILE, 5, P.plank)
    speckle(ctx, o, 4, TILE, 24, P.plankDark, 6, rand, 1)
  },
}

function buildTiles(scene) {
  canvasTexture(scene, 'tiles', TILE * TILE_COUNT, TILE, (ctx) => {
    for (let i = 0; i < TILE_COUNT; i++) {
      const rand = makeRng(1000 + i * 77)
      const drawer = tileDrawers[i]
      if (drawer) drawer(ctx, i * TILE, rand)
      else rect(ctx, i * TILE, 0, TILE, TILE, '#ff00ff')
    }
  })
}

// ---------------------------------------------------------------------------
// Actors
// ---------------------------------------------------------------------------

/** Draws the hero into a 32x32 cell. dir: 'down' | 'up' | 'side'. step: 0 | 1 */
function drawHero(ctx, ox, dir, step) {
  const bob = step === 1 ? 1 : 0
  const y = bob
  ellipse(ctx, ox + 16, 29, 8, 3, P.shadow)

  // legs
  const legSwing = step === 1 ? 2 : 0
  rect(ctx, ox + 11 + legSwing, 24 + y, 4, 5, P.boot)
  rect(ctx, ox + 17 - legSwing, 24 + y, 4, 5, P.boot)

  // body / tunic
  ctx.fillStyle = P.tunic
  ctx.beginPath()
  ctx.moveTo(ox + 12, 14 + y)
  ctx.lineTo(ox + 20, 14 + y)
  ctx.lineTo(ox + 22, 25 + y)
  ctx.lineTo(ox + 10, 25 + y)
  ctx.closePath()
  ctx.fill()
  rect(ctx, ox + 10, 21 + y, 12, 2, P.belt)
  rect(ctx, ox + 10, 23 + y, 12, 2, P.tunicDark)

  // arms
  rect(ctx, ox + 8, 15 + y, 3, 6, P.skinDark)
  rect(ctx, ox + 21, 15 + y, 3, 6, P.skin)

  // head
  circle(ctx, ox + 16, 10 + y, 6, P.skin)

  if (dir === 'down') {
    // hair fringe + face
    ctx.fillStyle = P.hair
    ctx.beginPath()
    ctx.arc(ox + 16, 9 + y, 7, Math.PI, 0)
    ctx.fill()
    rect(ctx, ox + 9, 6 + y, 3, 8, P.hairDark)
    rect(ctx, ox + 20, 6 + y, 3, 8, P.hairDark)
    rect(ctx, ox + 13, 11 + y, 2, 2, P.ink)
    rect(ctx, ox + 17, 11 + y, 2, 2, P.ink)
  } else if (dir === 'up') {
    circle(ctx, ox + 16, 10 + y, 7, P.hair)
    circle(ctx, ox + 16, 8 + y, 5, P.hairDark)
  } else {
    // side profile, facing right
    ctx.fillStyle = P.hair
    ctx.beginPath()
    ctx.arc(ox + 15, 9 + y, 7, Math.PI * 0.8, Math.PI * 0.1)
    ctx.fill()
    rect(ctx, ox + 8, 6 + y, 5, 9, P.hairDark)
    rect(ctx, ox + 19, 11 + y, 2, 2, P.ink)
  }
}

function drawSlime(ctx, ox, step) {
  const squash = step === 1 ? 2 : 0
  ellipse(ctx, ox + 16, 27, 9, 3, P.shadow)
  ellipse(ctx, ox + 16, 21 + squash / 2, 11, 9 - squash, P.slimeDark)
  ellipse(ctx, ox + 16, 20 + squash / 2, 9, 7 - squash, P.slime)
  ellipse(ctx, ox + 12, 17 + squash / 2, 3, 2, P.slimeLight)
  rect(ctx, ox + 12, 20, 2, 2, P.ink)
  rect(ctx, ox + 18, 20, 2, 2, P.ink)
}

function drawWisp(ctx, ox, step) {
  const r = step === 1 ? 8 : 7
  ctx.globalAlpha = 0.35
  circle(ctx, ox + 16, 16, r + 5, P.wisp)
  ctx.globalAlpha = 0.7
  circle(ctx, ox + 16, 16, r, P.wisp)
  ctx.globalAlpha = 1
  circle(ctx, ox + 16, 16, r - 3, P.wispCore)
  rect(ctx, ox + 13, 15, 2, 2, P.ink)
  rect(ctx, ox + 18, 15, 2, 2, P.ink)
}

function drawHusk(ctx, ox, step) {
  const lean = step === 1 ? 1 : -1
  ellipse(ctx, ox + 16, 29, 8, 3, P.shadow)
  rect(ctx, ox + 12, 23, 3, 6, P.boneDark)
  rect(ctx, ox + 17, 23, 3, 6, P.boneDark)
  rect(ctx, ox + 12, 13, 8, 11, P.bone)
  rect(ctx, ox + 13, 16, 6, 1, P.boneDark)
  rect(ctx, ox + 13, 19, 6, 1, P.boneDark)
  rect(ctx, ox + 8 + lean, 14, 4, 8, P.boneDark)
  rect(ctx, ox + 20 + lean, 14, 4, 8, P.boneDark)
  circle(ctx, ox + 16, 8, 6, P.bone)
  rect(ctx, ox + 12, 7, 3, 3, P.ink)
  rect(ctx, ox + 17, 7, 3, 3, P.ink)
  rect(ctx, ox + 14, 12, 4, 1, P.boneDark)
}

/** The boss lives in a 64x64 cell. */
function drawWarden(ctx, ox, step) {
  const y = step === 1 ? 1 : 0
  ellipse(ctx, ox + 32, 58, 20, 6, P.shadow)
  // legs
  rect(ctx, ox + 20, 44 + y, 9, 14, P.bossDark)
  rect(ctx, ox + 35, 44 + y, 9, 14, P.bossDark)
  // torso
  ctx.fillStyle = P.boss
  ctx.beginPath()
  ctx.moveTo(ox + 18, 22 + y)
  ctx.lineTo(ox + 46, 22 + y)
  ctx.lineTo(ox + 42, 48 + y)
  ctx.lineTo(ox + 22, 48 + y)
  ctx.closePath()
  ctx.fill()
  // ember core
  circle(ctx, ox + 32, 34 + y, 8, P.flame)
  circle(ctx, ox + 32, 34 + y, 4, P.flameCore)
  // shoulders + arms
  ellipse(ctx, ox + 16, 26 + y, 8, 7, P.bossLight)
  ellipse(ctx, ox + 48, 26 + y, 8, 7, P.bossLight)
  rect(ctx, ox + 10, 28 + y, 8, 18, P.bossDark)
  rect(ctx, ox + 46, 28 + y, 8, 18, P.bossDark)
  // head / helm
  ellipse(ctx, ox + 32, 14 + y, 11, 12, P.bossDark)
  ellipse(ctx, ox + 32, 13 + y, 9, 10, P.boss)
  rect(ctx, ox + 25, 13 + y, 5, 3, P.flame)
  rect(ctx, ox + 34, 13 + y, 5, 3, P.flame)
  // horns
  ctx.fillStyle = P.bone
  ctx.beginPath()
  ctx.moveTo(ox + 21, 8 + y)
  ctx.lineTo(ox + 14, 0 + y)
  ctx.lineTo(ox + 24, 4 + y)
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(ox + 43, 8 + y)
  ctx.lineTo(ox + 50, 0 + y)
  ctx.lineTo(ox + 40, 4 + y)
  ctx.closePath()
  ctx.fill()
}

/** Village elder - a robed figure, deliberately faceless-ish and calm. */
function drawElder(ctx, ox, step) {
  const y = step === 1 ? 1 : 0
  ellipse(ctx, ox + 16, 29, 8, 3, P.shadow)
  ctx.fillStyle = P.floorAlt
  ctx.beginPath()
  ctx.moveTo(ox + 12, 12 + y)
  ctx.lineTo(ox + 20, 12 + y)
  ctx.lineTo(ox + 24, 29)
  ctx.lineTo(ox + 8, 29)
  ctx.closePath()
  ctx.fill()
  rect(ctx, ox + 9, 24, 14, 2, P.dwallDark)
  rect(ctx, ox + 7, 14 + y, 3, 8, P.floorAlt)
  rect(ctx, ox + 22, 14 + y, 3, 8, P.floorAlt)
  circle(ctx, ox + 16, 9 + y, 6, P.skin)
  ctx.fillStyle = P.bone
  ctx.beginPath()
  ctx.arc(ox + 16, 8 + y, 7, Math.PI, 0)
  ctx.fill()
  rect(ctx, ox + 12, 12 + y, 8, 6, P.bone) // beard
  rect(ctx, ox + 13, 10 + y, 2, 2, P.ink)
  rect(ctx, ox + 17, 10 + y, 2, 2, P.ink)
  rect(ctx, ox + 24, 8 + y, 2, 21, P.wood) // staff
  circle(ctx, ox + 25, 7 + y, 3, P.ember)
}

function buildActors(scene) {
  const dirs = ['down', 'up', 'side']
  canvasTexture(scene, 'player', TILE * 6, TILE, (ctx, tex) => {
    let i = 0
    for (const dir of dirs) {
      for (let step = 0; step < 2; step++, i++) {
        drawHero(ctx, i * TILE, dir, step)
        tex.add(`${dir}${step}`, 0, i * TILE, 0, TILE, TILE)
      }
    }
  })

  const simple = [
    ['slime', drawSlime],
    ['wisp', drawWisp],
    ['husk', drawHusk],
    ['elder', drawElder],
  ]
  for (const [key, draw] of simple) {
    canvasTexture(scene, key, TILE * 2, TILE, (ctx, tex) => {
      for (let step = 0; step < 2; step++) {
        draw(ctx, step * TILE, step)
        tex.add(`f${step}`, 0, step * TILE, 0, TILE, TILE)
      }
    })
  }

  canvasTexture(scene, 'warden', 128, 64, (ctx, tex) => {
    for (let step = 0; step < 2; step++) {
      drawWarden(ctx, step * 64, step)
      tex.add(`f${step}`, 0, step * 64, 0, 64, 64)
    }
  })
}

// ---------------------------------------------------------------------------
// Items and effects
// ---------------------------------------------------------------------------

function buildItems(scene) {
  const frames = ['chest', 'chestOpen', 'key', 'emberheart', 'heart', 'block', 'sign']
  canvasTexture(scene, 'items', TILE * frames.length, TILE, (ctx, tex) => {
    let i = 0
    const at = () => i * TILE

    // chest (closed)
    ellipse(ctx, at() + 16, 28, 11, 3, P.shadow)
    rect(ctx, at() + 5, 14, 22, 14, P.woodDark)
    rect(ctx, at() + 7, 16, 18, 10, P.wood)
    rect(ctx, at() + 5, 8, 22, 8, P.woodDark)
    rect(ctx, at() + 7, 9, 18, 6, P.wood)
    rect(ctx, at() + 14, 15, 4, 6, P.gold)
    i++

    // chest (open)
    ellipse(ctx, at() + 16, 28, 11, 3, P.shadow)
    rect(ctx, at() + 5, 14, 22, 14, P.woodDark)
    rect(ctx, at() + 7, 16, 18, 10, P.ink)
    rect(ctx, at() + 4, 4, 24, 8, P.wood)
    rect(ctx, at() + 4, 10, 24, 2, P.woodDark)
    i++

    // key
    circle(ctx, at() + 12, 13, 6, P.gold)
    circle(ctx, at() + 12, 13, 3, P.floorDark)
    rect(ctx, at() + 16, 11, 12, 4, P.gold)
    rect(ctx, at() + 23, 15, 3, 5, P.gold)
    i++

    // emberheart
    ctx.globalAlpha = 0.3
    circle(ctx, at() + 16, 16, 14, P.ember)
    ctx.globalAlpha = 1
    ctx.fillStyle = P.ember
    ctx.beginPath()
    ctx.moveTo(at() + 16, 26)
    ctx.bezierCurveTo(at() + 2, 15, at() + 8, 4, at() + 16, 11)
    ctx.bezierCurveTo(at() + 24, 4, at() + 30, 15, at() + 16, 26)
    ctx.fill()
    ctx.fillStyle = P.flameCore
    ctx.beginPath()
    ctx.moveTo(at() + 16, 21)
    ctx.bezierCurveTo(at() + 9, 15, at() + 12, 10, at() + 16, 13)
    ctx.bezierCurveTo(at() + 20, 10, at() + 23, 15, at() + 16, 21)
    ctx.fill()
    i++

    // heart pickup
    ctx.fillStyle = P.heartDark
    ctx.beginPath()
    ctx.moveTo(at() + 16, 25)
    ctx.bezierCurveTo(at() + 4, 15, at() + 9, 6, at() + 16, 12)
    ctx.bezierCurveTo(at() + 23, 6, at() + 28, 15, at() + 16, 25)
    ctx.fill()
    ctx.fillStyle = P.heart
    ctx.beginPath()
    ctx.moveTo(at() + 16, 23)
    ctx.bezierCurveTo(at() + 6, 14, at() + 10, 8, at() + 16, 13)
    ctx.bezierCurveTo(at() + 22, 8, at() + 26, 14, at() + 16, 23)
    ctx.fill()
    i++

    // push block
    rect(ctx, at() + 1, 3, 30, 28, P.rockDark)
    rect(ctx, at() + 3, 5, 26, 24, P.rock)
    rect(ctx, at() + 6, 8, 20, 3, P.rockLight)
    rect(ctx, at() + 3, 26, 26, 3, P.rockDark)
    circle(ctx, at() + 16, 18, 5, P.rockDark)
    circle(ctx, at() + 16, 18, 3, P.ember)
    i++

    // sign
    ellipse(ctx, at() + 16, 29, 7, 2, P.shadow)
    rect(ctx, at() + 14, 18, 4, 11, P.woodDark)
    rect(ctx, at() + 4, 6, 24, 14, P.woodDark)
    rect(ctx, at() + 6, 8, 20, 10, P.wood)
    rect(ctx, at() + 9, 11, 14, 1, P.woodDark)
    rect(ctx, at() + 9, 14, 10, 1, P.woodDark)
    i++

    frames.forEach((name, idx) => tex.add(name, 0, idx * TILE, 0, TILE, TILE))
  })
}

function buildFx(scene) {
  canvasTexture(scene, 'fx', 96, 48, (ctx, tex) => {
    // slash: a crescent pointing right, drawn in a 48x48 cell
    ctx.strokeStyle = P.blade
    ctx.lineWidth = 6
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.arc(12, 24, 20, -Math.PI / 2.4, Math.PI / 2.4)
    ctx.stroke()
    ctx.strokeStyle = P.flameCore
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(12, 24, 20, -Math.PI / 3, Math.PI / 3)
    ctx.stroke()
    tex.add('slash', 0, 0, 0, 48, 48)

    // spark: a small burst used for hits and deaths
    circle(ctx, 72, 24, 7, P.flameCore)
    ctx.strokeStyle = P.ember
    ctx.lineWidth = 3
    for (let a = 0; a < 6; a++) {
      const ang = (a / 6) * Math.PI * 2
      ctx.beginPath()
      ctx.moveTo(72 + Math.cos(ang) * 8, 24 + Math.sin(ang) * 8)
      ctx.lineTo(72 + Math.cos(ang) * 15, 24 + Math.sin(ang) * 15)
      ctx.stroke()
    }
    tex.add('spark', 0, 48, 0, 48, 48)
  })
}

// ---------------------------------------------------------------------------

export function buildAllTextures(scene) {
  buildTiles(scene)
  buildActors(scene)
  buildItems(scene)
  buildFx(scene)
}

export function registerAnimations(scene) {
  const add = (key, texture, frames, frameRate = 6) => {
    if (scene.anims.exists(key)) return
    scene.anims.create({
      key,
      frames: frames.map((f) => ({ key: texture, frame: f })),
      frameRate,
      repeat: -1,
    })
  }
  add('walk-down', 'player', ['down0', 'down1'], 7)
  add('walk-up', 'player', ['up0', 'up1'], 7)
  add('walk-side', 'player', ['side0', 'side1'], 7)
  add('slime-idle', 'slime', ['f0', 'f1'], 3)
  add('wisp-idle', 'wisp', ['f0', 'f1'], 8)
  add('husk-idle', 'husk', ['f0', 'f1'], 5)
  add('elder-idle', 'elder', ['f0', 'f1'], 2)
  add('warden-idle', 'warden', ['f0', 'f1'], 4)
}
