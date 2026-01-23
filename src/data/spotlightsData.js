// Character Spotlights Data
// "Neuigkeiten von Henry" - Monthly Character Introductions

export const spotlights = [
  {
    id: 'june-veyra-2026-01',
    title: 'Meet June Veyra',
    character: 'June Veyra',
    featuring: ['Henry', 'Ryu'],
    description: 'Systems Engineer, Mother of Henry and Ryu. Discover the heart of the Veyra family aboard the Aurelia.',
    videoUrl: '/videos/spotlights/henry-ryu-june-veyra.mp4',
    thumbnailUrl: '/images/characters/june-veyra.jpg', // Will use existing character image
    date: '2026-01-23',
    duration: '24 seconds',
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
  // Future spotlights will be added here monthly
  // Next: [Character Name] - February 2026
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
