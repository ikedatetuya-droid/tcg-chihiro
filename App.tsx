/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products, ProductItem } from './components/Products';
import { Process } from './components/Process';
import { Achievements } from './components/Achievements';
import { Packaging } from './components/Packaging';
import { NewsSection } from './components/NewsSection';
import { CompanyInfo } from './components/CompanyInfo';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { X, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [showGuide, setShowGuide] = useState(false);

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenContact = (subject?: string) => {
    if (subject) {
      setContactSubject(subject);
    } else {
      setContactSubject('');
    }
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-[#e2e4e9] relative selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#d4af37] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Hero Section */}
      <main>
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 01. About & Philosophy */}
        <About />

        {/* 02. Curated Collection */}
        <Products
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenContact={(subject) => handleOpenContact(subject)}
        />

        {/* 03. Transaction Flow */}
        <Process />

        {/* 04. Track Record & Achievements */}
        <Achievements />

        {/* 05. Packaging Standards */}
        <Packaging />

        {/* 05. Topics & News */}
        <NewsSection />

        {/* 06. Company Info & FAQ */}
        <CompanyInfo />

        {/* 07. Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={(subject) => handleOpenContact(subject)}
      />

      {/* Quick Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#12141e] border border-[#26293a] rounded-xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="text-[11px] font-mono tracking-widest text-[#d4af37] mb-1">
                CONTACT TCG CHIHIRO
              </div>
              <h3 className="text-xl font-serif-jp text-white">
                Collector Inquiry & Consultation
              </h3>
            </div>

            <ContactSection
              isModal={true}
              initialSubject={contactSubject}
              onClose={() => setIsContactModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Floating Sticky WhatsApp QR Widget (middle-right, follows scroll) */}
      <FloatingWhatsApp />

      {/* Scaffold & Customization Helper Pill in bottom-left for user */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-gray-300 bg-[#161824]/90 hover:bg-[#1f2233] border border-[#2a2d40] rounded-full shadow-lg backdrop-blur-md hover:text-[#d4af37] transition-all"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Website Guide</span>
        </button>

        {showGuide && (
          <div className="absolute bottom-12 left-0 w-80 p-5 rounded-xl bg-[#131520] border border-[#2b2f44] shadow-2xl text-xs text-gray-300 space-y-3 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-2 border-b border-gray-700">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                TCG CHIHIRO Structure
              </span>
              <button
                onClick={() => setShowGuide(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              English-first international portal inspired by hokusaitcg.jp with scroll-triggered fade/rise reveals across all vault sections (Hero, Philosophy, Collection, Process, Track Record, Packaging, News, Company & FAQ, Inquiries).
            </p>
            <div className="space-y-1 text-[11px] text-gray-400 font-mono">
              <div>· Brand: TCG CHIHIRO (Osaka, Japan)</div>
              <div>· Language: English (Global Collectors)</div>
              <div>· WhatsApp QR: Sticky Right-Center Follow</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
