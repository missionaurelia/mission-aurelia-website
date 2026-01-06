import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo/Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="text-gradient-orange">Mission: Aurelia</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl mb-12 text-[var(--color-text)]/80"
          >
            A story about consciousness, family, and what it means to be human
          </motion.p>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl font-semibold">
              Coming Soon
            </p>
            <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
              We're building something extraordinary. A universe where AI and humanity explore what connection truly means.
            </p>
          </motion.div>

          {/* Animated dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex justify-center gap-3"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
              />
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 text-sm text-[var(--color-text)]/50"
          >
            Stay tuned. The future is being written.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
