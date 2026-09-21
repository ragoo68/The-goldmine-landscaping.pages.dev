import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { ProjectShowcase } from './components/ProjectShowcase';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { QuoteBanner } from './components/QuoteBanner';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('form-fullName') as HTMLInputElement | null;
        if (input) input.focus();
      }, 500);
    }
  };

  const handleClearPreselected = () => {
    setPreselectedService('');
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FBFBFA] flex flex-col selection:bg-[#C59B27]/20 selection:text-[#171A19]">
      {/* 1. Sticky Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 3. Services Section */}
        <Services onEnquireService={(name) => handleOpenQuote(name)} />

        {/* 4. Why Choose Gold Mine Landscaping */}
        <WhyChoose />

        {/* 5. Project Showcase & Gallery */}
        <ProjectShowcase onEnquireProject={(name) => handleOpenQuote(name)} />

        {/* 6. About Section */}
        <About onDiscussProject={() => handleOpenQuote()} />

        {/* 7. Client Testimonials & Trust Metrics */}
        <Testimonials />

        {/* 8. Quote CTA Section */}
        <QuoteBanner onOpenQuote={() => handleOpenQuote()} />

        {/* 9. Contact Section with interactive quote form & direct phone/WhatsApp */}
        <ContactSection
          preselectedService={preselectedService}
          onClearPreselected={handleClearPreselected}
        />

        {/* 10. FAQ Section */}
        <FaqSection onAskQuestion={() => handleOpenQuote('General Inquiry')} />

        {/* 11. Final CTA */}
        <FinalCta onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Action Bar for quick phone/WhatsApp/quote on touch devices */}
      <MobileActionBar onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}
