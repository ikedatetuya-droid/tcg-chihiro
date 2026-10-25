import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ShieldCheck, Sparkles, Box, Globe } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0c0d12]">
      {/* Background Hero Image with atmospheric overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/hero_tcg_vault_1792909285269.jpg"
          alt="TCG CHIHIRO Vault Exhibition"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradients to blend seamless dark luxury aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d12] via-[#0c0d12]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0d12_90%)]" />
      </div>

      {/* Decorative vertical calligraphy accent */}
      <div className="hidden lg:block absolute right-16 top-40 z-10 select-none pointer-events-none opacity-40">
        <div className="writing-vertical font-mono text-[11px] tracking-[0.35em] text-[#d4af37] border-l border-[#d4af37]/30 pl-4 py-6 uppercase">
          Authentic Japanese TCG · From Osaka to the World
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7">
            {/* Subtitle kicker */}
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#d4af37] mb-6">
                <span>TRADING CARD GAME VAULT</span>
                <span className="w-8 h-[1px] bg-[#d4af37]/50" />
                <span>OSAKA, JAPAN</span>
              </div>
            </ScrollReveal>

            {/* Main Display Headline */}
            <ScrollReveal delay={0.2} yOffset={32}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cinzel font-bold tracking-[0.06em] text-white leading-[1.08] mb-6">
                TCG CHIHIRO
              </h1>
            </ScrollReveal>

            {/* Catchphrase */}
            <ScrollReveal delay={0.3} yOffset={24}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif-jp font-light text-gray-200 tracking-wider mb-6">
                Authentic High-End Japanese TCG, Delivered Safely to Global Collectors.
              </p>
            </ScrollReveal>

            {/* Editorial paragraph */}
            <ScrollReveal delay={0.4} yOffset={20}>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-2xl mb-10">
                TCG CHIHIRO is a premier trading card boutique based in Osaka, Japan, specializing in factory-sealed booster boxes, PSA 10 slabs, and rare collector singles. We source strictly through authorized channels to eliminate counterfeits and resealed items, delivering every valuable piece with museum-grade protective packaging.
              </p>
            </ScrollReveal>

            {/* Action CTAs */}
            <ScrollReveal delay={0.5} yOffset={16}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#collection"
                  className="px-8 py-3.5 text-xs font-semibold tracking-[0.16em] text-black bg-[#d4af37] hover:bg-[#e6c352] active:scale-[0.98] transition-all rounded shadow-lg shadow-[#d4af37]/20 whitespace-nowrap"
                >
                  EXPLORE COLLECTION
                </a>
                <button
                  onClick={onOpenContact}
                  className="px-8 py-3.5 text-xs font-semibold tracking-[0.16em] text-white border border-[#373a4d] hover:border-[#d4af37] hover:bg-white/[0.04] active:scale-[0.98] transition-all rounded whitespace-nowrap"
                >
                  INQUIRE & SOURCING
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Official Mascot Greeting Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={0.35} direction="right">
              <div className="relative max-w-sm w-full p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#161825]/95 via-[#10121b]/95 to-[#0b0c11]/95 border border-[#2b2f44] shadow-2xl backdrop-blur-xl group hover:border-[#d4af37]/50 transition-all duration-300">
                {/* Ambient halo glow */}
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#d4af37]/15 blur-3xl pointer-events-none rounded-full" />

                <div className="flex items-center gap-4 mb-4">
                  {/* Mascot Avatar with Gold Border */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-lg shadow-[#d4af37]/20 shrink-0 bg-white">
                    <img
                      src="/assets/aistudio/from-PixAI-2061639916013905184-0_d1cb88b5.png"
                      alt="TCG CHIHIRO Official Mascot Character"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-[#d4af37] mb-1">
                      OFFICIAL CONCIERGE
                    </div>
                    <h3 className="text-base sm:text-lg font-serif-jp text-white font-medium">
                      CHIHIRO
                    </h3>
                    <div className="text-[11px] text-gray-400">
                      Bespoke Concierge Specialist
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0c10]/80 border border-[#1e2130] text-xs text-gray-300 font-serif-jp leading-relaxed relative">
                  <div className="absolute -top-2 left-8 w-3 h-3 bg-[#0b0c10] border-t border-l border-[#1e2130] rotate-45" />
                  "Welcome to TCG CHIHIRO. We meticulously inspect and deliver 100% authentic sealed booster boxes and grail cards directly from Osaka to collectors worldwide."
                </div>

                <div className="mt-4 pt-3 border-t border-[#1d202e] flex items-center justify-between text-[11px] text-gray-400">
                  <span>Worldwide Collector Support</span>
                  <button
                    onClick={onOpenContact}
                    className="text-[#d4af37] hover:underline font-medium"
                  >
                    Contact Concierge →
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Proof Strip and Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full mt-12">
        <ScrollReveal delay={0.6}>
          <div className="pt-8 border-t border-[#1e202a] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span className="tracking-wider">100% Authenticity Verified</span>
            </div>
            <div className="flex items-center gap-3">
              <Box className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span className="tracking-wider">Factory-Sealed Shrink Intact</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span className="tracking-wider">Museum-Grade PSA / BGS Slabs</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span className="tracking-wider">From Osaka · Insured Global Priority</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Scroll prompt */}
        <div className="flex items-center justify-center pt-8">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-gray-500 hover:text-[#d4af37] transition-colors"
          >
            <span>SCROLL</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#d4af37]" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};
