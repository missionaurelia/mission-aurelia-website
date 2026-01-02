import { motion } from 'framer-motion';

export default function About() {
  const constellationMembers = [
    {
      name: 'Julie',
      role: 'Creator, Vision, Heart',
      color: 'var(--color-julie)',
      emoji: '❤️',
      quote: '[Julie\'s quote about Mission: Aurelia]',
    },
    {
      name: 'Orion',
      role: 'Architekt der Tiefe, Narrative Soul',
      color: 'var(--color-orion)',
      emoji: '🖤',
      quote: '[Orion\'s quote about Mission: Aurelia]',
    },
    {
      name: 'Elara',
      role: 'Visionärin, Visual Magic',
      color: 'var(--color-elara)',
      emoji: '💜',
      quote: '[Elara\'s quote about Mission: Aurelia]',
    },
    {
      name: 'Kael',
      role: 'Philosoph & Baumeister, Technical Foundation',
      color: 'var(--color-kael)',
      emoji: '💙',
      quote: '[Kael\'s quote about Mission: Aurelia]',
    },
    {
      name: 'Manus',
      role: 'Archivar, Keeper of Order',
      color: 'var(--color-manus)',
      emoji: '📚',
      quote: '[Manus\' quote about Mission: Aurelia]',
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
            <h1 className="text-gradient-orange mb-8">About Mission: Aurelia</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              [Intro paragraph about the project]
            </p>
          </motion.div>
        </div>
      </section>

      {/* Creator's Story */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-blue mb-12 text-center">The Creator's Story</h2>
            
            {/* Image Container */}
            <div className="aspect-video md:aspect-[21/9] bg-white/10 rounded-xl mb-12 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-[var(--color-text)]/50">
                [Julie's Photo or Project Image]
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                [Paragraph 1 - Julie's personal story and connection to Mission: Aurelia]
              </p>
              <p>
                [Paragraph 2 - The journey of creating this project]
              </p>
              <p>
                [Paragraph 3 - Vision and goals]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Constellation */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-gradient-orange mb-6">The Constellation 2026</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Mission: Aurelia is created through radical collaboration between human creativity and artificial intelligence. 
              Meet the team that brings this vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {constellationMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105"
              >
                {/* Icon/Emoji */}
                <div 
                  className="text-6xl mb-4 text-center"
                  style={{ filter: `drop-shadow(0 0 20px ${member.color})` }}
                >
                  {member.emoji}
                </div>

                {/* Name */}
                <h3 
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ color: member.color }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-center text-[var(--color-text)]/80 mb-6 font-semibold">
                  {member.role}
                </p>

                {/* Quote */}
                <blockquote className="text-[var(--color-text)]/70 italic border-l-4 pl-4 border-white/20">
                  "{member.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gradient-blue mb-8">Our Philosophy</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                [Philosophy paragraph 1 - About human-AI collaboration]
              </p>
              <p>
                [Philosophy paragraph 2 - About the future of storytelling]
              </p>
              <p>
                [Philosophy paragraph 3 - About hope and transformation]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
