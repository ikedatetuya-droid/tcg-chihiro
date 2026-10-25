import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronRight, X } from 'lucide-react';

interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
}

export const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const newsList: NewsItem[] = [
    {
      id: 'news-1',
      date: '2026.10.20',
      category: 'Announcement',
      title: 'TCG CHIHIRO Official International Portal Launch',
      content:
        'We are thrilled to officially launch the TCG CHIHIRO international portal. Our mission is to connect global collectors with 100% authentic, curated Japanese trading cards directly from Osaka. Browse our verified inventory of factory-sealed booster boxes and PSA 10 slabs, or request private concierge sourcing.',
    },
    {
      id: 'news-2',
      date: '2026.10.12',
      category: 'Restock',
      title: 'Exclusive Shipment of Sealed Japanese Booster Boxes Acquired',
      content:
        'We have recently secured multiple cases of factory-sealed Japanese Pokémon booster boxes directly from authorized distributors and trusted private collectors, featuring pristine original shrink wraps. High-resolution photographs and private allocation details are now available on request.',
    },
    {
      id: 'news-3',
      date: '2026.09.28',
      category: 'Service',
      title: 'Private PSA 10 Sourcing & Concierge Service Open',
      content:
        'Seeking a specific grail card, out-of-print vintage booster box, or Japanese tournament promo in PSA 10 Gem Mint condition? Our dedicated Osaka-based procurement team handles searching, microscopic inspection, and international delivery on your behalf.',
    },
  ];

  return (
    <section id="news" className="py-24 bg-[#0a0b0e] border-t border-[#1a1c26] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-4">
                <span>05</span>
                <span className="w-6 h-[1px] bg-[#d4af37]/40" />
                <span>TOPICS & UPDATES</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} yOffset={24}>
              <h2 className="text-3xl sm:text-4xl font-serif-jp font-light text-white leading-tight">
                Latest News & Releases
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* News List */}
        <div className="divide-y divide-[#1e202d] border-y border-[#1e202d]">
          {newsList.map((item, idx) => (
            <ScrollReveal key={item.id} delay={0.1 * (idx + 1)} yOffset={16}>
              <div
                onClick={() => setSelectedNews(item)}
                className="group py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] px-2 sm:px-4 rounded transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  {/* Clean unboxed metadata with dot separator */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-mono shrink-0">
                    <span>{item.date}</span>
                    <span aria-hidden="true" className="text-gray-700">·</span>
                    <span className="text-gray-300 font-sans">{item.category}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-serif-jp text-gray-200 group-hover:text-[#d4af37] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-[#d4af37] transition-colors self-end sm:self-auto shrink-0">
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#12141e] border border-[#262a3a] rounded-xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mb-3">
              <span>{selectedNews.date}</span>
              <span>·</span>
              <span className="text-[#d4af37]">{selectedNews.category}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif-jp text-white mb-4 leading-snug">
              {selectedNews.title}
            </h3>

            <div className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed whitespace-pre-line border-t border-[#222533] pt-4">
              {selectedNews.content}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 text-xs font-medium text-black bg-[#d4af37] hover:bg-[#e6c352] rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
