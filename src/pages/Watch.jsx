import { motion } from 'framer-motion';
import LiteYouTube from '../components/LiteYouTube';
import { trailers, starlightBuffet, spotlightArchive } from '../data/watchData';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7 },
};

export default function Watch() {
  return (
    <div>
      {/* Page header */}
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-gradient-orange mb-6">Watch</h1>
          <p className="text-xl md:text-2xl text-[var(--color-text)]/80 max-w-3xl mx-auto leading-relaxed">
            Trailers, transmissions, and small windows into a future worth living in.
          </p>
        </div>
      </section>

      {/* Section A - Trailers & Teasers */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <motion.h2 {...fadeUp} className="text-gradient-blue mb-12 text-center">
            Trailers &amp; Teasers
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-2">
            {trailers.map((t) => (
              <motion.div key={t.id} {...fadeUp}>
                <LiteYouTube videoId={t.videoId} title={`${t.title} (${t.year})`} />
                <div className="mt-4">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {t.title}{' '}
                    <span className="text-[var(--color-text)]/50 font-normal">({t.year})</span>
                  </h3>
                  <p className="mt-2 text-[var(--color-text)]/70">{t.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section B - Starlight Buffet (its own warmer, playful identity) */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/15 via-[var(--color-primary)]/5 to-transparent" />
        <div className="container relative">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <h2 className="text-gradient-orange mb-4">Starlight Buffet</h2>
            <p className="text-lg md:text-xl text-[var(--color-text)]/80">
              The galaxy&apos;s most serious series has a least serious side. Welcome to the
              Starlight Buffet.
            </p>
          </motion.div>

          {/* 9:16 tiles - horizontal scroll on mobile, grid on desktop */}
          <motion.div
            {...fadeUp}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-4"
          >
            {starlightBuffet.map((ep, i) => (
              <div key={ep.id} className="w-44 flex-shrink-0 snap-start sm:w-52 md:w-auto">
                <LiteYouTube
                  videoId={ep.videoId}
                  title={`${ep.title} - episode ${i + 1}`}
                  aspect="9:16"
                  className="border border-[var(--color-primary)]/20"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section C - Character Spotlights archive */}
      <section className="section-padding bg-white/5">
        <div className="container max-w-6xl">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <h2 className="text-gradient-blue mb-4">Character Spotlights</h2>
            <p className="text-lg md:text-xl text-[var(--color-text)]/80">
              Five faces of the mission - more to come as Season 2 unfolds.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {spotlightArchive.map((s) => (
              <motion.div key={s.id} {...fadeUp}>
                <LiteYouTube videoId={s.videoId} title={s.title} thumbnail={s.thumbnail} />
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
