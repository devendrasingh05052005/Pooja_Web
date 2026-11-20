"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, Menu, X, ChevronDown, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100 w-full">
      {/* Top Banner - Spiritual Chants & Contact */}
      <div className="bg-gradient-to-r from-vedic-maroon via-vedic-saffron to-vedic-maroon text-white text-xs sm:text-sm py-1.5 px-3 sm:px-4 w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 overflow-hidden">
          <div className="flex items-center gap-1.5 sm:gap-2 font-medium min-w-0 overflow-hidden">
            <span
              translate="no"
              className="notranslate bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider shrink-0 select-none"
            >
              ॐ नमः शिवाय
            </span>
            <span className="truncate text-xs text-amber-100 hidden md:inline">
              श्री अवंतिका नगरी (उज्जैन) - 100% शास्त्रीय एवं वैदिक पद्धति पूजन
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 text-xs shrink-0">
            <a
              href={`tel:${siteConfig.contact.callNumber}`}
              className="flex items-center gap-1 hover:text-amber-200 transition font-semibold whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{siteConfig.contact.callDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.contact.preWrittenMessages.general
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#25D366] text-white px-2 py-0.5 rounded font-semibold hover:bg-emerald-600 transition whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - 100% Single Line, Never Overflows in Any Language */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 w-full">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-2 w-full">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2 group shrink min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-vedic-saffron to-amber-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md border-2 border-amber-200 group-hover:scale-105 transition-transform shrink-0">
              ॐ
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-xs sm:text-sm xl:text-base text-stone-900 group-hover:text-vedic-saffron transition whitespace-nowrap">
                  {siteConfig.name}
                </span>
                <span title="प्रमाणित वैदिक विद्वान" className="shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                </span>
              </div>
              <p className="text-[10px] text-amber-800 font-medium whitespace-nowrap hidden 2xl:block truncate max-w-xs">
                श्री महाकाल एवं मंगलनाथ क्षेत्र, उज्जैन
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links - Compact, Single Row, Immune to Language Expansion */}
          <nav className="hidden lg:flex items-center justify-end gap-1 sm:gap-1.5 xl:gap-2.5 2xl:gap-3 flex-nowrap shrink-0">
            <Link
              href="/"
              className="text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-1.5 py-1 xl:px-2 rounded-md whitespace-nowrap"
            >
              मुख्य पृष्ठ
            </Link>

            {/* Special Highlight: Baglamukhi Vishesh Anushthan Dedicated Page */}
            <Link
              href="/baglamukhi-vishesh-anushthan"
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:brightness-110 text-white font-extrabold px-2 py-1 xl:px-2.5 rounded-full shadow-xs text-[11px] xl:text-xs flex items-center gap-1 border border-yellow-300 transition transform hover:scale-105 whitespace-nowrap shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              <span>⭐ बगलामुखी अनुष्ठान</span>
            </Link>

            {/* Services Dropdown - Featuring Pandit Booking & Mahakal at the top */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-0.5 text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-1.5 py-1 xl:px-2 rounded-md whitespace-nowrap"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>पूजन सेवाएं</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute right-0 sm:left-0 top-full hidden group-hover:block w-72 sm:w-80 bg-white rounded-xl shadow-xl border border-amber-100 p-2 text-sm animate-fadeIn z-50">
                {/* Featured quick entries in dropdown */}
                <div className="p-1 space-y-1.5 border-b border-amber-100 pb-2 mb-1.5">
                  <Link
                    href="/ujjain-pandit-booking"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-stone-900 font-bold text-xs sm:text-sm border border-amber-200"
                  >
                    <span>🕉️</span>
                    <span>पंडित बुकिंग (Pandit Booking)</span>
                  </Link>
                  <Link
                    href="/mahakal-pooja-ujjain"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-stone-900 font-bold text-xs sm:text-sm border border-amber-200"
                  >
                    <span>🔱</span>
                    <span>महाकाल पूजा एवं रुद्राभिषेक</span>
                  </Link>
                </div>

                <div className="text-[11px] font-bold text-amber-700 px-3 py-1 uppercase tracking-wider">
                  उज्जैन की प्रमुख वैदिक पूजाएं
                </div>
                <div className="max-h-72 overflow-y-auto py-1">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block px-3 py-2 rounded-lg text-stone-700 hover:bg-amber-50 hover:text-vedic-saffron transition font-medium text-xs sm:text-sm"
                    >
                      {service.titleHindi}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about-pandit-ji"
              className="text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-1.5 py-1 xl:px-2 rounded-md whitespace-nowrap"
            >
              पंडित जी
            </Link>

            {/* FAQ - Marked notranslate so it stays 3 letters in all languages */}
            <Link
              href="/#faqs"
              translate="no"
              className="notranslate text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-1.5 py-1 xl:px-2 rounded-md whitespace-nowrap select-none"
            >
              FAQ
            </Link>

            {/* Quick CTA Button - Always visible and never overflowing */}
            <Link
              href="/#book"
              className="bg-gradient-to-r from-vedic-saffron to-amber-600 hover:from-amber-600 hover:to-vedic-saffron text-white font-bold px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 text-xs xl:text-sm whitespace-nowrap shrink-0 ml-1"
            >
              <span>मुहूर्त बुक करें</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <Link
              href="/#book"
              className="bg-vedic-saffron text-white text-xs font-bold px-3 py-2 rounded-lg shadow whitespace-nowrap"
            >
              बुकिंग
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-amber-50 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-amber-100 px-4 pt-3 pb-6 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2.5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-stone-800 font-bold hover:bg-amber-50"
            >
              {t.home}
            </Link>

            {/* Baglamukhi Dedicated Page Highlight in Mobile Menu */}
            <Link
              href="/baglamukhi-vishesh-anushthan"
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white font-extrabold text-sm shadow flex items-center justify-between"
            >
              <span>⭐ मां बगलामुखी विशेष अनुष्ठान</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">विशेष पेज</span>
            </Link>

            {/* New Quick Links: Pandit Booking & Mahakal Pooja */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                href="/ujjain-pandit-booking"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-stone-800 font-bold text-xs text-center border border-amber-200"
              >
                🕉️ पंडित बुकिंग
              </Link>
              <Link
                href="/mahakal-pooja-ujjain"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-stone-800 font-bold text-xs text-center border border-amber-200"
              >
                🔱 महाकाल पूजा
              </Link>
            </div>

            <div className="border-t border-b border-amber-50 py-2">
              <span className="text-xs font-bold text-amber-800 px-3 uppercase tracking-wider">
                सभी प्रमुख वैदिक पूजाएं (Touch to Open)
              </span>
              <div className="mt-1 flex flex-col gap-1 pl-2">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-1.5 text-xs text-stone-700 hover:text-vedic-saffron font-medium"
                  >
                    • {service.titleHindi}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about-pandit-ji"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-stone-800 font-bold hover:bg-amber-50"
            >
              {t.about}
            </Link>

            <Link
              href="/#faqs"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-stone-800 font-bold hover:bg-amber-50"
            >
              {t.faq}
            </Link>

            <Link
              href="/#book"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center bg-gradient-to-r from-vedic-saffron to-amber-600 text-white font-bold py-3 rounded-lg shadow-md"
            >
              {t.bookSlot}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
