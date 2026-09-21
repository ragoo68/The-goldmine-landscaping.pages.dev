import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageSquare, ArrowRight, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#projects' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Trade Credibility Banner */}
      <div className="bg-[#171A19] text-[#E0E2DE] text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#C59B27]/20 text-[#E3C66B] border border-[#C59B27]/30">
              <Shield className="w-3 h-3 text-[#E3C66B]" />
              Licensed &amp; Insured
            </span>
            <span className="hidden md:inline text-stone-300 font-medium">
              Serving Werribee, Point Cook, Tarneit &amp; Melbourne's Western Suburbs
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px]">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="hover:text-[#E3C66B] transition-colors flex items-center gap-1.5 font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Call: {BUSINESS_INFO.phoneLocal}</span>
            </a>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold hidden sm:inline-flex"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Available</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
            : 'bg-white border-b border-stone-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] rounded-lg"
            id="brand-logo-link"
          >
            {/* Architectural Trades Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#171A19] to-[#2B3430] border border-stone-700 flex items-center justify-center text-[#E3C66B] shadow-sm shadow-stone-900/10 group-hover:border-[#C59B27] transition-colors">
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#E3C66B]">GM</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black tracking-tight text-lg sm:text-xl text-[#171A19]">
                  GOLD MINE
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-stone-600">
                Landscaping &amp; Construction
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 text-[15px] font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-lg hover:text-[#171A19] hover:bg-stone-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-stone-200 text-stone-800 hover:border-stone-400 hover:bg-stone-50 text-sm font-semibold transition-colors"
              id="header-phone-btn"
            >
              <Phone className="w-4 h-4 text-[#C59B27]" />
              <span>{BUSINESS_INFO.phoneLocal}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171A19] text-[#F9F7F1] hover:bg-[#252C28] text-sm font-semibold transition-all shadow-sm active:scale-[0.98] border border-[#171A19]"
              id="header-quote-btn"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#E3C66B]" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="sm:hidden p-2.5 rounded-xl bg-stone-100 text-stone-800 active:bg-stone-200"
              aria-label="Call Gold Mine Landscaping"
              id="mobile-quick-call-btn"
            >
              <Phone className="w-5 h-5 text-[#C59B27]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-stone-200 text-stone-800 hover:bg-stone-100 active:bg-stone-200 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-stone-200 bg-white shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-3">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-stone-800 hover:bg-stone-100 active:bg-stone-100 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-stone-100 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#171A19] text-[#F9F7F1] text-center font-bold text-base flex items-center justify-center gap-2 shadow-sm"
                  id="mobile-menu-quote-btn"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#E3C66B]" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="py-3 px-3 rounded-xl border border-stone-200 text-stone-800 bg-stone-50 text-center font-semibold text-sm flex items-center justify-center gap-1.5"
                    id="mobile-menu-call-btn"
                  >
                    <Phone className="w-4 h-4 text-[#C59B27]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-xl border border-emerald-200 text-emerald-800 bg-emerald-50 text-center font-semibold text-sm flex items-center justify-center gap-1.5"
                    id="mobile-menu-whatsapp-btn"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-2 text-xs text-stone-500 font-medium">
                  Werribee &amp; Melbourne Western Suburbs
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
