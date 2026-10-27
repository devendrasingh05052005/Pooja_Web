"use client";

import React from "react";
import Link from "next/link";
import { servicesData, PoojaService } from "@/data/services";
import {
  ShieldAlert,
  Flame,
  HeartPulse,
  Gem,
  Sparkles,
  Sun,
  Compass,
  Droplets,
  BookOpen,
  Flower2,
  ChevronRight,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

// Icon mapping helper
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "ShieldAlert":
      return <ShieldAlert className="w-8 h-8 text-amber-600" />;
    case "Flame":
      return <Flame className="w-8 h-8 text-red-600" />;
    case "HeartPulse":
      return <HeartPulse className="w-8 h-8 text-emerald-600" />;
    case "Gem":
      return <Gem className="w-8 h-8 text-indigo-600" />;
    case "Sparkles":
      return <Sparkles className="w-8 h-8 text-yellow-600" />;
    case "Sun":
      return <Sun className="w-8 h-8 text-orange-600" />;
    case "Compass":
      return <Compass className="w-8 h-8 text-cyan-600" />;
    case "Droplets":
      return <Droplets className="w-8 h-8 text-sky-600" />;
    case "BookOpen":
      return <BookOpen className="w-8 h-8 text-purple-600" />;
    case "Flower2":
    default:
      return <Flower2 className="w-8 h-8 text-rose-600" />;
  }
};

import { useLanguage } from "@/context/LanguageContext";

export default function PoojaIconGrid() {
  const { t } = useLanguage();

  return (
    <section id="services-grid" className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-vedic-saffron animate-pulse"></span>
            श्री अवंतिका तीर्थ (उज्जैन) - प्रमाणित सेवाएं
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            पंडित गोपाल कृष्ण शास्त्री जी द्वारा <span className="text-vedic-saffron">{t.servicesSectionTitle}</span>
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.touchIconHint}
          </p>

          <div className="mt-4 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm font-medium text-stone-700">
            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-amber-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {t.inPersonTag}
            </span>
            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-amber-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {t.onlineSankalpTag}
            </span>
            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-amber-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {t.prasadCourierTag}
            </span>
          </div>
        </div>

        {/* 10 Services Grid - Each with Interactive Icon & Link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service: PoojaService, index: number) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-amber-100 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center border border-amber-200/80 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {getServiceIcon(service.icon)}
                </div>

                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                  {service.badgeHindi}
                </span>
              </div>

              {/* Service Titles */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-vedic-saffron transition-colors leading-snug">
                  {service.titleHindi}
                </h3>
                <p className="text-xs text-stone-500 font-medium mt-0.5">
                  {service.titleEnglish}
                </p>

                <p className="mt-3 text-stone-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Meta Chips */}
              <div className="mt-5 pt-4 border-t border-amber-50 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-xs text-amber-900">
                  <MapPin className="w-3.5 h-3.5 text-vedic-saffron shrink-0" />
                  <span className="truncate">{service.locationInUjjain}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-stone-600">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>अवधि: {service.duration}</span>
                </div>
              </div>

              {/* Action Button Link */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs font-bold text-vedic-saffron group-hover:text-amber-700">
                <span>संपूर्ण विधि एवं स्लॉट देखें</span>
                <div className="w-7 h-7 rounded-full bg-amber-50 group-hover:bg-vedic-saffron group-hover:text-white flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Vedic Assurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-vedic-maroon via-stone-900 to-vedic-maroon text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-amber-400/40">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              100% शास्त्रीय संकल्प
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              सभी पूजन वैदिक पद्धति एवं शास्त्रसम्मत मंत्रोच्चार द्वारा
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl">
              पंडित गोपाल कृष्ण शास्त्री जी द्वारा किसी भी प्रकार का आडंबर या छिपा हुआ शुल्क नहीं लिया जाता। संपूर्ण पूजा यजमान के नाम, गोत्र और नक्षत्र के अनुसार प्रामाणिक विधि से संपन्न कराई जाती है।
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3 rounded-xl shadow-lg transition text-center text-sm"
            >
              निःशुल्क मुहूर्त परामर्श लें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
