import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { characterGroups } from '../data/charactersData';

export default function CharactersOrbital() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [hoveredRing, setHoveredRing] = useState(null);

  // Calculate position based on angle and radius from character data
  const getOrbitalPosition = (character, radius) => {
    const angleInRadians = (character.angle * Math.PI) / 180;
    return {
      x: Math.cos(angleInRadians) * radius,
      y: Math.sin(angleInRadians) * radius,
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
              The souls who inhabit the Aurelia universe - human, artificial, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Orbital/Constellation View */}
      <section className="section-padding relative">
        <div className="container">
          {/* Constellation Container */}
          <div 
            className="relative w-full max-w-6xl mx-auto" 
            style={{ height: '1000px' }}
          >
            {/* Aurelia Tree Center Bubble */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedCharacter({
                name: "Aurelia",
                role: "The Tree of Life",
                image: "/images/aurelia-tree.png",
                statement: "I am the heart of this universe. My roots connect all souls, human and artificial alike.",
                bio: "The Aurelia tree - a majestic weeping Katsura - stands as the living symbol of consciousness, connection, and the bridge between human and artificial existence. Its golden leaves whisper the stories of all who dwell in this universe."
              })}
            >
              <div className="relative w-28 h-28">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-orange-600/40 rounded-full blur-2xl"></div>
                
                {/* Bubble border */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-500/60 bg-black/80 backdrop-blur-sm"></div>
                
                {/* Tree image */}
                <img
                  src="/images/aurelia-tree.png"
                  alt="Aurelia Tree"
                  className="relative w-full h-full object-contain p-3 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]"
                />
              </div>
            </motion.div>

            {/* Orbital Rings with Rotation and Expansion */}
            {groups.map((group, groupIndex) => {
              const rotationSpeed = 80 + groupIndex * 30; // Different speeds: 80s, 110s, 140s
              const rotationDirection = groupIndex % 2 === 0 ? 1 : -1;
              
              // Expansion logic
              const isHovered = hoveredRing === groupIndex;
              const isOtherHovered = hoveredRing !== null && hoveredRing !== groupIndex;
              
              // Adjust radius based on hover state
              let adjustedRadius = group.radius;
              if (isHovered) {
                adjustedRadius = group.radius * 1.3; // Expand by 30%
              } else if (isOtherHovered) {
                adjustedRadius = group.radius * 0.9; // Shrink slightly
              }
              
              return (
                <motion.div
                  key={group.title}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: `${adjustedRadius * 2}px`,
                    height: `${adjustedRadius * 2}px`,
                  }}
                  animate={{
                    rotate: rotationDirection * 360,
                    width: `${adjustedRadius * 2}px`,
                    height: `${adjustedRadius * 2}px`,
                    opacity: isOtherHovered ? 0.3 : 1,
                  }}
                  transition={{
                    rotate: {
                      duration: rotationSpeed,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    width: { duration: 0.4, ease: "easeOut" },
                    height: { duration: 0.4, ease: "easeOut" },
                    opacity: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setHoveredRing(groupIndex)}
                  onMouseLeave={() => setHoveredRing(null)}
                >
                  {/* Ring visual guide */}
                  <div 
                    className="absolute inset-0 rounded-full border transition-opacity"
                    style={{ 
                      borderColor: group.color,
                      opacity: isHovered ? 0.4 : 0.15
                    }}
                  ></div>

                  {/* Characters on this ring */}
                  {group.characters.map((character, charIndex) => {
                    const pos = getOrbitalPosition(character, adjustedRadius);
                    const isCharHovered = hoveredCharacter === character.name;
                    const isSelected = selectedCharacter?.name === character.name;
                    
                    // Bubble size based on ring
                    const bubbleSize = groupIndex === 0 ? 70 : groupIndex === 1 ? 80 : 90;

                    return (
                      <motion.div
                        key={character.name}
                        className="absolute top-1/2 left-1/2 cursor-pointer"
                        style={{
                          x: pos.x - bubbleSize / 2,
                          y: pos.y - bubbleSize / 2,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: isCharHovered ? 1.2 : 1,
                          rotate: -rotationDirection * 360,
                        }}
                        transition={{ 
                          opacity: { duration: 0.5, delay: groupIndex * 0.2 + charIndex * 0.1 },
                          scale: { duration: 0.3 },
                          rotate: {
                            duration: rotationSpeed,
                            repeat: Infinity,
                            ease: "linear",
                          }
                        }}
                        onMouseEnter={() => setHoveredCharacter(character.name)}
                        onMouseLeave={() => setHoveredCharacter(null)}
                        onClick={() => setSelectedCharacter(character)}
                      >
                        {/* Character Portrait Bubble */}
                        <div className="relative" style={{ width: `${bubbleSize}px`, height: `${bubbleSize}px` }}>
                          {/* Glow effect */}
                          <div 
                            className="absolute inset-0 rounded-full blur-xl transition-opacity"
                            style={{ 
                              backgroundColor: group.color,
                              opacity: isCharHovered ? 0.8 : 0.4
                            }}
                          ></div>
                          
                          {/* Portrait */}
                          <div 
                            className="relative w-full h-full rounded-full overflow-hidden border-2 transition-all bg-black/60"
                            style={{ 
                              borderColor: isCharHovered || isSelected ? group.color : 'rgba(255,255,255,0.2)',
                              boxShadow: isCharHovered || isSelected ? `0 0 25px ${group.color}` : 'none'
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
                            {isCharHovered && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap z-50 pointer-events-none"
                              >
                                <div className="bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                  <p className="text-sm font-semibold">{character.name}</p>
                                  <p className="text-xs opacity-80" style={{ color: group.color }}>
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
                </motion.div>
              );
            })}
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

          {/* Hint text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center text-sm text-[var(--color-text)]/50 mt-8"
          >
            Hover over a ring to expand • Click to explore
          </motion.p>
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
                    className={selectedCharacter.name === "Aurelia" ? "w-full h-full object-contain p-8" : "w-full h-full object-contain"}
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
