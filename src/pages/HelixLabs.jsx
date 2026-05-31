import { motion } from 'framer-motion';
import { Link } from 'wouter';

// Visible threads in the Aurelia world that trace back to Helix Labs.
// Order: research origin (MIRIDA) -> off-world setting (Lysithea) ->
// AI presence (Elara) -> lived application (Sanctum Spa).
const BRIDGES = [
  {
    title: 'MIRIDA',
    description: 'Consciousness transfer research',
    image: '/images/mirida-protocol.png',
    href: '/science/mirida',
  },
  {
    title: 'Lysithea Institute',
    description: 'Off-world research environment',
    image: '/images/lysithea-institute.png',
    href: '/science/lysithea',
  },
  {
    title: 'Elara Lysi Projection',
    description: 'AI presence and projection systems',
    image: '/images/tech-elara-projection.png',
    href: '/technology/elara-projection',
  },
  {
    title: 'Sanctum Spa',
    description: 'Human-facing application of longevity medicine',
    image: '/images/sanctum-spa/main-interior.webp',
    href: '/sanctum-spa',
  },
];

const EVOLUTION = [
  {
    year: '2028',
    title: 'Glass and Wood',
    text: 'A small, transparent research environment. Human-scaled, still close to care.',
  },
  {
    year: '2030',
    title: 'Functional Expansion',
    text: 'Helix becomes more structured, clinical, and applied.',
  },
  {
    year: '2035',
    title: 'Organic Integration',
    text: 'Architecture, biology, and technology begin to merge.',
  },
  {
    year: '2040+',
    title: 'Global Player',
    text: 'Helix becomes powerful, admired, questioned, and publicly contested.',
  },
];

export default function HelixLabs() {
  return (
    <div className="relative bg-[#080a0f] text-[var(--color-text)]">
      {/* Section 1 - What is Helix Labs? */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d18] via-[#080a0f] to-[#080a0f]" />
        <motion.div
          className="container relative max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-amber-200/60">
            Mission: Aurelia
          </p>
          <h1 className="font-[family-name:var(--font-family-display)] text-5xl font-bold tracking-tight text-amber-50 md:text-7xl">
            Helix Labs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-amber-50/90 md:text-2xl">
            Where possibility becomes research.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base text-[var(--color-text)]/70 md:text-lg">
            Helix Labs is the research institution behind some of the most intimate changes in the
            world of Mission: Aurelia: body stabilization, regenerative care, consciousness-transfer
            research, AI presence systems, and the slow transformation of medical progress into
            everyday life.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - From Research to Everyday Life */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-200/50">
              01 - The Branches
            </p>
            <h2 className="font-[family-name:var(--font-family-display)] text-3xl font-bold text-amber-50 md:text-4xl">
              From Research to Everyday Life
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
            {BRIDGES.map((b, i) => (
              <motion.div
                key={b.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <Link href={b.href}>
                  <a className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-amber-200/40 hover:bg-white/[0.06]">
                    <div className="aspect-[16/9] overflow-hidden bg-[#0a0d12]">
                      <img
                        src={b.image}
                        alt={b.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-[family-name:var(--font-family-display)] text-xl font-bold text-amber-50 md:text-2xl">
                        {b.title}
                      </h3>
                      <p className="mt-3 text-[var(--color-text)]/70">{b.description}</p>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - The Evolution of Helix Labs */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a0f] via-[#0b0d12] to-[#080a0f]" />
        <div className="container relative">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-200/50">
              02 - The Arc
            </p>
            <h2 className="font-[family-name:var(--font-family-display)] text-3xl font-bold text-amber-50 md:text-4xl">
              The Evolution of Helix Labs
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {EVOLUTION.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-baseline md:gap-8 md:p-8"
              >
                <p className="flex-shrink-0 font-[family-name:var(--font-family-display)] text-2xl font-bold text-amber-200/80 md:w-28 md:text-3xl">
                  {e.year}
                </p>
                <div>
                  <h3 className="font-[family-name:var(--font-family-display)] text-xl font-bold text-amber-50 md:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-text)]/70">{e.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - The Question Helix Raises */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container relative max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-amber-200/50">
              03 - The Question
            </p>
            <h2 className="text-center font-[family-name:var(--font-family-display)] text-3xl font-bold text-amber-50 md:text-4xl">
              The Question Helix Raises
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xl font-light italic text-amber-50/90 md:text-2xl">
              What happens when medicine no longer only treats decline, but reshapes the meaning of
              time, ageing, recovery, and choice?
            </p>

            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <Link href="/sanctum-spa">
                <a className="rounded-full border border-amber-200/40 bg-amber-100/5 px-7 py-3 text-sm font-semibold text-amber-50 transition-all duration-300 hover:border-amber-200/80 hover:bg-amber-100/15">
                  Enter Sanctum Spa
                </a>
              </Link>
              <Link href="/universe">
                <a className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-[var(--color-text)]/80 transition-all duration-300 hover:border-amber-200/30 hover:text-amber-50">
                  Back to the Universe
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
