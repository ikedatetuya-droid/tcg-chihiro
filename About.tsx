import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Shield, Eye, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#0a0b0e] border-t border-[#1a1c26] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-900/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-4">
              <span>01</span>
              <span className="w-6 h-[1px] bg-[#d4af37]/40" />
              <span>PHILOSOPHY & CONCEPT</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} yOffset={24}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-jp font-light text-white leading-tight mb-6">
              Uncompromising Authenticity & Curatorial Vision.<br />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#d4af37]">
                The TCG CHIHIRO Commitment.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} yOffset={18}>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Trading cards are far more than printed paper—they represent living culture, generational passion, and museum-caliber alternative assets. TCG CHIHIRO eliminates the anxiety of counterfeit cards and resealed boxes, providing discerning collectors worldwide with absolute peace of mind and pristine Japanese rarities.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1 */}
          <ScrollReveal delay={0.2} yOffset={30}>
            <div className="p-8 bg-[#10121a] border border-[#202330] rounded-lg hover:border-[#d4af37]/50 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-[#171924] border border-[#282b3d] flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-105 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-[#d4af37] mb-2">01 / AUTHENTICITY</div>
                <h3 className="text-xl font-serif-jp text-white mb-4">Multi-Tier Authentication</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  To eliminate counterfeits and tampered items, every secondary-market piece undergoes rigorous verification by multiple dedicated senior specialists.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1e212e] text-[11px] text-gray-500 flex items-center justify-between">
                <span>Verification Standard</span>
                <span className="text-[#d4af37]">100% Genuine Guaranteed</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2 */}
          <ScrollReveal delay={0.35} yOffset={30}>
            <div className="p-8 bg-[#10121a] border border-[#202330] rounded-lg hover:border-[#d4af37]/50 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-[#171924] border border-[#282b3d] flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-105 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-[#d4af37] mb-2">02 / PRESERVATION</div>
                <h3 className="text-xl font-serif-jp text-white mb-4">Vault Climate Control</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  All inventory is preserved in darkroom vaults with 24/7 temperature control (~20°C) and regulated humidity (&lt;50% RH) to completely prevent warping and UV degradation.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1e212e] text-[11px] text-gray-500 flex items-center justify-between">
                <span>Storage Standard</span>
                <span className="text-[#d4af37]">Vault Controlled</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 3 */}
          <ScrollReveal delay={0.5} yOffset={30}>
            <div className="p-8 bg-[#10121a] border border-[#202330] rounded-lg hover:border-[#d4af37]/50 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-[#171924] border border-[#282b3d] flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-[#d4af37] mb-2">03 / GLOBAL TRUST</div>
                <h3 className="text-xl font-serif-jp text-white mb-4">Direct Bridge from Osaka</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Bridging Japanese rarities directly to collectors across North America, Europe, and Asia. Full English support, heavy-duty armored packaging, and insured priority couriers.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1e212e] text-[11px] text-gray-500 flex items-center justify-between">
                <span>Track Record</span>
                <span className="text-[#d4af37]">Worldwide Delivery</span>
              </div>
            </div>
          </ScrollReveal>
        </div>


      </div>
    </section>
  );
};
