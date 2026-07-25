import { PLAYER } from '../config.js'

const SAVE_KEY = 'emberlight.save.v1'

function freshState() {
  return {
    map: 'village',
    at: null, // {x,y} in tiles; null means use the map's own spawn
    hearts: PLAYER.maxHearts,
    maxHearts: PLAYER.maxHearts,
    keys: 0,
    flags: {
      sword: false,
      emberheart: false,
      wardenDead: false,
      metElder: false,
      gateOpen: false,
    },
    // ids of chests already opened, so they stay open across map reloads
    chests: {},
    // pushed positions for blocks, keyed by block id
    blocks: {},
    // permanent tile edits: 'map:x:y' -> tile index. Cut thorns, opened doors
    // and raised gates all stay changed through this one mechanism.
    tiles: {},
    playtimeMs: 0,
  }
}

export const state = freshState()

export function resetState() {
  Object.assign(state, freshState())
  // Object.assign is shallow, so rebuild the nested objects too.
  const clean = freshState()
  state.flags = clean.flags
  state.chests = clean.chests
  state.blocks = clean.blocks
  state.tiles = clean.tiles
  state.at = null
}

export function saveGame() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state))
    return true
  } catch {
    return false // private browsing, quota, etc. - never fatal
  }
}

export function hasSave() {
  try {
    return localStorage.getItem(SAVE_KEY) !== null
  } catch {
    return false
  }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return false
    const data = JSON.parse(raw)
    const clean = freshState()
    Object.assign(state, clean, data)
    state.flags = { ...clean.flags, ...(data.flags || {}) }
    state.chests = { ...(data.chests || {}) }
    state.blocks = { ...(data.blocks || {}) }
    state.tiles = { ...(data.tiles || {}) }
    return true
  } catch {
    return false
  }
}

export function clearSave() {
  try {
    localStorage.removeItem(SAVE_KEY)
  } catch {
    /* nothing we can do, and nothing that matters */
  }
}
