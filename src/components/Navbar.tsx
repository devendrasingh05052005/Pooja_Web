"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { Phone, MessageCircle, Menu, X, ChevronDown, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100">
      {/* Top Banner - Spiritual Chants & Contact */}
      <div className="bg-gradient-to-r from-vedic-maroon via-vedic-saffron to-vedic-maroon text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider">
              ॐ नमः शिवाय
            </span>
            <span className="hidden md:inline">
              श्री अवंतिका तीर्थ (उज्जैन) - 100% शास्त्रीय एवं वैदिक पद्धति पूजन
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
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

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vedic-saffron to-amber-500 flex items-center justify-center text-white font-bold text-2xl shadow-md border-2 border-amber-200 group-hover:scale-105 transition-transform">
              ॐ
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-stone-900 group-hover:text-vedic-saffron transition">
                  {siteConfig.name}
                </span>
                <span title="प्रमाणित वैदिक पुरोहित">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />
                </span>
              </div>
              <p className="text-xs text-amber-800 font-medium">
                श्री महाकाल एवं मंगलनाथ तीर्थ पुरोहित | उज्जैन (म.प्र.)
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-stone-700 hover:text-vedic-saffron font-semibold transition text-sm"
            >
              मुख्य पृष्ठ (Home)
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-stone-700 group-hover:text-vedic-saffron font-semibold transition text-sm py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>वैदिक पूजन सेवाएं</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute left-0 top-full hidden group-hover:block w-80 bg-white rounded-xl shadow-xl border border-amber-100 p-2 text-sm animate-fadeIn">
                <div className="text-[11px] font-bold text-amber-700 px-3 py-1 uppercase tracking-wider border-b border-amber-50">
                  उज्जैन की प्रमुख वैदिक पूजाएं
                </div>
                <div className="max-h-96 overflow-y-auto py-1">
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
              className="text-stone-700 hover:text-vedic-saffron font-semibold transition text-sm"
            >
              पंडित जी का परिचय
            </Link>

            <Link
              href="/#ujjain-tirth"
              className="text-stone-700 hover:text-vedic-saffron font-semibold transition text-sm"
            >
              उज्जैन तीर्थ महात्म्य
            </Link>

            <Link
              href="/#faqs"
              className="text-stone-700 hover:text-vedic-saffron font-semibold transition text-sm"
            >
              अक्सर पूछे जाने वाले प्रश्न (FAQ)
            </Link>

            {/* Quick CTA */}
            <Link
              href="/#book"
              className="bg-gradient-to-r from-vedic-saffron to-amber-600 hover:from-amber-600 hover:to-vedic-saffron text-white font-bold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 text-sm flex items-center gap-1.5"
            >
              <span>मुहूर्त व स्लॉट बुक करें</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/#book"
              className="bg-vedic-saffron text-white text-xs font-bold px-3 py-2 rounded-lg shadow"
            >
              बुकिंग करें
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
        <div className="lg:hidden bg-white border-b border-amber-100 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-stone-800 font-bold hover:bg-amber-50"
            >
              मुख्य पृष्ठ (Home)
            </Link>

            <div className="border-t border-b border-amber-50 py-2">
              <span className="text-xs font-bold text-amber-800 px-3 uppercase tracking-wider">
                सभी 10 प्रमुख पूजाएं (Touch to Open)
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
              पंडित जी का परिचय (About)
            </Link>

            <Link
              href="/#ujjain-tirth"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-stone-800 font-bold hover:bg-amber-50"
            >
              उज्जैन तीर्थ महात्म्य
            </Link>

            <Link
              href="/#book"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center bg-gradient-to-r from-vedic-saffron to-amber-600 text-white font-bold py-3 rounded-lg shadow-md"
            >
              मुहूर्त / स्लॉट बुक करें
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
