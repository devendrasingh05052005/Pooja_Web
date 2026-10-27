import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import BookingForm from "@/components/BookingForm";
import {
  ShieldCheck,
  Award,
  BookOpen,
  MapPin,
  Calendar,
  Instagram,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "पंडित गोपाल कृष्ण शास्त्री जी का परिचय | Ujjain Vedic Purohit",
  description:
    "उज्जैन के सुप्रसिद्ध वैदिक पुरोहित पंडित गोपाल कृष्ण शास्त्री जी का 18+ वर्षों का शास्त्रीय परिचय। कालसर्प दोष, मंगल भात पूजा एवं वैदिक अनुष्ठान विशेषज्ञ।",
};

export default function AboutPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Profile Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-vedic-saffron to-amber-400 p-1.5 shadow-xl shrink-0">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-5xl font-extrabold text-vedic-saffron border-4 border-amber-100">
                ॐ
              </div>
            </div>

            <div className="text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>प्रमाणित तीर्थ पुरोहित उज्जैन</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900">
                {siteConfig.name}
              </h1>
              <p className="text-sm sm:text-base text-amber-800 font-semibold">
                शुक्ल यजुर्वेद एवं फलित ज्योतिष आचार्य | 18+ वर्षों का अनुभव
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                पंडित गोपाल कृष्ण शास्त्री जी भगवान महाकालेश्वर की पवित्र नगरी उज्जैन में वैदिक परंपरा अनुसार अनुष्ठान संपन्न कराते हैं। उनका उद्देश्य सनातन वैदिक पद्धति के अनुसार यजमानों के जीवन से ग्रहों के दुष्प्रभाव, कालसर्प दोष, मांगलिक दोष और पितृ दोष का शास्त्रसम्मत समाधान करना है।
              </p>

              <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-semibold">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-pink-600 hover:text-pink-700 bg-pink-50 px-3 py-1.5 rounded-lg border border-pink-200"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram Profile देखें</span>
                </a>

                <span className="flex items-center gap-1.5 text-stone-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                  <MapPin className="w-4 h-4 text-vedic-saffron" />
                  <span>उज्जैन, मध्य प्रदेश</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials & Vedic Education */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 space-y-2">
            <BookOpen className="w-8 h-8 text-vedic-saffron mb-2" />
            <h3 className="font-bold text-stone-900 text-base">वैदिक गुरुकुल परंपरा</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              पारंपरिक वैदिक गुरुकुल से शुक्ल यजुर्वेद, कर्मकांड एवं मंत्र संहिता का विधिवत अध्ययन व दीक्षा।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 space-y-2">
            <Award className="w-8 h-8 text-amber-600 mb-2" />
            <h3 className="font-bold text-stone-900 text-base">11,000+ सफल पूजन</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              पूरे भारत एवं विदेशों (NRI यजमानों) के लिए कालसर्प, मंगल भात पूजा और महामृत्युंजय जाप का सफल संपादन।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 space-y-2">
            <Sparkles className="w-8 h-8 text-emerald-600 mb-2" />
            <h3 className="font-bold text-stone-900 text-base">100% प्रामाणिक संकल्प</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              कोई दिखावा या आडंबर नहीं। यजमान के नाम, गोत्र और कुल की मर्यादा के अनुसार पूर्ण शास्त्रीय विधान।
            </p>
          </div>
        </div>

        {/* Pandit Ji's Message */}
        <div className="bg-gradient-to-r from-vedic-maroon to-stone-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-amber-400/30">
          <h2 className="text-xl font-bold text-amber-300">
            पंडित गोपाल कृष्ण शास्त्री जी का यजमानों को संदेश:
          </h2>
          <blockquote className="mt-3 text-stone-300 text-sm sm:text-base italic leading-relaxed">
            "उज्जैन तीर्थ में पूजा केवल एक क्रिया नहीं, बल्कि महाकाल और मंगल देव के चरणों में आत्म-समर्पण है। जब तक विधि, मंत्र और भाव शुद्ध न हों, तब तक फल की प्राप्ति नहीं होती। मेरा यही प्रयास रहता है कि उज्जैन आने वाले अथवा दूर से जुड़ने वाले प्रत्येक भक्त को शास्त्रीय समाधान और मानसिक शांति मिले।"
          </blockquote>
        </div>

        {/* Booking Form Integration */}
        <div className="pt-4">
          <BookingForm source="about_page" />
        </div>
      </div>
    </div>
  );
}
