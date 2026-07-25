# Emberlight

A compact top-down action adventure in the spirit of the classic Zelda games.
Roughly 15-20 minutes long: one village, one dungeon, one boss, one ending.

Built with [Phaser 3](https://phaser.io) and Vite. Runs in the browser, no
server and no build step at play time.

```
pnpm install
pnpm dev        # play at http://localhost:5180
pnpm build      # production build into dist/
pnpm validate   # sanity-check the maps after editing them
```

## Controls

| Key | Action |
| --- | --- |
| Arrows or WASD | move |
| J or Space | swing the sword |
| E or Enter | talk, open, read, advance dialogue |

Progress saves to `localStorage` automatically at every meaningful moment.

## The shape of the game

1. **Hollowmere** - the shrine has gone dark. Elder Maren sends you to a chest
   behind the far house for the Ash Blade.
2. The blade cuts the **thornwall** south of the village, which opens the way
   down into the barrow.
3. **The Sunken Barrow** - the east room holds a chest with a small key. The key
   opens the west room, which holds a pressure plate and a push block. Weighting
   the plate raises the portcullis in the north corridor.
4. **The Warden's Hollow** - a three-phase boss fight. Beat it, take the
   Emberheart, carry it home to Maren.

## Layout

```
src/
  config.js          tuning values, tile ids, the ASCII map legend
  main.js            Phaser game config and scene order
  art/
    palette.js       every colour in the game, in one place
    textures.js      ALL art, drawn into canvas textures at runtime
  data/
    maps.js          the three maps, as ASCII plus object lists
    dialogue.js      every word the game says
  entities/
    Player.js  Enemy.js  Boss.js  PushBlock.js
  scenes/
    BootScene    builds the textures, then hands off
    TitleScene   menu, continue / new journey
    WorldScene   all gameplay; restarts itself on every map change
    UIScene      hearts, dialogue box, boss bar - listens on the event bus
    EndScene     closing text
  systems/
    state.js     the single game state object plus save/load
    bus.js       one event emitter shared by all scenes
```

Two ideas hold the whole thing together:

- **WorldScene restarts on every map change.** Changing area means setting
  `state.map` and calling `scene.restart()`. There is no map-unloading code
  because there is no map-unloading problem.
- **The world never talks to the UI directly.** It emits on the bus; UIScene
  listens. That is why gameplay code contains no HUD logic.

## Editing the world

Maps live in `src/data/maps.js` as arrays of equal-length strings. The legend is
at the top of that file and in `config.js`:

```
.  grass      ,  flowers   :  path     ~  water    =  bridge
T  tree       R  rock      H  house    X  thorns   S  shrine
_  floor      -  accent    #  wall     o  pit      b  brazier
p  plate      D  door      G  gate     >  stairs
```

Everything that moves, talks or opens is listed below the rows in tile
coordinates: `npcs`, `chests`, `signs`, `enemies`, `blocks`, `plates`,
`portals`.

Run `pnpm validate` after editing. It catches short rows, unknown characters,
objects placed inside walls and portals that land in solid rock - all of which
are miserable to diagnose from inside a running game.

To add an enemy type: add an entry to `ENEMY_TYPES` in `entities/Enemy.js` and a
draw function in `art/textures.js`. Nothing else needs to change.

## About the art

Every sprite and tile is **drawn in code** at startup, in `art/textures.js`.
That was a deliberate call: it keeps the repository self-contained, avoids all
licensing questions, and means the game has no assets to lose.

It is also the obvious thing to replace first. The file documents the seam at the
top: swap `buildAllTextures()` for loader calls in `BootScene` and keep the same
texture keys and frame names, and the rest of the game does not notice.

```
tiles    32x32 frames, in the order of T in config.js
player   down0 down1 up0 up1 side0 side1
slime / wisp / husk / elder    f0 f1
warden   f0 f1  (64x64)
items    chest chestOpen key emberheart heart block sign
fx       slash spark
```

Good CC0 starting points: Kenney's top-down packs (kenney.nl), the Ninja
Adventure pack, or anything on OpenGameArt tagged CC0 with a 32x32 grid.

## Debugging

The browser console has a handle on the running game:

```js
__emberlight.state.flags.sword = true
__emberlight.state.keys = 3
__emberlight.state.map = 'barrow'
__emberlight.game.scene.getScene('world').scene.restart()
```

## Known limits

Deliberate omissions, not oversights:

- **No sound.** No music, no effects. This is the largest single gap between
  what is here and something that feels finished.
- **`flags.gateOpen` is global**, not per map. Fine for one gate puzzle, wrong
  the moment there is a second one - make it a per-map key first.
- **Keyboard only.** No touch controls, no gamepad.
- **Enemies respawn** every time you re-enter a map, as in the early Zelda games.
- **One save slot.**
