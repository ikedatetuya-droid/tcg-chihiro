import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { MessageSquare, CheckCircle, CreditCard, Send } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Inquiry & Consultation',
      sub: 'INQUIRY',
      desc: 'Contact us via our inquiry form or official WhatsApp with your requested items (Sealed Boxes, PSA 10 slabs, singles). We will provide our private stock list upon request.',
      detail: 'Our bilingual concierge responds promptly within 24 hours.',
    },
    {
      num: '02',
      icon: CheckCircle,
      title: 'Inspection & Photo Verification',
      sub: 'VERIFICATION',
      desc: 'Our senior specialists examine the shrink wrap integrity, edges, and slab authenticity. We provide ultra-high-resolution macro photos and condition reports before you commit.',
      detail: 'Inspect every detail and angle with complete confidence.',
    },
    {
      num: '03',
      icon: CreditCard,
      title: 'Secure Settlement',
      sub: 'SETTLEMENT',
      desc: 'Fast, secure cross-border payments via Wise with real mid-market exchange rates. Wire transfer and commercial invoices available for high-value collector consignments.',
      detail: 'Transparent transactions with zero hidden exchange markups.',
    },
    {
      num: '04',
      icon: Send,
      title: 'Armored Packaging & Express Dispatch',
      sub: 'DISPATCH',
      desc: 'Impact-resistant and moisture-proof packaging dispatched via DHL Express, FedEx, or Japan Post EMS with full insurance and end-to-end tracking.',
      detail: 'Tracking information provided immediately upon handover.',
    },
  ];

  return (
    <section id="process" className="py-28 bg-[#0a0b0e] border-t border-[#1a1c26] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-4">
              <span>03</span>
              <span className="w-6 h-[1px] bg-[#d4af37]/40" />
              <span>TRANSACTION FLOW</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} yOffset={24}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-jp font-light text-white leading-tight mb-6">
              How It Works
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} yOffset={18}>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Designed for international collectors purchasing from Japan with complete transparency, verified authenticity, and seamless concierge guidance.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.num} delay={0.15 * (idx + 1)} yOffset={28}>
                <div className="bg-[#10121a] border border-[#202330] rounded-lg p-7 flex flex-col justify-between h-full relative group hover:border-[#d4af37]/50 transition-all duration-300">
                  {/* Top indicator */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-cinzel font-bold text-[#d4af37]">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#161822] border border-[#272a3b] flex items-center justify-center text-gray-300 group-hover:text-[#d4af37] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-[10px] font-mono tracking-widest text-[#d4af37] mb-1">
                      {step.sub}
                    </div>

                    <h3 className="text-lg font-serif-jp text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1d202d] text-[11px] text-gray-500 font-light">
                    {step.detail}
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
