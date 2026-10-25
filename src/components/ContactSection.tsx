import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSubject = '',
  isModal = false,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'stock',
    subject: initialSubject,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    // Generate inquiry reference number
    const code = `CHIHIRO-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      inquiryType: 'stock',
      subject: '',
      message: '',
    });
    setSubmitted(false);
    setReferenceCode('');
    setErrorMsg('');
  };

  const content = (
    <div className="w-full">
      {!isModal && (
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.1}>
                <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-[#d4af37] mb-4">
                  <span>CONTACT & CONSULTATION</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} yOffset={24}>
                <h2 className="text-3xl sm:text-4xl font-serif-jp font-light text-white leading-tight mb-4">
                  Collector Inquiries & Order Requests
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.3} yOffset={18}>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Request our active private inventory catalog, ask for specific card or booster box sourcing, or receive high-resolution scans. Contact us via the form below or our official WhatsApp.
                </p>
              </ScrollReveal>
            </div>

            {/* Mascot Concierge Card */}
            <div className="lg:col-span-4">
              <ScrollReveal delay={0.3} direction="right">
                <div className="p-4 sm:p-5 rounded-xl bg-[#12141e] border border-[#262a3c] flex items-center gap-4 shadow-lg">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#d4af37] shrink-0 bg-white shadow-md">
                    <img
                      src="/assets/aistudio/from-PixAI-2071012030351025107-2_34e6189c.png"
                      alt="Dedicated Concierge"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-[#d4af37] mb-1">
                      ONLINE CONCIERGE
                    </div>
                    <h4 className="text-sm font-serif-jp text-white font-medium mb-1">
                      Dedicated Concierge
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-tight">
                      Instant stock verification & worldwide sourcing quotes
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      )}

      {submitted ? (
        <div className="p-8 sm:p-12 rounded-xl bg-[#12141e] border border-[#26293a] text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mx-auto mb-6">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <div className="text-xs font-mono text-[#d4af37] tracking-widest mb-2">
            INQUIRY RECEIVED · {referenceCode}
          </div>

          <h3 className="text-xl sm:text-2xl font-serif-jp text-white mb-4">
            Thank You for Contacting Us
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-lg mx-auto mb-8 font-light">
            Our specialist concierge has received your request. We will review our inventory and reply to your email (<span className="text-white">{formData.email}</span>) or WhatsApp within 24 hours with high-resolution photos and pricing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold tracking-wider text-black bg-[#d4af37] hover:bg-[#e6c352] rounded transition-colors"
            >
              Send Another Inquiry
            </button>
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-semibold tracking-wider text-white border border-gray-700 hover:border-gray-500 rounded transition-colors"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 sm:p-10 rounded-xl bg-[#10121a] border border-[#202330] shadow-2xl space-y-6"
        >
          {errorMsg && (
            <div className="p-4 rounded bg-red-900/30 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Inquiry Type Radio selection */}
          <div>
            <label className="block text-xs font-medium tracking-wider text-gray-300 mb-2">
              Inquiry Type <span className="text-[#d4af37]">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'stock', label: 'Inventory Catalog' },
                { id: 'request', label: 'Bespoke Sourcing' },
                { id: 'other', label: 'General Inquiries' },
              ].map((type) => (
                <button
                  type="button"
                  key={type.id}
                  onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                  className={`py-2.5 px-3 text-xs tracking-wider rounded border text-center transition-all ${
                    formData.inquiryType === type.id
                      ? 'border-[#d4af37] bg-[#d4af37]/15 text-white font-semibold'
                      : 'border-[#222533] text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium tracking-wider text-gray-300 mb-1.5">
                Full Name / Company <span className="text-[#d4af37]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 text-xs bg-[#161824] border border-[#282b3d] rounded text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wider text-gray-300 mb-1.5">
                Email Address <span className="text-[#d4af37]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="collector@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 text-xs bg-[#161824] border border-[#282b3d] rounded text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-medium tracking-wider text-gray-300 mb-1.5">
              Subject / Requested Items
            </label>
            <input
              type="text"
              placeholder="e.g., Factory-Sealed Japanese Booster Box or PSA 10 Mewtwo"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 text-xs bg-[#161824] border border-[#282b3d] rounded text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium tracking-wider text-gray-300 mb-1.5">
              Message & Details <span className="text-[#d4af37]">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Please provide details such as destination country, desired quantities, target budget, condition preferences, or WhatsApp contact number."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 text-xs bg-[#161824] border border-[#282b3d] rounded text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* Submit button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-gray-500 font-light">
              * Customer data is securely encrypted and used strictly for transaction communication.
            </p>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-xs font-semibold tracking-wider text-black bg-[#d4af37] hover:bg-[#e6c352] active:scale-[0.98] rounded flex items-center justify-center gap-2 transition-all shadow-md shadow-[#d4af37]/20 whitespace-nowrap"
            >
              <span>SEND INQUIRY</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return content;
  }

  return (
    <section id="contact" className="py-28 bg-[#0a0b0e] border-t border-[#1a1c26] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal delay={0.2} yOffset={20}>
          {content}
        </ScrollReveal>
      </div>
    </section>
  );
};
