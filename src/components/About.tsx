import React from 'react';
import { ArrowRight, MapPin, Check, Compass, Shovel, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface AboutProps {
  onDiscussProject: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscussProject }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1200&q=80"
                alt="Australian home outdoor landscaping and brick masonry by Gold Mine Landscaping"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#171A19]/85 backdrop-blur-sm text-[#E3C66B] text-[11px] font-bold px-3 py-1 rounded-full border border-[#C59B27]/40 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E3C66B]" />
                <span>Gold Mine Quality Standards</span>
              </div>

              {/* Service Suburbs Box */}
              <div className="p-5 bg-[#FAF9F7] border-t border-stone-200">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-stone-700">
                  <MapPin className="w-4 h-4 text-[#C59B27]" />
                  <span>Melbourne West Local Coverage</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-stone-600">
                  {BUSINESS_INFO.primarySuburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="bg-white px-2.5 py-1 rounded-md border border-stone-200 font-medium text-stone-700"
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span>About Gold Mine Landscaping</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#171A19] tracking-tight leading-tight mb-5">
              Creating Outdoor Spaces That Work for You
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-[17px] leading-relaxed mb-8">
              <p>
                An outdoor space should be both practical and enjoyable. Whether you are moving into a brand-new home that needs complete perimeter landscaping, or updating an established backyard in Melbourne's western suburbs, thoughtful landscaping and brickwork significantly improve how you live outdoors.
              </p>
              <p>
                From clean brick boundary fences that frame your frontage to level paved entertaining areas, retaining walls, and resilient turf, our focus is on building solid foundations that last through all Victorian seasons.
              </p>
            </div>

            {/* Core Values / Workmanship Standards (Non-invented, practical trade qualities) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="font-display font-bold text-stone-900 text-base mb-1">
                  Functional Outdoor Planning
                </div>
                <p className="text-xs sm:text-sm text-stone-600">
                  Designing layouts that handle rainwater runoff, site grades, foot traffic, and family lifestyle requirements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <div className="font-display font-bold text-stone-900 text-base mb-1">
                  Hard &amp; Soft Landscaping
                </div>
                <p className="text-xs sm:text-sm text-stone-600">
                  Combining durable brick masonry and stone paving with garden beds, turf, and outdoor drainage.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={onDiscussProject}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#171A19] text-[#FAF8F2] hover:bg-[#2A332E] font-bold text-base transition-all shadow-sm active:scale-98"
                id="about-discuss-btn"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#E3C66B]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
