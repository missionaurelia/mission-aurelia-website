import { useState } from 'react';
import { characterGroups } from '../data/charactersData';

export default function CharactersOrbital() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  // Character positions based on Aurelia_Stars.png reference
  // Format: { left: '% from left', top: '% from top', size: 'size in px' }
  const characterPositions = {
    // RED (Inner Circle) - Center cluster
    'Nicholas Veyra': { left: '38%', top: '52%', size: 70 },
    'Ryu': { left: '44%', top: '50%', size: 70 },
    'June Veyra': { left: '50%', top: '48%', size: 70 },
    'Levin': { left: '56%', top: '50%', size: 70 },
    'Luna Veyra': { left: '62%', top: '52%', size: 70 },
    
    // ORANGE (Middle Circle) - Upper-middle layer
    'Elara Lysi': { left: '20%', top: '35%', size: 65 },
    'Henry': { left: '38%', top: '28%', size: 65 },
    'Edward & Amelia': { left: '62%', top: '28%', size: 65 },
    'Auren': { left: '80%', top: '35%', size: 65 },
    
    // YELLOW (Outer Circle) - Top and sides
    'Elara Nox': { left: '40%', top: '18%', size: 75 }, // large, upper left
    'Kael Sorely': { left: '60%', top: '18%', size: 75 }, // large, upper right
    'Dr. Anna Singh': { left: '30%', top: '42%', size: 60 },
    'Luisa Singh': { left: '88%', top: '42%', size: 60 },
  };

  const renderCharacterBubble = (character, groupColor) => {
    const position = characterPositions[character.name];
    if (!position) return null;

    const isHovered = hoveredCharacter === character.name;

    return (
      <div
        key={character.name}
        className="absolute cursor-pointer transition-all duration-300"
        style={{
          left: position.left,
          top: position.top,
          transform: 'translate(-50%, -50%)',
          zIndex: isHovered ? 20 : 10,
        }}
        onClick={() => setSelectedCharacter(character)}
        onMouseEnter={() => setHoveredCharacter(character.name)}
        onMouseLeave={() => setHoveredCharacter(null)}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-60 transition-opacity duration-300"
          style={{
            width: position.size,
            height: position.size,
            backgroundColor: groupColor,
            opacity: isHovered ? 0.8 : 0.4,
          }}
        />
        
        {/* Character portrait */}
        <div
          className="relative rounded-full overflow-hidden border-4 transition-all duration-300"
          style={{
            width: position.size,
            height: position.size,
            borderColor: groupColor,
            boxShadow: isHovered ? `0 0 30px ${groupColor}` : `0 0 15px ${groupColor}`,
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          }}
        >
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Character name on hover */}
        {isHovered && (
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <div 
              className="px-3 py-1 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: groupColor }}
            >
              {character.name}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-400">
          The Aurelia Constellation
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Thirteen souls forming the tree of consciousness - each a star in the Aurelia universe.
        </p>
      </div>

      {/* Constellation Container */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Tree with Character Bubbles */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '75%' }}>
            {/* Tree Background */}
            <div 
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/aurelia-tree.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center center'
              }}
            />
            
            {/* Character Bubbles */}
            <div className="absolute inset-0">
              {/* Inner Ring (Red) */}
              {characterGroups.innerRing.characters.map(char => 
                renderCharacterBubble(char, characterGroups.innerRing.color)
              )}
              
              {/* Middle Ring (Orange) */}
              {characterGroups.middleRing.characters.map(char => 
                renderCharacterBubble(char, characterGroups.middleRing.color)
              )}
              
              {/* Outer Ring (Yellow) */}
              {characterGroups.outerRing.characters.map(char => 
                renderCharacterBubble(char, characterGroups.outerRing.color)
              )}
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-400">
            <p className="text-sm">Click on any character to learn more about them</p>
          </div>
        </div>
      </div>

      {/* Modal for character details */}
      {selectedCharacter && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCharacter(null)}
        >
          <div 
            className="bg-gray-900 rounded-lg max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className="w-48 h-48 rounded-full object-cover border-4"
                  style={{ 
                    borderColor: characterGroups.innerRing.characters.includes(selectedCharacter) 
                      ? characterGroups.innerRing.color 
                      : characterGroups.middleRing.characters.includes(selectedCharacter)
                      ? characterGroups.middleRing.color
                      : characterGroups.outerRing.color
                  }}
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{selectedCharacter.name}</h2>
                <p 
                  className="text-lg mb-4 font-semibold"
                  style={{ 
                    color: characterGroups.innerRing.characters.includes(selectedCharacter) 
                      ? characterGroups.innerRing.color 
                      : characterGroups.middleRing.characters.includes(selectedCharacter)
                      ? characterGroups.middleRing.color
                      : characterGroups.outerRing.color
                  }}
                >
                  {selectedCharacter.role}
                </p>
                
                {selectedCharacter.statement && (
                  <blockquote 
                    className="italic text-gray-300 mb-4 border-l-4 pl-4" 
                    style={{ 
                      borderColor: characterGroups.innerRing.characters.includes(selectedCharacter) 
                        ? characterGroups.innerRing.color 
                        : characterGroups.middleRing.characters.includes(selectedCharacter)
                        ? characterGroups.middleRing.color
                        : characterGroups.outerRing.color
                    }}
                  >
                    {selectedCharacter.statement}
                  </blockquote>
                )}
                
                <p className="text-gray-300 leading-relaxed">
                  {selectedCharacter.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
