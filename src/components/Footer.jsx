import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links - Julie can update these URLs
  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/missionaurelia', label: 'Instagram' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mission-aurelia-50a34a3a2', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://x.com/Mission_Aurelia', handle: 'Mission_Aurelia', label: 'X (Twitter)' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[var(--color-background)]">
      {/* Feedback Form Section */}
      <div className="container py-12">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-3">
              💬 Send Feedback
            </h3>
            <p className="text-[var(--color-text)]/70">
              Share your thoughts, ideas, or any feedback you'd like to leave with us.
            </p>
          </div>
          
          {/* Tally Embedded Form */}
          <iframe 
            src="https://tally.so/embed/jalZv6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%" 
            height="500"
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            title="Send Feedback"
            style={{ border: 'none' }}
          />
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t border-white/10" />
      
      {/* Footer Info */}
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--color-text)]/70">
              © {currentYear} Mission: Aurelia. Created in collaboration between human creativity and artificial intelligence.
            </p>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
