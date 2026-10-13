import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AppRoute } from '../../types';
import { Button } from './Button';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../../data/companyData';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Portfolio removed as requested
  const navLinks: { label: string; route: AppRoute }[] = [
    { label: 'Services', route: '/services' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, route: AppRoute) => {
    e.preventDefault();
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF4D00] focus:text-[#141210] focus:font-semibold focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6DFD5] shadow-xs'
            : 'bg-[#FAF8F5] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand wordmark with STL logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2 text-[#141210] group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#FF4D00]"
            aria-label="Solvera Technology Labs Home"
          >
            <Logo size="sm" showText={true} />
          </a>

          {/* Zone 2: Single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <a
                  key={link.route}
                  href={link.route}
                  onClick={(e) => handleLinkClick(e, link.route)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#141210] font-semibold'
                      : 'text-[#5C554E] hover:text-[#141210]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF4D00] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              variant="dark"
              size="md"
              onClick={() => onNavigate('/contact')}
            >
              Book an engineering review
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#141210] hover:bg-[#F0EAE1] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D00]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Slide-Out Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#FAF8F5] pt-20 px-6 pb-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex justify-between items-center pb-6 border-b border-[#E6DFD5]">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-2"
            >
              <Logo size="sm" showText={true} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#141210] hover:bg-[#F0EAE1] rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 py-8">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`text-xl font-semibold py-2 transition-colors ${
                currentRoute === '/' ? 'text-[#FF4D00]' : 'text-[#141210]'
              }`}
            >
              Home
            </a>
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={link.route}
                onClick={(e) => handleLinkClick(e, link.route)}
                className={`text-xl font-semibold py-2 transition-colors ${
                  currentRoute === link.route ? 'text-[#FF4D00]' : 'text-[#141210]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#E6DFD5] flex flex-col gap-3">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                onNavigate('/contact');
                setMobileMenuOpen(false);
              }}
            >
              Book an engineering review
            </Button>
            <p className="text-xs text-[#5C554E] text-center pt-2">
              Based in Jakarta, Indonesia · Responding within 24 hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};
