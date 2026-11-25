import React from "react";
import { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/config/site";
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "शुभ मुहूर्त एवं पूजन स्लॉट बुकिंग | पं. गोपाल कृष्ण शास्त्री उज्जैन",
  description:
    "उज्जैन में कालसर्प दोष निवारण, मंगल भात पूजा, महाकाल रुद्राभिषेक एवं समस्त वैदिक पूजाओं हेतु शुभ मुहूर्त व पूजन स्लॉट सीधे बुक करें।",
};

export default function BookPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "प्रणाम पंडित जी, मुझे उज्जैन में पूजन हेतु शुभ मुहूर्त एवं स्लॉट बुकिंग की जानकारी चाहिए।"
  )}`;

  return (
    <div className="bg-gradient-to-b from-stone-900 via-amber-950 to-stone-900 text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>100% प्रामाणिक वैदिक परंपरा | उज्जैन धाम</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            शुभ मुहूर्त एवं पूजन स्लॉट निर्धारण
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            पंडित गोपाल कृष्ण शास्त्री जी से सीधे बात कर अपनी जन्म कुंडली अनुसार श्रेष्ठ मुहूर्त एवं पूजन व्यवस्था तय करें। विवरण भरते ही आपको तुरंत पुष्टि प्राप्त होगी।
          </p>
        </div>

        {/* Main Content Grid: Form on Left/Right, Pandit Ji Credentials on side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Trust, Credentials & Quick Helplines */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pandit Ji Profile Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-amber-400/30 shadow-2xl space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300 shrink-0">
                  <img
                    src="/images/pandit-gopal-krishna-shastri.jpg"
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-white font-bold text-base sm:text-lg">
                    <span>{siteConfig.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                  <p className="text-xs text-amber-300 font-semibold mt-0.5">
                    शुक्ल यजुर्वेद आचार्य | 10+ वर्ष अनुभव
                  </p>
                  <p className="text-[11px] text-stone-300 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>महाकालेश्वर एवं मंगलनाथ क्षेत्र, उज्जैन</span>
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2.5 text-xs text-stone-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>नो बिचौलिया / नो कमीशन:</strong> पंडित जी से सीधा संपर्क।</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>निःशुल्क जन्मपत्री परामर्श:</strong> पूजन से पूर्व सही विधि निर्धारण।</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>प्रत्यक्ष व ऑनलाइन सुविधा:</strong> आश्रम में पधारें या घर बैठे E-संकल्प।</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>महाप्रसाद व सिद्ध रक्षासूत्र:</strong> पूजन उपरांत सीधे आपके घर कूरियर।</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={`tel:${siteConfig.contact.callNumber}`}
                  className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <Phone className="w-4 h-4 text-stone-950" />
                  <span>सीधे फोन पर बात करें: {siteConfig.contact.callDisplay}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp पर तुरंत चैट करें</span>
                </a>
              </div>
            </div>

            {/* Timings & Address */}
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 text-xs space-y-2 text-stone-300">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <Clock className="w-4 h-4" />
                <span>परामर्श समय: प्रातः 6:00 से रात्रि 10:30 (सातों दिन)</span>
              </div>
              <p>
                उज्जैन आने वाले यजमानों हेतु विश्राम व्यवस्था एवं मंदिर दर्शन में आवश्यक मार्गदर्शन भी उपलब्ध कराया जाता है।
              </p>
            </div>
          </div>

          {/* Right Column: The Complete Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm source="dedicated_book_page" />
          </div>
        </div>
      </div>
    </div>
  );
}
