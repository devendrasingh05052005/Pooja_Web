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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100">
      {/* Top Banner - Spiritual Chants & Contact */}
      <div className="bg-gradient-to-r from-vedic-maroon via-vedic-saffron to-vedic-maroon text-white text-xs sm:text-sm py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider">
              ॐ नमः शिवाय
            </span>
            <span className="hidden md:inline">
              श्री अवंतिका नगरी (उज्जैन) - 100% शास्त्रीय एवं वैदिक पद्धति पूजन
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs shrink-0">
            <a
              href={`tel:${siteConfig.contact.callNumber}`}
              className="flex items-center gap-1 hover:text-amber-200 transition font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.callDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.contact.preWrittenMessages.general
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#25D366] text-white px-2.5 py-0.5 rounded font-semibold hover:bg-emerald-600 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - 100% Single Line, Perfectly Aligned */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-2">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-vedic-saffron to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-md border-2 border-amber-200 group-hover:scale-105 transition-transform shrink-0">
              ॐ
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-sm sm:text-base xl:text-lg text-stone-900 group-hover:text-vedic-saffron transition whitespace-nowrap">
                  {siteConfig.name}
                </span>
                <span title="प्रमाणित वैदिक पुरोहित">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-amber-800 font-medium whitespace-nowrap hidden sm:block">
                श्री महाकाल एवं मंगलनाथ क्षेत्र | वैदिक पुरोहित उज्जैन
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links - Single Row, No Wrap, All Same Level */}
          <nav className="hidden lg:flex items-center justify-end gap-1 xl:gap-2 2xl:gap-3.5 flex-nowrap shrink-0">
            <Link
              href="/"
              className="text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-2 py-1 rounded-md whitespace-nowrap"
            >
              मुख्य पृष्ठ
            </Link>

            {/* Special Highlight: Baglamukhi Vishesh Anushthan Dedicated Page */}
            <Link
              href="/baglamukhi-vishesh-anushthan"
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:brightness-110 text-white font-extrabold px-2.5 py-1 rounded-full shadow-xs text-xs flex items-center gap-1 border border-yellow-300 transition transform hover:scale-105 whitespace-nowrap shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              <span>⭐ बगलामुखी अनुष्ठान</span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-0.5 text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-2 py-1 rounded-md whitespace-nowrap"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>पूजन सेवाएं</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute right-0 sm:left-0 top-full hidden group-hover:block w-72 sm:w-80 bg-white rounded-xl shadow-xl border border-amber-100 p-2 text-sm animate-fadeIn z-50">
                <div className="text-[11px] font-bold text-amber-700 px-3 py-1 uppercase tracking-wider border-b border-amber-50">
                  उज्जैन की प्रमुख वैदिक पूजाएं
                </div>
                <div className="max-h-80 overflow-y-auto py-1">
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
              href="/ujjain-pandit-booking"
              className="text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-2 py-1 rounded-md whitespace-nowrap"
            >
              पंडित बुकिंग
            </Link>

            <Link
              href="/mahakal-pooja-ujjain"
              className="text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-2 py-1 rounded-md whitespace-nowrap"
            >
              महाकाल पूजा
            </Link>

            <Link
              href="/about-pandit-ji"
              className="text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-2 py-1 rounded-md whitespace-nowrap"
            >
              पंडित जी
            </Link>

            <Link
              href="/#faqs"
              className="text-stone-700 hover:text-vedic-saffron hover:bg-amber-50/60 font-semibold transition text-xs xl:text-sm px-2 py-1 rounded-md whitespace-nowrap"
            >
              FAQ
            </Link>

            {/* Quick CTA Button - Perfectly in line */}
            <Link
              href="/#book"
              className="bg-gradient-to-r from-vedic-saffron to-amber-600 hover:from-amber-600 hover:to-vedic-saffron text-white font-bold px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 text-xs xl:text-sm whitespace-nowrap shrink-0 ml-1"
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
