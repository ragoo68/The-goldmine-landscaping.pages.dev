import React from 'react';
import { Award, Eye, MessageSquare, Wrench } from 'lucide-react';
import { BENEFITS, BenefitItem } from '../data/content';

export const WhyChoose: React.FC = () => {
  const getIcon = (iconName: BenefitItem['iconName']) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#C59B27]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#171A19]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#2D5A3C]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#C59B27]" />;
      default:
        return <Award className="w-6 h-6 text-[#C59B27]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Why Gold Mine Landscaping</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#171A19] tracking-tight">
            Built Around Your Outdoor Vision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Every outdoor project begins with a practical plan, honest guidance, and reliable trades execution tailored to your property.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-[#FAF9F7] rounded-2xl p-6 sm:p-7 border border-stone-200/80 hover:border-[#C59B27]/40 hover:bg-[#FAF9F5] transition-all duration-200 shadow-sm flex flex-col justify-start relative group"
              id={`benefit-card-${benefit.id}`}
            >
              {/* Subtle top indicator accent */}
              <div className="w-10 h-1 bg-stone-200 group-hover:bg-[#C59B27] rounded-full mb-6 transition-colors"></div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-5 shadow-xs">
                {getIcon(benefit.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-[#171A19] mb-2.5">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
