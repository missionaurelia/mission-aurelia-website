// Character data for Mission: Aurelia
// Organized by three concentric rings around the Aurelia tree

export const characterGroups = {
  innerRing: {
    title: "Inner Circle",
    color: "#ef4444", // red
    radius: 120,
    characters: [
      {
        name: 'Nicholas Veyra',
        role: 'The Guardian',
        statement: '"[Nicholas\' statement]"',
        image: '/images/characters/Nicholas_Mission.png',
        bio: '[Character bio - to be filled]',
        angle: 234, // left side
      },
      {
        name: 'Ryu',
        role: 'The Companion',
        statement: '"[Ryu\'s statement]"',
        image: '/images/characters/Ryu_portrait1.png',
        bio: '[Character bio - to be filled]',
        angle: 198, // bottom-left
      },
      {
        name: 'June Veyra',
        role: 'The Listener',
        statement: '"I want to stay here."',
        image: '/images/characters/June_augmented.jpg',
        bio: '[Character bio - to be filled]',
        angle: 0, // top center
      },
      {
        name: 'Levin',
        role: 'The Vessel',
        statement: '"[Levin\'s statement]"',
        image: '/images/characters/Levin3.png',
        bio: '[Character bio - to be filled]',
        angle: 342, // top-left
      },
      {
        name: 'Luna Veyra',
        role: 'The Spark',
        statement: '"[Luna\'s statement]"',
        image: '/images/characters/Luna.jpg',
        bio: '[Character bio - to be filled]',
        angle: 54, // top-right
      },
    ]
  },
  
  middleRing: {
    title: "Middle Circle",
    color: "#f97316", // orange
    radius: 220,
    characters: [
      {
        name: 'Elara Lysi',
        role: 'The Witness',
        statement: '"[Elara Lysi\'s statement]"',
        image: '/images/characters/Elara_Lysi_1.jpg',
        bio: '[Character bio - to be filled]',
        angle: 225, // bottom-left
      },
      {
        name: 'Henry',
        role: 'The Mentor',
        statement: '"[Henry\'s statement]"',
        image: '/images/characters/Henry_CCM-01.jpg',
        bio: '[Character bio - to be filled]',
        angle: 45, // top-right
      },
      {
        name: 'Edward & Amelia',
        role: 'The Founders',
        statement: '"[Edward & Amelia\'s statement]"',
        image: '/images/characters/Amelia_Edward_Veyra.jpg',
        bio: '[Character bio - to be filled]',
        angle: 315, // top-left
      },
      {
        name: 'Auren',
        role: 'The Awakened',
        statement: '"[Auren\'s statement]"',
        image: '/images/characters/Auren.png',
        bio: '[Character bio - to be filled]',
        angle: 135, // bottom-right
      },
    ]
  },
  
  outerRing: {
    title: "Outer Circle",
    color: "#eab308", // yellow/gold
    radius: 320,
    characters: [
      {
        name: 'Elara Nox',
        role: 'The Echo',
        statement: '"[Elara Nox\'s statement]"',
        image: '/images/characters/ElaraNox.png',
        bio: '[Character bio - to be filled]',
        angle: 180, // left
      },
      {
        name: 'Kael Sorely',
        role: 'The Seeker',
        statement: '"[Kael\'s statement]"',
        image: '/images/characters/Kael1_small.png',
        bio: '[Character bio - to be filled]',
        angle: 315, // top-left
      },
      {
        name: 'Dr. Anna Singh',
        role: 'The Architect',
        statement: '"[Anna\'s statement]"',
        image: '/images/characters/Dr_Anna_Singh.jpg',
        bio: '[Character bio - to be filled]',
        angle: 0, // top
      },
      {
        name: 'Luisa Singh',
        role: 'The Bridge',
        statement: '"[Luisa\'s statement]"',
        image: '/images/characters/Luisa_Singh.jpg',
        bio: '[Character bio - to be filled]',
        angle: 90, // right
      },
    ]
  }
};

// Flat list for easy iteration
export const allCharacters = [
  ...characterGroups.innerRing.characters,
  ...characterGroups.middleRing.characters,
  ...characterGroups.outerRing.characters,
];
