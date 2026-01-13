import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Universe() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const lookbookImages = [
    // Spaces & Architecture
    { src: '/lookbook/SuiteVII_entrance.jpg', alt: 'Suite VII Entrance' },
    { src: '/lookbook/Spa_Bath2.jpg', alt: 'Spa Bath' },
    { src: '/lookbook/Spa_entrance_night.jpg', alt: 'Spa Entrance at Night' },
    { src: '/lookbook/Veyra_Mansion_2025_1.png', alt: 'Veyra Mansion 2025' },
    // Ship/Deck
    { src: '/lookbook/Deck_1_Bridge', alt: 'Deck 1 - Bridge' },
    { src: '/lookbook/Deck_1_Observation_Lounge', alt: 'Deck 1 - Observation Lounge' },
    { src: '/lookbook/Deck_2_Main_Sleeping_Cabin.jpg', alt: 'Deck 2 - Main Sleeping Cabin' },
    { src: '/lookbook/Deck_2_Dog_area.jpg', alt: 'Deck 2 - Dog Area' },
    // Lysithea Institut
    { src: '/lookbook/Lysithea_Institut_Panorama.jpg', alt: 'Lysithea Institut Panorama' },
    { src: '/lookbook/Lysithea_Institut_Habitat7.jpg', alt: 'Lysithea Institut Habitat 7' },
    { src: '/lookbook/Lysithea_Institut_Habitat7_InnerSeaView.jpg', alt: 'Habitat 7 Inner Sea View' },
    { src: '/lookbook/Ryu_Lysithea_InnerSea.jpg', alt: 'Ryu at Lysithea Inner Sea' },
    // Characters & Concepts
    { src: '/lookbook/Levin_Phase0', alt: 'Levin - Phase 0' },
    { src: '/lookbook/Presence_gold.png', alt: 'Presence' },
    { src: '/lookbook/NovaVentis_flying_closed_OrionNebula.png', alt: 'Nova Ventis in Orion Nebula' },
    { src: '/lookbook/CCM-01_Spec1.jpg', alt: 'CCM-01 Collar Concept' },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lookbookImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lookbookImages.length) % lookbookImages.length);
  };

  const timelineEvents = [
    { year: '2025', title: 'Prolog & Turning Point', description: 'First unconscious signs: a longing for something bigger, a glimpse of the future in everyday moments.' },
    { year: '2030s', title: 'Upheaval & Manifestation', description: 'First social division between augmented and unaugmented humans. Integration of intelligent humanoid robots called “AIM” (AI-Manifesto).' },
    { year: '2040s', title: 'Expansion', description: 'Private space shuttles and interplanetary colonies become commonplace. Society consists of AIMs, augmented humans, and natural humans. Radical groups influence opinions and establish the term L.I.N.K (Lifelike Integrative Nexus Kin).' },
    { year: '2050s', title: 'Global catastrophe', description: 'The Earth is destroyed by an asteroid impact. Is this the end?' },
    { year: '2060s', title: '?', description: 'What will become of the earth and humanity?' },
    { year: '2100', title: '?', description: '' },
  ];

  const locations = [
    {
      name: 'Earth',
      description: 'Lake Oswego, Oregon...?',
      image: '/locations/Veyra_Mansion_2035_ext.jpg',
    },
    {
      name: 'Lysithea',
      description: '?',
      image: '/locations/Lysithea_Aurelion.png',
    },
    {
      name: 'The Nova Ventis',
      description: 'Wh?',
      image: '/locations/NovaVentis_OuterShell_closed1.png',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/orion-nebula-bg.jpg)' }}
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-gradient-orange mb-8">The Universe</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              
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
                      <div 
                        className="card" 
                        style={{ 
                          opacity: event.year === '2060s' ? 0.6 : event.year === '2100' ? 0.3 : 1 
                        }}
                      >
                        <h3 className="text-2xl mb-3">{event.title}</h3>
                        {event.description && (
                          <p className="text-[var(--color-text)]/80">{event.description}</p>
                        )}
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
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
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
            A visual journey through the world of Mission: Aurelia — from intimate spaces to vast cosmic horizons.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {lookbookImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(index)}
                className="aspect-square bg-white/10 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer group relative"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Watermark */}
                <div className="absolute bottom-2 right-2 text-white/60 text-xs font-light pointer-events-none">
                  © 2026 Mission: Aurelia
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World-Building Details */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-orange mb-12 text-center">World-Building</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Characters */}
              <a href="/characters" className="card hover:scale-105 transition-transform block">
                <h3 className="text-2xl mb-4 text-gradient-orange">Characters</h3>
                <p className="text-[var(--color-text)]/80">
                  Meet the souls who inhabit the Aurelia universe — human, artificial, and everything in between.
                </p>
                <div className="mt-4 text-amber-500 font-semibold flex items-center gap-2">
                  <span>Explore →</span>
                </div>
              </a>

              {/* Technology */}
              <a href="/technology" className="card hover:scale-105 transition-transform block">
                <h3 className="text-2xl mb-4">Technology</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of technology in Mission: Aurelia - AIMs/LINKs, augmentation, etc.]
                </p>
              </a>

              {/* Society */}
              <a href="/society" className="card hover:scale-105 transition-transform block">
                <h3 className="text-2xl mb-4">Society</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of society - how humans and AI coexist]
                </p>
              </a>

              {/* Science */}
              <a href="/science" className="card hover:scale-105 transition-transform block">
                <h3 className="text-2xl mb-4">Science</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of scientific concepts - MIRIDA, consciousness transfer, etc.]
                </p>
              </a>

              {/* Philosophy */}
              <a href="/philosophy" className="card hover:scale-105 transition-transform block">
                <h3 className="text-2xl mb-4">Philosophy</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of philosophical themes - identity, consciousness, humanity]
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white/80 hover:text-white text-5xl font-light z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image Container */}
          <div 
            className="max-w-7xl max-h-[90vh] flex items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lookbookImages[currentImageIndex].src}
              alt={lookbookImages[currentImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            {/* Watermark */}
            <div className="absolute bottom-4 right-4 text-white/70 text-sm font-light pointer-events-none">
              © 2026 Mission: Aurelia
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white/80 hover:text-white text-5xl font-light z-10"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {currentImageIndex + 1} / {lookbookImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
