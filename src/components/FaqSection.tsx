"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const globalFaqs = [
  {
    q: "उज्जैन में पूजा बुक करने का सही तरीका क्या है?",
    a: "आप वेबसाइट पर अपनी पसंदीदा पूजा, अनुमानित तिथि और अपनी जानकारी भरकर स्लॉट बुक कर सकते हैं। इसके बाद पंडित गोपाल शास्त्री जी आपसे सीधे फोन अथवा WhatsApp पर संपर्क कर आपकी जन्म कुंडली के अनुसार श्रेष्ठ मुहूर्त तय करेंगे। कोई अनिवार्य अग्रिम भुगतान नहीं है।",
  },
  {
    q: "क्या हमें पूजा की सामग्री अपने साथ लानी होगी?",
    a: "नहीं, पंडित गोपाल शास्त्री जी द्वारा संपूर्ण वैदिक एवं शुद्ध पूजन सामग्री (जैसे चांदी के नाग-नागिन, हवन समिधा, पंचामृत, वस्त्र, फूल-माला) स्वयं व्यवस्थित की जाती है। आपको केवल स्वच्छ वस्त्रों में उपस्थित होना होता है।",
  },
  {
    q: "यदि हम उज्जैन नहीं आ सकते, तो ऑनलाइन ई-पूजा (E-Pooja) कैसे संपन्न होती है?",
    a: "ऑनलाइन पूजा में पंडित जी आपके नाम, गोत्र, माता-पिता के नाम और कुल का विधिवत संकल्प लेकर उज्जैन के पावन तीर्थ पर पूजा संपन्न करते हैं। आपको लाइव वीडियो कॉल अथवा रिकॉर्डेड वीडियो भेजा जाता है, और अभिमंत्रित रक्षासूत्र व महाकाल का प्रसाद आपके पते पर स्पीड पोस्ट से भिजवाया जाता है।",
  },
  {
    q: "पूजा के दिन क्या नियम व परिधान (वस्त्र) होने चाहिए?",
    a: "पूजा के दिन सुबह स्नान करके सात्विक व स्वच्छ वस्त्र पहनें। पुरुषों के लिए धोती-कुर्ता या पायजामा-कुर्ता और महिलाओं के लिए साड़ी अथवा सलवार सूट उपयुक्त है। काले और गहरे नीले रंग के वस्त्रों से बचें। पूजा से पूर्व हल्का फलाहार कर सकते हैं।",
  },
  {
    q: "उज्जैन पहुंचने पर रुकने व धर्मशाला की क्या व्यवस्था है?",
    a: "उज्जैन रेलवे स्टेशन और महाकाल मंदिर के निकट यजमानों के रुकने के लिए उचित धर्मशालाएं एवं होटल उपलब्ध हैं। बुकिंग के बाद पंडित जी की टीम आपको सर्वोत्तम आश्रम व ठहरने की व्यवस्था में भी पूर्ण मार्गदर्शन करती है।",
  },
  {
    q: "मंगलनाथ मंदिर में भात पूजा के लिए कौन सा दिन श्रेष्ठ है?",
    a: "मंगलनाथ में भात पूजा के लिए मंगलवार, प्रदोष, मासिक शिवरात्रि अथवा कोई भी शुभ नक्षत्र श्रेष्ठ माना जाता है। पंडित जी से कुंडली दिखाकर सर्वोत्तम दिन निर्धारित किया जा सकता है।",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1 rounded-full text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-vedic-saffron" />
            <span>जिज्ञासा एवं समाधान</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            अक्सर पूछे जाने वाले <span className="text-vedic-saffron">महत्वपूर्ण प्रश्न (FAQ)</span>
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm">
            उज्जैन में वैदिक पूजा, मुहूर्त और व्यवस्था से जुड़े मुख्य प्रश्नों के उत्तर
          </p>
        </div>

        <div className="space-y-3.5">
          {globalFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-amber-200/80 rounded-2xl overflow-hidden transition-all duration-200 bg-amber-50/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-amber-100/50 transition cursor-pointer"
                >
                  <span className="font-bold text-stone-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-vedic-saffron text-white" : "text-stone-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-amber-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Structured Data for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: globalFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
