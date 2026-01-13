import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { characterGroups } from '../data/charactersData';

export default function CharactersLayered() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll into depth layers
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const groups = Object.values(characterGroups);

  return (
    <div ref={containerRef} className="min-h-screen bg-[var(--color-bg)]">
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
              Journey through the layers of existence — from human warmth to digital consciousness.
            </p>
            <p className="text-sm text-[var(--color-text)]/50 mt-4">
              ↓ Scroll to explore the depths ↓
            </p>
          </motion.div>
        </div>
      </section>

      {/* Layered Character Sections */}
      <div className="relative" style={{ minHeight: '300vh' }}>
        
        {/* Layer 1: Veyra Family (Foreground - Humans) */}
        <motion.section 
          style={{ y: layer1Y }}
          className="sticky top-0 section-padding z-30"
        >
          <div className="container">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-2 text-gradient-orange">
                  {groups[0].title}
                </h2>
                <p className="text-[var(--color-text)]/60">The Heart of the Story</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {groups[0].characters.map((character, index) => (
                <CharacterCard
                  key={character.name}
                  character={character}
                  color={groups[0].color}
                  index={index}
                  onClick={() => setSelectedCharacter(character)}
                />
              ))}
            </div>
          </div>
          
          {/* Gradient fade to next layer */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none"></div>
        </motion.section>

        {/* Layer 2: Key Figures (Middle Ground) */}
        <motion.section 
          style={{ y: layer2Y }}
          className="sticky top-0 section-padding z-20 opacity-90"
        >
          <div className="container">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-2 text-gradient-blue">
                  {groups[1].title}
                </h2>
                <p className="text-[var(--color-text)]/60">Architects of Change</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {groups[1].characters.map((character, index) => (
                <CharacterCard
                  key={character.name}
                  character={character}
                  color={groups[1].color}
                  index={index}
                  onClick={() => setSelectedCharacter(character)}
                />
              ))}
            </div>
          </div>
          
          {/* Gradient fade to next layer */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-bg)] pointer-events-none"></div>
        </motion.section>

        {/* Layer 3: AI Consciousness (Background - Digital) */}
        <motion.section 
          style={{ y: layer3Y }}
          className="sticky top-0 section-padding z-10 opacity-80"
        >
          <div className="container">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-2" style={{ 
                  background: `linear-gradient(135deg, ${groups[2].color}, #ec4899)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {groups[2].title}
                </h2>
                <p className="text-[var(--color-text)]/60">Beyond the Human Realm</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {groups[2].characters.map((character, index) => (
                <CharacterCard
                  key={character.name}
                  character={character}
                  color={groups[2].color}
                  index={index}
                  onClick={() => setSelectedCharacter(character)}
                  ethereal={true}
                />
              ))}
            </div>
          </div>
        </motion.section>

      </div>

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

// Character Card Component
function CharacterCard({ character, color, index, onClick, ethereal = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`card group cursor-pointer ${ethereal ? 'backdrop-blur-md bg-white/5' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Portrait */}
      <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white/5 relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Glow overlay on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="absolute inset-0"
            style={{ backgroundColor: color }}
          ></motion.div>
        )}
      </div>

      {/* Name & Role */}
      <h3 className="text-xl font-bold mb-1">{character.name}</h3>
      <p className="text-sm font-semibold mb-3" style={{ color }}>
        {character.role}
      </p>

      {/* Statement */}
      <p className="text-sm italic text-[var(--color-text)]/60 line-clamp-2">
        {character.statement}
      </p>
    </motion.div>
  );
}
