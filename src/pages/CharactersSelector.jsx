import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function CharactersSelector() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
      <div className="container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-gradient-orange mb-8">Choose Your View</h1>
          <p className="text-xl text-[var(--color-text)]/80 mb-16">
            Two different ways to explore the characters of Mission: Aurelia
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Orbital/Constellation View */}
            <Link href="/characters/orbital">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card cursor-pointer group"
              >
                <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-32 h-32 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="3" strokeWidth="2" />
                    <circle cx="12" cy="12" r="8" strokeWidth="1" opacity="0.5" />
                    <circle cx="12" cy="12" r="10" strokeWidth="1" opacity="0.3" />
                    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                    <circle cx="19" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="20" r="1.5" fill="currentColor" />
                    <circle cx="5" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                  Orbital / Constellation View
                </h2>
                
                <p className="text-[var(--color-text)]/70 mb-4">
                  Characters arranged in concentric circles like stars in a constellation. 
                  Interactive nodes show relationships and groupings.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-amber-500 font-semibold">
                  <span>Explore</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>

            {/* Layered Depth View */}
            <Link href="/characters/layered">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card cursor-pointer group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-32 h-32 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="5" rx="1" strokeWidth="2" opacity="0.9" />
                    <rect x="3" y="10" width="18" height="5" rx="1" strokeWidth="2" opacity="0.6" />
                    <rect x="3" y="17" width="18" height="5" rx="1" strokeWidth="2" opacity="0.3" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  Layered Depth View
                </h2>
                
                <p className="text-[var(--color-text)]/70 mb-4">
                  Journey through layers of existence — from human warmth to digital consciousness. 
                  Scroll-based parallax experience.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-blue-500 font-semibold">
                  <span>Explore</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Back to Universe */}
          <div className="mt-12">
            <Link href="/universe">
              <span className="text-[var(--color-text)]/60 hover:text-[var(--color-text)] transition-colors">
                ← Back to Universe
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
