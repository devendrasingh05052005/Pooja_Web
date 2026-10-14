"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/config/site";
import { Send, Phone, MessageCircle, Calendar, User, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

interface BookingFormProps {
  defaultPooja?: string;
  source?: string;
}

export default function BookingForm({ defaultPooja = "", source = "homepage" }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    gotra: "",
    poojaName: defaultPooja || servicesData[0].titleHindi,
    preferredDate: "",
    serviceMode: "in-person",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    whatsappUrl?: string;
    message?: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessData({
          whatsappUrl: data.whatsappUrl,
          message: data.message,
        });

        // Open WhatsApp automatically in a new tab if available
        if (data.whatsappUrl) {
          window.open(data.whatsappUrl, "_blank");
        }
      } else {
        setErrorMsg(data.error || "कृपया सभी आवश्यक जानकारी सही से भरें।");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("नेटवर्क त्रुटि। कृपया सीधे फोन अथवा WhatsApp पर संपर्क करें।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="book" className="bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-vedic-maroon via-vedic-saffron to-vedic-maroon text-white p-6 sm:p-8 text-center relative">
        <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-200 px-3 py-1 rounded-full text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>सरल एवं त्वरित बुकिंग</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
          शुभ मुहूर्त एवं पूजन स्लॉट निर्धारण
        </h3>
        <p className="text-stone-200 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
          पंडित गोपाल शास्त्री जी से सीधे बात कर अपनी जन्म कुंडली अनुसार श्रेष्ठ मुहूर्त एवं पूजन व्यवस्था तय करें।
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {successData ? (
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-stone-900">
                आपकी पूजा का विवरण प्राप्त हो गया है!
              </h4>
              <p className="text-stone-600 text-sm mt-1 max-w-md mx-auto">
                पंडित गोपाल शास्त्री जी जल्द ही आपसे संपर्क करेंगे। आप तुरंत WhatsApp पर भी सीधे बात कर सकते हैं:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              {successData.whatsappUrl && (
                <a
                  href={successData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow flex items-center justify-center gap-2 text-sm transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>पंडित जी से WhatsApp पर बात करें</span>
                </a>
              )}

              <a
                href={`tel:${siteConfig.contact.callNumber}`}
                className="bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded-xl shadow flex items-center justify-center gap-2 text-sm transition"
              >
                <Phone className="w-5 h-5" />
                <span>सीधे फोन पर बात करें</span>
              </a>
            </div>

            <button
              onClick={() => {
                setSuccessData(null);
                setFormData({
                  name: "",
                  phone: "",
                  city: "",
                  gotra: "",
                  poojaName: defaultPooja || servicesData[0].titleHindi,
                  preferredDate: "",
                  serviceMode: "in-person",
                  notes: "",
                });
              }}
              className="text-xs text-amber-800 underline font-semibold mt-4 inline-block"
            >
              अन्य पूजन अथवा नया फॉर्म भरें
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm p-3 rounded-xl">
                {errorMsg}
              </div>
            )}

            {/* Service Mode Selection Radio */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                पूजा का माध्यम चुनें *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition ${
                    formData.serviceMode === "in-person"
                      ? "border-vedic-saffron bg-amber-50/50 text-stone-900 font-bold"
                      : "border-stone-200 text-stone-600 hover:border-stone-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="serviceMode"
                    value="in-person"
                    checked={formData.serviceMode === "in-person"}
                    onChange={handleChange}
                    className="accent-vedic-saffron w-4 h-4"
                  />
                  <div>
                    <div className="text-sm">उज्जैन आकर प्रत्यक्ष पूजन</div>
                    <div className="text-[11px] text-stone-500 font-normal">
                      मंगलनाथ / रामघाट / आश्रम में
                    </div>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition ${
                    formData.serviceMode === "online-sankalp"
                      ? "border-vedic-saffron bg-amber-50/50 text-stone-900 font-bold"
                      : "border-stone-200 text-stone-600 hover:border-stone-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="serviceMode"
                    value="online-sankalp"
                    checked={formData.serviceMode === "online-sankalp"}
                    onChange={handleChange}
                    className="accent-vedic-saffron w-4 h-4"
                  />
                  <div>
                    <div className="text-sm">घर बैठे ऑनलाइन संकल्प पूजा</div>
                    <div className="text-[11px] text-stone-500 font-normal">
                      लाइव दर्शन + प्रसाद कूरियर
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Select Pooja Dropdown */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                पूजन का चयन करें *
              </label>
              <select
                name="poojaName"
                value={formData.poojaName}
                onChange={handleChange}
                required
                className="w-full bg-stone-50 border border-stone-300 focus:border-vedic-saffron focus:ring-1 focus:ring-vedic-saffron rounded-xl p-3 text-sm font-medium text-stone-900 outline-none transition"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.titleHindi}>
                    {s.titleHindi}
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  यजमान का नाम *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="उदा. राहुल शर्मा"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-vedic-saffron focus:ring-1 focus:ring-vedic-saffron rounded-xl pl-10 pr-3 py-3 text-sm text-stone-900 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  मोबाइल / WhatsApp नंबर *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="10 अंकों का मोबाइल नंबर"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-vedic-saffron focus:ring-1 focus:ring-vedic-saffron rounded-xl pl-10 pr-3 py-3 text-sm text-stone-900 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* City & Gotra */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  आपका शहर / राज्य *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="उदा. मुंबई, दिल्ली, इंदौर"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-300 focus:border-vedic-saffron focus:ring-1 focus:ring-vedic-saffron rounded-xl pl-10 pr-3 py-3 text-sm text-stone-900 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  गोत्र (यदि ज्ञात हो)
                </label>
                <input
                  type="text"
                  name="gotra"
                  placeholder="उदा. भारद्वाज, कश्यप (वैकल्पिक)"
                  value={formData.gotra}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-vedic-saffron focus:ring-1 focus:ring-vedic-saffron rounded-xl px-3 py-3 text-sm text-stone-900 outline-none transition"
                />
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                अनुमानित पूजन तिथि (Preferred Date)
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-300 focus:border-vedic-saffron focus:ring-1 focus:ring-vedic-saffron rounded-xl pl-10 pr-3 py-3 text-sm text-stone-900 outline-none transition"
                />
              </div>
            </div>

            {/* Notes / Queries */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                समस्या अथवा कोई विशेष प्रश्न (Optional)
              </label>
              <textarea
                name="notes"
                rows={2}
                placeholder="विवाह में विलंब, कालसर्प शांति, या अन्य प्रश्न..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 focus:border-vedic-saffron focus:ring-1 focus:ring-vedic-saffron rounded-xl p-3 text-sm text-stone-900 outline-none transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-vedic-saffron via-amber-600 to-vedic-saffron text-white font-extrabold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:brightness-105 active:scale-[0.99] transition flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-70"
            >
              {loading ? (
                <span>कृपया प्रतीक्षा करें...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>स्लॉट बुक करें एवं WhatsApp पर बात करें</span>
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-stone-500">
              🔒 आपकी व्यक्तिगत जानकारी पूर्णतः सुरक्षित एवं गोपनीय रखी जाती है। कोई अग्रिम भुगतान बाध्यकारी नहीं है।
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
