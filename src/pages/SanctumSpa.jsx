import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowDown } from 'lucide-react';

const IMG = '/images/sanctum-spa';

// Marks where Julia's final copy will go. Intentionally muted so the layout
// reads realistically while making it obvious the prose is not final yet.
function Placeholder({ note, terms }) {
  return (
    <div className="mt-6 space-y-4">
      <p className="text-xs uppercase tracking-[0.25em] text-amber-200/40">
        Placeholder — final copy to follow
      </p>
      {note && <p className="italic text-[var(--color-text)]/55">{note}</p>}
      {terms && (
        <div className="flex flex-wrap gap-2 pt-1">
          {terms.map((t) => (
            <span
              key={t}
              className="rounded-full border border-amber-200/20 bg-amber-100/5 px-3 py-1 text-xs text-amber-100/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Soft drifting light motes — quiet, not spectacle.
function Motes() {
  const motes = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 6,
        duration: 9 + Math.random() * 10,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m) => (
        <motion.span
          key={m.id}
          className="absolute rounded-full bg-amber-100/40 blur-[1px]"
          style={{ left: `${m.left}%`, top: `${m.top}%`, width: m.size, height: m.size }}
          animate={{ y: [0, -28, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: m.duration, delay: m.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

// A subtle butterfly drifting near the arch.
function Butterfly() {
  return (
    <motion.div
      className="pointer-events-none absolute left-[18%] top-[38%] text-amber-100/40"
      animate={{ x: [0, 40, 10, 60, 0], y: [0, -20, 12, -8, 0], rotate: [0, 8, -6, 4, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{ scaleX: [1, 0.7, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M12 12c-1-4-4-6-7-5-2 .7-2.5 3.5-1 5.5S9 15 12 12zm0 0c1-4 4-6 7-5 2 .7 2.5 3.5 1 5.5S15 15 12 12zm0 0c-.8 3-1 6 0 8 1-2 .8-5 0-8z" />
      </motion.svg>
    </motion.div>
  );
}

function Portal({ onEnter }) {
  return (
    <motion.section
      className="fixed inset-0 z-30 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(6px)' }}
      transition={{ duration: 1.1, ease: 'easeInOut' }}
    >
      {/* Slowly breathing portal image */}
      <motion.img
        src={`${IMG}/portal-hero.png`}
        alt="An organic stone archway opening onto the wide Lysithea landscape at amber sunset"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080a0f]/40 via-transparent to-[#080a0f]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#080a0f_95%)]" />
      <Motes />
      <Butterfly />

      <motion.div
        className="relative z-10 px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      >
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-amber-200/70">
          Mission: Aurelia
        </p>
        <h1 className="font-[family-name:var(--font-family-display)] text-5xl font-bold tracking-tight text-amber-50 drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)] md:text-7xl">
          Sanctum Spa
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-amber-50/90 md:text-xl">
          Where longevity becomes personal.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-amber-50/60 md:text-base">
          Sanctum Spa is where the question of living longer becomes the question of living well.
        </p>

        <button
          onClick={onEnter}
          aria-label="Enter Sanctum Spa"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-amber-200/40 bg-amber-100/5 px-8 py-4 text-base font-semibold text-amber-50 backdrop-blur-sm transition-all duration-500 hover:border-amber-200/80 hover:bg-amber-100/15"
        >
          Enter Sanctum Spa
          <ArrowDown size={18} className="transition-transform duration-500 group-hover:translate-y-1" />
        </button>
      </motion.div>
    </motion.section>
  );
}

// Reusable parallax image + text section.
function SectionImage({ index, eyebrow, title, image, alt, reverse, quote, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      <div className="container">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          {/* Image */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <motion.img
                src={image}
                alt={alt}
                style={{ y }}
                className="h-[114%] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/30 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-200/50">{eyebrow}</p>
            <h2 className="font-[family-name:var(--font-family-display)] text-3xl font-bold text-amber-50 md:text-4xl">
              {title}
            </h2>
            {quote && (
              <p className="mt-6 border-l-2 border-amber-200/40 pl-5 text-xl font-light italic text-amber-50/90 md:text-2xl">
                {quote}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const PATHS = [
  { id: 'early', label: 'Begin early' },
  { id: 'later', label: 'Begin later' },
  { id: 'never', label: 'Not at all' },
  { id: 'gradual', label: 'Open gradually' },
];

function ParallelChoices() {
  const [active, setActive] = useState('gradual');
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020] via-[#0a0d16] to-[#080a0f]" />
      <div className="container relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-200/50">05 — Choice</p>
          <h2 className="font-[family-name:var(--font-family-display)] text-3xl font-bold text-amber-50 md:text-4xl">
            Parallel choices, not one future
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-light italic text-amber-50/90 md:text-2xl">
            The future is not one path. It is a landscape of parallel choices.
          </p>
          <p className="mt-3 text-amber-50/60">No single version of the future has to fit everyone.</p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3">
            {PATHS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  active === p.id
                    ? 'border-amber-200/70 bg-amber-100/15 text-amber-50'
                    : 'border-white/10 bg-white/5 text-[var(--color-text)]/70 hover:border-amber-200/30 hover:text-amber-50'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="mt-8 min-h-[140px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-amber-200/40">
                  {PATHS.find((p) => p.id === active)?.label} — placeholder reflection
                </p>
                <p className="mt-4 text-lg italic text-[var(--color-text)]/60">
                  A short, calm reflection on this path — what it means, what it costs, what it
                  opens. Final copy to follow.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SanctumSpa() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [entered]);

  return (
    <div className="relative bg-[#080a0f] text-[var(--color-text)]">
      <AnimatePresence>
        {!entered && <Portal key="portal" onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      <div id="sanctum-content">
        {/* Quiet threshold statement */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[#080a0f] via-[#0b0d12] to-[#080a0f]" />
          <motion.div
            className="container relative text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="mx-auto max-w-3xl font-[family-name:var(--font-family-display)] text-2xl font-light leading-relaxed text-amber-50/90 md:text-3xl">
              Not immortality. Not vanity. A different relationship with time.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-amber-50/50">
              Technological progress may be chronological. Human participation remains personal.
            </p>
          </motion.div>
        </section>

        <SectionImage
          index={1}
          eyebrow="01 — The Place"
          title="What is Sanctum Spa?"
          image={`${IMG}/main-interior.png`}
          alt="Flowing interior architecture with water, plants, wood and soft curved lines"
        >
          <Placeholder
            note="Introduce Sanctum Spa plainly — a future place where progress becomes quiet, personal and embodied. Not a hospital in the old sense. Not a luxury spa in the shallow sense."
            terms={[
              'regenerative care',
              'recovery',
              'longevity procedures',
              'body stabilization',
              'personal guidance',
            ]}
          />
        </SectionImage>

        <SectionImage
          index={2}
          eyebrow="02 — The Bridge"
          title="From Helix Labs to Everyday Life"
          image={`${IMG}/science-bridge.png`}
          alt="A laboratory and technology space meeting a warm, organic natural space"
          reverse
          quote="Technological progress may be chronological. Human participation remains personal."
        >
          <Placeholder
            note="Explain the path: Helix Labs develops what is possible; Sanctum Spa turns it into lived, responsible, personal experience. From research to application to cultural integration."
            terms={['research', 'application', 'cultural integration', 'procedure to experience']}
          />
        </SectionImage>

        <SectionImage
          index={3}
          eyebrow="03 — The Body"
          title="Guided recovery"
          image={`${IMG}/recovery.png`}
          alt="A reclining chair with soft blankets in warm light, a plant nearby — calm and intimate"
        >
          <Placeholder
            note="The intimate, physical layer — care, recovery, stabilization, and the relationship between body and time. This keeps the page human, not abstract."
            terms={['guided recovery', 'stabilization', 'healthspan', 'the body, given time']}
          />
        </SectionImage>

        <SectionImage
          index={4}
          eyebrow="04 — Time"
          title="Why does Sanctum Spa matter?"
          image={`${IMG}/lysithea-sunset.png`}
          alt="A wide sunset over the Lysithea sea with Jupiter low on the horizon"
          reverse
        >
          <div className="mt-6 space-y-3 text-[var(--color-text)]/70">
            <p>What does it mean to have more time?</p>
            <p>How does a life change when healthspans grow longer?</p>
            <p>How does that change love, family and generations?</p>
            <p>What becomes of ageing when bodily decline is no longer the only clock?</p>
            <p>What becomes of responsibility when time grows more elastic?</p>
          </div>
          <Placeholder note="Open these questions without selling finished answers. Hold the space open." />
        </SectionImage>

        <ParallelChoices />

        <SectionImage
          index={6}
          eyebrow="06 — Grounding"
          title="A lightly scientific grounding"
          image={`${IMG}/regenerative-detail.png`}
          alt="A golden droplet resting on a green leaf against a deep blue background"
          reverse
        >
          <Placeholder
            note="A credible, lightly scientific underpinning — enough substance to feel real, never sterile, never pseudo-science. (Rune's domain.)"
            terms={[
              'regenerative medicine',
              'tissue renewal',
              'healthspan vs lifespan',
              'body stabilization',
              'resilience & recovery',
              'guided participation',
            ]}
          />
        </SectionImage>

        {/* Connection to Season 1 + closing */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[#080a0f] via-[#0b0d12] to-[#080a0f]" />
          <motion.div
            className="container relative max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-200/50">07 — The Story</p>
            <h2 className="font-[family-name:var(--font-family-display)] text-3xl font-bold text-amber-50 md:text-4xl">
              Connection to Season 1
            </h2>
            <Placeholder note="A quiet bridge to Mission: Aurelia, Season 1 — not spoilery, just orienting. The first hints appear softly: personal choices, medical transitions, changed relationships with time." />

            <div className="mt-16 border-t border-white/10 pt-10 text-center">
              <p className="mx-auto max-w-2xl text-xl font-light italic text-amber-50/90 md:text-2xl">
                Sanctum Spa is where the question of living longer becomes the question of living well.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/universe">
                  <a className="rounded-full border border-amber-200/40 bg-amber-100/5 px-7 py-3 text-sm font-semibold text-amber-50 transition-all duration-300 hover:border-amber-200/80 hover:bg-amber-100/15">
                    Explore the Universe
                  </a>
                </Link>
                <Link href="/science">
                  <a className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-[var(--color-text)]/80 transition-all duration-300 hover:border-amber-200/30 hover:text-amber-50">
                    Helix Labs &amp; Science
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
