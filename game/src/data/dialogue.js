// ---------------------------------------------------------------------------
// Every word the game says, in one file.
// ---------------------------------------------------------------------------
// Each entry is a function of the current game state and returns an array of
// lines. Making them functions (rather than plain arrays) is what lets the
// elder notice you're carrying a sword, or that the Emberheart is home.
//
// To translate the game, translate this file and the strings in scenes/UIScene,
// TitleScene and EndScene. Nothing else contains player-facing text.
// ---------------------------------------------------------------------------

export const DIALOGUE = {
  elder: (s) => {
    if (s.flags.emberheart) {
      return [
        'Maren, the elder:',
        'You brought it back. Give it here, child.',
        '…',
        'Warm. Still warm, after all that.',
        'Put it in the shrine. I want to see the light before I sit down.',
      ]
    }
    if (s.flags.sword) {
      return [
        'Maren, the elder:',
        "That blade was my husband's. He kept it sharp for forty years and never once needed it.",
        'The barrow mouth is south, past the thornwall. Cut through - the thorns only grew because the light went out.',
        'Bring back the Emberheart. That is all.',
      ]
    }
    return [
      'Maren, the elder:',
      'Three nights ago the Emberlight went out. You will have felt the cold in your teeth.',
      'The shrine is empty. Something came up out of the Sunken Barrow and took the Emberheart back down with it.',
      'There is a chest behind the far house. My husband left a blade in it. Take the blade, then come find me again.',
    ]
  },

  'sign-village': () => ['A weathered signpost:', 'HOLLOWMERE.', 'Keep the flame. Keep each other.'],

  'sign-thorns': (s) =>
    s.flags.sword
      ? ['A weathered signpost:', 'THE THORNWALL.', 'Beyond lies the Sunken Barrow.', '(The thorns look brittle. A blade would part them.)']
      : ['A weathered signpost:', 'THE THORNWALL.', 'Beyond lies the Sunken Barrow.', 'Nothing down there wants company.'],

  'sign-barrow': () => [
    'Words cut into the stone:',
    'HERE SLEEP THOSE WHO KEPT THE FLAME.',
    'Below that, scratched much later, in a shakier hand:',
    'one of us did not stay asleep',
  ],

  'chest-sword': () => ['You found the ASH BLADE.', 'Old, plain, and perfectly balanced.', 'Press J or SPACE to swing it.'],

  'chest-smallkey': () => ['A SMALL KEY.', 'Heavy iron, warm to the touch.', 'It will open one door down here. Choose it well - there is only one.'],

  'door-locked': () => ['The door is locked.', 'A keyhole of heavy iron waits for a key you do not have.'],

  'door-opened': () => ['The small key turns, crumbles, and is gone.'],

  'gate-closed': () => ['A portcullis of black iron bars the stair.', 'Somewhere in this barrow, something must hold it open.'],

  'gate-opened': () => ['Stone grinds on stone. The portcullis rises.'],

  'plate-pressed': () => ['The plate sinks under the weight and stays down.'],

  'boss-intro': () => [
    'The Warden of the Barrow rises.',
    'It wears the Emberheart in its chest like a stolen sun.',
    '“THE FLAME WAS GIVEN TO ME TO KEEP.”',
    '“I AM STILL KEEPING IT.”',
  ],

  'boss-defeated': () => ['The Warden kneels, and does not get up.', 'The ember in its chest comes loose and rolls, glowing, across the floor.'],

  emberheart: () => ['You have the EMBERHEART.', 'It beats, very slightly, against your palm.', 'Take it home.'],

  'no-sword': () => ['Thorns, thick as a wrist. You would need something with an edge.'],
}

export function getDialogue(key, state) {
  const entry = DIALOGUE[key]
  if (!entry) return [`(missing dialogue: ${key})`]
  return entry(state)
}
