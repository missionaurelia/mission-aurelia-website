import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/story', label: 'Story' },
    { path: '/universe', label: 'Universe' },
    { path: '/vision', label: 'Vision' },
    { path: '/contact', label: 'Contact' },
  ];

  const universeSubNav = [
    { path: '/science', label: 'Science' },
    { path: '/technology', label: 'Technology' },
    { path: '/helix-labs', label: 'Helix Labs' },
    { path: '/society', label: 'Society' },
    { path: '/philosophy', label: 'Philosophy' },
    { path: '/characters', label: 'Characters' },
    { path: '/sanctum-spa', label: 'Sanctum Spa' },
  ];

  // Check if we're on a Universe-related page
  const isUniversePage = location === '/universe' || 
                         universeSubNav.some(item => location === item.path);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-md border-b border-white/10">
      {/* Main Navigation */}
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
            {mainNavItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`nav-link ${
                    location === item.path || (item.path === '/universe' && isUniversePage)
                      ? 'text-[var(--color-primary)]' 
                      : ''
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
              {mainNavItems.map((item) => (
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
              {/* Universe Sub-navigation in Mobile */}
              <div className="pl-4 flex flex-col gap-3 mt-2 border-l-2 border-[var(--color-primary)]/30">
                {universeSubNav.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a
                      className={`nav-link text-base ${
                        location === item.path ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]/70'
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        if (item.path === '/sanctum-spa') {
                          window.dispatchEvent(new CustomEvent('sanctum:reset-portal'));
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Universe Sub-Navigation (Desktop only, shows on Universe pages) */}
      {isUniversePage && (
        <div className="hidden md:block border-t border-white/5 bg-[var(--color-background)]/90">
          <div className="container">
            <div className="flex items-center justify-center gap-8 h-14">
              {universeSubNav.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`nav-link text-sm ${
                      location === item.path
                        ? 'text-[var(--color-primary)]'
                        : 'text-[var(--color-text)]/80 hover:text-[var(--color-text)]'
                    }`}
                    onClick={() => {
                      if (item.path === '/sanctum-spa') {
                        window.dispatchEvent(new CustomEvent('sanctum:reset-portal'));
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
