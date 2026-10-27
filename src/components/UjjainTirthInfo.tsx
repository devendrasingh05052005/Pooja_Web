import React from "react";
import { MapPin, Sparkles } from "lucide-react";

export default function UjjainTirthInfo() {
  const tirthSthals = [
    {
      title: "श्री मंगलनाथ मंदिर (Mangalnath Mandir)",
      subtitle: "मंगल ग्रह की जन्मस्थली एवं भात पूजा का एकमात्र विश्व प्रसिद्ध केंद्र",
      desc: "मत्स्य पुराण के अनुसार मंगलनाथ मंदिर ही भगवान मंगल देव का प्राकट्य स्थल है। यहां स्थित शिवलिंग पर पके हुए चावल (भात) का लेपन कर पूजा की जाती है, जिससे कुंडली के भीषण मांगलिक दोष एवं अंगारक योग शांत होते हैं।",
      highlight: "मांगलिक दोष निवारण एवं भात पूजा",
    },
    {
      title: "श्री महाकालेश्वर ज्योतिर्लिंग (Mahakaleshwar)",
      subtitle: "द्वादश ज्योतिर्लिंगों में एकमात्र दक्षिणमुखी महाकाल",
      desc: "भगवान महाकाल काल के भी अधिपति हैं। अकाल मृत्यु भय, गंभीर व्याधियों और कालसर्प दोष की शांति हेतु महाकालेश्वर क्षेत्र में किया गया रुद्राभिषेक एवं महामृत्युंजय अनुष्ठान तुरंत फलदायी होता है।",
      highlight: "महामृत्युंजय जाप एवं रुद्राभिषेक",
    },
    {
      title: "पवित्र रामघाट (Ramghat, Shipra River)",
      subtitle: "भगवान राम द्वारा पितृ तर्पण की पावन भूमि",
      desc: "मोक्षदायिनी क्षिप्रा नदी के तट पर स्थित रामघाट पर कालसर्प योग शांति, नाग-नागिन विसर्जन और वैदिक संकल्प लिए जाते हैं। यहां स्नान व पूजन से जन्म-जन्मांतर के पाप धुल जाते हैं।",
      highlight: "कालसर्प दोष निवारण एवं नाग पूजा",
    },
    {
      title: "सिद्धवट तीर्थ (Siddhavat Mandir)",
      subtitle: "पितृ मोक्ष, त्रिपिंडी श्राद्ध एवं नारायण बलि का महातीर्थ",
      desc: "प्रयाग के अक्षयवट और गया के वटवृक्ष के समान सिद्धवट पर पिंडदान करने से सात पीढ़ियों के पितरों को सद्गति मिलती है। पितृ दोष निवारण और वंश वृद्धि हेतु यह सर्वोत्तम स्थल है।",
      highlight: "पितृ दोष शांति एवं नारायण बलि",
    },
  ];

  return (
    <section id="ujjain-tirth" className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1 rounded-full text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-vedic-saffron" />
            <span>अवंतिका तीर्थ महात्म्य</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            उज्जैन के <span className="text-vedic-saffron">प्रमुख सिद्ध तीर्थ स्थल</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            उज्जैन पृथ्वी का नाभि स्थल और काल-गणना का केंद्र है। जानिए किस पूजा के लिए कौन सा स्थल शास्त्रों में सर्वश्रेष्ठ बताया गया है।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {tirthSthals.map((tirth, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-amber-200/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-vedic-saffron uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{tirth.highlight}</span>
                </div>

                <h3 className="text-xl font-bold text-stone-900">
                  {tirth.title}
                </h3>
                <h4 className="text-xs text-amber-800 font-semibold mt-1">
                  {tirth.subtitle}
                </h4>

                <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                  {tirth.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-amber-50 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">पंडित गोपाल कृष्ण शास्त्री जी द्वारा संचालित</span>
                <a
                  href="#book"
                  className="font-bold text-vedic-saffron hover:text-amber-700 underline"
                >
                  इस स्थल पर पूजा बुक करें →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
