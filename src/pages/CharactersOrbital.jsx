import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { characterGroups } from '../data/charactersData';

export default function CharactersOrbital() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  // Calculate positions for orbital layout
  const getOrbitalPosition = (groupIndex, charIndex, totalInGroup) => {
    const radius = 150 + (groupIndex * 120); // Concentric circles
    const angleStep = (2 * Math.PI) / totalInGroup;
    const angle = angleStep * charIndex - Math.PI / 2; // Start from top
    
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const groups = Object.values(characterGroups);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-gradient-orange mb-8">Who Lives Here?</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text)]/80">
              The souls who inhabit the Aurelia universe — human, artificial, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Orbital/Constellation View */}
      <section className="section-padding relative">
        <div className="container">
          {/* Constellation Container */}
          <div className="relative w-full max-w-5xl mx-auto" style={{ height: '800px' }}>
            {/* Center Point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 opacity-50 blur-xl"></div>
              <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-amber-500/30"></div>
            </div>

            {/* Orbital Rings (visual guides) */}
            {[0, 1, 2].map((ringIndex) => (
              <div
                key={ringIndex}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                style={{
                  width: `${300 + ringIndex * 240}px`,
                  height: `${300 + ringIndex * 240}px`,
                }}
              ></div>
            ))}

            {/* Characters as Orbital Nodes */}
            {groups.map((group, groupIndex) => (
              <div key={group.title}>
                {group.characters.map((character, charIndex) => {
                  const pos = getOrbitalPosition(
                    groupIndex,
                    charIndex,
                    group.characters.length
                  );
                  const isHovered = hoveredCharacter === character.name;
                  const isSelected = selectedCharacter?.name === character.name;

                  return (
                    <motion.div
                      key={character.name}
                      className="absolute top-1/2 left-1/2 cursor-pointer"
                      style={{
                        x: pos.x - 40,
                        y: pos.y - 40,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: isHovered ? 1.2 : 1,
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: groupIndex * 0.2 + charIndex * 0.1 
                      }}
                      onHoverStart={() => setHoveredCharacter(character.name)}
                      onHoverEnd={() => setHoveredCharacter(null)}
                      onClick={() => setSelectedCharacter(character)}
                    >
                      {/* Character Portrait Node */}
                      <div className="relative">
                        {/* Glow effect */}
                        <div 
                          className="absolute inset-0 rounded-full blur-lg opacity-50"
                          style={{ backgroundColor: group.color }}
                        ></div>
                        
                        {/* Portrait */}
                        <div 
                          className="relative w-20 h-20 rounded-full overflow-hidden border-2 transition-all"
                          style={{ 
                            borderColor: isHovered || isSelected ? group.color : 'rgba(255,255,255,0.2)',
                            boxShadow: isHovered || isSelected ? `0 0 20px ${group.color}` : 'none'
                          }}
                        >
                          <img
                            src={character.image}
                            alt={character.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Name label on hover */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap"
                            >
                              <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                                <p className="text-sm font-semibold">{character.name}</p>
                                <p className="text-xs opacity-70" style={{ color: group.color }}>
                                  {character.role}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}

            {/* Connection Lines (optional - can be added later) */}
            {/* SVG lines connecting related characters */}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-16">
            {groups.map((group) => (
              <div key={group.title} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: group.color }}
                ></div>
                <span className="text-sm text-[var(--color-text)]/70">{group.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Detail Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCharacter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[var(--color-bg)] border border-white/10 rounded-2xl p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Portrait */}
                <div className="aspect-square rounded-xl overflow-hidden bg-white/5">
                  <img
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-2">{selectedCharacter.name}</h2>
                  <p className="text-amber-500 font-semibold mb-4">{selectedCharacter.role}</p>
                  
                  {/* Statement */}
                  <blockquote className="text-xl italic text-[var(--color-text)]/80 mb-6 border-l-4 border-amber-500 pl-4">
                    {selectedCharacter.statement}
                  </blockquote>

                  {/* Bio */}
                  <p className="text-[var(--color-text)]/70 leading-relaxed">
                    {selectedCharacter.bio}
                  </p>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedCharacter(null)}
                    className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors self-start"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
