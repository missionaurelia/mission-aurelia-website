import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowDown } from 'lucide-react';

const IMG = '/images/sanctum-spa';

// Shared body copy wrapper — keeps reading rhythm consistent across sections.
function Body({ children }) {
  return <div className="mt-6 space-y-4 text-[var(--color-text)]/75">{children}</div>;
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
        src={`${IMG}/portal-hero.webp`}
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
function SectionImage({ eyebrow, title, image, alt, reverse, quote, children }) {
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
  {
    id: 'early',
    label: 'Begin early',
    text: 'Some chose early - not out of fear, but because they saw no reason to wait. Time felt like something worth holding.',
  },
  {
    id: 'later',
    label: 'Begin later',
    text: 'Some waited. Not out of doubt, but because the right moment had not yet arrived. When it did, they recognized it.',
  },
  {
    id: 'never',
    label: 'Not at all',
    text: 'Some chose not to participate at all. Not as rejection, but as a quiet, deliberate decision to age on their own terms.',
  },
  {
    id: 'gradual',
    label: 'Open gradually',
    text: 'Some opened themselves slowly - one step, then another. No urgency. No pressure. Just a widening of what felt possible.',
  },
];

function ParallelChoices() {
  const [active, setActive] = useState('gradual');
  const current = PATHS.find((p) => p.id === active);
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
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-200/50">05 - Choice</p>
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

          <div className="mt-8 flex min-h-[140px] items-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-amber-200/50">
                  {current?.label}
                </p>
                <p className="mt-4 text-lg italic text-amber-50/85 md:text-xl">{current?.text}</p>
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
          eyebrow="01 - The Place"
          title="What is Sanctum Spa?"
          image={`${IMG}/main-interior.webp`}
          alt="Flowing interior architecture with water, plants, wood and soft curved lines"
        >
          <Body>
            <p>
              Sanctum Spa is not a clinic in the traditional sense. It is not a luxury retreat. It
              is a place where regenerative care, recovery, and the personal experience of an
              extended life come together - quietly, responsibly, and on your own terms.
            </p>
            <p className="text-amber-50/90">Progress here is not performed. It is lived.</p>
          </Body>
        </SectionImage>

        <SectionImage
          eyebrow="02 - The Bridge"
          title="From Helix Labs to Everyday Life"
          image={`${IMG}/science-bridge.webp`}
          alt="A laboratory and technology space meeting a warm, organic natural space"
          reverse
          quote="What begins as research becomes, over time, something you can feel."
        >
          <Body>
            <p>
              Helix Labs develops what is possible. Sanctum Spa makes it experienceable. The path
              from laboratory to life is not dramatic - it is careful, personal, and unhurried. A
              morning appointment. A follow-up conversation. A body that feels different without
              looking different.
            </p>
          </Body>
        </SectionImage>

        <SectionImage
          eyebrow="03 - The Body"
          title="Guided recovery"
          image={`${IMG}/recovery.webp`}
          alt="A reclining chair with soft blankets in warm light, a plant nearby - calm and intimate"
        >
          <Body>
            <p>
              Recovery at Sanctum Spa is not about returning to a previous state. It is about
              learning what the body can sustain when given time, care, and the right conditions.
            </p>
            <p className="text-amber-50/90">
              Stabilization. Resilience. A slower, more deliberate relationship between body and
              time.
            </p>
          </Body>
        </SectionImage>

        <SectionImage
          eyebrow="04 - Time"
          title="Why does Sanctum Spa matter?"
          image={`${IMG}/lysithea-sunset.webp`}
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
        </SectionImage>

        <ParallelChoices />

        <SectionImage
          eyebrow="06 - Grounding"
          title="A lightly scientific grounding"
          image={`${IMG}/regenerative-detail.webp`}
          alt="A golden droplet resting on a green leaf against a deep blue background"
          reverse
        >
          <Body>
            <p>
              Sanctum Spa is fiction. But it is grounded in real trajectories of medical research -
              regenerative medicine, tissue renewal, cellular stabilization, and the distinction
              between healthspan and lifespan.
            </p>
            <p className="text-amber-50/90">
              The vision is not merely additional years. It is sustained vitality - biological
              flexibility, resilience, and recovery capacity - guided, not forced.
            </p>
          </Body>
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
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-200/50">07 - The Story</p>
            <h2 className="font-[family-name:var(--font-family-display)] text-3xl font-bold text-amber-50 md:text-4xl">
              Connection to Season 1
            </h2>
            <Body>
              <p>
                In Season 1 of Mission: Aurelia, the first traces of this future appear quietly. Not
                as grand exposition, but through personal choices, medical transitions, and a
                changed relationship with time.
              </p>
              <p className="text-amber-50/90">
                Sanctum Spa helps make sense of that world - not by explaining it, but by giving it
                a place.
              </p>
            </Body>

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
