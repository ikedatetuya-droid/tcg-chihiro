import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export interface ProductItem {
  id: string;
  category: 'sealed' | 'psa' | 'singles' | 'sourcing';
  categoryLabel: string;
  title: string;
  japaneseTitle: string;
  specs: string;
  origin: string;
  description: string;
  image: string;
  status: string;
  tagline: string;
}

export const sampleProducts: ProductItem[] = [
  {
    id: 'sealed-01',
    category: 'sealed',
    categoryLabel: 'Sealed Booster Box',
    title: 'Japanese Pokémon Booster Box Collection',
    japaneseTitle: 'Factory-Sealed Japanese Pokémon Booster Box',
    specs: 'Factory Sealed with Official Shrink Wrap · Mint Condition',
    origin: 'Directly sourced in Osaka, Japan',
    description: 'Pristine factory-sealed Japanese booster boxes with zero evidence of resealing, tampering, or seam compression. Sourced directly through verified distributor and primary collector channels in Japan.',
    image: '/images/showcase_sealed_box_30th.jpg',
    status: 'In Stock / Sourcing Available',
    tagline: '100% Factory Sealed · Original Shrink',
  },
  {
    id: 'psa-01',
    category: 'psa',
    categoryLabel: 'PSA Graded Slab',
    title: 'Museum-Grade PSA 10 Gem Mint Cards',
    japaneseTitle: 'PSA 10 / BGS Graded High-End Collector Singles',
    specs: 'PSA 10 Gem Mint · Holographic Foil · UV-Protected Case',
    origin: 'PSA Certified / Authenticated',
    description: 'Top-tier collector singles awarded the prestigious PSA 10 Gem Mint grade. Flawless centering, razor-sharp edges, pristine corners, and immaculate holographic surface finish.',
    image: '/images/showcase_psa_lillie.jpg',
    status: 'PSA 10 Gem Mint Certified',
    tagline: 'Gem Mint 10 · Museum Quality',
  },
  {
    id: 'pack-01',
    category: 'singles',
    categoryLabel: 'Packs & Singles',
    title: 'Vintage & Modern Booster Packs',
    japaneseTitle: 'Curated Booster Packs & Collector Singles',
    specs: 'Unweighted · Tamper-evident Storage · Near Mint+',
    origin: 'Osaka Vault Inspection',
    description: 'Guaranteed unweighted, tamper-free booster packs and Near Mint+ condition singles inspected under high magnification for micro-scratching, whitening, and edge wear.',
    image: '/images/showcase_pack_and_card_clean.jpg',
    status: 'Condition Report Disclosed',
    tagline: 'Unweighted Guarantee · Pristine Quality',
  },
  {
    id: 'sourcing-01',
    category: 'sourcing',
    categoryLabel: 'Bespoke Sourcing',
    title: 'Bespoke TCG Sourcing & Consignment',
    japaneseTitle: 'Bespoke Sourcing & Vault Consignment Service',
    specs: 'Collector Concierge · Direct Auction & Dealer Network',
    origin: 'Exclusive Japanese Collector Channels (Osaka)',
    description: 'Private concierge sourcing for rare out-of-print booster boxes, tournament promos, and elusive grails via our exclusive network of dealers and private vaults across Japan.',
    image: '/images/hero_tcg_vault_1792909285269.jpg',
    status: 'Private Requests Welcome',
    tagline: 'Hunting the World\'s Rarest Grails',
  },
];

interface ProductsProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenContact: (prefillTitle?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProducts =
    activeTab === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === activeTab);

  return (
    <section id="collection" className="py-28 bg-[#0c0d12] border-t border-[#1a1c26] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-4">
                <span>02</span>
                <span className="w-6 h-[1px] bg-[#d4af37]/40" />
                <span>CURATED COLLECTION</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} yOffset={24}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-jp font-light text-white leading-tight">
                Featured Collection
              </h2>
            </ScrollReveal>
          </div>

          {/* Interactive filter tabs */}
          <ScrollReveal delay={0.25}>
            <div className="flex items-center gap-2 p-1.5 bg-[#141620] border border-[#222533] rounded-lg overflow-x-auto max-w-full">
              {[
                { id: 'all', label: 'All Items' },
                { id: 'sealed', label: 'Sealed Boxes' },
                { id: 'psa', label: 'PSA Graded' },
                { id: 'singles', label: 'Packs & Singles' },
                { id: 'sourcing', label: 'Bespoke Sourcing' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-medium tracking-wider rounded transition-all whitespace-nowrap shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((item, idx) => (
            <ScrollReveal key={item.id} delay={0.15 * (idx + 1)} yOffset={32}>
              <div
                onClick={() => onSelectProduct(item)}
                className="group cursor-pointer bg-[#10121a] border border-[#222533] hover:border-[#d4af37]/70 rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/5"
              >
                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#171924]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10121a] via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed tag in top corner */}
                  <div className="absolute top-4 left-4 text-[11px] font-medium tracking-widest text-[#d4af37] bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-[#d4af37]/30">
                    {item.tagline}
                  </div>

                  <div className="absolute top-4 right-4 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-2 rounded-full border border-gray-700">
                    <ArrowUpRight className="w-4 h-4 text-[#d4af37]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Unboxed metadata row with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 tracking-wider">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.origin}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#d4af37]">{item.status}</span>
                    </div>

                    <h3 className="text-xl font-serif-jp text-white group-hover:text-[#d4af37] transition-colors mb-2 leading-snug">
                      {item.japaneseTitle}
                    </h3>

                    <p className="text-xs font-mono tracking-wider text-gray-400 mb-4 uppercase">
                      {item.specs}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Action link */}
                  <div className="pt-4 border-t border-[#1e212e] flex items-center justify-between">
                    <span className="text-xs tracking-wider text-gray-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                      Authenticated
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenContact(`Inquiry for [${item.categoryLabel}] ${item.japaneseTitle}`);
                      }}
                      className="text-xs font-medium tracking-wider text-[#d4af37] group-hover:text-white flex items-center gap-1 hover:underline"
                    >
                      Inquire on Item
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note about sourcing bespoke cards */}
        <ScrollReveal delay={0.4} yOffset={20}>
          <div className="mt-12 p-6 rounded-lg bg-[#12141e] border border-[#232736] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-semibold text-white tracking-wider mb-1">
                Looking for Specific Cards or Out-of-Print Japanese Booster Boxes?
              </h4>
              <p className="text-xs text-gray-400 font-light">
                Our specialist buyers will locate your desired item according to your target budget, condition, and grading criteria.
              </p>
            </div>
            <button
              onClick={() => onOpenContact('Bespoke Card & Box Sourcing Request')}
              className="px-6 py-2.5 text-xs font-semibold tracking-wider text-black bg-[#d4af37] hover:bg-[#e6c352] rounded whitespace-nowrap shrink-0 transition-colors"
            >
              Request Bespoke Sourcing
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
