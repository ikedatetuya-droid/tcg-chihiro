import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { ProductItem } from './Products';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquire: (subject: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#12141e] border border-[#252838] rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/90 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-square md:aspect-auto bg-[#0a0b0e] flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.japaneseTitle}
              referrerPolicy="no-referrer"
              className="max-h-[380px] w-auto object-contain rounded shadow-lg"
            />
            <div className="absolute bottom-4 left-4 text-[11px] font-mono tracking-wider text-[#d4af37] bg-black/80 px-2.5 py-1 rounded border border-[#d4af37]/30">
              {product.status}
            </div>
          </div>

          {/* Details side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Unboxed metadata */}
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <span>{product.categoryLabel}</span>
                <span>·</span>
                <span>{product.origin}</span>
              </div>

              <h3 className="text-xl font-serif-jp text-white mb-2 leading-snug">
                {product.japaneseTitle}
              </h3>

              <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-4">
                {product.specs}
              </div>

              <div className="p-3.5 rounded bg-[#181a26] border border-[#252838] text-xs text-gray-300 font-light leading-relaxed mb-6">
                {product.description}
              </div>

              {/* Quality Checklist */}
              <div className="space-y-2 mb-6 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>100% Authenticity & condition verified by senior specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Preserved 24/7 in a climate & humidity-controlled vault</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Shipped with multi-layer air cushioning & reinforced box</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#222536] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onInquire(`Inquiry for [${product.categoryLabel}] ${product.japaneseTitle}`);
                  onClose();
                }}
                className="w-full sm:flex-1 py-3 text-xs font-semibold tracking-wider text-black bg-[#d4af37] hover:bg-[#e6c352] rounded flex items-center justify-center gap-2 transition-colors"
              >
                <span>Inquire About This Item</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-gray-400 hover:text-white rounded border border-gray-700 hover:border-gray-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
