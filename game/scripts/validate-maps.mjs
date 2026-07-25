// Run with: pnpm validate
//
// Catches the mistakes that are painful to debug in a running game: a map row
// that is one character too short, a chest placed inside a wall, a portal that
// drops the player into solid rock. Worth running after every map edit.

import { MAPS } from '../src/data/maps.js'
import { LEGEND, SOLID_TILES } from '../src/config.js'

let problems = 0
const fail = (msg) => {
  console.error('  ✗ ' + msg)
  problems++
}

const isSolid = (map, x, y) => {
  const row = map.rows[y]
  if (row === undefined || x < 0 || x >= row.length) return true
  return SOLID_TILES.includes(LEGEND[row[x]])
}

for (const [key, map] of Object.entries(MAPS)) {
  const width = map.rows[0].length
  console.log(`${key} - ${width} x ${map.rows.length}`)

  map.rows.forEach((row, y) => {
    if (row.length !== width) fail(`row ${y} is ${row.length} characters, expected ${width}`)
    for (const ch of row) {
      if (LEGEND[ch] === undefined) fail(`row ${y} contains unknown map character '${ch}'`)
    }
  })

  const check = (label, x, y) => {
    if (isSolid(map, x, y)) fail(`${label} at ${x},${y} sits on a solid tile`)
  }

  check('spawn', map.spawn.x, map.spawn.y)
  ;(map.npcs || []).forEach((n) => check(`npc "${n.id}"`, n.x, n.y))
  ;(map.chests || []).forEach((c) => check(`chest "${c.id}"`, c.x, c.y))
  ;(map.signs || []).forEach((s, i) => check(`sign #${i}`, s.x, s.y))
  ;(map.enemies || []).forEach((e, i) => check(`enemy ${e.type} #${i}`, e.x, e.y))
  ;(map.blocks || []).forEach((b) => check(`block "${b.id}"`, b.x, b.y))
  ;(map.plates || []).forEach((p, i) => check(`plate #${i}`, p.x, p.y))
  if (map.bossSpawn) check('bossSpawn', map.bossSpawn.x, map.bossSpawn.y)
  ;(map.portals || []).forEach((p) => {
    const target = MAPS[p.to]
    if (!target) return fail(`portal at ${p.x},${p.y} points at unknown map "${p.to}"`)
    if (isSolid(target, p.at.x, p.at.y)) {
      fail(`portal at ${p.x},${p.y} lands inside a solid tile in "${p.to}"`)
    }
  })
}

if (problems === 0) {
  console.log('\nAll maps valid.')
} else {
  console.error(`\n${problems} problem(s) found.`)
  process.exit(1)
}
