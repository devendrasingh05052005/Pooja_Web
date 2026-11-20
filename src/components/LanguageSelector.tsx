"use client";

import React from "react";
import { useLanguage, supportedLanguages } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSelector() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div
      translate="no"
      className="notranslate bg-gradient-to-r from-amber-100/95 via-amber-50 to-amber-100/95 border-b border-amber-200/80 py-2 px-3 sm:px-4 shadow-xs"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Fixed, permanent label that NEVER converts into another script */}
        <div className="flex items-center gap-2 text-stone-800 font-bold text-xs sm:text-sm shrink-0 select-none">
          <Globe className="w-4 h-4 text-vedic-saffron shrink-0" />
          <span className="font-extrabold text-stone-900">
            भाषा / Language:
          </span>
          <span className="hidden md:inline-block bg-amber-200/80 text-amber-900 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            अनुवाद (Select to Translate)
          </span>
        </div>

        {/* Horizontal Scrollable Language Pills - Always in fixed standard script */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
          {supportedLanguages.map((lang) => {
            const isActive = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                translate="no"
                className={`notranslate px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 shrink-0 select-none ${
                  isActive
                    ? "bg-vedic-saffron text-white shadow-md scale-105 ring-2 ring-amber-300"
                    : "bg-white/90 hover:bg-white text-stone-700 hover:text-stone-900 border border-amber-200 shadow-xs"
                }`}
                title={`${lang.englishName} (${lang.nativeName})`}
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
