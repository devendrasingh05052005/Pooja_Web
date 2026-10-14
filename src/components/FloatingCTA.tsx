"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200 px-3 py-2 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${siteConfig.contact.callNumber}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-vedic-maroon to-vedic-saffron text-white py-2.5 px-3 rounded-lg font-bold text-xs shadow hover:brightness-110 active:scale-95 transition"
        >
          <Phone className="w-4 h-4" />
          <span>पंडित जी को कॉल करें</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
            siteConfig.contact.preWrittenMessages.general
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 px-3 rounded-lg font-bold text-xs shadow hover:bg-emerald-600 active:scale-95 transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp परामर्श</span>
        </a>
      </div>
    </div>
  );
}
