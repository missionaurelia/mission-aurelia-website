export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--color-background)]">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--color-text)]/70">
              © {currentYear} Mission: Aurelia. Created in collaboration between human creativity and artificial intelligence.
            </p>
          </div>
          
          <div className="flex gap-6">
            {/* Placeholder for social media links - Julie will add her own */}
            <a href="#" className="text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors text-sm">
              Linkedin
            </a>
            <a href="#" className="text-[var(--color-text)]/70 hover:text-[var(--color-primary)] transition-colors text-sm">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
