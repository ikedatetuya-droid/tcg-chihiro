import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Box, PackageCheck } from 'lucide-react';

export const Packaging: React.FC = () => {
  const packagingFeatures = [
    {
      icon: Box,
      title: 'Penny Sleeve & Rigid Toploader',
      desc: 'Each card is sealed in an archival soft sleeve and secured inside a heavy-gauge rigid toploader to prevent bending, scratching, or edge pressure.',
    },
    {
      icon: ShieldCheck,
      title: 'Double-Layered Air Cushioning',
      desc: 'Wrapped in multi-layered, shock-absorbing high-density bubble cushioning on all sides, completely insulating contents from drops and transit turbulence.',
    },
    {
      icon: PackageCheck,
      title: 'Reinforced Corrugated Outer Box',
      desc: 'Dispatched inside heavy-duty, double-walled corrugated cartons with all seams moisture-sealed to withstand long-haul international flights.',
    },
  ];

  return (
    <section id="packaging" className="py-28 bg-[#0c0d12] border-t border-[#1a1c26] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-[#222533] shadow-2xl bg-[#141622] group">
                <img
                  src="/images/packaging_rayquaza_208.jpg"
                  alt="TCG CHIHIRO Packaging Standards - Mega Rayquaza ex SAR & 208 Pack"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-mono tracking-widest text-[#d4af37] mb-1">
                    MUSEUM SPECIFICATION
                  </div>
                  <h4 className="text-lg font-serif-jp text-white font-medium">
                    Zero-Damage Tolerance · Armored Packaging
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial & Standards */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-4">
                <span>04</span>
                <span className="w-6 h-[1px] bg-[#d4af37]/40" />
                <span>PACKAGING STANDARDS</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} yOffset={24}>
              <h2 className="text-3xl sm:text-4xl font-serif-jp font-light text-white leading-tight mb-6">
                Museum-Grade Packaging Standards
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3} yOffset={18}>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                For collectors, the moment an order arrives in pristine condition is paramount. TCG CHIHIRO implements a multi-tier protective packaging system engineered to withstand long-haul international transit and adverse weather.
              </p>
            </ScrollReveal>

            {/* Feature List */}
            <div className="space-y-6">
              {packagingFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <ScrollReveal key={feat.title} delay={0.15 * (idx + 1)} yOffset={20}>
                    <div className="flex gap-4 p-4 rounded-lg bg-[#10121a] border border-[#1e212e] hover:border-[#d4af37]/40 transition-colors">
                      <div className="w-10 h-10 rounded bg-[#161824] border border-[#26293a] flex items-center justify-center text-[#d4af37] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-white">
                            {feat.title}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
