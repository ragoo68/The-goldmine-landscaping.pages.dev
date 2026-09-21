import React from 'react';
import { 
  Trees, 
  Layers, 
  Grid, 
  Shield, 
  Sparkles, 
  Home, 
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesProps {
  onEnquireService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onEnquireService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#2D5A3C]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#C59B27]" />;
      case 'Grid':
        return <Grid className="w-6 h-6 text-[#171A19]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#C59B27]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#2D5A3C]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#171A19]" />;
      default:
        return <Trees className="w-6 h-6 text-[#C59B27]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F5F5F2] border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialist Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#171A19] tracking-tight">
            Landscaping &amp; Bricklaying Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Reliable trades solutions for residential properties, new home landscaping, and outdoor renovations across Melbourne's west.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200 flex flex-col justify-between group"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Top icon and category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200/80 flex items-center justify-center group-hover:bg-[#FCF9EE] group-hover:border-[#EEDD9E] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl font-bold text-[#171A19] mb-2.5 group-hover:text-[#A87F1B] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-700">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onEnquireService(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-stone-200 text-stone-800 bg-stone-50 hover:bg-[#171A19] hover:text-white hover:border-[#171A19] text-sm font-semibold transition-all group/btn"
                id={`enquire-btn-${service.id}`}
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom helper reassurance */}
        <div className="mt-12 text-center text-xs sm:text-sm text-stone-600">
          Need a combination of brickwork and landscaping for your property?{' '}
          <button
            type="button"
            onClick={() => onEnquireService('Landscaping & Bricklaying Combined')}
            className="text-[#171A19] font-bold underline underline-offset-4 decoration-[#C59B27] hover:text-[#A87F1B]"
          >
            Request a comprehensive package quote
          </button>
        </div>

      </div>
    </section>
  );
};
