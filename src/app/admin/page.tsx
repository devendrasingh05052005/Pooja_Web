"use client";

import React, { useState, useEffect } from "react";
import { BookingLead } from "@/app/api/leads/route";
import {
  ShieldAlert,
  Phone,
  MessageCircle,
  Calendar,
  User,
  MapPin,
  RefreshCw,
  Search,
  CheckCircle,
  Clock,
  Lock,
} from "lucide-react";

export default function AdminPage() {
  const [leads, setLeads] = useState<BookingLead[]>([]);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default simple security PIN for Pandit Ji / Admin
    if (pin === "1008" || pin === "mahakal") {
      setAuthenticated(true);
      fetchLeads();
    } else {
      alert("गलत पासवर्ड! कृपया सही पिन दर्ज करें। (Default PIN: 1008)");
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.phone.includes(searchTerm) ||
      l.poojaName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!authenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4 bg-stone-100">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-amber-200 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-vedic-saffron text-white flex items-center justify-center text-3xl mx-auto shadow-md">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-stone-900">
              पंडित जी एडमिन पोर्टल (Admin Portal)
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              वेबसाइट से प्राप्त सभी बुकिंग्स एवं पूछताछ देखने हेतु पिन दर्ज करें
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="सुरक्षा पिन दर्ज करें (Default: 1008)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full text-center tracking-widest text-lg font-bold border-2 border-stone-300 focus:border-vedic-saffron rounded-xl p-3 outline-none"
              autoFocus
            />

            <button
              type="submit"
              className="w-full bg-vedic-saffron hover:bg-amber-600 text-white font-bold py-3 rounded-xl shadow transition"
            >
              लॉगिन करें (Login)
            </button>
          </form>

          <p className="text-[11px] text-stone-400">
            नोट: डिफॉल्ट पिन <strong className="text-stone-700">1008</strong> या <strong className="text-stone-700">mahakal</strong> है।
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-stone-900">
              प्राप्त बुकिंग्स एवं पूछताछ डैशबोर्ड
            </h1>
            <p className="text-xs text-stone-500 mt-0.5">
              कुल प्राप्त लीड्स: <strong>{leads.length}</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-stone-300 transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>रिफ्रेश करें</span>
            </button>

            <button
              onClick={() => setAuthenticated(false)}
              className="text-xs text-red-600 hover:text-red-700 font-bold px-3 py-2"
            >
              लॉगआउट
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="यजमान का नाम, फोन नंबर, शहर अथवा पूजा के नाम से खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-stone-300 rounded-xl pl-11 pr-4 py-3 text-sm text-stone-900 outline-none focus:border-vedic-saffron shadow-sm"
          />
        </div>

        {/* Leads Table / List */}
        {filteredLeads.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-stone-200 text-stone-500 space-y-2">
            <Calendar className="w-10 h-10 text-stone-300 mx-auto" />
            <p className="text-sm font-semibold">
              {leads.length === 0
                ? "अभी तक कोई बुकिंग प्राप्त नहीं हुई है।"
                : "खोज के अनुसार कोई यजमान नहीं मिला।"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-amber-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-xs font-extrabold text-stone-900 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-vedic-saffron" />
                      {lead.name}
                    </span>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        lead.serviceMode === "online-sankalp"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {lead.serviceMode === "online-sankalp" ? "Online E-Pooja" : "Ujjain Visit"}
                    </span>
                  </div>

                  <div className="text-sm font-bold text-amber-900 mb-1">
                    {lead.poojaName}
                  </div>

                  <div className="space-y-1 text-xs text-stone-600">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-stone-400" />
                      <strong className="text-stone-900">{lead.phone}</strong>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{lead.city}</span>
                      {lead.gotra && (
                        <span className="text-stone-400">| गोत्र: {lead.gotra}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>इच्छित तिथि: {lead.preferredDate}</span>
                    </div>

                    {lead.notes && (
                      <div className="bg-amber-50 p-2 rounded-lg text-amber-900 text-[11px] mt-2">
                        <strong>प्रश्न:</strong> {lead.notes}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-stone-400">
                    {new Date(lead.createdAt).toLocaleDateString("hi-IN")}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${lead.phone}`}
                      className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold flex items-center gap-1"
                      title="फोन कॉल करें"
                    >
                      <Phone className="w-3.5 h-3.5 text-stone-700" />
                      <span>कॉल</span>
                    </a>

                    <a
                      href={`https://wa.me/91${lead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                        `जय श्री महाकाल ${lead.name} जी! मैं पंडित गोपाल कृष्ण शास्त्री उज्जैन से बोल रहा हूँ। आपने ${lead.poojaName} के लिए पूछताछ की थी।`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#25D366] hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                      title="WhatsApp संदेश भेजें"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
