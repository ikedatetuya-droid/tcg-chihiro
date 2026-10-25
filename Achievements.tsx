import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Trophy, Users, Layers } from 'lucide-react';

export const Achievements: React.FC = () => {
  const stats = [
    {
      id: 'transactions',
      label: 'Verified Collector Transactions',
      value: '+11,476',
      unit: '',
      sub: '* Total cumulative transactions completed with collectors worldwide.',
      icon: Users,
      highlight: true,
    },
    {
      id: 'kansai-no1',
      label: 'Trading Volume in Kansai Region',
      value: 'No.1',
      unit: '',
      sub: '* In-house survey across the Kansai/Osaka region (FY2023 & FY2024).',
      icon: Trophy,
      highlight: true,
    },
    {
      id: 'inventory',
      label: 'Active Vault Inventory',
      value: '8,000',
      unit: '〜',
      sub: '* Total singles, PSA 10 slabs, and sealed booster boxes in vault as of July 2026.',
      icon: Layers,
      highlight: false,
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#0c0d12] border-t border-[#1a1c26] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d4af37]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-3">
              <span className="w-6 h-[1px] bg-[#d4af37]/40" />
              <span>TRACK RECORD & TRUST</span>
              <span className="w-6 h-[1px] bg-[#d4af37]/40" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} yOffset={20}>
            <h2 className="text-3xl sm:text-4xl font-serif-jp font-light text-white leading-tight mb-4">
              Proven Track Record & Global Trust
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} yOffset={16}>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Why discerning collectors worldwide partner with TCG CHIHIRO: uncompromising authenticity, complete transparency, and unrivaled inventory depth.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Large KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.id} delay={0.15 * (idx + 1)} yOffset={28}>
                <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#131520] to-[#0e1017] border border-[#222638] hover:border-[#d4af37]/60 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/5 flex flex-col justify-between h-full">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
                    <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-[#d4af37] to-transparent" />
                    <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-[#d4af37] to-transparent" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">
                        KPI 0{idx + 1}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#181a26] border border-[#262a3b] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-medium tracking-wider text-gray-300 mb-3 font-serif-jp">
                      {stat.label}
                    </div>

                    {/* Big Metric Display */}
                    <div className="my-4 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#d4af37] tracking-tight tabular-nums">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="text-xl sm:text-2xl font-cinzel font-semibold text-[#d4af37] ml-1">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footnote */}
                  <div className="pt-6 border-t border-[#1e2230] text-[11px] text-gray-400 font-light leading-relaxed">
                    {stat.sub}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
