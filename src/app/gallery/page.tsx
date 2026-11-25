"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Image as ImageIcon,
  Video,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  Filter,
  ArrowRight,
} from "lucide-react";

interface GalleryItem {
  id: string;
  type: "photo" | "video";
  title: string;
  category: string;
  mediaUrl: string;
  thumbnailUrl: string;
  videoEmbedUrl?: string;
  date?: string;
  description?: string;
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const categories = [
    { id: "all", label: "सभी (All)" },
    { id: "photo", label: "📷 केवल फोटो" },
    { id: "video", label: "🎥 केवल वीडियो" },
    { id: "महाकाल पूजा", label: "🔱 महाकाल पूजा" },
    { id: "मंगलनाथ भात पूजा", label: "🔴 मंगलनाथ भात पूजा" },
    { id: "बगलामुखी अनुष्ठान", label: "⭐ बगलामुखी अनुष्ठान" },
    { id: "कालसर्प दोष", label: "🐍 कालसर्प पूजा" },
    { id: "पितृ दोष शांति", label: "🪔 पितृ दोष व नारायण बलि" },
  ];

  const filteredItems = items.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "photo") return item.type === "photo";
    if (activeFilter === "video") return item.type === "video";
    return item.category === activeFilter;
  });

  return (
    <div className="bg-stone-950 text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>दिव्य वैदिक दर्शन संग्रह | उज्जैन</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              वैदिक अनुष्ठान एवं दर्शन{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                गैलरी
              </span>
            </h1>

            <p className="mt-2 text-stone-300 text-xs sm:text-base max-w-3xl leading-relaxed">
              पंडित गोपाल कृष्ण शास्त्री जी द्वारा उज्जैन में संपन्न कराई गई विभिन्न वैदिक पूजाओं, महाकाल रुद्राभिषेक, भात पूजा, बगलामुखी अनुष्ठान एवं तीर्थ दर्शनों के प्रामाणिक छायाचित्र एवं वीडियो।
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/book"
              className="bg-gradient-to-r from-vedic-saffron to-amber-500 hover:brightness-110 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg transition flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>मुहूर्त व स्लॉट बुक करें</span>
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10 no-scrollbar">
          <Filter className="w-4 h-4 text-amber-400 shrink-0 mr-1" />
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  isActive
                    ? "bg-amber-500 text-stone-950 shadow-md font-bold"
                    : "bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="py-20 text-center text-stone-400">गैलरी लोड हो रही है...</div>
        ) : filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-stone-900/60 rounded-3xl border border-stone-800 p-8 space-y-4 max-w-lg mx-auto shadow-xl">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-3xl">
              🕉️
            </div>
            <h3 className="text-lg font-bold text-amber-300">
              {activeFilter === "all" ? "गैलरी शीघ्र अपडेट हो रही है" : "इस श्रेणी में अभी कोई सामग्री नहीं है"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              पंडित जी द्वारा उज्जैन के नवीनतम वैदिक अनुष्ठान एवं दर्शन सामग्री जल्द जोड़ी जाएगी। अपनी पूजा का शुभ मुहूर्त बुक करने हेतु संपर्क करें।
            </p>
            <div className="pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-vedic-saffron to-amber-500 hover:brightness-110 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition"
              >
                <span>शुभ मुहूर्त बुक करें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group bg-stone-900 rounded-2xl overflow-hidden border border-amber-400/20 hover:border-amber-400/60 transition duration-300 shadow-lg hover:shadow-2xl flex flex-col cursor-pointer"
              >
                {/* Media Thumbnail */}
                <div className="relative aspect-[16/10] bg-stone-950 overflow-hidden">
                  <img
                    src={item.thumbnailUrl || item.mediaUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30"></div>

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span className="bg-stone-950/80 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                      {item.type === "video" ? (
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

                    <span className="bg-amber-500/90 text-stone-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Center Play / Zoom Icon */}
                  <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-vedic-saffron/90 group-hover:bg-vedic-saffron text-white flex items-center justify-center shadow-lg transition transform group-hover:scale-110">
                    {item.type === "video" ? (
                      <Play className="w-5 h-5 fill-white translate-x-0.5" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-stone-100 group-hover:text-amber-300 transition line-clamp-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-1 text-xs text-stone-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                    <span>{item.date || "उज्जैन धाम"}</span>
                    <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
                      {item.type === "video" ? "वीडियो देखें →" : "बड़ा देखें →"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Lightbox */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 bg-stone-950 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500 text-stone-950 font-bold px-2 py-0.5 rounded text-xs">
                    {activeModalItem.category}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {activeModalItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center transition"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-black flex items-center justify-center min-h-[300px] sm:min-h-[500px]">
                {activeModalItem.type === "video" ? (
                  activeModalItem.videoEmbedUrl ? (
                    <iframe
                      src={`${activeModalItem.videoEmbedUrl}?autoplay=1`}
                      title={activeModalItem.title}
                      className="w-full h-[320px] sm:h-[500px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={activeModalItem.mediaUrl}
                      controls
                      autoPlay
                      className="max-h-[80vh] w-full"
                    />
                  )
                ) : (
                  <img
                    src={activeModalItem.mediaUrl || activeModalItem.thumbnailUrl}
                    alt={activeModalItem.title}
                    className="max-h-[80vh] w-auto max-w-full object-contain"
                  />
                )}
              </div>

              {activeModalItem.description && (
                <div className="p-4 bg-stone-950 text-stone-300 text-xs sm:text-sm border-t border-stone-800">
                  <p>{activeModalItem.description}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
