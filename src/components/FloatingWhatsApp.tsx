import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, MessageCircle, ExternalLink, Maximize2 } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  // Official WhatsApp QR code provided by user
  const qrImagePath = '/assets/aistudio/2858FEC6-2DB3-4175-B342-E3892EFF8D62_e1939966.jpg';

  return (
    <>
      {/* Floating Sticky Widget on the middle-right */}
      <aside
        aria-label="Contact WhatsApp Widget"
        className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 select-none print:hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-[190px] sm:w-[210px] rounded-2xl bg-[#0f111a]/95 backdrop-blur-xl border border-[#d4af37]/50 shadow-2xl shadow-black/80 p-3 sm:p-4 text-center group"
            >
              {/* Subtle gold glow behind card */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-[#d4af37]/30 to-emerald-500/20 rounded-2xl blur-sm -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Minimize button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full bg-[#181a26] border border-gray-600 hover:border-gray-400 text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-md z-10"
                title="Minimize widget"
                aria-label="Minimize widget"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {/* Header Title: "Contact WhatsApp" */}
              <div className="mb-2.5">
                <div className="flex items-center justify-center gap-1.5 text-[#25D366] text-[10px] font-mono font-semibold tracking-wider uppercase mb-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>ONLINE · INSTANT REPLIES</span>
                </div>

                <div className="text-xs sm:text-sm font-semibold tracking-wide text-white flex items-center justify-center gap-1.5">
                  <svg
                    className="w-4 h-4 fill-[#25D366] shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span className="font-bold tracking-normal">Contact WhatsApp</span>
                </div>
                <div className="text-[10px] text-gray-400 font-light mt-0.5">
                  Official Account · Instant Support
                </div>
              </div>

              {/* QR Code Frame */}
              <div
                onClick={() => setIsZoomed(true)}
                className="relative bg-white p-2 rounded-xl border border-gray-300 shadow-inner cursor-pointer hover:shadow-lg transition-all group/qr overflow-hidden"
                title="Click to expand QR code"
              >
                <img
                  src={qrImagePath}
                  alt="TCG CHIHIRO Official WhatsApp QR Code"
                  className="w-full aspect-square object-contain mx-auto"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/qr:opacity-100 transition-opacity flex items-center justify-center text-white gap-1 text-[11px] font-medium backdrop-blur-[2px]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand QR</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[10px] text-gray-300 font-light leading-snug mt-2 mb-2.5">
                Scan with your phone camera<br />
                for instant stock & pricing
              </p>

              {/* Direct Open WhatsApp Link / Action */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-1.5 px-2 bg-[#25D366] hover:bg-[#20bd5a] text-black text-[11px] font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-[#25D366]/20 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70 shrink-0" />
              </a>
            </motion.div>
          ) : (
            <motion.button
              key="collapsed"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 py-3 px-2 sm:px-2.5 rounded-l-2xl bg-[#0f111a]/95 border-y border-l border-[#d4af37]/60 shadow-2xl backdrop-blur-xl text-white hover:text-[#d4af37] transition-all group"
              title="Show WhatsApp QR"
              aria-label="Show WhatsApp QR"
            >
              <div className="relative">
                <svg
                  className="w-5 h-5 fill-[#25D366] group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
              <span className="[writing-mode:vertical-rl] text-[11px] font-mono tracking-wider text-gray-200 group-hover:text-[#d4af37] font-semibold">
                Contact WhatsApp
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </aside>

      {/* Enlarged Modal for scanning if clicked */}
      <AnimatePresence>
        {isZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#10121c] border border-[#d4af37]/60 rounded-2xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl"
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[#25D366] text-xs font-mono font-semibold tracking-wider uppercase mb-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Contact WhatsApp</span>
              </div>
              <h4 className="text-lg font-serif-jp text-white mb-4">
                TCG CHIHIRO Official Account
              </h4>

              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xl inline-block mb-4">
                <img
                  src={qrImagePath}
                  alt="TCG CHIHIRO WhatsApp QR Code"
                  className="w-56 h-auto mx-auto"
                />
              </div>

              <p className="text-xs text-gray-300 font-light mb-5">
                Scan this QR code with your phone camera or the WhatsApp application to chat directly with our specialist concierge.
              </p>

              <button
                onClick={() => setIsZoomed(false)}
                className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs rounded transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
