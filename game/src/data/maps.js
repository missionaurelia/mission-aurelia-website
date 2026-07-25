// ---------------------------------------------------------------------------
// The world, as ASCII.
// ---------------------------------------------------------------------------
// Every row must be the same length - loadMap() throws loudly if it isn't, so
// a typo shows up immediately instead of as a mysteriously shifted world.
//
// Legend (see LEGEND in config.js):
//   .  grass        ,  flowers      :  path        ~  water      =  bridge
//   T  tree         R  rock         H  house       X  thorns     S  shrine
//   _  stone floor  -  floor accent #  wall        o  pit        b  brazier
//   p  pressure plate            D  locked door    G  gate       >  stairs
//
// Everything that moves, talks or can be opened is an object below the rows,
// positioned in TILE coordinates.
// ---------------------------------------------------------------------------

export const MAPS = {
  village: {
    name: 'Hollowmere',
    outdoor: true,
    rows: [
      'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
      'T............................T',
      'T...HHHH........,,,..........T',
      'T...HHHH.......,,,,,.........T',
      'T.....::.........,,..........T',
      'T.....::.....................T',
      'T..,,.::..HHHH...............T',
      'T..,,.::..HHHH......RR.......T',
      'T.....::............RR.......T',
      'T.:::::::::::::::::::........T',
      'T.....::.....................T',
      'T.....::.....S...............T',
      'T.....::.....................T',
      'T.....::..............,,.....T',
      'T~~~~.::..............,,.....T',
      'T~~~~.::.....................T',
      'T~~~~.::......RR.............T',
      'T.....::......RR.............T',
      'T.....XX.....................T',
      'T.....::.....................T',
      'T.....>>.....................T',
      'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    ],
    spawn: { x: 6, y: 12 },
    portals: [
      { x: 6, y: 20, to: 'barrow', at: { x: 13, y: 17 } },
      { x: 7, y: 20, to: 'barrow', at: { x: 13, y: 17 } },
    ],
    npcs: [{ id: 'elder', x: 12, y: 11, dialogue: 'elder' }],
    chests: [{ id: 'village-sword', x: 24, y: 4, item: 'sword' }],
    signs: [
      { x: 5, y: 17, dialogue: 'sign-thorns' },
      { x: 8, y: 9, dialogue: 'sign-village' },
    ],
    enemies: [
      { type: 'slime', x: 21, y: 14 },
      { type: 'slime', x: 25, y: 10 },
      { type: 'wisp', x: 16, y: 19 },
    ],
    blocks: [],
  },

  barrow: {
    name: 'The Sunken Barrow',
    outdoor: false,
    rows: [
      '############################',
      '#########__________#########',
      '#########____>_____#########',
      '#########__________#########',
      '#############__#############',
      '#############__#############',
      '#############__#############',
      '#############__#############',
      '#############GG#############',
      '#_______#_b______b_#_______#',
      '#_______#__________#_______#',
      '#_______#___----___#_______#',
      '#__p____D___----___________#',
      '#_______#__________#_______#',
      '#_______#__________#_______#',
      '#_______#_b______b_#_______#',
      '#############__#############',
      '#############__#############',
      '#############>>#############',
      '############################',
    ],
    spawn: { x: 13, y: 17 },
    portals: [
      { x: 13, y: 18, to: 'village', at: { x: 6, y: 19 } },
      { x: 14, y: 18, to: 'village', at: { x: 6, y: 19 } },
      { x: 13, y: 2, to: 'warden', at: { x: 8, y: 12 } },
    ],
    npcs: [],
    chests: [{ id: 'barrow-key', x: 23, y: 12, item: 'smallkey' }],
    signs: [{ x: 14, y: 15, dialogue: 'sign-barrow' }],
    enemies: [
      { type: 'husk', x: 22, y: 10 },
      { type: 'husk', x: 24, y: 14 },
      { type: 'wisp', x: 21, y: 13 },
      { type: 'slime', x: 12, y: 13 },
      { type: 'slime', x: 16, y: 10 },
      { type: 'husk', x: 15, y: 14 },
      { type: 'wisp', x: 17, y: 13 },
    ],
    blocks: [{ id: 'barrow-block', x: 5, y: 12 }],
    // Pressing every plate in this list opens every gate tile in the map.
    plates: [{ x: 3, y: 12 }],
  },

  warden: {
    name: 'Warden’s Hollow',
    outdoor: false,
    boss: true,
    rows: [
      '#################',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '#_______________#',
      '########>########',
      '#################',
    ],
    spawn: { x: 8, y: 12 },
    portals: [{ x: 8, y: 13, to: 'barrow', at: { x: 13, y: 3 } }],
    npcs: [],
    chests: [],
    signs: [],
    enemies: [],
    blocks: [],
    bossSpawn: { x: 8, y: 4 },
  },
}
