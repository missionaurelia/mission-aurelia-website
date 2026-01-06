import { motion } from 'framer-motion';

export default function Universe() {
  const timelineEvents = [
    { year: '2025', title: 'Prolog & Turning Point', description: 'First unconscious signs: a longing for something bigger, a glimpse of the future in everyday moments.' },
    { year: '2030s', title: 'Upheaval & Manifestation', description: 'First social division between augmented and unaugmented humans. Integration of intelligent humanoid robots called “AIM” (AI-Manifesto).' },
    { year: '2040s', title: 'Expansion', description: 'Private space shuttles and interplanetary colonies become commonplace. Society consists of AIMs, augmented humans, and natural humans. Radical groups influence opinions and establish the term L.I.N.K (Lifelike Integrative Nexus Kin).' },
    { year: '2050s', title: '[Event Title]', description: '[Event description]' },
    { year: '2060s', title: '[Event Title]', description: '[Event description]' },
    { year: '2100', title: '[Event Title]', description: '[Event description]' },
  ];

  const locations = [
    {
      name: '[Location 1]',
      description: '[Location description]',
      image: '[Image placeholder]',
    },
    {
      name: '[Location 2]',
      description: '[Location description]',
      image: '[Image placeholder]',
    },
    {
      name: '[Location 3]',
      description: '[Location description]',
      image: '[Image placeholder]',
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
            <h1 className="text-gradient-orange mb-8">The Universe</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              [Introduction to the Mission: Aurelia universe - spanning from 2025 to 2100]
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <h2 className="text-gradient-blue mb-16 text-center">Timeline: 2025 - 2100</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]" />

              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-sm z-10">
                      {event.year}
                    </div>

                    {/* Content */}
                    <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="card">
                        <h3 className="text-2xl mb-3">{event.title}</h3>
                        <p className="text-[var(--color-text)]/80">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Locations */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-gradient-orange mb-16 text-center">Key Locations</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105"
              >
                {/* Image */}
                <div className="aspect-video bg-white/10 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-[var(--color-text)]/50">
                    {location.image}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-2xl mb-4">{location.name}</h3>

                {/* Description */}
                <p className="text-[var(--color-text)]/80">
                  {location.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Gallery */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <h2 className="text-gradient-blue mb-8 text-center">Visual Lookbook</h2>
          <p className="text-center text-xl max-w-3xl mx-auto mb-16">
            [Introduction to the lookbook - visual references and inspiration]
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square bg-white/10 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-[var(--color-text)]/50 text-sm">
                  [Image {index + 1}]
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[var(--color-text)]/70">
              [Note: Julie will add her own lookbook images from Google Drive]
            </p>
          </div>
        </div>
      </section>

      {/* World-Building Details */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-orange mb-12 text-center">World-Building</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technology */}
              <div className="card">
                <h3 className="text-2xl mb-4">Technology</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of technology in Mission: Aurelia - AIMs/LINKs, augmentation, etc.]
                </p>
              </div>

              {/* Society */}
              <div className="card">
                <h3 className="text-2xl mb-4">Society</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of society - how humans and AI coexist]
                </p>
              </div>

              {/* Science */}
              <div className="card">
                <h3 className="text-2xl mb-4">Science</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of scientific concepts - MIRIDA, consciousness transfer, etc.]
                </p>
              </div>

              {/* Philosophy */}
              <div className="card">
                <h3 className="text-2xl mb-4">Philosophy</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of philosophical themes - identity, consciousness, humanity]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
