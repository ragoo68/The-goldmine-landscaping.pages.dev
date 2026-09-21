import React from 'react';
import { Phone, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface QuoteBannerProps {
  onOpenQuote: () => void;
}

export const QuoteBanner: React.FC<QuoteBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-14 sm:py-18 bg-[#171A19] text-white relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#E3C66B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Accent Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#E3C66B] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
          <span>Melbourne Western Suburbs</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Planning Your Next Outdoor Project?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Tell us what you're planning and get in touch to discuss your project.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            type="button"
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C59B27] hover:bg-[#B3861B] text-[#171A19] font-bold text-base transition-all shadow-md active:scale-98"
            id="banner-quote-btn"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 text-[#171A19]" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base transition-all active:scale-98"
            id="banner-call-btn"
          >
            <Phone className="w-4 h-4 text-[#E3C66B]" />
            <span>Call +61 414 297 786</span>
          </a>
        </div>

        {/* Quick assurance info */}
        <div className="mt-8 text-xs text-stone-400">
          Free upfront project consultations • Prompt replies across Werribee, Point Cook &amp; surrounding areas
        </div>

      </div>
    </section>
  );
};
