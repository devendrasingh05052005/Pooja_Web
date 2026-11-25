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

export default function GalleryShowcase() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  // Fetch gallery items
  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (data.success && data.items?.length > 0) {
        setItems(data.items);
      }
    } catch (err) {
      console.error("Failed to load gallery:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Auto-scroll / rotate every 3.5 seconds
  useEffect(() => {
    if (items.length <= 1 || isPaused || activeModalItem !== null) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [items.length, isPaused, activeModalItem]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  if (loading && items.length === 0) {
    return (
      <div className="py-12 bg-stone-900 text-center text-amber-200/70 text-sm">
        पवित्र दर्शन गैलरी लोड हो रही है...
      </div>
    );
  }

  if (items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>पवित्र दर्शन एवं अनुष्ठान गैलरी</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              उज्जैन वैदिक पूजा एवं दर्शन{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                (फोटो व वीडियो गैलरी)
              </span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              भगवान श्री महाकालेश्वर, मंगलनाथ धाम एवं आश्रम में पंडित गोपाल कृष्ण शास्त्री जी द्वारा संपन्न प्रमुख वैदिक पूजाओं की दिव्य झलकियां देखें।
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/gallery"
              className="bg-gradient-to-r from-vedic-saffron to-amber-500 hover:brightness-110 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-2"
            >
              <span>सम्पूर्ण गैलरी खोलें ({items.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* The Main Dynamic Auto-Rotating Card */}
        <div
          className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-amber-400/30 overflow-hidden shadow-2xl transition duration-300 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px] sm:min-h-[420px]">
            {/* Visual Media Pane (Left/Center) */}
            <div className="lg:col-span-8 relative bg-stone-950 flex items-center justify-center overflow-hidden min-h-[240px] sm:min-h-[380px]">
              <img
                src={currentItem.thumbnailUrl || currentItem.mediaUrl}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/30"></div>

              {/* Type Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="bg-stone-900/80 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow">
                  {currentItem.type === "video" ? (
                    <>
                      <Video className="w-3.5 h-3.5 text-red-400" />
                      <span>वीडियो दर्शन</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>फोटो दर्शन</span>
                    </>
                  )}
                </span>

                <span className="bg-amber-500/90 backdrop-blur-md text-stone-950 font-extrabold px-3 py-1 rounded-full text-xs shadow">
                  {currentItem.category}
                </span>
              </div>

              {/* Center Play / Maximize Button */}
              <button
                onClick={() => setActiveModalItem(currentItem)}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-vedic-saffron/90 hover:bg-vedic-saffron text-white flex items-center justify-center shadow-2xl transition transform hover:scale-110 ring-4 ring-white/30 backdrop-blur-xs z-10"
                aria-label="Open Full View"
              >
                {currentItem.type === "video" ? (
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
                ) : (
                  <Maximize2 className="w-6 h-6 sm:w-8 sm:h-8" />
                )}
              </button>

              {/* Navigation Arrows on Slide */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center border border-white/20 transition z-10 shadow"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center border border-white/20 transition z-10 shadow"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Info & Details Pane (Right) */}
            <div className="lg:col-span-4 p-5 sm:p-7 flex flex-col justify-between bg-stone-900/90 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-amber-400/20">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-amber-300 font-semibold">
                  <span>{currentItem.category}</span>
                  <span className="text-stone-400">{currentItem.date || "उज्जैन"}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {currentItem.title}
                </h3>

                {currentItem.description && (
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {currentItem.description}
                  </p>
                )}
              </div>

              {/* Action Buttons & Indicator */}
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">
                    {currentIndex + 1} / {items.length}
                  </span>
                  <div className="flex gap-1.5">
                    {items.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentIndex
                            ? "w-6 bg-amber-400"
                            : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveModalItem(currentItem)}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-1.5 shadow"
                  >
                    {currentItem.type === "video" ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>वीडियो देखें</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>फोटो देखें</span>
                      </>
                    )}
                  </button>

                  <Link
                    href="/gallery"
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm border border-white/20 transition flex items-center justify-center gap-1 text-center"
                  >
                    <span>सम्पूर्ण गैलरी</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-28 sm:w-36 h-18 sm:h-22 rounded-xl overflow-hidden border-2 transition ${
                idx === currentIndex
                  ? "border-amber-400 ring-2 ring-amber-400/50 scale-102"
                  : "border-white/15 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={item.thumbnailUrl || item.mediaUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <span className="absolute bottom-1 left-1.5 right-1.5 text-[10px] text-white font-semibold truncate text-left">
                {item.title}
              </span>
              {item.type === "video" && (
                <div className="absolute top-1 right-1 bg-black/60 rounded-full p-0.5">
                  <Play className="w-2.5 h-2.5 fill-red-400 text-red-400" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
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

            {/* Modal Media */}
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
    </section>
  );
}
