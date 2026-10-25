import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'COLLECTION', href: '#collection' },
    { label: 'PROCESS', href: '#process' },
    { label: 'TRACK RECORD', href: '#achievements' },
    { label: 'PACKAGING', href: '#packaging' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0b0e]/90 backdrop-blur-md border-b border-[#222530] py-3.5 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#0a0b0e]/95 via-[#0a0b0e]/60 to-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single element, clean display type) */}
          <a
            href="#"
            className="text-lg md:text-xl font-cinzel font-bold tracking-[0.22em] text-[#f4f5f8] hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            TCG CHIHIRO
          </a>

          {/* Zone 2: 4–5 clean single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.16em] text-[#9ca3af]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider text-black bg-[#d4af37] hover:bg-[#e6c352] active:scale-[0.98] transition-all rounded whitespace-nowrap shrink-0 shadow-sm shadow-[#d4af37]/20"
            >
              <span>INQUIRE NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0b0e]/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-8 pb-10 border-b border-[#262836]">
          <div className="flex flex-col gap-6 text-base tracking-[0.2em] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#d4af37] py-2 border-b border-gray-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 text-xs font-bold tracking-widest text-black bg-[#d4af37] rounded flex items-center justify-center gap-2"
            >
              <span>INQUIRY FORM</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="mt-4 text-[11px] text-gray-400 text-center tracking-wider">
              Based in Osaka · Insured Worldwide Shipping
            </p>
          </div>
        </div>
      )}
    </>
  );
};
