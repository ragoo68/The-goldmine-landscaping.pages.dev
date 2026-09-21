import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Hammer } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FinalCtaProps {
  onOpenQuote: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="w-12 h-12 rounded-2xl bg-[#FCF9EE] border border-[#EEDD9E] flex items-center justify-center mx-auto mb-5 text-[#C59B27]">
          <Hammer className="w-6 h-6" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171A19] tracking-tight mb-4">
          Ready to Improve Your Outdoor Space?
        </h2>

        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Contact Gold Mine Landscaping for reliable trade craftsmanship, paving, bricklaying, and garden makeovers across Werribee and Melbourne's western suburbs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            type="button"
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#171A19] hover:bg-[#28302C] text-[#FAF8F2] font-bold text-base transition-all shadow-md active:scale-98"
            id="final-quote-cta-btn"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-[#E3C66B]" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-300 font-bold text-base transition-all shadow-xs active:scale-98"
            id="final-call-cta-btn"
          >
            <Phone className="w-4 h-4 text-[#C59B27]" />
            <span>Call {BUSINESS_INFO.phoneLocal}</span>
          </a>
        </div>

        <p className="text-xs text-stone-500 mt-6">
          Direct phone: {BUSINESS_INFO.phone} • Serving Melbourne's West
        </p>

      </div>
    </section>
  );
};
