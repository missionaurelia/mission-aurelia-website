// Watch page + homepage hero video data.
// YouTube IDs marked TODO_ render as styled placeholder tiles until Julie
// supplies the real links - swap the ID, the tile goes live automatically.
import { spotlights } from './spotlightsData';

// Homepage "Still Here" block.
// mode: 'top'     -> above the fold inside the homepage hero (XPRIZE window)
// mode: 'section' -> demoted to a regular section further down the homepage
// Demotion is this one word - no rebuild needed.
export const homeHero = {
  mode: 'top',
  videoId: 'TODO_STILL_HERE',
  title: 'Still Here - the action teaser for Mission: Aurelia',
  line: 'Three catastrophes. One seat kept free.',
};

// Section A - Trailers & Teasers (16:9, newest first)
export const trailers = [
  {
    id: 'still-here',
    year: 2026,
    title: 'Still Here',
    videoId: 'TODO_STILL_HERE',
    copy: 'Three catastrophes. One seat kept free. The action teaser for Mission: Aurelia.',
  },
  {
    id: 'xprize-trailer',
    year: 2026,
    title: 'Mission: Aurelia - A Future Worth Living In',
    videoId: 'TODO_XPRIZE_TRAILER',
    copy: 'Home, transformation, arrival - the three-act vision trailer created for the Future Vision XPRIZE.',
  },
];

// Section B - Starlight Buffet (9:16 vertical tiles).
// Curated order: Julie decides the sequence - just reorder this array.
// The series is ongoing; append new episodes as objects with a real videoId.
export const starlightBuffet = [
  { id: 'sb-1', title: 'Starlight Buffet', videoId: 'TODO_STARLIGHT_1' },
  { id: 'sb-2', title: 'Starlight Buffet', videoId: 'TODO_STARLIGHT_2' },
  { id: 'sb-3', title: 'Starlight Buffet', videoId: 'TODO_STARLIGHT_3' },
  { id: 'sb-4', title: 'Starlight Buffet', videoId: 'TODO_STARLIGHT_4' },
];

// Section C - Character Spotlights archive (16:9 tiles).
// The first four come straight from spotlightsData (single source of truth);
// Luna's entry is appended here until her data lands in spotlightsData.
export const spotlightArchive = [
  ...spotlights.map((s) => ({
    id: s.id,
    title: s.title,
    character: s.character,
    videoId: s.youtubeShortId,
    thumbnail: s.thumbnailUrl,
  })),
  {
    id: 'luna-veyra-2026-05',
    title: 'Meet Luna Veyra',
    character: 'Luna Veyra',
    videoId: 'TODO_LUNA_SPOTLIGHT',
    thumbnail: '/images/characters/Luna.jpg',
  },
];
