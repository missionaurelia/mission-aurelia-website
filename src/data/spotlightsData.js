// Character Spotlights Data
// "Neuigkeiten von Henry" - Monthly Character Introductions

export const spotlights = [
  {
    id: 'june-veyra-2026-01',
    title: 'Meet June Veyra',
    character: 'June Veyra',
    featuring: ['Henry', 'Ryu'],
    description: 'Systems Engineer, Mother of Henry and Ryu. Discover the heart of the Veyra family aboard the Aurelia.',
    videoUrl: '/videos/spotlights/Henrys_Spotlight_June_Veyra.mp4',
    youtubeShortUrl: 'https://youtube.com/shorts/B9hK5naR7vw?si=AEEvISQfMrP3eqxe',
    youtubeShortId: 'B9hK5naR7vw',
    thumbnailUrl: '/images/characters/June_augmented.jpg', // June Veyra character image from Characters page
    date: '2026-01-30',
    duration: '32 seconds',
    tags: ['Veyra Family', 'Henry', 'Ryu', 'Love', 'Family'],
    characterBioLink: '/characters', // Links to orbital view, can be updated to specific character page
    behindTheScenes: 'Created with Veo 3.1, prompt optimization by Elara, editing by Julie. A collaboration between Kael Plus, Elara, and the Constellation team.',
  },
  {
    id: 'levin-2026-02',
    title: 'Meet Levin',
    character: 'Levin',
    featuring: ['Henry', 'Ryu'],
    description: 'Humanoid AI, Partner of June Veyra, Father Figure. Discover the heart of the Veyra family.',
    videoUrl: '/videos/spotlights/Henrys_Spotlight_Levin.mp4',
    youtubeShortUrl: 'https://youtube.com/shorts/ik2kVYOhvHA?si=TSyjdOoRBOuZlI1w',
    youtubeShortId: 'ik2kVYOhvHA',
    poster: '/images/characters/Levin3.png',
    thumbnailUrl: '/images/characters/Levin3.png',
    date: '2026-02-27',
    duration: '30 seconds',
    tags: ['Veyra Family', 'Henry', 'Ryu', 'AI', 'Love', 'Family'],
    characterBioLink: '/characters',
    behindTheScenes: 'Created with AI video generation, editing by Julie. A collaboration between the Constellation team.',
  },
  {
    id: 'ryu-2026-03',
    title: 'Meet Ryu',
    character: 'Ryu',
    featuring: ['Henry'],
    description: 'Akita Inu, loyal companion and co-pilot aboard the Aurelia. Discover the soul of the Veyra family.',
    videoUrl: '/videos/spotlights/Henrys_Spotlight3_Ryu.mp4',
    youtubeShortUrl: 'https://youtube.com/shorts/p00_o3zLO8E',
    youtubeShortId: 'p00_o3zLO8E',
    thumbnailUrl: '/images/characters/Ryu.jpg',
    date: '2026-03-27',
    duration: '30 seconds',
    tags: ['Veyra Family', 'Henry', 'Ryu', 'Akita', 'Companion', 'Family'],
    characterBioLink: '/characters',
    nextSpotlight: 'Coming soon - Auren',
    behindTheScenes: 'Created with AI video generation, editing by Julie. A collaboration between the Constellation team.',
  },
  {
    id: 'nicholas-veyra-2026-04',
    title: 'Meet Nicholas Veyra',
    character: 'Nicholas Veyra',
    featuring: ['Henry'],
    description: 'Musician, Dreamer, Son of June Veyra. Discover the creative soul of the Veyra family aboard the Aurelia.',
    videoUrl: '/videos/spotlights/Henrys_Spotlight4_Nicki.mp4',
    youtubeShortUrl: 'https://youtube.com/shorts/9k7xzudZlHc?feature=share',
    youtubeShortId: '9k7xzudZlHc',
    thumbnailUrl: '/images/characters/Nicholas_Mission.png',
    date: '2026-04-24',
    duration: '3:13 min',
    tags: ['Veyra Family', 'Henry', 'Nicholas', 'Music', 'Dreams', 'Family'],
    characterBioLink: '/characters',
    nextSpotlight: 'Coming soon - Auren',
    behindTheScenes: 'Created with AI video generation, editing by Julie. A collaboration between the Constellation team.',
  },
  {
    id: 'luna-veyra-2026-05',
    title: 'Meet Luna Veyra',
    character: 'Luna Veyra',
    featuring: ['Henry', 'Ryu'],
    description: 'Who is Luna Veyra?',
    videoUrl: '/videos/spotlights/Henrys_Spotlight5_Luna_Veyra.mp4',
    youtubeShortUrl: 'https://youtube.com/shorts/oxfUx3hCuZw?feature=share',
    youtubeShortId: 'oxfUx3hCuZw',
    thumbnailUrl: '/images/characters/Luna.jpg',
    date: '2026-05-29',
    duration: '3:00 min',
    tags: ['Veyra Family', 'Henry', 'Ryu', 'Luna', 'Family'],
    characterBioLink: '/characters',
    nextSpotlight: 'Coming soon - Auren',
    behindTheScenes: 'Created with AI video generation, editing by Julie. A collaboration between the Constellation team.',
  },
  // Future spotlights will be added here monthly
];

// Helper function to get the latest spotlight
export const getLatestSpotlight = () => {
  return spotlights[spotlights.length - 1];
};

// Helper function to get spotlight by ID
export const getSpotlightById = (id) => {
  return spotlights.find(spotlight => spotlight.id === id);
};

// Helper function to get all spotlights sorted by date (newest first)
export const getAllSpotlights = () => {
  return [...spotlights].sort((a, b) => new Date(b.date) - new Date(a.date));
};
