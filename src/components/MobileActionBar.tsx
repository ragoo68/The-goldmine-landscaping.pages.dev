import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface MobileActionBarProps {
  onOpenQuote: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-stone-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-900 text-white active:bg-stone-800 transition-colors min-h-[46px]"
          id="mobile-bar-call"
        >
          <Phone className="w-4 h-4 text-[#E3C66B] mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 transition-colors min-h-[46px]"
          id="mobile-bar-whatsapp"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Quote button */}
        <button
          type="button"
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#C59B27] text-[#171A19] active:bg-[#B3861B] transition-colors min-h-[46px]"
          id="mobile-bar-quote"
        >
          <FileText className="w-4 h-4 text-[#171A19] mb-0.5" />
          <span className="text-[11px] font-bold">Get Quote</span>
        </button>

      </div>
    </div>
  );
};
