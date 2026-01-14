import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { characterGroups } from '../data/charactersData';

export default function CharactersOrbital() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [isHoveringConstellation, setIsHoveringConstellation] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Calculate position based on angle and radius from character data
  const getOrbitalPosition = (character, radius) => {
    const angleInRadians = (character.angle * Math.PI) / 180;
    return {
      x: Math.cos(angleInRadians) * radius,
      y: Math.sin(angleInRadians) * radius,
    };
  };

  const groups = Object.values(characterGroups);

  // Handle mouse move for rotation influence
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;
    mouseX.set(x / centerX);
    mouseY.set(y / centerY);
  };

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
            className="relative w-full max-w-5xl mx-auto" 
            style={{ height: '900px' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringConstellation(true)}
            onMouseLeave={() => setIsHoveringConstellation(false)}
          >
            {/* Aurelia Tree Center */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-32 h-32">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-600/30 rounded-full blur-2xl"></div>
                
                {/* Tree image */}
                <img
                  src="/images/aurelia-tree.png"
                  alt="Aurelia Tree"
                  className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]"
                />
              </div>
            </motion.div>

            {/* Orbital Rings with Rotation */}
            {groups.map((group, groupIndex) => {
              const rotationSpeed = 60 + groupIndex * 20; // Different speeds: 60s, 80s, 100s
              const rotationDirection = groupIndex % 2 === 0 ? 1 : -1; // Alternate directions
              
              return (
                <motion.div
                  key={group.title}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: `${group.radius * 2}px`,
                    height: `${group.radius * 2}px`,
                  }}
                  animate={{
                    rotate: isHoveringConstellation ? 0 : rotationDirection * 360,
                  }}
                  transition={{
                    duration: rotationSpeed,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Ring visual guide */}
                  <div 
                    className="absolute inset-0 rounded-full border opacity-20"
                    style={{ borderColor: group.color }}
                  ></div>

                  {/* Characters on this ring */}
                  {group.characters.map((character, charIndex) => {
                    const pos = getOrbitalPosition(character, group.radius);
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
                          scale: isHovered ? 1.3 : 1,
                          rotate: isHoveringConstellation ? 0 : -rotationDirection * 360,
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
                        onHoverStart={() => setHoveredCharacter(character.name)}
                        onHoverEnd={() => setHoveredCharacter(null)}
                        onClick={() => setSelectedCharacter(character)}
                      >
                        {/* Character Portrait Node */}
                        <div className="relative">
                          {/* Glow effect */}
                          <div 
                            className="absolute inset-0 rounded-full blur-xl opacity-60 transition-opacity"
                            style={{ 
                              backgroundColor: group.color,
                              opacity: isHovered ? 0.8 : 0.4
                            }}
                          ></div>
                          
                          {/* Portrait */}
                          <div 
                            className="relative w-20 h-20 rounded-full overflow-hidden border-2 transition-all"
                            style={{ 
                              borderColor: isHovered || isSelected ? group.color : 'rgba(255,255,255,0.2)',
                              boxShadow: isHovered || isSelected ? `0 0 25px ${group.color}` : 'none'
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
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap z-50"
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
            Hover to pause rotation • Click to explore
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
