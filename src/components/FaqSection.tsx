import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/content';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  // First item open by default for immediate preview
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#F5F5F2] border-t border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Common Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#171A19] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Answers to common questions regarding our landscaping, bricklaying, and quoting process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs transition-all duration-200"
                id={`faq-item-${index}`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-display font-bold text-base sm:text-lg text-[#171A19] hover:text-[#A87F1B] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#171A19] text-[#E3C66B] rotate-180' : 'bg-stone-100 text-stone-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-stone-900 text-base">
              Have a specific question about your site?
            </h4>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              We are happy to answer any questions about site preparation or materials.
            </p>
          </div>
          <button
            type="button"
            onClick={onAskQuestion}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs sm:text-sm font-semibold transition-colors shrink-0"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
          </button>
        </div>

      </div>
    </section>
  );
};
