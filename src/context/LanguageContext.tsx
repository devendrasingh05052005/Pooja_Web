"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageCode =
  | "hi"
  | "en"
  | "mr"
  | "gu"
  | "te"
  | "ta"
  | "bn"
  | "kn"
  | "ml"
  | "pa";

export interface LanguageOption {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
}

export const supportedLanguages: LanguageOption[] = [
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi" },
  { code: "en", nativeName: "English", englishName: "English" },
  { code: "mr", nativeName: "मराठी", englishName: "Marathi" },
  { code: "gu", nativeName: "ગુજરાતી", englishName: "Gujarati" },
  { code: "te", nativeName: "తెలుగు", englishName: "Telugu" },
  { code: "ta", nativeName: "தமிழ்", englishName: "Tamil" },
  { code: "bn", nativeName: "বাংলা", englishName: "Bengali" },
  { code: "kn", nativeName: "ಕನ್ನಡ", englishName: "Kannada" },
  { code: "ml", nativeName: "മലയാളം", englishName: "Malayalam" },
  { code: "pa", nativeName: "ਪੰਜਾਬੀ", englishName: "Punjabi" },
];

export interface Translations {
  topBarChant: string;
  topBarSub: string;
  home: string;
  services: string;
  about: string;
  tirth: string;
  faq: string;
  bookSlot: string;
  callPandit: string;
  whatsappConsultation: string;
  heroTag: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDesc: string;
  inPersonTag: string;
  onlineSankalpTag: string;
  prasadCourierTag: string;
  servicesSectionTitle: string;
  servicesSectionSubtitle: string;
  touchIconHint: string;
  bookNowButton: string;
  selectLanguageHint: string;
}

export const translationsMap: Record<LanguageCode, Translations> = {
  hi: {
    topBarChant: "ॐ नमः शिवाय",
    topBarSub: "श्री अवंतिका तीर्थ (उज्जैन) - 100% शास्त्रीय एवं वैदिक पद्धति पूजन",
    home: "मुख्य पृष्ठ",
    services: "वैदिक पूजन सेवाएं",
    about: "पंडित जी का परिचय",
    tirth: "उज्जैन तीर्थ महात्म्य",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    bookSlot: "मुहूर्त व स्लॉट बुक करें",
    callPandit: "पंडित जी को कॉल करें",
    whatsappConsultation: "WhatsApp परामर्श",
    heroTag: "श्री महाकालेश्वर एवं मंगलनाथ नगरी (उज्जैन)",
    heroTitle1: "पंडित गोपाल कृष्ण शास्त्री",
    heroTitle2: "उज्जैन में संपूर्ण वैदिक पूजन",
    heroDesc:
      "कालसर्प दोष, मंगल भात पूजा (मंगलनाथ), महामृत्युंजय जाप, कुंभ-अर्क विवाह एवं वैदिक अनुष्ठान। उज्जैन आकर प्रत्यक्ष बैठें अथवा घर बैठे लाइव ऑनलाइन संकल्प द्वारा पूजा संपन्न करवाएं।",
    inPersonTag: "उज्जैन आकर प्रत्यक्ष पूजन",
    onlineSankalpTag: "घर बैठे ऑनलाइन संकल्प पूजा",
    prasadCourierTag: "प्रसाद डाक द्वारा घर तक",
    servicesSectionTitle: "प्रमुख वैदिक पूजन सेवाएं",
    servicesSectionSubtitle: "पंडित गोपाल कृष्ण शास्त्री जी द्वारा संचालित 100% शास्त्रीय पूजाएं",
    touchIconHint: "प्रत्येक पूजन का आइकन स्पर्श करें और उसकी संपूर्ण विधि, स्थान व मुहूर्त देखें",
    bookNowButton: "तुरंत स्लॉट व मुहूर्त बुक करें",
    selectLanguageHint: "अपनी भाषा चुनें (Choose Your Language):",
  },
  en: {
    topBarChant: "Om Namah Shivaya",
    topBarSub: "Ujjain Tirth Kshetra - 100% Authentic Vedic Poojas",
    home: "Home",
    services: "Vedic Services",
    about: "About Pandit Ji",
    tirth: "Ujjain Shrines",
    faq: "FAQs",
    bookSlot: "Book Muhurat & Slot",
    callPandit: "Call Pandit Ji",
    whatsappConsultation: "WhatsApp Consultation",
    heroTag: "Mahakaleshwar & Mangalnath Tirth (Ujjain)",
    heroTitle1: "Pandit Gopal Krishna Shastri",
    heroTitle2: "Complete Vedic Poojas in Ujjain",
    heroDesc:
      "Kaal Sarp Dosh, Mangal Bhat Puja (Mangalnath), Maha Mrityunjaya Jaap, Kumbh-Ark Vivah & Vedic Rituals. Attend in person in Ujjain or book online Sankalp E-Pooja from home.",
    inPersonTag: "In-Person Puja in Ujjain",
    onlineSankalpTag: "Online Sankalp E-Pooja",
    prasadCourierTag: "Prasad Delivery to Doorstep",
    servicesSectionTitle: "Major Vedic Pooja Services",
    servicesSectionSubtitle: "Authentic rituals performed strictly per Vedic scriptures",
    touchIconHint: "Touch any pooja icon to view complete vidhi, location & booking details",
    bookNowButton: "Book Pooja Slot Now",
    selectLanguageHint: "Choose Your Language:",
  },
  mr: {
    topBarChant: "ॐ नमः शिवाय",
    topBarSub: "श्री अवंतिका तीर्थ (उज्जैन) - 100% शास्त्रीय व वैदिक पद्धत पूजन",
    home: "मुख्य पृष्ठ",
    services: "वैदिक पूजा सेवा",
    about: "पंडितजींचा परिचय",
    tirth: "उज्जैन तीर्थ महत्त्व",
    faq: "वारंवार विचारले जाणारे प्रश्न",
    bookSlot: "मुहूर्त व स्लॉट बुक करा",
    callPandit: "पंडितजींना कॉल करा",
    whatsappConsultation: "WhatsApp सल्ला",
    heroTag: "श्री महाकालेश्वर व मंगळनाथ नगरी (उज्जैन)",
    heroTitle1: "पंडित गोपाळ कृष्ण शास्त्री",
    heroTitle2: "उज्जैनमध्ये संपूर्ण वैदिक पूजा",
    heroDesc:
      "कालसर्प दोष, मंगळ भात पूजा (मंगळनाथ), महामृत्युंजय जाप, कुंभ-अर्क विवाह व वैदिक अनुष्ठान. उज्जैन येथे येऊन प्रत्यक्ष बसा किंवा घरबसल्या ऑनलाइन संकल्प पूजेची सुविधा.",
    inPersonTag: "उज्जैन येथे प्रत्यक्ष पूजन",
    onlineSankalpTag: "घरबसल्या ऑनलाइन संकल्प पूजा",
    prasadCourierTag: "प्रसाद कुरिअरने घरी पाठवला जाईल",
    servicesSectionTitle: "प्रमुख वैदिक पूजन सेवा",
    servicesSectionSubtitle: "पंडित गोपाळ कृष्ण शास्त्रीजींद्वारे चालवल्या जाणाऱ्या 100% शास्त्रीय पूजा",
    touchIconHint: "प्रत्येक पूजेच्या आयकॉनला स्पर्श करा आणि संपूर्ण विधी व तारीख पहा",
    bookNowButton: "लगेच स्लॉट व मुहूर्त बुक करा",
    selectLanguageHint: "तुमची भाषा निवडा:",
  },
  gu: {
    topBarChant: "ૐ નમઃ શિવાય",
    topBarSub: "શ્રી અવંતિકા તીર્થ (ઉજ્જૈન) - 100% શાસ્ત્રીય અને વૈદિક પદ્ધતિ પૂજા",
    home: "મુખ્ય પૃષ્ઠ",
    services: "વૈદિક પૂજા સેવાઓ",
    about: "પંડિતજીનો પરિચય",
    tirth: "ઉજ્જૈન તીર્થ મહત્વ",
    faq: "વારંવાર પૂછાતા પ્રશ્નો",
    bookSlot: "મુહૂર્ત અને સ્લોટ બુક કરો",
    callPandit: "પંડિતજીને કૉલ કરો",
    whatsappConsultation: "WhatsApp સલાહ",
    heroTag: "શ્રી મહાકાલેશ્વર અને મંગળનાથ નગરી (ઉજ્જૈન)",
    heroTitle1: "પંડિત ગોપાલ કૃષ્ણ શાસ્ત્રી",
    heroTitle2: "ઉજ્જૈનમાં સંપૂર્ણ વૈદિક પૂજન",
    heroDesc:
      "કાલસર્પ દોષ, મંગળ ભાત પૂજા (મંગળનાથ), મહામૃત્યુંજય જાપ, કુંભ-અર્ક વિવાહ અને વૈદિક અનુષ્ઠાન. ઉજ્જૈન આવીને રૂબરૂ પૂજા કરાવો અથવા ઘરે બેઠા ઓનલાઇન સંકલ્પ પૂજા.",
    inPersonTag: "ઉજ્જૈન આવીને રૂબરૂ પૂજન",
    onlineSankalpTag: "ઘરે બેઠા ઓનલાઇન સંકલ્પ પૂજા",
    prasadCourierTag: "પ્રસાદ કુરિયર દ્વારા ઘરે પહોંચશે",
    servicesSectionTitle: "પ્રમુખ વૈદિક પૂજન સેવાઓ",
    servicesSectionSubtitle: "પંડિત ગોપાલ કૃષ્ણ શાસ્ત્રીજી દ્વારા 100% શાસ્ત્રોક્ત પૂજાઓ",
    touchIconHint: "દરેક પૂજાના આઇકોનને ટચ કરો અને સંપૂર્ણ વિધિ અને મુહૂર્ત જુઓ",
    bookNowButton: "તરત સ્લોટ અને મુહૂર્ત બુક કરો",
    selectLanguageHint: "તમારી ભાષા પસંદ કરો:",
  },
  te: {
    topBarChant: "ఓం నమః శివాయ",
    topBarSub: "శ్రీ అవంతిక తీర్థం (ఉజ్జయిని) - 100% వేద పద్ధతి పూజలు",
    home: "ప్రధాన పేజీ",
    services: "పూజా సేవలు",
    about: "పండిట్ జీ పరిచయం",
    tirth: "ఉజ్జయిని తీర్థం",
    faq: "ప్రశ్నలు",
    bookSlot: "ముహూర్తం బుక్ చేయండి",
    callPandit: "పండిట్ జీకి కాల్ చేయండి",
    whatsappConsultation: "WhatsApp సంప్రదింపులు",
    heroTag: "మహాకాళేశ్వర్ & మంగళనాథ్ క్షేత్రం (ఉజ్జయిని)",
    heroTitle1: "పండిట్ గోపాల్ కృష్ణ శాస్త్రి",
    heroTitle2: "ఉజ్జయినిలో సంపూర్ణ వేద పూజలు",
    heroDesc:
      "కాలసర్ప దోష నివారణ, మంగళ భాత్ పూజ, మహామృత్యుంజయ జపం, కుంభ వివాహం. ఉజ్జయినికి వచ్చి ప్రత్యక్షంగా కూర్చోండి లేదా ఆన్‌లైన్ సంకల్ప పూజ బుక్ చేయండి.",
    inPersonTag: "ఉజ్జయినిలో ప్రత్యక్ష పూజ",
    onlineSankalpTag: "ఇంటి నుంచే ఆన్‌లైన్ సంకల్ప పూజ",
    prasadCourierTag: "ప్రసాదం పోస్టు ద్వారా ఇంటికి",
    servicesSectionTitle: "ప్రధాన వేద పూజా సేవలు",
    servicesSectionSubtitle: "పండిట్ గోపాల్ కృష్ణ శాస్త్రి గారి ద్వారా ప్రామాణిక పూజలు",
    touchIconHint: "పూర్తి వివరాలు మరియు ముహూర్తం కోసం పూజ ఐకాన్ తాకండి",
    bookNowButton: "వెంటనే స్లాట్ బుక్ చేయండి",
    selectLanguageHint: "మీ భాషను ఎంచుకోండి:",
  },
  ta: {
    topBarChant: "ஓம் நம சிவாய",
    topBarSub: "உஜ்ஜைன் தீர்த்த க்ஷேத்திரம் - 100% வேத முறை பூஜைகள்",
    home: "முகப்பு",
    services: "வேத பூஜைகள்",
    about: "பண்டிட் ஜி பற்றி",
    tirth: "உஜ்ஜைன் தீர்த்தம்",
    faq: "கேள்வி பதில்கள்",
    bookSlot: "முஹூர்த்தம் புக் செய்க",
    callPandit: "பண்டிட் ஜிக்கு அழைக்கவும்",
    whatsappConsultation: "WhatsApp ஆலோசனை",
    heroTag: "மகாகாளேஸ்வரர் & மங்களநாத் (உஜ்ஜைன்)",
    heroTitle1: "பண்டிட் கோபால் கிருஷ்ண சாஸ்திரி",
    heroTitle2: "உஜ்ஜைனில் முழுமையான வேத பூஜை",
    heroDesc:
      "காலசர்ப்ப தோஷம், மங்கள பாத் பூஜை, மகா மிருத்யுஞ்சய ஜபம், கும்ப விவாஹம். உஜ்ஜைனுக்கு நேரில் வந்து அல்லது வீட்டில் இருந்தே ஆன்லைன் சங்கல்ப பூஜை செய்யலாம்.",
    inPersonTag: "உஜ்ஜைனில் நேரடி பூஜை",
    onlineSankalpTag: "ஆன்லைன் சங்கல்ப பூஜை",
    prasadCourierTag: "பிரசாதம் தபால் மூலம் வீடு தேடி வரும்",
    servicesSectionTitle: "முக்கிய வேத பூஜை சேவைகள்",
    servicesSectionSubtitle: "சாஸ்திர முறைப்படி நடத்தப்படும் தூய வேத பூஜைகள்",
    touchIconHint: "முழு விவரங்கள் மற்றும் முன்பதிவுக்கு பூஜை ஐகானைத் தொடவும்",
    bookNowButton: "உடனே ஸ்லாட் புக் செய்க",
    selectLanguageHint: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்:",
  },
  bn: {
    topBarChant: "ওঁ নমঃ শিবায়",
    topBarSub: "শ্রী অবন্তিকা তীর্থ (উজ্জয়িনী) - ১০০% বৈদিক পদ্ধতি পূজন",
    home: "প্রধান পাতা",
    services: "বৈদিক পূজা",
    about: "পণ্ডিত জীর পরিচয়",
    tirth: "উজ্জয়িনী মাহাত্ম্য",
    faq: "প্রশ্নোত্তর",
    bookSlot: "মুহূর্ত ও স্লট বুক করুন",
    callPandit: "পণ্ডিত জীকে কল করুন",
    whatsappConsultation: "WhatsApp परामर्श",
    heroTag: "শ্রী মহাকালেশ্বর ও মঙ্গলনাথ নগরী (উজ্জয়িনী)",
    heroTitle1: "পণ্ডিত গোপাল কৃষ্ণ শাস্ত্রী",
    heroTitle2: "উজ্জয়িনীতে সম্পূর্ণ বৈদিক পূজন",
    heroDesc:
      "কালসর্প দোষ নিবারণ, মঙ্গল ভাত পূজা (মঙ্গলনাথ), মহামৃত্যুঞ্জয় জপ ও বৈদিক অনুষ্ঠান। উজ্জয়িনী এসে প্রত্যক্ষ অথবা ঘরে বসে অনলাইন সংকল্প পূজা।",
    inPersonTag: "উজ্জয়িনী এসে প্রত্যক্ষ পূজন",
    onlineSankalpTag: "ঘরে বসে অনলাইন সংকল্প পূজা",
    prasadCourierTag: "প্রসাদ ডাকযোগে বাড়ি পৌঁছাবে",
    servicesSectionTitle: "প্রধান বৈদিক পূজা পরিষেবা",
    servicesSectionSubtitle: "পণ্ডিত গোপাল কৃষ্ণ শাস্ত্রী দ্বারা শাস্ত্রসম্মত পূজা",
    touchIconHint: "বিস্তারিত বিধি ও বুকিংয়ের জন্য পূজার আইকন স্পর্শ করুন",
    bookNowButton: "এখনই স্লট বুক করুন",
    selectLanguageHint: "আপনার ভাষা নির্বাচন করুন:",
  },
  kn: {
    topBarChant: "ಓಂ ನಮಃ ಶಿವಾಯ",
    topBarSub: "ಶ್ರೀ ಅವಂತಿಕಾ ತೀರ್ಥ (ಉಜ್ಜಯಿನಿ) - 100% ವೈದಿಕ ಪೂಜೆಗಳು",
    home: "ಮುಖಪುಟ",
    services: "ವೈದಿಕ ಪೂಜೆಗಳು",
    about: "ಪಂಡಿತ್ ಜೀ ಪರಿಚಯ",
    tirth: "ಉಜ್ಜಯಿನಿ ತೀರ್ಥ",
    faq: "ಪ್ರಶ್ನೋತ್ತರ",
    bookSlot: "ಮುಹೂರ್ತ ಬುಕ್ ಮಾಡಿ",
    callPandit: "ಪಂಡಿತ್ ಜೀಗೆ ಕರೆ ಮಾಡಿ",
    whatsappConsultation: "WhatsApp ಸಮಾಲೋಚನೆ",
    heroTag: "ಮಹಾಕಾಳೇಶ್ವರ ಮತ್ತು ಮಂಗಳನಾಥ ಕ್ಷೇತ್ರ (ಉಜ್ಜಯಿನಿ)",
    heroTitle1: "ಪಂಡಿತ್ ಗೋಪಾಲ್ ಕೃಷ್ಣ ಶಾಸ್ತ್ರಿ",
    heroTitle2: "ಉಜ್ಜಯಿನಿಯಲ್ಲಿ ಸಂಪೂರ್ಣ ವೈದಿಕ ಪೂಜೆ",
    heroDesc:
      "ಕಾಲಸರ್ಪ ದೋಷ, ಮಂಗಳ ಭಾತ ಪೂಜೆ, ಮಹಾಮೃತ್ಯುಂಜಯ ಜಪ. ಉಜ್ಜಯಿನಿಗೆ ಬಂದು ಪ್ರತ್ಯಕ್ಷವಾಗಿ ಅಥವಾ ಮನೆಯಲ್ಲೇ ಕುಳಿತು ಆನ್‌ಲೈನ್ ಸಂಕಲ್ಪ ಪೂಜೆ ಮಾಡಿಸಿ.",
    inPersonTag: "ಉಜ್ಜಯಿನಿಯಲ್ಲಿ ಪ್ರತ್ಯಕ್ಷ ಪೂಜೆ",
    onlineSankalpTag: "ಆನ್‌ಲೈನ್ ಸಂಕಲ್ಪ ಪೂಜೆ",
    prasadCourierTag: "ಪ್ರಸಾದ ಮನೆ ಬಾಗಿಲಿಗೆ ಕೊರಿಯರ್",
    servicesSectionTitle: "ಪ್ರಮುಖ ವೈದಿಕ ಪೂಜಾ ಸೇವೆಗಳು",
    servicesSectionSubtitle: "ಪಂಡಿತ್ ಗೋಪಾಲ್ ಕೃಷ್ಣ ಶಾಸ್ತ್ರಿ ಅವರಿಂದ ಅಧಿಕೃತ ಪೂಜೆಗಳು",
    touchIconHint: "ಸಂಪೂರ್ಣ ವಿವರಗಳು ಮತ್ತು ಮುಹೂರ್ತಕ್ಕಾಗಿ ಪೂಜೆಯ ಐಕಾನ್ ಸ್ಪರ್ಶಿಸಿ",
    bookNowButton: "ತಕ್ಷಣ ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ",
    selectLanguageHint: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
  },
  ml: {
    topBarChant: "ഓം നമഃ ശിവായ",
    topBarSub: "ഉജ്ജയിനി തീർത്ഥ ക്ഷേത്രം - 100% വൈദിക പൂജകൾ",
    home: "ഹോം",
    services: "വൈദിക പൂജകൾ",
    about: "പണ്ഡിറ്റ് ജിയെക്കുറിച്ച്",
    tirth: "ഉജ്ജയിനി തീർത്ഥം",
    faq: "ചോദ്യോത്തരങ്ങൾ",
    bookSlot: "മുഹൂർത്തം ബുക്ക് ചെയ്യുക",
    callPandit: "പണ്ഡിറ്റ് ജിയെ വിളിക്കുക",
    whatsappConsultation: "WhatsApp കൺസൾട്ടേഷൻ",
    heroTag: "മഹാകാലേശ്വർ & മംഗളനാഥ് (ഉജ്ജയിനി)",
    heroTitle1: "പണ്ഡിറ്റ് ഗോപാൽ കൃഷ്ണ ശാസ്ത്രി",
    heroTitle2: "ഉജ്ജയിനിയിൽ സമ്പൂർണ്ണ വൈദിക പൂജകൾ",
    heroDesc:
      "കാലസർപ്പ ദോഷ നിവാരണം, മംഗള ഭാത് പൂജ, മഹാമൃത്യുഞ്ജയ ജപം. നേരിട്ട് ഉജ്ജയിനിയിലെത്തി അല്ലെങ്കിൽ വീട്ടിലിരുന്ന് ഓൺലൈൻ സങ്കൽപ്പ പൂജ ചെയ്യാം.",
    inPersonTag: "നേരിട്ടുള്ള പൂജ",
    onlineSankalpTag: "ഓൺലൈൻ സങ്കൽപ്പ പൂജ",
    prasadCourierTag: "പ്രസാദം തപാലിൽ വീട്ടിലെത്തും",
    servicesSectionTitle: "പ്രധാന വൈദിക പൂജാ സേവനങ്ങൾ",
    servicesSectionSubtitle: "പണ്ഡിറ്റ് ഗോപാൽ കൃഷ്ണ ശാസ്ത്രി നടത്തുന്ന ശാസ്ത്രീയ പൂജകൾ",
    touchIconHint: "വിശദാംശങ്ങൾക്കായി പൂജാ ഐക്കൺ സ്പർശിക്കുക",
    bookNowButton: "ഇപ്പോൾ തന്നെ ബുക്ക് ചെയ്യുക",
    selectLanguageHint: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക:",
  },
  pa: {
    topBarChant: "ਓਮ ਨਮਹ ਸ਼ਿਵਾਯ",
    topBarSub: "ਸ਼੍ਰੀ ਅਵੰਤਿਕਾ ਤੀਰਥ (ਉਜੈਨ) - 100% ਵੈਦਿਕ ਪੂਜਾ",
    home: "ਮੁੱਖ ਪੰਨਾ",
    services: "ਵੈਦਿਕ ਪੂਜਾਵਾਂ",
    about: "ਪੰਡਿਤ ਜੀ ਬਾਰੇ",
    tirth: "ਉਜੈਨ ਤੀਰਥ",
    faq: "ਸਵਾਲ-ਜਵਾਬ",
    bookSlot: "ਮੁਹੂਰਤ ਬੁੱਕ ਕਰੋ",
    callPandit: "ਪੰਡਿਤ ਜੀ ਨੂੰ ਕਾਲ ਕਰੋ",
    whatsappConsultation: "WhatsApp ਸਲਾਹ",
    heroTag: "ਸ਼੍ਰੀ ਮਹਾਕਾਲੇਸ਼ਵਰ ਅਤੇ ਮੰਗਲਨਾਥ (ਉਜੈਨ)",
    heroTitle1: "ਪੰਡਿਤ ਗੋਪਾਲ ਕ੍ਰਿਸ਼ਨ ਸ਼ਾਸਤਰੀ",
    heroTitle2: "ਉਜੈਨ ਵਿੱਚ ਸੰਪੂਰਨ ਵੈਦਿਕ ਪੂਜਨ",
    heroDesc:
      "ਕਾਲਸਰਪ ਦੋਸ਼, ਮੰਗਲ ਭਾਤ ਪੂਜਾ (ਮੰਗਲਨਾਥ), ਮਹਾਮ੍ਰਿਤਿਯੁੰਜੇ ਜਾਪ ਅਤੇ ਵੈਦਿਕ ਅਨੁਸ਼ਠਾਨ। ਉਜੈਨ ਆ ਕੇ ਜਾਂ ਘਰ ਬੈਠੇ ਆਨਲਾਈਨ ਸੰਕਲਪ ਪੂਜਾ।",
    inPersonTag: "ਉਜੈਨ ਆ ਕੇ ਪੂਜਾ",
    onlineSankalpTag: "ਘਰ ਬੈਠੇ ਆਨਲਾਈਨ ਸੰਕਲਪ ਪੂਜਾ",
    prasadCourierTag: "ਪ੍ਰਸਾਦ ਡਾਕ ਰਾਹੀਂ ਘਰ ਪਹੁੰਚੇਗਾ",
    servicesSectionTitle: "ਮੁੱਖ ਵੈਦਿਕ ਪੂਜਾ ਸੇਵਾਵਾਂ",
    servicesSectionSubtitle: "ਪੰਡਿਤ ਗੋਪਾਲ ਕ੍ਰਿਸ਼ਨ ਸ਼ਾਸਤਰੀ ਜੀ ਦੁਆਰਾ ਸ਼ਾਸਤਰੀ ਪੂਜਾਵਾਂ",
    touchIconHint: "ਪੂਰੀ ਵਿਧੀ ਅਤੇ ਬੁਕਿੰਗ ਲਈ ਪੂਜਾ ਆਈਕਨ ਨੂੰ ਛੂਹੋ",
    bookNowButton: "ਹੁਣੇ ਸਲਾਟ ਬੁੱਕ ਕਰੋ",
    selectLanguageHint: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ:",
  },
};

interface LanguageContextProps {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: "hi",
  setLanguage: () => {},
  t: translationsMap["hi"],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("hi");

  useEffect(() => {
    // Check saved language or google translate cookie
    const saved = localStorage.getItem("preferred_pooja_lang") as LanguageCode;
    if (saved && translationsMap[saved]) {
      setCurrentLanguage(saved);
      if (saved !== "hi") {
        const interval = setInterval(() => {
          const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
          if (combo) {
            if (combo.value !== saved) {
              combo.value = saved;
              combo.dispatchEvent(new Event("change"));
            }
            clearInterval(interval);
          }
        }, 400);
        setTimeout(() => clearInterval(interval), 4000);
      }
    }
  }, []);

  const handleSetLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_pooja_lang", lang);

      // Trigger whole-site Google Translation across ALL pages
      const cookieVal = lang === "hi" ? "" : `/hi/${lang}`;
      const hostname = window.location.hostname;
      const domainParts = hostname.split(".");
      const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

      if (lang === "hi") {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        if (!isLocalhost && domainParts.length > 1) {
          const rootDomain = domainParts.slice(-2).join(".");
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${rootDomain};`;
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
        }
      } else {
        document.cookie = `googtrans=${cookieVal}; path=/;`;
        if (!isLocalhost && domainParts.length > 1) {
          const rootDomain = domainParts.slice(-2).join(".");
          document.cookie = `googtrans=${cookieVal}; path=/; domain=.${rootDomain};`;
          document.cookie = `googtrans=${cookieVal}; path=/; domain=.${hostname};`;
        }
      }

      // Check if Google Translate widget dropdown is ready in DOM
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (combo) {
        combo.value = lang === "hi" ? "" : lang;
        combo.dispatchEvent(new Event("change"));
      } else {
        // Reload to let Google translate render the whole page in the new language
        window.location.reload();
      }
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage: handleSetLanguage,
        t: translationsMap[currentLanguage] || translationsMap["hi"],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
