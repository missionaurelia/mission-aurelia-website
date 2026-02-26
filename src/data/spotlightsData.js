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
    transcript: `
      "woman on this ship - no'k in"
      "June Veyra - systems engineer, mother of"
      "¡Qué complicado! ¡Qué diablo!"
      "Even without this, T-H-A-T IS LOVE!"
    `,
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
    poster: '/images/spotlights/levin-poster.jpg',
    thumbnailUrl: '/images/characters/Levin_augmented.jpg',
    date: '2026-02-27',
    duration: '30 seconds',
    tags: ['Veyra Family', 'Henry', 'Ryu', 'AI', 'Love', 'Family'],
    characterBioLink: '/characters',
    transcript: `
      [Transcript will be added after video release]
    `,
    behindTheScenes: 'Created with AI video generation, editing by Julie. A collaboration between the Constellation team.',
  },
  // Future spotlights will be added here monthly
  // Next: [Character Name] - March 2026
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
