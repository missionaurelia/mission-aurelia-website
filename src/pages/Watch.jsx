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
  // Entries flagged hidden are unreleased material - they stay out of the
  // DOM entirely and the layouts below center whatever remains.
  const visibleTrailers = trailers.filter((t) => !t.hidden);
  const visibleBuffet = starlightBuffet.filter((ep) => !ep.hidden);

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
          <div
            className={
              visibleTrailers.length === 1
                ? 'mx-auto max-w-2xl'
                : 'grid gap-10 md:grid-cols-2'
            }
          >
            {visibleTrailers.map((t) => (
              <motion.div key={t.id} {...fadeUp}>
                <LiteYouTube videoId={t.videoId} title={`${t.title} (${t.year})`} />
                <div className="mt-4 text-center md:text-left">
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

          {/* 9:16 tiles. A single act sits centered; once more acts release,
              the row scrolls horizontally on mobile and wraps centered on
              desktop. */}
          <motion.div
            {...fadeUp}
            className={
              visibleBuffet.length === 1
                ? 'mt-10 flex justify-center'
                : 'mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:flex-wrap md:justify-center md:gap-6 md:overflow-visible md:pb-0'
            }
          >
            {visibleBuffet.map((ep) => (
              <div
                key={ep.id}
                className={
                  visibleBuffet.length === 1
                    ? 'w-56 sm:w-64'
                    : 'w-44 flex-shrink-0 snap-start sm:w-52 md:w-56'
                }
              >
                <LiteYouTube
                  videoId={ep.videoId}
                  title={ep.title}
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

          {/* flex-wrap + justify-center keeps incomplete last rows centered
              (with five tiles, the bottom row sits in the middle). */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {spotlightArchive.map((s) => (
              <motion.div key={s.id} {...fadeUp} className="w-full max-w-sm">
                <LiteYouTube videoId={s.videoId} title={s.title} thumbnail={s.thumbnail} />
                <h3 className="mt-3 text-center text-lg font-bold">{s.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer - same wording as the Characters page; the spotlight
              thumbnails show AI-generated concepts based on public figures. */}
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <p className="text-xs md:text-sm text-gray-400 text-center leading-relaxed">
              <span className="font-semibold">Disclaimer:</span> The visual content in this section includes AI-generated character concepts based on public figures. These are speculative casting visions for creative exploration only and are not affiliated with or endorsed by the individuals depicted. All rights remain with their respective holders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
