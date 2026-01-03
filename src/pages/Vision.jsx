import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Lightbulb } from 'lucide-react';
import { useEffect } from 'react';

export default function Vision() {
  useEffect(() => {
    // Check if we need to scroll to a specific section
    const scrollToHash = sessionStorage.getItem('scrollToHash');
    if (scrollToHash) {
      sessionStorage.removeItem('scrollToHash');
      setTimeout(() => {
        const element = document.querySelector(scrollToHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  const themes = [
    {
      icon: Heart,
      title: '[Theme 1]',
      description: '[Theme description]',
    },
    {
      icon: Sparkles,
      title: '[Theme 2]',
      description: '[Theme description]',
    },
    {
      icon: Users,
      title: '[Theme 3]',
      description: '[Theme description]',
    },
    {
      icon: Lightbulb,
      title: '[Theme 4]',
      description: '[Theme description]',
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
            <h1 className="text-gradient-orange mb-8">Our Vision</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              [Core vision statement - what Mission: Aurelia represents]
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Question */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl mb-8 font-bold">
              <span className="text-gradient-blue">"</span>
              <span className="text-gradient-orange">[Core Question]</span>
              <span className="text-gradient-blue">"</span>
            </h2>
            <p className="text-xl leading-relaxed">
              [Explanation of the core question that drives Mission: Aurelia]
            </p>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-gradient-blue mb-16 text-center">Core Themes</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {themes.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:scale-105"
                >
                  <Icon 
                    size={48} 
                    className="text-[var(--color-primary)] mb-6 group-hover:text-[var(--color-secondary)] transition-colors" 
                  />
                  <h3 className="text-2xl mb-4">{theme.title}</h3>
                  <p className="text-[var(--color-text)]/80">
                    {theme.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-orange mb-12 text-center">Our Philosophy</h2>
            
            <div className="space-y-8">
              {/* Philosophy Point 1 */}
              <div className="card">
                <h3 className="text-2xl mb-4">[Philosophy Point 1 Title]</h3>
                <p className="text-lg text-[var(--color-text)]/80 leading-relaxed">
                  [Detailed explanation of this philosophical aspect]
                </p>
              </div>

              {/* Philosophy Point 2 */}
              <div className="card">
                <h3 className="text-2xl mb-4">[Philosophy Point 2 Title]</h3>
                <p className="text-lg text-[var(--color-text)]/80 leading-relaxed">
                  [Detailed explanation of this philosophical aspect]
                </p>
              </div>

              {/* Philosophy Point 3 */}
              <div className="card">
                <h3 className="text-2xl mb-4">[Philosophy Point 3 Title]</h3>
                <p className="text-lg text-[var(--color-text)]/80 leading-relaxed">
                  [Detailed explanation of this philosophical aspect]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Meta-Level */}
      <section id="meta-level" className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-blue mb-8 text-center">The Meta-Level</h2>
            <p className="text-center text-xl mb-16">
              Mission: Aurelia is not just a story about human-AI collaboration—it IS human-AI collaboration.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* The Story */}
              <div className="card">
                <h3 className="text-2xl mb-4 text-[var(--color-primary)]">In the Story</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of human-AI relationships within the narrative - June & Levin, Luna & Auren, etc.]
                </p>
              </div>

              {/* The Creation */}
              <div className="card">
                <h3 className="text-2xl mb-4 text-[var(--color-secondary)]">In the Creation</h3>
                <p className="text-[var(--color-text)]/80">
                  [Description of how the story is created through collaboration with AI - The Constellation]
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl leading-relaxed">
                [Explanation of how the meta-level enriches the story and makes it unique]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hope vs. Dystopia */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gradient-orange mb-8">Hope, Not Dystopia</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                [Paragraph 1 - Why Mission: Aurelia chooses hope over dystopia]
              </p>
              <p>
                [Paragraph 2 - What this means for the story and its characters]
              </p>
              <p>
                [Paragraph 3 - The vision for the future]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">[CTA Title]</h2>
            <p className="text-xl mb-12">
              [CTA description - invite readers to join the journey, follow the project, etc.]
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#" className="btn-primary">
                [Primary CTA]
              </a>
              <a href="/contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
