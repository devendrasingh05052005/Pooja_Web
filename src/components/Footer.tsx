import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { Phone, MessageCircle, MapPin, Mail, Instagram, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 sm:pb-12 border-t-4 border-vedic-saffron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Pandit Ji Profile (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-vedic-saffron text-white flex items-center justify-center font-bold text-2xl shadow-lg border-2 border-amber-400">
                ॐ
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {siteConfig.englishName}
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              उज्जैन (अवंतिका नगरी) के प्रतिष्ठित तीर्थ पुरोहित। कालसर्प दोष निवारण, मंगल भात पूजा, महामृत्युंजय जाप, कुंभ विवाह, अर्क विवाह एवं समस्त वैदिक अनुष्ठान 100% शास्त्रीय पद्धति से संपन्न कराए जाते हैं।
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-white/5 p-2.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>प्रमाणित वैदिक पुरोहित | 18+ वर्ष का अनुभव</span>
            </div>

            <div className="pt-1">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-white transition"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram Profile: @__pandit_gopal_shastri_ujjain</span>
              </a>
            </div>
          </div>

          {/* All 10 Pooja Links - SEO Silo (Col 5-8) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-stone-800 pb-2">
              उज्जैन वैदिक पूजन सेवाएं (All Major Services)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {servicesData.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 py-0.5 text-stone-300"
                >
                  <span className="text-amber-500 font-bold">›</span>
                  <span className="truncate">{service.titleHindi}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Ujjain Sthal Info (Col 9-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-stone-800 pb-2">
              संपर्क एवं उज्जैन धाम
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.callNumber}`}
                  className="hover:text-white font-semibold text-stone-200"
                >
                  कॉल करें: {siteConfig.contact.callDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.contact.preWrittenMessages.general
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-emerald-400"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span className="text-stone-400">{siteConfig.contact.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#book"
                className="block text-center bg-gradient-to-r from-vedic-saffron to-amber-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow hover:brightness-110 transition"
              >
                मुहूर्त व स्लॉट बुक करें
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. सर्वाधिकार सुरक्षित।
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-stone-400">
              होम (Home)
            </Link>
            <Link href="/about-pandit-ji" className="hover:text-stone-400">
              पंडित जी परिचय
            </Link>
            <Link href="/admin" className="hover:text-stone-400">
              प्रशासक लॉगिन (Admin)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
