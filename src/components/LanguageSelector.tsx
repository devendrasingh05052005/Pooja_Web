"use client";

import React from "react";
import { useLanguage, supportedLanguages, LanguageCode } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSelector() {
  const { currentLanguage, setLanguage, t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-amber-100/90 via-amber-50 to-amber-100/90 border-b border-amber-200/80 py-2.5 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-stone-800 font-bold text-xs sm:text-sm shrink-0">
          <Globe className="w-4 h-4 text-vedic-saffron shrink-0" />
          <span>{t.selectLanguageHint}</span>
          <span className="hidden md:inline-block bg-amber-200/80 text-amber-900 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            संपूर्ण वेबसाइट अनुवाद
          </span>
        </div>

        {/* Horizontal Scrollable Language Pills for Top 10 Indian Languages */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
          {supportedLanguages.map((lang) => {
            const isActive = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-vedic-saffron text-white shadow-md scale-105"
                    : "bg-white/80 hover:bg-white text-stone-700 hover:text-stone-900 border border-amber-200/80 shadow-xs"
                }`}
                title={lang.englishName}
              >
                <span>{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
