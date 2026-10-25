import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090c] border-t border-[#181a24] text-gray-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-cinzel font-bold tracking-[0.24em] text-white mb-2">
              TCG CHIHIRO
            </div>
            <p className="text-gray-400 font-serif-jp text-xs leading-relaxed max-w-sm font-light">
              Osaka-based premier Japanese trading card boutique. Delivering 100% authentic sealed booster boxes, PSA 10 slabs, and rare collector singles worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-[12px] tracking-wider text-gray-400">
            <a href="#about" className="hover:text-[#d4af37] transition-colors">ABOUT</a>
            <a href="#collection" className="hover:text-[#d4af37] transition-colors">COLLECTION</a>
            <a href="#process" className="hover:text-[#d4af37] transition-colors">PROCESS</a>
            <a href="#achievements" className="hover:text-[#d4af37] transition-colors">ACHIEVEMENTS</a>
            <a href="#packaging" className="hover:text-[#d4af37] transition-colors">PACKAGING</a>
            <a href="#company" className="hover:text-[#d4af37] transition-colors">COMPANY</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">CONTACT</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2.5 rounded border border-[#252838] hover:border-[#d4af37] text-gray-400 hover:text-white transition-colors group"
            aria-label="Back to top"
          >
            <span className="text-[11px] font-mono tracking-widest">TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Legal, Licenses & Disclaimers */}
        <div className="pt-8 border-t border-[#141620] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-gray-400 text-[11px] font-light">
          <div>
            <span>© {new Date().getFullYear()} TCG CHIHIRO. All Rights Reserved. Licensed Antique Dealer by Osaka Prefectural Public Safety Commission.</span>
          </div>

          <div className="text-gray-500 text-[10px] leading-relaxed max-w-xl">
            * All product titles, card character names, and trademarks mentioned are the property of their respective trademark holders. TCG CHIHIRO is an independent Japanese trading card vault and curation boutique.
          </div>
        </div>
      </div>
    </footer>
  );
};
