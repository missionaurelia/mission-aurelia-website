import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/universe', label: 'Universe' },
    { path: '/characters', label: 'Characters' },
    { path: '/vision', label: 'Vision' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-md border-b border-white/10">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="logo text-gradient-orange">
              Mission: Aurelia
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`nav-link ${
                    location === item.path ? 'text-[var(--color-primary)]' : ''
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`nav-link text-lg ${
                      location === item.path ? 'text-[var(--color-primary)]' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
