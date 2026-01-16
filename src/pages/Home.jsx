import { Link, useLocation } from 'wouter';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Handle hash navigation after page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Background Image with Blur and Opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/hero-background.jpg)',
              filter: 'blur(1px)',
              opacity: 0.4
            }}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/80 via-[var(--color-background)]/70 to-[var(--color-background)]" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <p className="text-[var(--color-secondary)] text-lg md:text-xl mb-6 font-semibold">
              Consciousness. Family. Stars.
            </p>

            {/* Main Title */}
            <h1 className="text-gradient-orange mb-8">
              Mission: Aurelia
            </h1>

            {/* Logline */}
            <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-12 leading-relaxed">
              A cinematic exploration of love, consciousness, and what it means to be human.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/universe">
                <a className="btn-primary inline-flex items-center gap-2">
                  Explore the Universe
                  <ArrowRight size={20} />
                </a>
              </Link>
              
              <Link href="/about">
                <a className="btn-secondary inline-flex items-center gap-2">
                  <Play size={20} />
                  Learn More
                </a>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[var(--color-primary)] rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[var(--color-primary)] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Quick Intro Section */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gradient-blue mb-8">
              A Human-AI Collaboration
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              At the core of Aurelia lies something rare: a true co-creation between human intuition and artificial intelligence. Together, we dream, write, and build what neither could alone.
            </p>
            <Link href="/vision">
              <a 
                className="btn-tertiary text-lg"
                onClick={(e) => {
                  // Store the hash for the Vision page to handle
                  sessionStorage.setItem('scrollToHash', '#meta-level');
                }}
              >
                How It Works →
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Teaser */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center text-gradient-orange mb-16">
            Featured Sections
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Key Locations */}
            <div className="card">
              <div className="aspect-video bg-white/10 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/home-key-locations.png" 
                  alt="Key Locations - Aurelia Tree and Universe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Key Locations</h3>
              <p className="text-[var(--color-text)]/80 mb-4">
                Where does Mission: Aurelia take place?
              </p>
              <Link href="/universe">
                <a className="btn-tertiary">Learn More →</a>
              </Link>
            </div>

            {/* Card 2 - Characters */}
            <div className="card">
              <div className="aspect-video bg-white/10 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/home-characters.png" 
                  alt="Characters - The Family" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Characters</h3>
              <p className="text-[var(--color-text)]/80 mb-4">
                Who are the main characters?
              </p>
              <Link href="/characters">
                <a className="btn-tertiary">Meet them →</a>
              </Link>
            </div>

            {/* Card 3 - Vision */}
            <div className="card">
              <div className="aspect-video bg-white/10 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/home-vision.png" 
                  alt="Our Vision - Human-AI Connection" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Our Vision</h3>
              <p className="text-[var(--color-text)]/80 mb-4">
                What motivates us?
              </p>
              <Link href="/vision">
                <a className="btn-tertiary">Explore the Vision →</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20">
        <div className="container text-center">
          <h2 className="mb-8">Dive Deeper</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Access exclusive resources, character profiles, and world-building materials.
          </p>
          <button
            onClick={() => {
              sessionStorage.setItem('scrollToSection', 'resources');
              setLocation('/contact');
            }}
            className="btn-primary"
          >
            Explore Resources
          </button>
        </div>
      </section>
    </div>
  );
}
