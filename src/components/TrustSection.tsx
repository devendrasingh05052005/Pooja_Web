import React from "react";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Award, Users, BookOpen, Instagram, CheckCircle2 } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-16 bg-white border-y border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Pandit Ji's Credentials & Trust */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>प्रमाणित तीर्थ पुरोहित उज्जैन</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
              {siteConfig.name} <br />
              <span className="text-vedic-saffron">
                18+ वर्षों का शास्त्रीय अनुभव एवं वैदिक परंपरा
              </span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              पंडित गोपाल कृष्ण शास्त्री जी अवंतिका नगरी (उज्जैन) के सुप्रसिद्ध वैदिक विद्वान एवं पुरोहित हैं। पिछले 18 वर्षों से वे भगवान श्री महाकालेश्वर ज्योतिर्लिंग, मंगलनाथ तीर्थ, एवं सिद्धवट पर शास्त्रोक्त कालसर्प दोष निवारण, मंगल भात पूजा, महामृत्युंजय जाप और वैवाहिक दोष शांति संपन्न करा रहे हैं।
            </p>

            {/* Core Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-amber-50/60 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">100% वैदिक एवं शास्त्रीय विधि</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    प्रत्येक मंत्र का शुद्ध उच्चारण एवं वैदिक विधान का पूर्ण पालन।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-amber-50/60 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">पारदर्शी व्यवस्था (No Hidden Charges)</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    पूजा सामग्री, दक्षिणा और व्यवस्था की पूर्व में स्पष्ट जानकारी।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-amber-50/60 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">प्रत्यक्ष एवं ऑनलाइन दोनों सुविधाएं</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    उज्जैन आकर स्वयं बैठें अथवा देश-विदेश से लाइव संकल्प से जुड़ें।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-amber-50/60 rounded-xl border border-amber-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">निःशुल्क मुहूर्त व कुंडली परामर्श</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    फोन अथवा WhatsApp पर अपनी कुंडली के दोष का निःशुल्क परीक्षण।
                  </p>
                </div>
              </div>
            </div>

            {/* Social / Instagram Connection */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow hover:opacity-90 transition"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram पर वास्तविक पूजा वीडियो देखें</span>
              </a>

              <span className="text-xs text-stone-500 font-medium">
                ★ 4.9/5 रेटिंग (1,400+ यजमान संतुष्ट)
              </span>
            </div>
          </div>

          {/* Right Column: Statistics Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-vedic-sandstone via-amber-50 to-amber-100/60 p-6 sm:p-8 rounded-3xl border-2 border-amber-200 shadow-xl relative overflow-hidden">
              <div className="text-center pb-6 border-b border-amber-200">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden mx-auto shadow-2xl border-4 border-amber-300 mb-4 group relative">
                  <img
                    src="/images/pandit-gopal-krishna-shastri.jpg"
                    alt={siteConfig.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/70 backdrop-blur-xs rounded-md py-0.5 px-1 text-[10px] text-amber-200 font-semibold truncate">
                    पं. गोपाल कृष्ण शास्त्री - उज्जैन
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-amber-800 font-semibold mt-0.5">
                  आचार्य - शुक्ल यजुर्वेद एवं फलित ज्योतिष | वैदिक अनुष्ठान कर्ता
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="text-center p-3 bg-white/80 rounded-2xl border border-amber-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-vedic-saffron">
                    {siteConfig.experienceYears}+
                  </div>
                  <div className="text-[11px] sm:text-xs text-stone-600 font-medium mt-1">
                    वर्षों का शास्त्रीय अनुभव
                  </div>
                </div>

                <div className="text-center p-3 bg-white/80 rounded-2xl border border-amber-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-vedic-saffron">
                    {siteConfig.poojaCompletedCount}
                  </div>
                  <div className="text-[11px] sm:text-xs text-stone-600 font-medium mt-1">
                    सफल वैदिक पूजन संपन्न
                  </div>
                </div>

                <div className="text-center p-3 bg-white/80 rounded-2xl border border-amber-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-vedic-saffron">
                    {siteConfig.satisfiedYatriCount}
                  </div>
                  <div className="text-[11px] sm:text-xs text-stone-600 font-medium mt-1">
                    देश-विदेश से संतुष्ट यजमान
                  </div>
                </div>

                <div className="text-center p-3 bg-white/80 rounded-2xl border border-amber-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-vedic-saffron">
                    100%
                  </div>
                  <div className="text-[11px] sm:text-xs text-stone-600 font-medium mt-1">
                    वैदिक शुद्धता व गोपनीयता
                  </div>
                </div>
              </div>

              <div className="bg-amber-900 text-amber-50 p-4 rounded-xl text-xs text-center font-medium leading-relaxed">
                "पूजा केवल कर्मकांड नहीं, बल्कि श्रद्धा, विधि और समय (मुहूर्त) का पवित्र समन्वय है।"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
