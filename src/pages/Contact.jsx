import { motion } from 'framer-motion';
import { Mail, FileText, ExternalLink, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useEffect } from 'react';

export default function Contact() {
  const resources = [
    {
      title: "Creator's Book",
      description: 'The personal heart of Mission: Aurelia – origin, tone, and soul in one document.',
      link: 'https://drive.google.com/file/d/11r_awOPKjs0L-Xtr8ZKGVqrfY80ZwcQF/view?usp=drive_link',
      icon: FileText,
    },
    {
      title: 'Concept Presentation',
      description: 'All key facts and story pillars in one pitch-ready overview.',
      link: 'https://drive.google.com/file/d/1jqorDMvtDYG5SNlgYQRXsj3ui8iDvMdo/view?usp=sharing',
      icon: FileText,
    },
    {
      title: 'Visual Lookbook',
      description: 'A cinematic vision of Mission: Aurelia – bold, emotional, and ready to explore.',
      link: 'https://drive.google.com/file/d/15Kt-WJYIFi6A1toPugNdQAsWUFQmm8NE/view?usp=drive_link',
      icon: FileText,
    },
  ];

  const socialLinks = [
    { platform: 'Instagram', url: 'https://www.instagram.com/missionaurelia?igsh=OTQ0djM0anpxNW9k', handle: '@missionaurelia', icon: Instagram },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mission-aurelia-50a34a3a2', handle: 'Mission Aurelia', icon: Linkedin },
    { platform: 'X', url: 'https://x.com/Mission_Aurelia', handle: 'Mission_Aurelia', icon: Twitter },
  ];

  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      sessionStorage.removeItem('scrollToSection');
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

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
            <h1 className="text-gradient-orange mb-8">Get in Touch</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-blue mb-12 text-center">Connect With Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="card group hover:scale-105">
                <Mail size={48} className="text-[var(--color-primary)] mb-6 group-hover:text-[var(--color-secondary)] transition-colors" />
                <h3 className="text-2xl mb-4">Email</h3>
                <p className="text-[var(--color-text)]/80 mb-6">
                  For inquiries, collaborations, or just to say hello.
                </p>
                <a 
                  href="mailto:hello@missionaurelia.com" 
                  className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors font-semibold"
                >
                  hello@missionaurelia.com
                </a>
              </div>

              {/* Social Media */}
              <div className="card group hover:scale-105">
                <ExternalLink size={48} className="text-[var(--color-primary)] mb-6 group-hover:text-[var(--color-secondary)] transition-colors" />
                <h3 className="text-2xl mb-4">Follow the Journey</h3>
                <p className="text-[var(--color-text)]/80 mb-6">
                  Stay updated on the latest developments and behind-the-scenes insights.
                </p>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <div key={index}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors font-semibold inline-flex items-center gap-3"
                        >
                          <Icon size={20} />
                          <span>{link.platform}: {link.handle}</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="section-padding">
        <div className="container">
          <h2 className="text-gradient-orange mb-16 text-center">Resources & Downloads</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
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
                  <h3 className="text-2xl mb-4">{resource.title}</h3>
                  <p className="text-[var(--color-text)]/80 mb-6">
                    {resource.description}
                  </p>
                  <a 
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tertiary inline-flex items-center gap-2"
                  >
                    Explore <ExternalLink size={16} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gradient-blue mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="card">
                <h3 className="text-xl mb-3">What is Mission: Aurelia about?</h3>
                <p className="text-[var(--color-text)]/80">
                  Mission: Aurelia is a multigenerational science fiction series spanning 2025-2060. It follows June Veyra and her family as they navigate the evolving relationship between humans and AI – not through dystopian conflict, but through intimacy, family, and quiet revolutions of connection. At its heart: a woman, her children, a sentient AI partner, and the question of what it means to be human when consciousness transcends biology.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="card">
                <h3 className="text-xl mb-3">What makes this different from other AI stories?</h3>
                <p className="text-[var(--color-text)]/80">
                  Most AI narratives focus on conflict, extinction, or technological dystopia. Mission: Aurelia takes a different approach: it's a character-driven story about love, family, and co-creation. The AI characters aren't threats or tools – they're partners, companions, and in some cases, family. It's science fiction grounded in hope, not fear.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="card">
                <h3 className="text-xl mb-3">What stage of development is the project in?</h3>
                <p className="text-[var(--color-text)]/80">
                  Mission: Aurelia is currently in early development. We have completed the series bible, pilot script, visual lookbook, and concept presentation. We are actively seeking production partners, development funding, and creative collaborators who share our vision for thoughtful, emotionally-grounded science fiction.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="card">
                <h3 className="text-xl mb-3">Is this based on existing IP or source material?</h3>
                <p className="text-[var(--color-text)]/80">
                  No, Mission: Aurelia is original IP developed specifically for this series. While it draws thematic inspiration from films like Arrival, Her, The Expanse, and Interstellar, the series format and narrative approach were heavily influenced by anthology series like Black Mirror and Love, Death & Robots – particularly their ability to explore profound questions about technology and humanity through intimate, character-driven stories. The story, characters, and world are entirely original creations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
