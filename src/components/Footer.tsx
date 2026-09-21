import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp, Hammer, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Project Gallery', href: '#projects' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About Us', href: '#about' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141716] text-[#E0E2DF] pt-14 pb-24 sm:pb-14 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center text-[#E3C66B]">
                <span className="font-display font-black text-xl text-[#E3C66B]">GM</span>
              </div>
              <div>
                <div className="font-display font-black text-xl text-white tracking-tight">
                  GOLD MINE
                </div>
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-stone-400">
                  LANDSCAPING &amp; CONSTRUCTION
                </div>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Landscaping • Bricklaying • Paving • Retaining Walls • Outdoor Transformations
            </p>
            <p className="text-stone-500 text-xs leading-relaxed max-w-sm">
              Reliable outdoor trades solutions serving Werribee, Point Cook, Hoppers Crossing, Tarneit, Truganina, and Melbourne's western suburbs.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/90 text-stone-300 text-xs border border-stone-700">
              <Shield className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Licensed &amp; Insured Australian Trades</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-[#E3C66B] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Contact &amp; Coverage
            </h4>
            <div className="space-y-2.5 text-sm text-stone-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-white hover:text-[#E3C66B] font-semibold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +61 414 297 786
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>Werribee, Point Cook &amp; Melbourne Western Suburbs, VIC</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <span>&copy; {new Date().getFullYear()} Gold Mine Landscaping. All Rights Reserved. Licensed &amp; Insured Residential Trades.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-stone-300 transition-colors py-1 px-2 rounded-md hover:bg-stone-800/50"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
