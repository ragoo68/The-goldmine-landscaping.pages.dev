import React from 'react';
import { Phone, ArrowRight, MapPin, CheckCircle2, Shield, Hammer } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-6 pb-16 sm:pb-20 lg:pt-10 lg:pb-24">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#171A19_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Trust line */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 text-stone-700 text-xs sm:text-sm font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C59B27]"></span>
              <span>Premium Landscaping • Paving • Bricklaying • Melbourne's West</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171A19] tracking-tight leading-[1.08] mb-5">
              Transform Your <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-[#171A19]">Outdoor Living</span>
                <span className="absolute left-0 bottom-1.5 w-full h-3 bg-[#E3C66B]/35 -z-0 rounded-sm"></span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mb-8">
              Professional residential landscaping, structural bricklaying, precision paving, and retaining walls built to last across Werribee, Point Cook, and Melbourne's western corridor.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#171A19] text-[#FAF8F2] hover:bg-[#28302C] text-base font-bold transition-all shadow-md active:scale-[0.98] border border-[#171A19]"
                id="hero-quote-cta"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5 text-[#E3C66B]" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white text-stone-800 hover:bg-stone-50 border-2 border-stone-300 hover:border-stone-400 text-base font-bold transition-all shadow-sm active:scale-[0.98]"
                id="hero-call-cta"
              >
                <Phone className="w-5 h-5 text-[#C59B27]" />
                <span>Call {BUSINESS_INFO.phoneLocal}</span>
              </a>
            </div>

            {/* Local Trust & Service Coverage Badges */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-600">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span className="font-semibold text-stone-800">
                  Werribee &amp; Western Melbourne Suburbs
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold text-stone-800">
                  100% Free On-Site Assessments
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-stone-900/10 border border-stone-200/90 bg-stone-100 group">
              {/* High-res outdoor landscaping & stone/brick imagery */}
              <img
                src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1400&q=85"
                alt="Contemporary Australian landscaped garden with paving and lawn in Melbourne"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

              {/* Verified Trade Badge */}
              <div className="absolute top-4 left-4 bg-[#171A19]/85 backdrop-blur-md text-[#E3C66B] text-xs font-bold px-3 py-1.5 rounded-full border border-[#C59B27]/40 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#E3C66B]" />
                <span>Australian Standards Masonry &amp; Turf</span>
              </div>

              {/* Bottom Card Overlay Details */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
                <div className="flex items-center gap-2 text-[#E3C66B] text-xs font-bold uppercase tracking-wider mb-1">
                  <Hammer className="w-3.5 h-3.5" />
                  <span>Gold Mine Landscaping</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold leading-snug text-white">
                  Built to endure Melbourne conditions
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm mt-1">
                  Precision paving, retaining walls, brick boundary fences &amp; turf.
                </p>

                {/* Suburbs pill bar */}
                <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-white/15 text-[11px] text-stone-200">
                  <span className="bg-white/15 px-2.5 py-0.5 rounded-md font-medium">Werribee</span>
                  <span className="bg-white/15 px-2.5 py-0.5 rounded-md font-medium">Point Cook</span>
                  <span className="bg-white/15 px-2.5 py-0.5 rounded-md font-medium">Tarneit</span>
                  <span className="bg-white/15 px-2.5 py-0.5 rounded-md font-medium">Hoppers Crossing</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
