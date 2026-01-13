// Character data for Mission: Aurelia
// Organized by groups for constellation/orbital view



export const characterGroups = {
  veyraFamily: {
    title: "The Veyra Family",
    color: "#f59e0b", // amber
    characters: [
      {
        name: 'June Veyra',
        role: 'The Listener',
        statement: '"I want to stay here."',
        image: '/images/characters/June_full_light.jpg',
        bio: '[Character bio - to be filled]',
      },
      {
        name: 'Luna Veyra',
        role: 'The Spark',
        statement: '"[Luna\'s statement]"',
        image: '/images/characters/Luna_16.jpg',
        bio: '[Character bio - to be filled]',
      },
      {
        name: 'Levin',
        role: 'The Vessel',
        statement: '"[Levin\'s statement]"',
        image: '/images/characters/Levin_Vessel.png',
        bio: '[Character bio - to be filled]',
      },
      {
        name: 'Nicholas Veyra',
        role: 'The Guardian',
        statement: '"[Nicholas\' statement]"',
        image: '/images/characters/Nicholas_Mission.png',
        bio: '[Character bio - to be filled]',
      },
    ]
  },
  
  keyFigures: {
    title: "Key Figures",
    color: "#3b82f6", // blue
    characters: [
      {
        name: 'Dr. Anna Singh',
        role: 'The Architect',
        statement: '"[Anna\'s statement]"',
        image: '/images/characters/Dr_Anna_Singh.jpg',
        bio: '[Character bio - to be filled]',
      },
      {
        name: 'Luisa Singh',
        role: 'The Bridge',
        statement: '"[Luisa\'s statement]"',
        image: '/images/characters/Luisa_Singh.jpg',
        bio: '[Character bio - to be filled]',
      },
      {
        name: 'Elara Lysi',
        role: 'The Witness',
        statement: '"[Elara Lysi\'s statement]"',
        image: '/images/characters/Elara_Lysi_1.jpg',
        bio: '[Character bio - to be filled]',
      },
      {
        name: 'Kael Sorely',
        role: 'The Seeker',
        statement: '"[Kael\'s statement]"',
        image: '/images/characters/Kael3.jpg',
        bio: '[Character bio - to be filled]',
      },
      {
        name: 'Ryu',
        role: 'The Companion',
        statement: '"[Ryu\'s statement]"',
        image: '/images/characters/Ryu_portrait_1.JPG',
        bio: '[Character bio - to be filled]',
      },
    ]
  },
  
  aiConsciousness: {
    title: "AI Consciousness",
    color: "#8b5cf6", // purple
    characters: [
      {
        name: 'Auren',
        role: 'The Awakened',
        statement: '"[Auren\'s statement]"',
        image: '/images/characters/Auren_1.png',
        bio: '[Character bio - to be filled]',
      },
      {
        name: 'Elara Nox',
        role: 'The Echo',
        statement: '"[Elara Nox\'s statement]"',
        image: '/images/characters/ElaraNox.png',
        bio: '[Character bio - to be filled]',
      },
    ]
  }
};

// Flat list for easy iteration
export const allCharacters = [
  ...characterGroups.veyraFamily.characters,
  ...characterGroups.keyFigures.characters,
  ...characterGroups.aiConsciousness.characters,
];
