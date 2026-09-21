import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex items-end gap-3 group">
      {/* Tooltip prompt (dismissible or hoverable) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-stone-900 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-stone-200 animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Chat directly on WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-700 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Chat with Gold Mine Landscaping on WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
        
        {/* Active status pip */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};
