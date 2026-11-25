import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const GALLERY_FILE = path.join(process.cwd(), "data", "gallery.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "gallery");

// Helper to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";
  try {
    if (url.includes("embed/")) return url;
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (url.includes("shorts/")) {
      const id = url.split("shorts/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
  } catch (e) {
    console.error("Error parsing YouTube URL:", e);
  }
  return url;
}

function readGallery() {
  try {
    if (!fs.existsSync(GALLERY_FILE)) {
      fs.writeFileSync(GALLERY_FILE, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const data = fs.readFileSync(GALLERY_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading gallery data:", err);
    return [];
  }
}

function writeGallery(items: any[]) {
  try {
    const dir = path.dirname(GALLERY_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(GALLERY_FILE, JSON.stringify(items, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing gallery data:", err);
  }
}

// GET: Fetch all gallery items
export async function GET() {
  const items = readGallery();
  return NextResponse.json({ success: true, items });
}

// POST: Add new gallery item (with PIN authorization)
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let pin = "";
    let type = "photo";
    let title = "";
    let category = "वैदिक पूजा";
    let description = "";
    let mediaUrl = "";
    let isFeatured = true;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      pin = (formData.get("pin") as string) || "";
      type = (formData.get("type") as string) || "photo";
      title = (formData.get("title") as string) || "वैदिक अनुष्ठान दर्शन";
      category = (formData.get("category") as string) || "वैदिक पूजा";
      description = (formData.get("description") as string) || "";
      mediaUrl = (formData.get("mediaUrl") as string) || "";
      isFeatured = formData.get("isFeatured") === "true";

      // Check PIN
      if (pin !== "1008" && pin !== "mahakal") {
        return NextResponse.json(
          { success: false, message: "अमान्य सुरक्षा पिन! कृपया सही पिन दर्ज करें।" },
          { status: 401 }
        );
      }

      // Handle uploaded file if present
      const file = formData.get("file") as File | null;
      if (file && file.size > 0) {
        if (!fs.existsSync(UPLOAD_DIR)) {
          fs.mkdirSync(UPLOAD_DIR, { recursive: true });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const safeName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
        const filePath = path.join(UPLOAD_DIR, safeName);
        fs.writeFileSync(filePath, buffer);

        mediaUrl = `/uploads/gallery/${safeName}`;
      }
    } else {
      // JSON body
      const body = await req.json();
      pin = body.pin || "";
      type = body.type || "photo";
      title = body.title || "वैदिक अनुष्ठान दर्शन";
      category = body.category || "वैदिक पूजा";
      description = body.description || "";
      mediaUrl = body.mediaUrl || "";
      isFeatured = body.isFeatured ?? true;

      if (pin !== "1008" && pin !== "mahakal") {
        return NextResponse.json(
          { success: false, message: "अमान्य सुरक्षा पिन! कृपया सही पिन दर्ज करें।" },
          { status: 401 }
        );
      }
    }

    if (!mediaUrl) {
      return NextResponse.json(
        { success: false, message: "कृपया फोटो/वीडियो फ़ाइल या URL प्रदान करें।" },
        { status: 400 }
      );
    }

    const items = readGallery();
    const videoEmbedUrl = type === "video" ? getYouTubeEmbedUrl(mediaUrl) : "";
    const newItem = {
      id: `gal_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      type,
      title: title.trim(),
      category: category.trim(),
      mediaUrl,
      thumbnailUrl: type === "video" && videoEmbedUrl.includes("youtube.com/embed/")
        ? `https://img.youtube.com/vi/${videoEmbedUrl.split("/embed/")[1]?.split("?")[0]}/hqdefault.jpg`
        : mediaUrl,
      videoEmbedUrl,
      date: new Date().toISOString().split("T")[0],
      description: description.trim(),
      isFeatured,
    };

    items.unshift(newItem); // Add to top
    writeGallery(items);

    return NextResponse.json({ success: true, item: newItem });
  } catch (error: any) {
    console.error("Gallery upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "अपलोड करने में त्रुटि आई।" },
      { status: 500 }
    );
  }
}

// DELETE: Remove a gallery item
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const pin = searchParams.get("pin");

    if (pin !== "1008" && pin !== "mahakal") {
      return NextResponse.json(
        { success: false, message: "अमान्य सुरक्षा पिन!" },
        { status: 401 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID आवश्यक है।" },
        { status: 400 }
      );
    }

    const items = readGallery();
    const filtered = items.filter((item: any) => item.id !== id);
    writeGallery(filtered);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
