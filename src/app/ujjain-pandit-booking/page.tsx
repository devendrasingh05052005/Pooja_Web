import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import BookingForm from "@/components/BookingForm";
import {
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Sparkles,
  MapPin,
  Clock,
  UserCheck,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ujjain Pandit Booking | Best Vedic Pandit in Ujjain for Puja",
  description:
    "Ujjain Pandit Booking: Book verified Vedic Pandit Gopal Krishna Shastri in Ujjain for Kaal Sarp Dosh Puja, Mangalnath Bhat Puja, Mahakal Rudrabhishek & Baglamukhi Anushthan. In-person & Online Sankalp.",
  keywords: [
    "Ujjain Pandit Booking",
    "Best Pandit in Ujjain",
    "Pandit in Ujjain for Puja",
    "Online Pandit Booking Ujjain",
    "Ujjain Pandit Contact Number",
    "उज्जैन पंडित बुकिंग",
    "उज्जैन में पूजा के लिए पंडित जी",
    "Kaal Sarp Puja Pandit Ujjain",
    "Mangal Dosh Pandit Ujjain",
    "Pandit Gopal Krishna Shastri Ujjain"
  ],
  alternates: {
    canonical: `${siteConfig.url}/ujjain-pandit-booking`,
  },
  openGraph: {
    title: "Ujjain Pandit Booking | Verified Vedic Purohit Pandit Gopal Krishna Shastri",
    description:
      "Book 10+ years experienced Vedic Pandit in Ujjain for authentic Kaal Sarp, Mangal Dosh, and all Vedic rituals. Transparent dakshina, in-person and online sankalp.",
    url: `${siteConfig.url}/ujjain-pandit-booking`,
    type: "website",
  },
};

export default function UjjainPanditBookingPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "जय श्री महाकाल पंडित जी! मुझे उज्जैन में पूजा हेतु पंडित बुकिंग और शुभ मुहूर्त के संबंध में जानकारी चाहिए।"
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Ujjain Pandit Booking",
        alternateName: "उज्जैन पंडित बुकिंग",
        description:
          "Book verified Vedic Pandit in Ujjain for Kaal Sarp, Mangal Dosh, Mahamrityunjay Jaap, and Vedic Poojas.",
        provider: {
          "@type": "Person",
          name: siteConfig.name,
          telephone: siteConfig.contact.callNumber,
        },
        areaServed: {
          "@type": "City",
          name: "Ujjain",
        },
        serviceType: "Vedic Priest Booking",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Ujjain Pandit Booking",
            item: `${siteConfig.url}/ujjain-pandit-booking`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-950 via-vedic-maroon to-stone-950 text-white pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden border-b-4 border-vedic-saffron">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-amber-300/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-300 font-bold">Ujjain Pandit Booking</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% प्रामाणिक एवं अनुभवी वैदिक पुरोहित | उज्जैन धाम</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Ujjain Pandit Booking <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                  उज्जैन में पूजा हेतु सर्वश्रेष्ठ पंडित जी
                </span>
              </h1>

              <p className="text-stone-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                भगवान श्री महाकालेश्वर एवं मंगलनाथ की पावन नगरी उज्जैन में कालसर्प दोष, मंगल भात पूजा, महामृत्युंजय जाप, रुद्राभिषेक एवं समस्त वैदिक अनुष्ठानों हेतु 10+ वर्षों के अनुभवी वैदिक विद्वान <strong>पंडित गोपाल कृष्ण शास्त्री जी</strong> से सीधे संपर्क कर शुभ मुहूर्त एवं पूजा स्लॉट बुक करें।
              </p>

              {/* Verified Profile Card */}
              <div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-lg mx-auto lg:mx-0 shadow-xl">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300 shrink-0">
                  <img
                    src="/images/pandit-gopal-krishna-shastri.jpg"
                    alt="पंडित गोपाल कृष्ण शास्त्री उज्जैन"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-base flex items-center gap-1.5">
                    <span>{siteConfig.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-xs text-amber-300 font-semibold mt-0.5">
                    शुक्ल यजुर्वेद आचार्य | 10+ वर्ष का अनुभव
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-300 mt-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span>4.9/5 रेटिंग (1,400+ संतुष्ट यजमान)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#book"
                  className="w-full sm:w-auto bg-gradient-to-r from-vedic-saffron to-amber-500 hover:from-amber-500 hover:to-vedic-saffron text-white font-extrabold px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5 text-center text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>पंडित जी का स्लॉट बुक करें</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-600 text-white font-bold px-7 py-4 rounded-xl shadow-xl transition flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>सीधे WhatsApp पर बात करें</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-300 space-y-5">
                <div className="text-center pb-4 border-b border-stone-200">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    Quick Booking Advantage
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900 mt-1">
                    उज्जैन में पंडित बुकिंग के लाभ
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>सीधा संपर्क, नो बिचौलिया:</strong> पंडित जी से सीधा संवाद, कोई एजेंट या कमीशन नहीं।
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>निःशुल्क कुंडली व मुहूर्त परीक्षण:</strong> जन्म कुंडली देखकर पूजा की आवश्यकता और शुभ मुहूर्त का सही निर्धारण।
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>100% वैदिक विधि एवं शुद्ध सामग्री:</strong> शास्त्रों के अनुसार चांदी के नाग, विशेष समिधा व पूजन सामग्री की पूर्व व्यवस्था।
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>प्रत्यक्ष व ऑनलाइन दोनों सुविधाएं:</strong> उज्जैन आश्रम में पधारकर करें या घर बैठे लाइव संकल्प द्वारा।
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 text-center">
                  <a
                    href={`tel:${siteConfig.contact.callNumber}`}
                    className="inline-flex items-center gap-2 text-stone-800 hover:text-vedic-saffron font-bold text-sm transition"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>हेल्पलाइन: {siteConfig.contact.callDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps Booking Guide */}
      <section className="py-16 bg-white border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              सरल एवं त्वरित 4 स्टेप्स
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2">
              उज्जैन में पंडित बुकिंग कैसे करें?
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              कुछ ही मिनटों में पंडित जी से जुड़कर अपनी पूजा सुनिश्चित करें।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-200">
              <div className="w-12 h-12 rounded-full bg-vedic-saffron text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-1">पूजा का चयन करें</h3>
              <p className="text-xs text-stone-600">
                कालसर्प, मंगल भात पूजा, रुद्राभिषेक, महामृत्युंजय या अन्य पूजन चुनें।
              </p>
            </div>

            <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-200">
              <div className="w-12 h-12 rounded-full bg-vedic-saffron text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-1">मुहूर्त व तिथि तय करें</h3>
              <p className="text-xs text-stone-600">
                पंडित जी से बात कर अपनी कुंडली अनुसार सबसे शुभ तिथि और समय निश्चित करें।
              </p>
            </div>

            <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-200">
              <div className="w-12 h-12 rounded-full bg-vedic-saffron text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-1">माध्यम चुनें</h3>
              <p className="text-xs text-stone-600">
                उज्जैन आश्रम आकर स्वयं बैठें या घर बैठे लाइव ऑनलाइन संकल्प से जुड़ें।
              </p>
            </div>

            <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-200">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-stone-900 text-base mb-1">पूजन व आशीर्वाद</h3>
              <p className="text-xs text-stone-600">
                100% शास्त्रीय विधि से पूजा संपन्न और सिद्ध रक्षासूत्र व प्रसाद प्राप्ति।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book" className="py-16 sm:py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              तत्काल स्लॉट निर्धारण
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2">
              पंडित जी से परामर्श व स्लॉट बुक करें
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              विवरण भरते ही पंडित जी के आधिकारिक WhatsApp पर आपका संदेश सीधे पहुंच जाएगा।
            </p>
          </div>

          <BookingForm source="ujjain-pandit-booking-page" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <HelpCircle className="w-8 h-8 text-vedic-saffron mx-auto mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              उज्जैन पंडित बुकिंग से जुड़े अक्सर पूछे जाने वाले प्रश्न (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                उज्जैन में पूजा के लिए पंडित बुकिंग कब करनी चाहिए?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                उज्जैन में विशेष तिथियों (सोमवती अमावस्या, नागपंचमी, मंगलवार, प्रदोष, महाशिवरात्रि) पर भारी भीड़ रहती है। इसलिए कम से कम 2 से 4 दिन पूर्व अपनी पूजा का स्लॉट और मुहूर्त बुक कर लेना श्रेष्ठ रहता है ताकि पूजन सामग्री और स्थान की पूर्व व्यवस्था हो सके।
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                क्या पूजा की दक्षिणा और सामग्री का शुल्क पहले से स्पष्ट होता है?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                हाँ, पंडित गोपाल कृष्ण शास्त्री जी द्वारा किसी भी प्रकार का छिपा हुआ शुल्क नहीं लिया जाता। पूजा सामग्री (जैसे चांदी का नाग जोड़ा, हवन समिधा) और दक्षिणा की पूर्व में पारदर्शी जानकारी दी जाती है।
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                यदि हम उज्जैन न आ सकें, तो क्या ऑनलाइन संकल्प पूजा मान्य है?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                शास्त्रों में यजमान के नाम, गोत्र और नक्षत्र से पुरोहित द्वारा प्रतिनिधि संकल्प का पूर्ण फल वर्णित है। पंडित जी द्वारा लाइव वीडियो कॉल पर संकल्प कराया जाता है और पूजन उपरांत महाप्रसाद व रक्षासूत्र कूरियर से भेजा जाता है।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
