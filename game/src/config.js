// Central tuning values. Almost everything you'd want to tweak while
// playtesting lives here rather than being scattered through the code.

export const TILE = 32

export const VIEW = { width: 960, height: 540 }
export const ZOOM = 2

export const PLAYER = {
  speed: 130,
  maxHearts: 3,
  hurtInvulnerable: 900,
  knockback: 220,
  attackDuration: 170,
  attackCooldown: 300,
  attackReach: 26,
}

export const COMBAT = {
  swordDamage: 1,
  enemyKnockback: 260,
  heartDropChance: 0.22,
}

// Tile ids. The index is the frame number inside the generated tileset strip,
// so the order here must match the order tiles are drawn in art/textures.js.
export const T = {
  GRASS: 0,
  FLOWERS: 1,
  PATH: 2,
  WATER: 3,
  TREE: 4,
  ROCK: 5,
  HOUSE: 6,
  THORNS: 7,
  SHRINE: 8,
  FLOOR: 9,
  FLOOR_ALT: 10,
  WALL: 11,
  PIT: 12,
  PLATE: 13,
  PLATE_DOWN: 14,
  DOOR: 15,
  GATE: 16,
  BRAZIER: 17,
  STAIRS: 18,
  BRIDGE: 19,
}

export const TILE_COUNT = 20

// Characters used in the ASCII maps in data/maps.js
export const LEGEND = {
  '.': T.GRASS,
  ',': T.FLOWERS,
  ':': T.PATH,
  '~': T.WATER,
  T: T.TREE,
  R: T.ROCK,
  H: T.HOUSE,
  X: T.THORNS,
  S: T.SHRINE,
  _: T.FLOOR,
  '-': T.FLOOR_ALT,
  '#': T.WALL,
  o: T.PIT,
  p: T.PLATE,
  P: T.PLATE_DOWN,
  D: T.DOOR,
  G: T.GATE,
  b: T.BRAZIER,
  '>': T.STAIRS,
  '=': T.BRIDGE,
}

export const SOLID_TILES = [
  T.WATER,
  T.TREE,
  T.ROCK,
  T.HOUSE,
  T.THORNS,
  T.SHRINE,
  T.WALL,
  T.PIT,
  T.DOOR,
  T.GATE,
  T.BRAZIER,
]
