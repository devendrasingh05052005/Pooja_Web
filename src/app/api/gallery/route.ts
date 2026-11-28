import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

// Upload file buffer to Cloudinary with metadata stored as context
async function uploadToCloudinary(
  buffer: Buffer,
  filename: string,
  resourceType: "image" | "video" | "auto" = "auto",
  metadata: {
    title: string;
    category: string;
    description: string;
    isFeatured: boolean;
    itemType: string;
    itemId: string;
    date: string;
  }
): Promise<string> {
  return new Promise((resolve, reject) => {
    // Encode metadata as Cloudinary context (key=value|key=value)
    const contextStr = [
      `title=${metadata.title.replace(/[|=]/g, " ")}`,
      `category=${metadata.category.replace(/[|=]/g, " ")}`,
      `description=${metadata.description.replace(/[|=]/g, " ")}`,
      `isFeatured=${metadata.isFeatured}`,
      `itemType=${metadata.itemType}`,
      `itemId=${metadata.itemId}`,
      `date=${metadata.date}`,
    ].join("|");

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "pooja-gallery",
        public_id: metadata.itemId,
        resource_type: resourceType,
        context: contextStr,
        tags: ["pooja-gallery", metadata.category.replace(/\s+/g, "-"), metadata.itemType],
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result!.secure_url);
        }
      }
    );
    uploadStream.end(buffer);
  });
}

// Fetch all gallery items from Cloudinary using Search API
async function fetchGalleryFromCloudinary() {
  try {
    // Search for all resources in pooja-gallery folder
    const result = await cloudinary.search
      .expression("folder:pooja-gallery")
      .with_field("context")
      .with_field("tags")
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    const items = result.resources.map((resource: any) => {
      const ctx = resource.context?.custom || {};
      const isYoutube = ctx.isYoutube === "true";
      const isVideo = resource.resource_type === "video" || ctx.itemType === "video";

      // For YouTube videos, use the stored URLs from context
      // For uploaded files, use Cloudinary secure_url
      const mediaUrl = isYoutube ? (ctx.mediaUrl || resource.secure_url) : resource.secure_url;
      const videoEmbedUrl = isYoutube ? (ctx.videoEmbedUrl || "") : "";
      const thumbnailUrl = isYoutube
        ? (ctx.thumbnailUrl || "")
        : isVideo
          ? resource.secure_url.replace(/\.(mp4|mov|avi|webm)$/, ".jpg")
          : resource.secure_url;

      // Use itemId from context, or strip folder prefix from public_id
      const itemId = ctx.itemId || resource.public_id.replace("pooja-gallery/", "");

      return {
        id: itemId,
        type: ctx.itemType || (isVideo ? "video" : "photo"),
        title: ctx.title || "वैदिक अनुष्ठान दर्शन",
        category: ctx.category || "महाकाल पूजा",
        mediaUrl,
        thumbnailUrl,
        videoEmbedUrl,
        date: ctx.date || resource.created_at?.split("T")[0] || "",
        description: ctx.description || "",
        isFeatured: ctx.isFeatured === "true",
      };
    });

    return items;
  } catch (err) {
    console.error("Error fetching from Cloudinary:", err);
    return [];
  }
}

// Store YouTube video metadata as a text asset in Cloudinary
async function storeYouTubeVideo(metadata: {
  title: string;
  category: string;
  description: string;
  isFeatured: boolean;
  itemId: string;
  date: string;
  mediaUrl: string;
  videoEmbedUrl: string;
  thumbnailUrl: string;
}): Promise<void> {
  // Upload a tiny transparent PNG as placeholder, with all metadata in context
  const tinyPng = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "base64"
  );

  const contextStr = [
    `title=${metadata.title.replace(/[|=]/g, " ")}`,
    `category=${metadata.category.replace(/[|=]/g, " ")}`,
    `description=${metadata.description.replace(/[|=]/g, " ")}`,
    `isFeatured=${metadata.isFeatured}`,
    `itemType=video`,
    `itemId=${metadata.itemId}`,
    `date=${metadata.date}`,
    `mediaUrl=${metadata.mediaUrl.replace(/[|=]/g, " ")}`,
    `videoEmbedUrl=${metadata.videoEmbedUrl.replace(/[|=]/g, " ")}`,
    `thumbnailUrl=${metadata.thumbnailUrl.replace(/[|=]/g, " ")}`,
    `isYoutube=true`,
  ].join("|");

  await new Promise<void>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "pooja-gallery",
        public_id: metadata.itemId,
        resource_type: "image",
        context: contextStr,
        tags: ["pooja-gallery", "youtube", "video", metadata.category.replace(/\s+/g, "-")],
      },
      (error) => {
        if (error) reject(error);
        else resolve();
      }
    );
    stream.end(tinyPng);
  });
}

// GET: Fetch all gallery items from Cloudinary
export async function GET() {
  const items = await fetchGalleryFromCloudinary();
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

      const itemId = `gal_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
      const date = new Date().toISOString().split("T")[0];

      // Handle uploaded file
      const file = formData.get("file") as File | null;
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const isVideo = file.type.startsWith("video/");
        const resourceType = isVideo ? "video" : "image";

        try {
          mediaUrl = await uploadToCloudinary(buffer, file.name, resourceType, {
            title: title.trim(),
            category: category.trim(),
            description: description.trim(),
            isFeatured,
            itemType: type,
            itemId,
            date,
          });
        } catch (uploadError: any) {
          console.error("Cloudinary upload error:", uploadError);
          return NextResponse.json(
            { success: false, message: `Cloudinary अपलोड में त्रुटि: ${uploadError.message}` },
            { status: 500 }
          );
        }
      } else if (mediaUrl) {
        // YouTube video URL — store as metadata in Cloudinary
        const videoEmbedUrl = getYouTubeEmbedUrl(mediaUrl);
        const thumbnailUrl = videoEmbedUrl.includes("youtube.com/embed/")
          ? `https://img.youtube.com/vi/${videoEmbedUrl.split("/embed/")[1]?.split("?")[0]}/hqdefault.jpg`
          : "";

        try {
          await storeYouTubeVideo({
            title: title.trim(),
            category: category.trim(),
            description: description.trim(),
            isFeatured,
            itemId,
            date,
            mediaUrl,
            videoEmbedUrl,
            thumbnailUrl,
          });
        } catch (err: any) {
          return NextResponse.json(
            { success: false, message: `YouTube वीडियो सहेजने में त्रुटि: ${err.message}` },
            { status: 500 }
          );
        }
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

    return NextResponse.json({ success: true, message: "गैलरी आइटम सफलतापूर्वक जोड़ा गया!" });
  } catch (error: any) {
    console.error("Gallery upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "अपलोड करने में त्रुटि आई।" },
      { status: 500 }
    );
  }
}

// DELETE: Remove a gallery item from Cloudinary
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

    // Build the correct public_id — strip any existing prefix to avoid double-prefixing
    const cleanId = id.replace(/^pooja-gallery\//, "");
    const publicId = `pooja-gallery/${cleanId}`;

    // Delete from Cloudinary — try both image and video resource types
    const imgResult = await cloudinary.uploader.destroy(publicId, { resource_type: "image" }).catch(() => ({ result: 'not found' }));
    const vidResult = await cloudinary.uploader.destroy(publicId, { resource_type: "video" }).catch(() => ({ result: 'not found' }));

    if (imgResult.result !== 'ok' && vidResult.result !== 'ok') {
      console.warn("Item not found in Cloudinary:", publicId);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
