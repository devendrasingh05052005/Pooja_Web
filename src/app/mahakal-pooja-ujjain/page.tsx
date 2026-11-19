import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import BookingForm from "@/components/BookingForm";
import {
  ShieldCheck,
  Flame,
  Droplets,
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  MapPin,
  Clock,
  HeartPulse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mahakal Pooja Ujjain | Mahakaleshwar Rudrabhishek & Special Puja Booking",
  description:
    "Mahakal Pooja Ujjain: Book sacred Rudrabhishek, Laghurudra, Mahamrityunjay Jaap & special puja at Shri Mahakaleshwar Jyotirlinga Ujjain by Vedic Pandit Gopal Krishna Shastri.",
  keywords: [
    "Mahakal Pooja Ujjain",
    "Mahakaleshwar Puja Booking",
    "Rudrabhishek in Ujjain",
    "Mahakal Rudrabhishek Pandit",
    "Bhasma Aarti Ujjain Guidance",
    "महाकाल पूजा उज्जैन",
    "महाकालेश्वर रुद्राभिषेक बुकिंग",
    "Ujjain Mahakal Puja Cost",
    "Pandit Gopal Krishna Shastri Mahakal"
  ],
  alternates: {
    canonical: `${siteConfig.url}/mahakal-pooja-ujjain`,
  },
  openGraph: {
    title: "Mahakal Pooja Ujjain | Shri Mahakaleshwar Jyotirlinga Vedic Puja",
    description:
      "Perform authentic Rudrabhishek and Vedic Poojas in the sacred city of Lord Mahakal with Vedic Scholar Pandit Gopal Krishna Shastri. In-person & Online Sankalp.",
    url: `${siteConfig.url}/mahakal-pooja-ujjain`,
    type: "website",
  },
};

export default function MahakalPoojaUjjainPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "जय श्री महाकाल पंडित जी! मुझे उज्जैन में महाकाल पूजा (रुद्राभिषेक / लघुरुद्र / भस्म आरती दर्शन मार्गदर्शन) के संबंध में जानकारी चाहिए।"
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Mahakal Pooja Ujjain",
        alternateName: "महाकाल पूजा एवं रुद्राभिषेक उज्जैन",
        description:
          "Sacred Rudrabhishek and Vedic Mahakal pooja at Mahakaleshwar Jyotirlinga Ujjain.",
        provider: {
          "@type": "Person",
          name: siteConfig.name,
          telephone: siteConfig.contact.callNumber,
        },
        areaServed: {
          "@type": "City",
          name: "Ujjain",
        },
        serviceType: "Mahakal Religious Puja",
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
            name: "Mahakal Pooja Ujjain",
            item: `${siteConfig.url}/mahakal-pooja-ujjain`,
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
      <section className="relative bg-gradient-to-b from-stone-950 via-vedic-maroon to-stone-950 text-white pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden border-b-4 border-vedic-saffron">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-amber-300/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-300 font-bold">Mahakal Pooja Ujjain</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>द्वादश ज्योतिर्लिंग तीर्थ | दक्षिणामुखी श्री महाकालेश्वर धाम</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Mahakal Pooja Ujjain <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                  श्री महाकालेश्वर रुद्राभिषेक एवं विशेष पूजन
                </span>
              </h1>

              {/* Sacred Mahakal Stotra Box */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-stone-900/90 via-amber-950/70 to-stone-900/90 rounded-2xl border border-amber-400/40 shadow-xl text-center">
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-widest mb-1">
                  ॥ श्री महाकाल स्तुति ॥
                </div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-amber-100 font-serif leading-relaxed">
                  &ldquo;आकाशे तारकं लिंगं पाताले हाटकेश्वरम्। <br className="hidden sm:inline" />
                  मर्त्यलोके च विख्यातं महाकाल नमोऽस्तुते॥&rdquo;
                </p>
                <div className="text-[10px] text-stone-400 mt-1">
                  (मृत्युलोक के एकमात्र अधिपति भगवान महाकाल के पावन धाम में पूजन)
                </div>
              </div>

              <p className="text-stone-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                उज्जैन में भगवान श्री महाकालेश्वर ज्योतिर्लिंग के पावन क्षेत्र में वैदिक मंत्रोच्चार, पंचामृत अभिषेक, रुद्राध्याय पाठ, भस्म व बेलपत्र समर्पण के साथ संपूर्ण विधि-विधान से <strong>पंडित गोपाल कृष्ण शास्त्री जी</strong> द्वारा रुद्राभिषेक एवं महाकाल पूजन संपन्न कराया जाता है।
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#book"
                  className="w-full sm:w-auto bg-gradient-to-r from-vedic-saffron to-amber-500 hover:from-amber-500 hover:to-vedic-saffron text-white font-extrabold px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5 text-center text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>महाकाल पूजा स्लॉट बुक करें</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-600 text-white font-bold px-7 py-4 rounded-xl shadow-xl transition flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp पर सीधे बात करें</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-300 space-y-5">
                <div className="text-center pb-4 border-b border-stone-200">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    महाकाल धाम पूजन श्रेणियां
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900 mt-1">
                    प्रमुख महाकाल पूजन सेवाएं
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>रुद्राभिषेक पूजन:</strong> दूध, दही, घी, शहद, गंगाजल, गन्ने के रस से भगवान शिव का षोडशोपचार अभिषेक।
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HeartPulse className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>महामृत्युंजय मंत्र जाप:</strong> गंभीर व्याधियों, अकाल मृत्यु भय व संकट निवारण हेतु सवा लाख जाप।
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Flame className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>लघुरुद्र एवं महारुद्र अनुष्ठान:</strong> विशेष मनोकामना पूर्ति, राजयोग एवं कुल की समृद्धि हेतु विशाल अनुष्ठान।
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>भस्म आरती व दर्शन मार्गदर्शन:</strong> उज्जैन पधारने वाले यजमानों हेतु दर्शन व्यवस्था एवं उचित मार्गदर्शन।
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 text-center">
                  <a
                    href={`tel:${siteConfig.contact.callNumber}`}
                    className="inline-flex items-center gap-2 text-stone-800 hover:text-vedic-saffron font-bold text-sm transition"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>कॉल करें: {siteConfig.contact.callDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book" className="py-16 sm:py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              शुभ मुहूर्त एवं स्लॉट बुकिंग
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2">
              महाकाल पूजन हेतु स्लॉट निर्धारित करें
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              पंडित गोपाल कृष्ण शास्त्री जी से अपनी मनोकामना अनुसार उचित पूजन और मुहूर्त तय करें।
            </p>
          </div>

          <BookingForm
            defaultPooja="रुद्राभिषेक पूजन (महाकालेश्वर ज्योतिर्लिंग)"
            source="mahakal-pooja-ujjain-page"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <HelpCircle className="w-8 h-8 text-vedic-saffron mx-auto mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              महाकाल पूजा से जुड़े प्रमुख प्रश्न (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                उज्जैन में महाकाल रुद्राभिषेक का क्या विशेष महत्व है?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                उज्जैन में भगवान महाकाल दक्षिणमुखी हैं, जिन्हें काल का स्वामी माना गया है। महाकाल धाम में रुद्राभिषेक कराने से अकाल मृत्यु का भय समाप्त होता है, सभी ग्रह शांत होते हैं और यजमान को आरोग्य व सुख-शांति की प्राप्ति होती है।
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                क्या महाकाल रुद्राभिषेक ऑनलाइन संकल्प से भी संभव है?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                हाँ, देश-विदेश से जो यजमान उज्जैन नहीं आ सकते, वे अपने नाम व गोत्र से ऑनलाइन संकल्प द्वारा पूजा संपन्न करवा सकते हैं। पंडित जी द्वारा लाइव वीडियो दर्शन कराए जाते हैं और अभिमंत्रित भस्म, रक्षासूत्र व प्रसाद स्पीड पोस्ट से भेजा जाता है।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
