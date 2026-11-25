"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Video,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  title: string;
  category: string;
  mediaUrl: string;
  thumbnailUrl: string;
  videoEmbedUrl?: string;
  date?: string;
  description?: string;
  isFeatured?: boolean;
}

export default function HeroGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        if (data.success && data.items?.length > 0) {
          setItems(data.items);
        }
      } catch (err) {
        console.error("Failed to load hero gallery items:", err);
      } finally {
        setLoading(false);
      }
    }
    loadGallery();
  }, []);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    if (items.length <= 1 || isPaused || activeModalItem !== null) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [items.length, isPaused, activeModalItem]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  if (loading && items.length === 0) {
    return (
      <div className="bg-stone-900/80 border-2 border-amber-400/30 rounded-3xl p-8 text-center text-amber-200/70 text-sm animate-pulse">
        पवित्र दर्शन गैलरी लोड हो रही है...
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="space-y-4">
        <div className="relative bg-gradient-to-br from-stone-900/95 via-amber-950/70 to-stone-900/95 border-2 border-amber-400/50 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md text-white overflow-hidden text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>पवित्र दर्शन एवं अनुष्ठान गैलरी</span>
          </div>

          <div className="w-20 h-20 mx-auto rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-3xl shadow-inner">
            🕉️
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-amber-200">
              श्री महाकाल एवं मंगलनाथ धाम पावन दर्शन
            </h3>
            <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
              पंडित गोपाल कृष्ण शास्त्री जी द्वारा संपन्न वैदिक अनुष्ठान एवं तीर्थ दर्शनों के छायाचित्र व वीडियो शीघ्र प्रदर्शित होंगे।
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-vedic-saffron to-amber-500 hover:brightness-110 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg transition"
            >
              <span>शुभ मुहूर्त व स्लॉट बुक करें</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
          <div className="bg-stone-900/80 border border-white/15 rounded-xl p-2.5 flex items-center gap-2 text-white shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-amber-300">सीधा संपर्क</div>
              <div className="text-[10px] text-stone-300">बिचौलिया मुक्त</div>
            </div>
          </div>

          <div className="bg-stone-900/80 border border-white/15 rounded-xl p-2.5 flex items-center gap-2 text-white shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-amber-300">शुद्ध सामग्री</div>
              <div className="text-[10px] text-stone-300">वैदिक समिधा</div>
            </div>
          </div>

          <div className="bg-stone-900/80 border border-white/15 rounded-xl p-2.5 flex items-center gap-2 text-white shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-amber-300">लाइव संकल्प</div>
              <div className="text-[10px] text-stone-300">E-पूजा व्यवस्था</div>
            </div>
          </div>

          <div className="bg-stone-900/80 border border-white/15 rounded-xl p-2.5 flex items-center gap-2 text-white shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-amber-300">4.9 / 5 रेटिंग</div>
              <div className="text-[10px] text-stone-300">1,000+ यजमान</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const current = items[currentIndex] || items[0];

  return (
    <div className="space-y-4">
      {/* Main Compact Gallery Showcase Card */}
      <div
        className="relative bg-gradient-to-br from-stone-900/95 via-amber-950/70 to-stone-900/95 border-2 border-amber-400/50 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-md text-white overflow-hidden transition group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Glow Accent */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Card Header Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
              <span>दिव्य दर्शन व पूजन गैलरी</span>
            </span>
          </div>

          <Link
            href="/gallery"
            className="text-[11px] bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 px-2.5 py-0.5 rounded-full font-semibold transition flex items-center gap-1"
          >
            <span>{items.length} फोटो-वीडियो</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Dynamic Media Window */}
        <div
          onClick={() => setActiveModalItem(current)}
          className="relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer bg-stone-950 border border-amber-400/30 shadow-inner group/media"
        >
          {/* Main Visual Image */}
          <img
            src={current.thumbnailUrl || current.mediaUrl}
            alt={current.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
          />

          {/* Dark Vignette / Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/40"></div>

          {/* Badges on Top */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            <span className="bg-stone-950/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 shadow">
              {current.type === "video" ? (
                <>
                  <Video className="w-3 h-3 text-red-400" />
                  <span>वीडियो</span>
                </>
              ) : (
                <>
                  <ImageIcon className="w-3 h-3 text-amber-400" />
                  <span>फोटो</span>
                </>
              )}
            </span>

            <span className="bg-amber-500/90 backdrop-blur-md text-stone-950 font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow">
              {current.category}
            </span>
          </div>

          {/* Center Luminous Action Button */}
          <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-vedic-saffron/90 group-hover/media:bg-vedic-saffron text-white flex items-center justify-center shadow-2xl transition transform group-hover/media:scale-110 ring-4 ring-white/30 backdrop-blur-xs z-10">
            {current.type === "video" ? (
              <Play className="w-6 h-6 fill-white translate-x-0.5" />
            ) : (
              <Maximize2 className="w-5 h-5 text-white" />
            )}
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-950/70 hover:bg-stone-900 text-white flex items-center justify-center border border-white/20 transition opacity-80 hover:opacity-100 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-950/70 hover:bg-stone-900 text-white flex items-center justify-center border border-white/20 transition opacity-80 hover:opacity-100 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-3 z-10">
            <h4 className="text-sm font-bold text-white line-clamp-1 group-hover/media:text-amber-200 transition">
              {current.title}
            </h4>
            <p className="text-[11px] text-amber-200/80 line-clamp-1 mt-0.5">
              {current.type === "video" ? "▶ टच करके पूरा वीडियो देखें" : "🔍 टच करके पूर्ण HD फोटो देखें"}
            </p>
          </div>
        </div>

        {/* Mini Thumbnail Navigation Strip */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {items.slice(0, 6).map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-12 h-10 rounded-lg overflow-hidden border-2 transition ${
                  isActive
                    ? "border-amber-400 ring-2 ring-amber-400/50 scale-105"
                    : "border-white/20 opacity-60 hover:opacity-100"
                }`}
                title={item.title}
              >
                <img
                  src={item.thumbnailUrl || item.mediaUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="pt-3 border-t border-white/10 mt-3">
          <Link
            href="/gallery"
            className="w-full bg-gradient-to-r from-vedic-saffron to-amber-500 hover:brightness-110 text-white font-extrabold py-2.5 px-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-xs sm:text-sm text-center"
          >
            <span>सम्पूर्ण गैलरी खोलें (सभी फोटो व वीडियो)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 4 Trust Pillars Below Gallery */}
      <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
        <div className="bg-stone-900/80 border border-white/15 rounded-xl p-2.5 flex items-center gap-2 text-white shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <div className="font-bold text-amber-300">सीधा संपर्क</div>
            <div className="text-[10px] text-stone-300">बिचौलिया मुक्त</div>
          </div>
        </div>

        <div className="bg-stone-900/80 border border-white/15 rounded-xl p-2.5 flex items-center gap-2 text-white shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <div className="font-bold text-amber-300">शुद्ध सामग्री</div>
            <div className="text-[10px] text-stone-300">वैदिक समिधा</div>
          </div>
        </div>

        <div className="bg-stone-900/80 border border-white/15 rounded-xl p-2.5 flex items-center gap-2 text-white shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <div className="font-bold text-amber-300">लाइव संकल्प</div>
            <div className="text-[10px] text-stone-300">E-पूजा व्यवस्था</div>
          </div>
        </div>

        <div className="bg-stone-900/80 border border-white/15 rounded-xl p-2.5 flex items-center gap-2 text-white shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <div className="font-bold text-amber-300">4.9 / 5 रेटिंग</div>
            <div className="text-[10px] text-stone-300">1,000+ यजमान</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for HD viewing or Video Playback */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 bg-stone-950 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-stone-950 font-bold px-2 py-0.5 rounded text-xs">
                  {activeModalItem.category}
                </span>
                <h3 className="font-bold text-xs sm:text-sm line-clamp-1">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="bg-black flex items-center justify-center min-h-[280px] sm:min-h-[460px]">
              {activeModalItem.type === "video" ? (
                activeModalItem.videoEmbedUrl ? (
                  <iframe
                    src={`${activeModalItem.videoEmbedUrl}?autoplay=1`}
                    title={activeModalItem.title}
                    className="w-full h-[280px] sm:h-[460px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={activeModalItem.mediaUrl}
                    controls
                    autoPlay
                    className="max-h-[75vh] w-full"
                  />
                )
              ) : (
                <img
                  src={activeModalItem.mediaUrl || activeModalItem.thumbnailUrl}
                  alt={activeModalItem.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              )}
            </div>

            {/* Modal Footer */}
            {activeModalItem.description && (
              <div className="p-3.5 bg-stone-950 text-stone-300 text-xs sm:text-sm border-t border-white/10 flex items-center justify-between gap-4">
                <p className="line-clamp-2">{activeModalItem.description}</p>
                <Link
                  href="/gallery"
                  onClick={() => setActiveModalItem(null)}
                  className="shrink-0 text-amber-300 hover:text-amber-200 font-bold text-xs flex items-center gap-1"
                >
                  <span>सभी देखें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
