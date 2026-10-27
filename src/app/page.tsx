"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import PoojaIconGrid from "@/components/PoojaIconGrid";
import TrustSection from "@/components/TrustSection";
import BookingForm from "@/components/BookingForm";
import UjjainTirthInfo from "@/components/UjjainTirthInfo";
import FaqSection from "@/components/FaqSection";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
  MapPin,
  CheckCircle2,
  Award,
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  const generalWhatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.preWrittenMessages.general
  )}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-900 via-vedic-maroon to-stone-950 text-white pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.heroTag}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none">
                {t.heroTitle1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                  {t.heroTitle2}
                </span>
              </h1>

              {/* Pandit Ji Verified Profile Badge in Hero */}
              <div className="flex items-center justify-center lg:justify-start gap-4 p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-md mx-auto lg:mx-0 shadow-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-md border-2 border-amber-300 shrink-0">
                  <img
                    src="/images/pandit-gopal-krishna-shastri.jpg"
                    alt="पंडित गोपाल कृष्ण शास्त्री उज्जैन"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span>पं. गोपाल कृष्ण शास्त्री</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-xs text-amber-300 font-semibold">उज्जैन तीर्थ पुरोहित | वैदिक अनुष्ठान कर्ता</div>
                  <div className="text-[11px] text-stone-300 mt-0.5">श्री महाकालेश्वर एवं मंगलनाथ धाम</div>
                </div>
              </div>

              <p className="text-stone-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.heroDesc}
              </p>

              {/* Highlights Chips */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 text-xs sm:text-sm">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t.inPersonTag}
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t.onlineSankalpTag}
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t.prasadCourierTag}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#book"
                  className="w-full sm:w-auto bg-gradient-to-r from-vedic-saffron to-amber-500 hover:from-amber-500 hover:to-vedic-saffron text-white font-extrabold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 text-center text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t.bookSlot}</span>
                </a>

                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.whatsappConsultation}</span>
                </a>
              </div>

              {/* Verified Notice */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-amber-300/90 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>निःशुल्क कुंडली एवं मुहूर्त मार्गदर्शन: <strong>{siteConfig.contact.callDisplay}</strong></span>
              </div>
            </div>

            {/* Right Card: Quick Booking Hero Box */}
            <div className="lg:col-span-5">
              <BookingForm source="hero_section" />
            </div>
          </div>
        </div>
      </section>

      {/* All Vedic Services Grid (Icons Touch to Open) */}
      <PoojaIconGrid />

      {/* Trust & Authority of Pandit Gopal Shastri */}
      <TrustSection />

      {/* Sacred Tirth Sthals of Ujjain */}
      <UjjainTirthInfo />

      {/* Booking Form in dedicated container for anchored clicks */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              सरल एवं पारदर्शी प्रक्रिया
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              अपनी पूजा का स्लॉट अभी आरक्षित करें
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              फॉर्म भरते ही पंडित जी आपसे सीधे संपर्क करेंगे अथवा आप तुरंत WhatsApp पर जुड़ जाएंगे।
            </p>
          </div>

          <BookingForm source="dedicated_section" />
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
