// Watch page + homepage hero video data.
// - YouTube IDs marked TODO_ render as styled placeholder tiles.
// - Entries with hidden: true are not rendered at all - material that is
//   planned but not yet released. Flip the flag (and drop in the real ID)
//   when it launches; the layout re-flows automatically.
import { spotlights } from './spotlightsData';

// Homepage "Still Here" block.
// mode: 'top'     -> above the fold inside the homepage hero (XPRIZE window)
// mode: 'section' -> demoted to a regular section further down the homepage
// Demotion is this one word - no rebuild needed.
export const homeHero = {
  mode: 'top',
  videoId: 'wtmyWZg0jp4',
  title: 'Still Here - the action teaser for Mission: Aurelia',
  line: 'Three catastrophes. One seat kept free.',
};

// Section A - Trailers & Teasers (16:9, newest first)
export const trailers = [
  {
    id: 'still-here',
    year: 2026,
    title: 'Still Here',
    videoId: 'wtmyWZg0jp4',
    copy: 'Three catastrophes. One seat kept free. The action teaser for Mission: Aurelia.',
  },
  {
    id: 'xprize-trailer',
    year: 2026,
    title: 'Mission: Aurelia - A Future Worth Living In',
    videoId: 'TODO_XPRIZE_TRAILER',
    copy: 'Home, transformation, arrival - the three-act vision trailer created for the Future Vision XPRIZE.',
    hidden: true, // unhide when the trailer is released
  },
];

// Section B - Starlight Buffet (9:16 vertical tiles).
// Curated order: Julie decides the sequence - just reorder this array.
// The series is ongoing; unhide/append acts as they release.
export const starlightBuffet = [
  { id: 'sb-act-1', title: 'Starlight Buffet - Act 1', videoId: 'ZFoWDLeRn5s' },
  { id: 'sb-act-2', title: 'Starlight Buffet - Act 2', videoId: 'AjQoG56Dass' },
  { id: 'sb-act-3', title: 'Starlight Buffet - Act 3', videoId: 'TODO_STARLIGHT_ACT_3', hidden: true },
];

// Section C - Character Spotlights archive (16:9 tiles).
// Straight from spotlightsData - single source of truth. New spotlights
// added there appear here automatically.
export const spotlightArchive = spotlights.map((s) => ({
  id: s.id,
  title: s.title,
  character: s.character,
  videoId: s.youtubeShortId,
  thumbnail: s.thumbnailUrl,
}));
