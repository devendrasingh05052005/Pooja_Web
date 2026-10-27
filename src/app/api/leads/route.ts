import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { siteConfig, getCleanWhatsappNumber } from "@/config/site";

export interface BookingLead {
  id: string;
  name: string;
  phone: string;
  city: string;
  gotra?: string;
  poojaName: string;
  preferredDate: string;
  serviceMode: "in-person" | "online-sankalp";
  notes?: string;
  status: "new" | "contacted" | "confirmed" | "completed";
  createdAt: string;
}

const dataDir = path.join(process.cwd(), "data");
const leadsFilePath = path.join(dataDir, "leads.json");

function ensureDirectoryAndFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(leadsFilePath)) {
    fs.writeFileSync(leadsFilePath, JSON.stringify([], null, 2), "utf8");
  }
}

export async function GET() {
  try {
    ensureDirectoryAndFile();
    const data = fs.readFileSync(leadsFilePath, "utf8");
    const leads = JSON.parse(data || "[]");
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (error) {
    console.error("Error reading leads:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, city, gotra, poojaName, preferredDate, serviceMode, notes } = body;

    if (!name || !phone || !poojaName) {
      return NextResponse.json(
        { success: false, error: "कृपया नाम, फोन नंबर और पूजन का नाम अवश्य भरें।" },
        { status: 400 }
      );
    }

    ensureDirectoryAndFile();
    const data = fs.readFileSync(leadsFilePath, "utf8");
    const leads: BookingLead[] = JSON.parse(data || "[]");

    const newLead: BookingLead = {
      id: "lead_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      name: name.trim(),
      phone: phone.trim(),
      city: city ? city.trim() : "Not specified",
      gotra: gotra ? gotra.trim() : "कश्यप / ज्ञात नहीं",
      poojaName: poojaName.trim(),
      preferredDate: preferredDate || "यथाशीघ्र शुभ मुहूर्त",
      serviceMode: serviceMode === "online-sankalp" ? "online-sankalp" : "in-person",
      notes: notes ? notes.trim() : "",
      status: "new",
      createdAt: new Date().toISOString(),
    };

    leads.unshift(newLead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf8");

    // Format WhatsApp message
    const modeText =
      newLead.serviceMode === "online-sankalp"
        ? "घर बैठे ऑनलाइन संकल्प पूजा (E-Pooja)"
        : "उज्जैन आकर प्रत्यक्ष पूजन (In-Person)";

    const rawMessage = `🙏 *जय श्री महाकाल पंडित जी!*
मेरा नाम *${newLead.name}* है।
📞 *मोबाइल:* ${newLead.phone}
📍 *शहर:* ${newLead.city}
🔱 *पूजन:* ${newLead.poojaName}
📅 *अनुमानित तिथि:* ${newLead.preferredDate}
🕉️ *गोत्र:* ${newLead.gotra}
🚩 *पूजा का माध्यम:* ${modeText}
${newLead.notes ? `📝 *अन्य विवरण:* ${newLead.notes}\n` : ""}
कृपया मुझे शुभ मुहूर्त, विधि और व्यवस्था की जानकारी प्रदान करने की कृपा करें।`;

    const targetNumber = getCleanWhatsappNumber(siteConfig.contact.whatsappNumber);
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(rawMessage)}`;

    return NextResponse.json({
      success: true,
      lead: newLead,
      whatsappUrl,
      message: "आपकी बुकिंग जानकारी सफलतापूर्वक प्राप्त हो गई है।",
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
