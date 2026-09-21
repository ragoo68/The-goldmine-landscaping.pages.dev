import React from 'react';
import { Star, CheckCircle, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS, TRUST_METRICS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#171A19] text-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#E3C66B_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3C66B]/15 border border-[#E3C66B]/30 text-[#E3C66B] text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-[#E3C66B]" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Homeowners Across Melbourne's West
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Real feedback from property owners in Werribee, Point Cook, Tarneit, and Hoppers Crossing who trusted Gold Mine Landscaping with their outdoor construction.
          </p>
        </div>

        {/* Trust Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-xs"
            >
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#E3C66B] mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-stone-400 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-stone-700 transition-colors shadow-lg"
              id={`testimonial-card-${item.id}`}
            >
              <div>
                {/* Top Row: Stars + Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#E3C66B] fill-[#E3C66B]" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500 font-medium">{item.date}</span>
                </div>

                {/* Project Badge */}
                <div className="inline-block px-3 py-1 rounded-md bg-white/10 text-stone-300 text-xs font-semibold mb-4">
                  {item.projectType}
                </div>

                {/* Quote Text */}
                <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-white text-base">
                    {item.name}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{item.suburb}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
