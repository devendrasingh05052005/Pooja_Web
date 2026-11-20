import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import BookingForm from "@/components/BookingForm";
import {
  ShieldCheck,
  Scale,
  ShieldAlert,
  Crown,
  Flame,
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  MapPin,
  Clock,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "मां बगलामुखी विशेष अनुष्ठान उज्जैन | शत्रु विजय, कोर्ट केस व स्तम्भन | पं. गोपाल कृष्ण शास्त्री",
  description:
    "उज्जैन में मां पीताम्बरा बगलामुखी का सवा लाख (1,25,000) अथवा 36,000 मंत्र जाप विशेष महा अनुष्ठान। झूठे कोर्ट केस, शत्रु बाधा, व्यापारिक षड्यंत्र व स्तम्भन निवारण हेतु पंडित गोपाल कृष्ण शास्त्री जी से संपर्क करें।",
  keywords: [
    "Baglamukhi Vishesh Anushthan Ujjain",
    "Maa Baglamukhi Puja Ujjain",
    "Baglamukhi Court Case Puja Ujjain",
    "Shatru Stambhan Baglamukhi Anushthan",
    "बगलामुखी विशेष अनुष्ठान उज्जैन",
    "मां बगलामुखी सवा लाख जाप उज्जैन",
    "नलखेड़ा बगलामुखी अनुष्ठान पंडित",
    "Pandit Gopal Krishna Shastri Baglamukhi"
  ],
  alternates: {
    canonical: `${siteConfig.url}/baglamukhi-vishesh-anushthan`,
  },
  openGraph: {
    title: "मां बगलामुखी विशेष अनुष्ठान उज्जैन | शत्रु विजय व कोर्ट केस निवारण",
    description:
      "मां पीताम्बरा बगलामुखी का शास्त्रोक्त सवा लाख मंत्र जाप महा अनुष्ठान पंडित गोपाल कृष्ण शास्त्री जी द्वारा। कोर्ट केस व शत्रु बाधा से मुक्ति हेतु उज्जैन आकर या ऑनलाइन संकल्प से करवाएं।",
    url: `${siteConfig.url}/baglamukhi-vishesh-anushthan`,
    type: "website",
  },
};

export default function BaglamukhiSpecialPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "जय श्री महाकाल पंडित जी! मुझे मां बगलामुखी विशेष अनुष्ठान (कोर्ट केस / शत्रु निवारण / व्यापार रक्षा) के शुभ मुहूर्त और संकल्प के संबंध में जानकारी चाहिए।"
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "मां बगलामुखी विशेष अनुष्ठान",
        alternateName: "Maa Baglamukhi Vishesh Anushthan in Ujjain",
        description:
          "उज्जैन एवं नलखेड़ा सिद्ध पीठ पर मां बगलामुखी का सवा लाख मंत्र जाप, त्रिकोण हवन एवं शत्रु स्तम्भन महा अनुष्ठान।",
        provider: {
          "@type": "Person",
          name: siteConfig.name,
          telephone: siteConfig.contact.callNumber,
        },
        areaServed: {
          "@type": "City",
          name: "Ujjain",
        },
        serviceType: "Maa Baglamukhi Vedic Anushthan",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "मुख्य पृष्ठ",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "मां बगलामुखी विशेष अनुष्ठान",
            item: `${siteConfig.url}/baglamukhi-vishesh-anushthan`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Divine Peetambari (Yellow/Gold & Deep Royal) Theme */}
      <section className="relative bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 text-white pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden border-b-4 border-yellow-500">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-amber-300/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition">
              मुख्य पृष्ठ
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-yellow-400 font-bold">
              मां बगलामुखी विशेष अनुष्ठान
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 via-amber-400/30 to-yellow-500/20 text-yellow-300 border border-yellow-400/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                <Crown className="w-4 h-4 text-yellow-400" />
                <span>अष्टम महाविद्या श्री पीताम्बरा साधना | अचूक स्तम्भन एवं शत्रु विजय</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                मां बगलामुखी <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400">
                  विशेष महा अनुष्ठान
                </span>
              </h1>

              {/* Mool Mantra Highlight Box */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-950/80 via-stone-900/90 to-amber-950/80 rounded-2xl border-2 border-yellow-500/50 shadow-2xl text-center">
                <div className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest mb-1">
                  ॥ श्री बगलामुखी मूल महामंत्र ॥
                </div>
                <p className="text-xs sm:text-sm md:text-base font-bold text-amber-100 tracking-wide leading-relaxed font-serif">
                  &ldquo;ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा॥&rdquo;
                </p>
                <div className="text-[10px] text-stone-400 mt-1">
                  (शत्रु की कुटिल बुद्धि, वाणी और क्रियाओं को स्तम्भित करने वाली ब्रह्मास्त्र विद्या)
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                झूठे कोर्ट केस, मुकदमे, भूमि-संपत्ति विवाद, राजनीतिक षड्यंत्र अथवा व्यापारिक शत्रुओं के कारण आ रही घोर बाधाओं के त्वरित निवारण हेतु अवंतिका तीर्थ (उज्जैन) में पंडित गोपाल कृष्ण शास्त्री जी द्वारा विधिपूर्वक सवा लाख (1,25,000) अथवा 36,000 मंत्र जाप महा अनुष्ठान संपन्न कराया जाता है।
              </p>

              {/* Pandit Ji Profile Chip */}
              <div className="flex items-center justify-center lg:justify-start gap-3.5 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-yellow-400/30 max-w-md mx-auto lg:mx-0">
                <div className="w-14 h-14 rounded-xl overflow-hidden shadow border-2 border-yellow-400 shrink-0">
                  <img
                    src="/images/pandit-gopal-krishna-shastri.jpg"
                    alt="पंडित गोपाल कृष्ण शास्त्री उज्जैन"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm flex items-center gap-1.5">
                    <span>{siteConfig.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-yellow-300 font-semibold">
                    10+ वर्षों का शाक्त व वैदिक अनुष्ठान अनुभव
                  </div>
                  <div className="text-[11px] text-stone-300">
                    उज्जैन आश्रम एवं मां बगलामुखी सिद्ध पीठ क्षेत्र
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="#book"
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 hover:brightness-110 text-stone-950 font-extrabold px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5 text-center text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5 text-stone-950" />
                  <span>अनुष्ठान स्लॉट बुक करें</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-600 text-white font-bold px-6 py-4 rounded-xl shadow-xl transition flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>पंडित जी से WhatsApp परामर्श</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Specs */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-stone-900/90 via-amber-950/60 to-stone-900/90 p-6 sm:p-8 rounded-3xl border-2 border-yellow-400/50 shadow-2xl space-y-6">
                <div className="text-center pb-4 border-b border-yellow-400/30">
                  <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">
                    अनुष्ठान की मुख्य विशेषताएं
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1">
                    100% सात्विक एवं तांत्रिक मर्यादा
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">जाप संख्या विकल्प:</span>
                      <p className="text-stone-300 text-xs mt-0.5">
                        36,000 मंत्र जाप (3 दिन) अथवा 1,25,000 सवा लाख महा अनुष्ठान (5-7 दिन)।
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">विशेष पीताम्बरी सामग्री:</span>
                      <p className="text-stone-300 text-xs mt-0.5">
                        हल्दी की सिद्ध माला, पीले वस्त्र, त्रिकोण हवन कुंड, पीली सरसों, मधु एवं घृत।
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">पूर्ण वैदिक विधि-विधान:</span>
                      <p className="text-stone-300 text-xs mt-0.5">
                        संकल्प, विनियोग, ऋष्यादि न्यास, कवच पाठ, दशांश हवन, तर्पण, मार्जन व ब्राह्मण भोजन।
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">सिद्ध रक्षा कवच / ताबीज:</span>
                      <p className="text-stone-300 text-xs mt-0.5">
                        अनुष्ठान उपरांत यजमान को आजीवन रक्षा हेतु अभिमंत्रित सिद्ध बगलामुखी ताबीज समर्पण।
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-yellow-400/20 text-center">
                  <a
                    href={`tel:${siteConfig.contact.callNumber}`}
                    className="inline-flex items-center gap-2 text-yellow-300 hover:text-white font-bold text-xs sm:text-sm transition"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>सीधे कॉल करें: {siteConfig.contact.callDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Major Purposes for Baglamukhi Anushthan */}
      <section className="py-16 bg-white border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-yellow-100 text-yellow-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-yellow-300">
              किन समस्याओं में यह अनुष्ठान रामबाण है?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3">
              मां बगलामुखी अनुष्ठान के <span className="text-vedic-saffron">अलौकिक लाभ एवं प्रभाव</span>
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              मां बगलामुखी की साधना संसार की सबसे शक्तिशाली रक्षा एवं स्तम्भन साधना मानी गई है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Court Cases */}
            <div className="p-6 bg-gradient-to-br from-amber-50/70 to-yellow-50/40 rounded-2xl border-2 border-yellow-300 shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-bold mb-4 shadow">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                कोर्ट-कचहरी एवं झूठे मुकदमों में विजय
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                यदि आपको षड्यंत्रपूर्वक किसी झूठे केस, मुकदमे या कानूनी विवाद में फंसा दिया गया है, तो मां बगलामुखी का अनुष्ठान विरोधी पक्ष की बुद्धि और वाक-शक्ति को स्तम्भित कर शीघ्र आपके पक्ष में निर्णय कराता है।
              </p>
            </div>

            {/* 2. Hidden Enemies & Competitors */}
            <div className="p-6 bg-gradient-to-br from-amber-50/70 to-yellow-50/40 rounded-2xl border-2 border-yellow-300 shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-bold mb-4 shadow">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                प्रत्यक्ष व गुप्त शत्रुओं का स्तम्भन
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                अकारण परेशान करने वाले शत्रु, विरोधी, ईर्ष्यालु पड़ोसी अथवा कार्यक्षेत्र में अड़चन डालने वाले लोगों के षड्यंत्र स्वतः निष्फल हो जाते हैं और वे आपके सामने नतमस्तक होते हैं।
              </p>
            </div>

            {/* 3. Politics & Administration */}
            <div className="p-6 bg-gradient-to-br from-amber-50/70 to-yellow-50/40 rounded-2xl border-2 border-yellow-300 shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-bold mb-4 shadow">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                राजनीतिक व प्रशासनिक वर्चस्व
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                चुनाव, राजनीतिक पद, उच्च प्रशासनिक पदों एवं सामाजिक प्रतिष्ठा की रक्षा हेतु मां बगलामुखी अनुष्ठान प्राचीन काल से राजा-महाराजाओं और राजनेताओं द्वारा कराया जाता रहा है।
              </p>
            </div>

            {/* 4. Business Protection */}
            <div className="p-6 bg-gradient-to-br from-amber-50/70 to-yellow-50/40 rounded-2xl border-2 border-yellow-300 shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-bold mb-4 shadow">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                व्यापार, ठेकेदारी व टेंडर में सुरक्षा
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                व्यापारिक साझेदारों द्वारा धोखे, टेंडर में रुकावट, अटके हुए करोड़ों रुपयों की वसूली और प्रतिद्वंद्वियों की गंदी चालों को समाप्त करने के लिए यह अनुष्ठान अत्यंत लाभकारी है।
              </p>
            </div>

            {/* 5. Tantrik Badha & Evil Eye */}
            <div className="p-6 bg-gradient-to-br from-amber-50/70 to-yellow-50/40 rounded-2xl border-2 border-yellow-300 shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-bold mb-4 shadow">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                तांत्रिक बाधा, नजर दोष व उच्चाटन नाश
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                घर या व्यापार पर किसी द्वारा कराई गई तांत्रिक क्रिया, मारण/उच्चाटन, नजर दोष अथवा अज्ञात भय का मां बगलामुखी की कृपा से समूल नाश होता है और चारों ओर सुरक्षा चक्र बन जाता है।
              </p>
            </div>

            {/* 6. Land & Family Property Dispute */}
            <div className="p-6 bg-gradient-to-br from-amber-50/70 to-yellow-50/40 rounded-2xl border-2 border-yellow-300 shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-bold mb-4 shadow">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                जमीन-जायदाद व पैतृक संपत्ति विवाद
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                अवैध कब्जे, पैतृक संपत्ति में बेईमानी या भूमि विवाद के मामलों में मां बगलामुखी अनुष्ठान से विरोधी पक्ष समझौता करने पर विवश हो जाता है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Ritual Packages Comparison */}
      <section className="py-16 bg-gradient-to-b from-stone-100 to-amber-50/60 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-200/80 px-3 py-1 rounded-full">
              शास्त्रसम्मत अनुष्ठान संकल्प
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              अनुष्ठान के दो प्रमुख शास्त्रीय विकल्प
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              आप अपनी समस्या की गंभीरता अनुसार उपयुक्त अनुष्ठान का चयन कर सकते हैं।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: 36,000 Jap */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-lg relative flex flex-col justify-between">
              <div>
                <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  शीघ्र फलदायी लघु अनुष्ठान
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  36,000 मंत्र जाप अनुष्ठान
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  अवधि: 1 से 3 दिन | 2 से 3 वैदिक ब्राह्मण
                </p>

                <div className="mt-5 space-y-3 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>यजमान नाम, गोत्र व संकल्प पूर्वक मंत्र जाप</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>हल्दी की माला से एकाग्र चित्त पाठ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>त्रिकोण कुंड में पीली सरसों व घृत दशांश हवन</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>बगलामुखी कवच एवं रक्षासूत्र समर्पण</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-amber-100">
                <a
                  href="#book"
                  className="block text-center bg-stone-900 hover:bg-stone-800 text-white font-bold py-3 rounded-xl text-sm transition"
                >
                  36,000 जाप हेतु बात करें
                </a>
              </div>
            </div>

            {/* Option 2: 1,25,000 Jap (Most Recommended) */}
            <div className="bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 border-2 border-yellow-400 shadow-2xl relative flex flex-col justify-between ring-4 ring-yellow-400/20">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 font-extrabold text-[11px] px-3 py-1 rounded-full shadow">
                ⭐ सर्वाधिक प्रभावशाली एवं अनुशंसित
              </div>

              <div>
                <div className="inline-block bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-yellow-400/30">
                  महा संकट एवं कोर्ट केस निवारक
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  1,25,000 (सवा लाख) महा अनुष्ठान
                </h3>
                <p className="text-xs text-amber-300 mt-1">
                  अवधि: 5 से 7 दिन | 5 से 7 आचार्य ब्राह्मण | अखंड ज्योति
                </p>

                <div className="mt-5 space-y-3 text-xs sm:text-sm text-stone-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    <span>अखंड दीप प्रज्वलन एवं 5-7 दिन का पूर्ण अनुष्ठान</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    <span>1,25,000 मंत्रों का सस्वर शुद्ध शाक्त उच्चारण</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    <span>12,500 मंत्रों का पूर्ण दशांश महाहवन (त्रिकोण वेदी)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    <span>तर्पण, मार्जन, ब्राह्मण भोजन एवं कन्या पूजन</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    <span>सिद्ध बगलामुखी रक्षा कवच ताबीज यजमान को समर्पण</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-yellow-400/30">
                <a
                  href="#book"
                  className="block text-center bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 hover:brightness-110 text-stone-950 font-extrabold py-3.5 rounded-xl text-sm transition shadow-lg"
                >
                  सवा लाख महा अनुष्ठान बुक करें
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="bg-yellow-100 text-yellow-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-yellow-300">
              शुभ मुहूर्त एवं संकल्प निर्धारण
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3">
              मां बगलामुखी अनुष्ठान हेतु स्लॉट बुक करें
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-lg mx-auto">
              पंडित गोपाल कृष्ण शास्त्री जी से सीधे बात कर अपनी समस्या अनुसार उपयुक्त मुहूर्त और अनुष्ठान का निर्धारण करें।
            </p>
          </div>

          <BookingForm
            defaultPooja="मां बगलामुखी विशेष अनुष्ठान (शत्रु विजय, कोर्ट केस एवं स्तम्भन)"
            source="baglamukhi-special-page"
          />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-stone-100 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              मां बगलामुखी अनुष्ठान से जुड़े प्रमुख प्रश्न
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                क्या मां बगलामुखी अनुष्ठान गृहस्थ व्यक्ति करवा सकते हैं?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                हाँ, बिल्कुल! पंडित गोपाल कृष्ण शास्त्री जी द्वारा यह अनुष्ठान पूर्णतः सात्विक एवं वैदिक मर्यादा से संपन्न कराया जाता है। इसमें किसी भी तामसिक पद्धति का प्रयोग नहीं होता। इससे गृहस्थ परिवार को केवल रक्षा, सुख और विजय प्राप्त होती है।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                कोर्ट केस या मुकदमे में इसका प्रभाव कितने समय में दिखाई देता है?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                सवा लाख अथवा 36,000 मंत्र जाप के दशांश हवन के तुरंत बाद से ही विरोधी पक्ष की आक्रामकता शांत होने लगती है और कानूनी मामले में अनुकूल परिस्थितियां व साक्ष्य बनने लगते हैं।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                क्या इस अनुष्ठान के लिए उज्जैन आना आवश्यक है?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                यदि आप स्वयं आ सकते हैं, तो उज्जैन आश्रम में उपस्थित होकर बैठना सर्वोत्तम है। यदि समय अथवा दूरी की समस्या हो, तो आप अपने नाम, गोत्र और समस्या विवरण से ऑनलाइन संकल्प करवा सकते हैं। पंडित जी द्वारा लाइव वीडियो दर्शन कराए जाएंगे और सिद्ध रक्षा कवच आपके घर तक कूरियर से भेजा जाएगा।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                अनुष्ठान के समय यजमान को किन नियमों का पालन करना होता है?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                अनुष्ठान की अवधि में सात्विक भोजन (लहसुन-प्याज और मदिरा से पूर्ण परहेज), ब्रह्मचर्य का पालन, पीले वस्त्र धारण करना और वाणी पर संयम रखना आवश्यक माना गया है।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
