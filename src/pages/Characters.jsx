import { motion } from 'framer-motion';

export default function Characters() {
  const characters = [
    {
      name: 'June Veyra',
      role: '[Role/Description]',
      image: '/images/characters/June_full_light.jpg',
      bio: '[Character bio]',
    },
    {
      name: 'Levin',
      role: '[Role/Description]',
      image: '/images/characters/Levin_Vessel.png',
      bio: '[Character bio]',
    },
    {
      name: 'Luna Veyra',
      role: '[Role/Description]',
      image: '/images/characters/Luna_16.jpg',
      bio: '[Character bio]',
    },
    {
      name: 'Nicholas Veyra',
      role: '[Role/Description]',
      image: '/images/characters/Nicholas_Mission.png',
      bio: '[Character bio]',
    },
    {
      name: 'Ryu',
      role: '[Role/Description]',
      image: '/images/characters/Ryu_portrait_1.JPG',
      bio: '[Character bio]',
    },
    {
      name: 'Auren',
      role: '[Role/Description]',
      image: '/images/characters/Auren_1.png',
      bio: '[Character bio]',
    },
    {
      name: 'Dr. Anna Singh',
      role: '[Role/Description]',
      image: '/images/characters/Dr_Anna_Singh.jpg',
      bio: '[Character bio]',
    },
    {
      name: 'Luisa Singh',
      role: '[Role/Description]',
      image: '/images/characters/Luisa_Singh.jpg',
      bio: '[Character bio]',
    },
    {
      name: 'Elara Lysi',
      role: '[Role/Description]',
      image: '/images/characters/Elara_Lysi_1.jpg',
      bio: '[Character bio]',
    },
    {
      name: 'Elara Nox',
      role: '[Role/Description]',
      image: '/images/characters/ElaraNox.png',
      bio: '[Character bio]',
    },
    {
      name: 'Kael Sorely',
      role: '[Role/Description]',
      image: '/images/characters/Kael3.jpg',
      bio: '[Character bio]',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-gradient-orange mb-8">Characters</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              [Introduction to the characters - the heart of Mission: Aurelia]
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Characters */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <h2 className="text-gradient-blue mb-16 text-center">The Veyra Family</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.slice(0, 6).map((character, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105"
              >
                {/* Portrait */}
                <div className="aspect-square bg-white/10 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className={`w-full h-full ${
                      ['June Veyra', 'Luna Veyra', 'Auren'].includes(character.name)
                        ? 'object-contain'
                        : 'object-cover'
                    }`}
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl mb-2">{character.name}</h3>

                {/* Role */}
                <p className="text-[var(--color-secondary)] font-semibold mb-4">
                  {character.role}
                </p>

                {/* Bio */}
                <p className="text-[var(--color-text)]/80">
                  {character.bio}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Extended Family & Pets - Smaller Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
            {/* Edward & Amelia Veyra */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="card group hover:scale-105"
            >
              {/* Portrait */}
              <div className="aspect-square bg-white/10 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/characters/Amelia_Edward_Veyra.jpg" 
                  alt="Edward & Amelia Veyra"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg mb-2">Edward & Amelia Veyra</h3>

              {/* Role */}
              <p className="text-[var(--color-secondary)] font-semibold mb-3 text-sm">
                [Role/Description]
              </p>

              {/* Bio */}
              <p className="text-[var(--color-text)]/80 text-sm">
                [Character bio]
              </p>
            </motion.div>

            {/* Henry - Jack Russell Terrier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="card group hover:scale-105"
            >
              {/* Portrait */}
              <div className="aspect-square bg-white/10 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/characters/Henry_CCM-01.jpg" 
                  alt="Henry - Jack Russell Terrier"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg mb-2">Henry</h3>

              {/* Role */}
              <p className="text-[var(--color-secondary)] font-semibold mb-3 text-sm">
                Jack Russell Terrier
              </p>

              {/* Bio */}
              <p className="text-[var(--color-text)]/80 text-sm">
                [Character bio]
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supporting Characters */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-gradient-orange mb-16 text-center">Key Characters</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characters.slice(6).map((character, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105"
              >
                {/* Portrait */}
                <div className="aspect-square bg-white/10 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className={`w-full h-full ${
                      character.name === 'Elara Nox'
                        ? 'object-contain'
                        : 'object-cover'
                    }`}
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl mb-2">{character.name}</h3>

                {/* Role */}
                <p className="text-[var(--color-secondary)] font-semibold mb-4 text-sm">
                  {character.role}
                </p>

                {/* Bio */}
                <p className="text-[var(--color-text)]/80 text-sm">
                  {character.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Relationships */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gradient-blue mb-8">Relationships & Dynamics</h2>
            <p className="text-lg leading-relaxed mb-12">
              [Description of how characters relate to each other - family bonds, partnerships, conflicts]
            </p>

            {/* Relationship Diagram Placeholder */}
            <div className="aspect-video bg-white/10 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-[var(--color-text)]/50">
                [Relationship Diagram or Visual - Julie can add her own]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Evolution */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-orange mb-12 text-center">Character Evolution</h2>
            
            <div className="space-y-8">
              {/* Evolution Card 1 */}
              <div className="card">
                <h3 className="text-2xl mb-4">[Character Name]'s Journey</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of how this character evolves across the seasons]
                </p>
              </div>

              {/* Evolution Card 2 */}
              <div className="card">
                <h3 className="text-2xl mb-4">[Character Name]'s Journey</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of how this character evolves across the seasons]
                </p>
              </div>

              {/* Evolution Card 3 */}
              <div className="card">
                <h3 className="text-2xl mb-4">[Character Name]'s Journey</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of how this character evolves across the seasons]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
