import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown } from 'lucide-react';

export const CompanyInfo: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do you protect against resealed booster boxes and counterfeit cards?',
      a: 'TCG CHIHIRO sources inventory strictly through authorized channels and reputable primary collectors in Japan. Every secondary-market acquisition undergoes comprehensive authentication by multiple senior specialists—including shrink-wrap seam analysis, seal verification, and microscopic surface review. We enforce a zero-tolerance policy against dubious items.',
    },
    {
      q: 'Do you ship internationally outside of Japan?',
      a: 'Yes. Our operations are fully optimized for international collectors. We ship to North America, Europe, Asia, Oceania, and over 100 countries worldwide via fully insured priority couriers (DHL Express, FedEx, and Japan Post EMS) with end-to-end tracking.',
    },
    {
      q: 'What international payment methods are accepted?',
      a: 'We accept payments via Wise (formerly TransferWise), providing bank-grade security, real mid-market exchange rates, and minimal transfer fees for global clients. For high-value collector acquisitions and institutional orders, international bank wire transfers and commercial invoices are readily provided.',
    },
    {
      q: 'Can I inspect high-resolution photographs and PSA certificate numbers before purchasing?',
      a: 'Absolutely. Prior to confirming your order, our concierge provides high-resolution front/back photos, certification numbers, corner close-ups, and hologram scans. You only purchase once you are completely satisfied with the item\'s condition.',
    },
  ];

  return (
    <section id="company" className="py-28 bg-[#0c0d12] border-t border-[#1a1c26] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Company & Business Details */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-4">
                <span>06</span>
                <span className="w-6 h-[1px] bg-[#d4af37]/40" />
                <span>BOUTIQUE & VAULT</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} yOffset={24}>
              <h2 className="text-3xl sm:text-4xl font-serif-jp font-light text-white leading-tight mb-8">
                Store & Operation Overview
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3} yOffset={20}>
              <div className="p-7 rounded-xl bg-[#10121a] border border-[#202330] space-y-5 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-4 pb-4 border-b border-[#1c1f2b]">
                  <div className="text-gray-500 font-mono tracking-wider w-28 shrink-0">Trade Name</div>
                  <div className="font-serif-jp text-white font-medium">TCG CHIHIRO</div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-[#1c1f2b]">
                  <div className="text-gray-500 font-mono tracking-wider w-28 shrink-0">Location</div>
                  <div className="leading-relaxed">
                    Osaka, Japan (High-Security Vault & Fulfillment Center)<br />
                    <span className="text-gray-500 text-xs">* In-person visits to the vault are strictly by advance appointment.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-[#1c1f2b]">
                  <div className="text-gray-500 font-mono tracking-wider w-28 shrink-0">Business</div>
                  <div className="leading-relaxed">
                    Authentication, Sourcing, Consignment, and Distribution of Japanese Trading Cards, Sealed Booster Boxes, and PSA/BGS Graded Slabs.
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-[#1c1f2b]">
                  <div className="text-gray-500 font-mono tracking-wider w-28 shrink-0">Permit</div>
                  <div className="leading-relaxed">
                    Authorized Antique Dealer License by Osaka Prefectural Public Safety Commission
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-gray-500 font-mono tracking-wider w-28 shrink-0">Hours</div>
                  <div className="leading-relaxed">
                    11:00 – 19:00 JST / Daily (Online inquiries accepted 24/7)
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-4">
                <span>FAQ</span>
                <span className="w-6 h-[1px] bg-[#d4af37]/40" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25} yOffset={24}>
              <h2 className="text-3xl sm:text-4xl font-serif-jp font-light text-white leading-tight mb-8">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <ScrollReveal key={index} delay={0.1 * (index + 1)} yOffset={16}>
                    <div className="border border-[#202330] rounded-lg overflow-hidden bg-[#10121a] transition-colors">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                      >
                        <span className="text-sm font-serif-jp text-white leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 font-light leading-relaxed border-t border-[#1a1d29] bg-[#0c0d12]/50">
                          {faq.a}
                        </div>
                      )}
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
