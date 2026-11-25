"use client";

import React, { useState, useEffect } from "react";
import {
  Lock,
  Search,
  Phone,
  MessageCircle,
  Calendar,
  User,
  MapPin,
  RefreshCw,
  Upload,
  Image as ImageIcon,
  Video,
  Trash2,
  CheckCircle2,
  Plus,
} from "lucide-react";

interface BookingLead {
  id: string;
  name: string;
  phone: string;
  city: string;
  gotra?: string;
  poojaName: string;
  preferredDate: string;
  serviceMode: string;
  notes?: string;
  createdAt: string;
}

interface GalleryItem {
  id: string;
  type: "photo" | "video";
  title: string;
  category: string;
  mediaUrl: string;
  thumbnailUrl: string;
  videoEmbedUrl?: string;
  date?: string;
  description?: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<BookingLead[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"leads" | "gallery">("leads");

  // Gallery upload form states inside admin
  const [galType, setGalType] = useState<"photo" | "video">("photo");
  const [galTitle, setGalTitle] = useState("");
  const [galCategory, setGalCategory] = useState("महाकाल पूजा");
  const [galUrl, setGalUrl] = useState("");
  const [galFile, setGalFile] = useState<File | null>(null);
  const [galLoading, setGalLoading] = useState(false);
  const [galMsg, setGalMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "1008" || pin === "mahakal") {
      setAuthenticated(true);
      fetchLeads();
      fetchGallery();
    } else {
      alert("गलत पासवर्ड! कृपया सही सुरक्षा पिन दर्ज करें।");
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

  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (data.success) {
        setGalleryItems(data.items);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGalleryUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setGalLoading(true);
    setGalMsg(null);

    try {
      const formData = new FormData();
      formData.append("pin", pin);
      formData.append("type", galType);
      formData.append("title", galTitle.trim() || "वैदिक अनुष्ठान दर्शन");
      formData.append("category", galCategory);
      formData.append("isFeatured", "true");

      if (galFile) {
        formData.append("file", galFile);
      } else if (galUrl) {
        formData.append("mediaUrl", galUrl);
      } else {
        setGalMsg({ type: "error", text: "कृपया फोटो/वीडियो फ़ाइल चुनें या URL दर्ज करें।" });
        setGalLoading(false);
        return;
      }

      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setGalMsg({ type: "success", text: "गैलरी आइटम सफलतापूर्वक जोड़ा गया!" });
        setGalTitle("");
        setGalUrl("");
        setGalFile(null);
        await fetchGallery();
      } else {
        setGalMsg({ type: "error", text: data.message || "अपलोड विफल रहा।" });
      }
    } catch (err: any) {
      setGalMsg({ type: "error", text: err.message || "त्रुटि आई।" });
    } finally {
      setGalLoading(false);
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm("क्या आप वाकई इस आइटम को गैलरी से हटाना चाहते हैं?")) return;

    try {
      const res = await fetch(`/api/gallery?id=${id}&pin=${encodeURIComponent(pin)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        await fetchGallery();
      } else {
        alert(data.message || "हटाने में त्रुटि आई।");
      }
    } catch (e) {
      console.error(e);
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
              वेबसाइट से प्राप्त सभी बुकिंग्स एवं गैलरी प्रबंधन हेतु पिन दर्ज करें
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="सुरक्षा पिन दर्ज करें"
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
              पंडित जी एडमिन डैशबोर्ड
            </h1>
            <p className="text-xs text-stone-500 mt-0.5">
              बुकिंग्स एवं गैलरी प्रबंधन केंद्र
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                fetchLeads();
                fetchGallery();
              }}
              disabled={loading}
              className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-stone-300 transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>डेटा रिफ्रेश</span>
            </button>

            <button
              onClick={() => setAuthenticated(false)}
              className="text-xs text-red-600 hover:text-red-700 font-bold px-3 py-2"
            >
              लॉगआउट
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 border-b border-stone-200 pb-2">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 ${
              activeTab === "leads"
                ? "bg-vedic-saffron text-white shadow-md"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <User className="w-4 h-4" />
            <span>यजमान बुकिंग्स ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 ${
              activeTab === "gallery"
                ? "bg-vedic-saffron text-white shadow-md"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>फोटो व वीडियो गैलरी ({galleryItems.length})</span>
          </button>
        </div>

        {/* Tab 1: Leads */}
        {activeTab === "leads" && (
          <div className="space-y-5">
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

            {/* Leads Grid */}
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
        )}

        {/* Tab 2: Gallery Management */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            {/* Upload New Item Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-200 space-y-5">
              <div className="flex items-center gap-2 text-stone-900 font-extrabold text-base">
                <Upload className="w-5 h-5 text-vedic-saffron" />
                <span>नया फोटो या वीडियो जोड़ें</span>
              </div>

              {galMsg && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    galMsg.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {galMsg.type === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  <span>{galMsg.text}</span>
                </div>
              )}

              <form onSubmit={handleGalleryUpload} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      मीडिया प्रकार (Media Type)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setGalType("photo")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 ${
                          galType === "photo"
                            ? "bg-vedic-saffron text-white border-vedic-saffron"
                            : "bg-stone-50 text-stone-700 border-stone-200"
                        }`}
                      >
                        <ImageIcon className="w-4 h-4" />
                        <span>फोटो (Photo)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setGalType("video")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 ${
                          galType === "video"
                            ? "bg-vedic-saffron text-white border-vedic-saffron"
                            : "bg-stone-50 text-stone-700 border-stone-200"
                        }`}
                      >
                        <Video className="w-4 h-4" />
                        <span>वीडियो (Video)</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      शीर्षक / नाम (Title) *
                    </label>
                    <input
                      type="text"
                      placeholder="उदा. महाकाल रुद्राभिषेक पूजन"
                      value={galTitle}
                      onChange={(e) => setGalTitle(e.target.value)}
                      required
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-900 focus:border-vedic-saffron outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      श्रेणी (Category)
                    </label>
                    <select
                      value={galCategory}
                      onChange={(e) => setGalCategory(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-900 focus:border-vedic-saffron outline-none"
                    >
                      <option value="महाकाल पूजा">महाकाल पूजा एवं रुद्राभिषेक</option>
                      <option value="मंगलनाथ भात पूजा">मंगलनाथ भात पूजा</option>
                      <option value="बगलामुखी अनुष्ठान">मां बगलामुखी अनुष्ठान</option>
                      <option value="कालसर्प दोष">कालसर्प दोष निवारण</option>
                      <option value="पितृ दोष शांति">पितृ दोष शांति एवं नारायण बलि</option>
                      <option value="विवाह संस्कार">कुंभ / अर्क विवाह</option>
                      <option value="उज्जैन दर्शन">उज्जैन पावन दर्शन</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3 flex flex-col justify-between">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      फ़ाइल अपलोड करें (Choose Image/Video)
                    </label>
                    <input
                      type="file"
                      accept={galType === "video" ? "video/*" : "image/*"}
                      onChange={(e) => setGalFile(e.target.files?.[0] || null)}
                      className="w-full text-xs text-stone-600 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-amber-100 file:text-amber-900 hover:file:bg-amber-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      अथवा लिंक (YouTube Video URL)
                    </label>
                    <input
                      type="url"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={galUrl}
                      onChange={(e) => setGalUrl(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-900 focus:border-vedic-saffron outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={galLoading}
                      className="w-full bg-vedic-saffron hover:bg-amber-600 text-white font-bold py-3 rounded-xl shadow transition flex items-center justify-center gap-2 text-sm"
                    >
                      {galLoading ? (
                        <span>अपलोड हो रहा है...</span>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>गैलरी में अपलोड करें</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Current Gallery Items List */}
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm">
                वर्तमान गैलरी आइटम्स ({galleryItems.length})
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm flex items-start gap-3 justify-between"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                      <img
                        src={item.thumbnailUrl || item.mediaUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-vedic-saffron">
                        {item.type === "video" ? (
                          <Video className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        ) : (
                          <ImageIcon className="w-3.5 h-3.5 shrink-0" />
                        )}
                        <span>{item.category}</span>
                      </div>
                      <h4 className="font-bold text-stone-900 text-xs truncate mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-stone-400 mt-1">{item.date}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteGallery(item.id)}
                      className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition"
                      title="हटाएं (Delete)"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
