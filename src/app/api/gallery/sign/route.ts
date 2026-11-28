import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// POST: Generate a signed Cloudinary upload payload for direct client-side uploads
// This bypasses Vercel's 4.5 MB serverless body size limit for videos and large photos.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      pin = "",
      type = "photo",
      title = "वैदिक अनुष्ठान दर्शन",
      category = "महाकाल पूजा",
      description = "",
      isFeatured = true,
    } = body;

    if (pin !== "1008" && pin !== "mahakal") {
      return NextResponse.json(
        { success: false, message: "अमान्य सुरक्षा पिन! कृपया सही पिन दर्ज करें।" },
        { status: 401 }
      );
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        { success: false, message: "Cloudinary कॉन्फ़िगरेशन अधूरा है।" },
        { status: 500 }
      );
    }

    const itemId = `gal_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const date = new Date().toISOString().split("T")[0];
    const timestamp = Math.round(Date.now() / 1000);
    const folder = "pooja-gallery";

    const cleanTitle = (title || "वैदिक अनुष्ठान दर्शन").trim().replace(/[|=]/g, " ");
    const cleanCategory = (category || "महाकाल पूजा").trim().replace(/[|=]/g, " ");
    const cleanDescription = (description || "").trim().replace(/[|=]/g, " ");

    const context = [
      `title=${cleanTitle}`,
      `category=${cleanCategory}`,
      `description=${cleanDescription}`,
      `isFeatured=${Boolean(isFeatured)}`,
      `itemType=${type}`,
      `itemId=${itemId}`,
      `date=${date}`,
    ].join("|");

    const tags = ["pooja-gallery", cleanCategory.replace(/\s+/g, "-"), type].join(",");

    const paramsToSign = {
      context,
      folder,
      public_id: itemId,
      tags,
      timestamp,
    };

    const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);

    return NextResponse.json({
      success: true,
      signature,
      timestamp,
      apiKey,
      cloudName,
      folder,
      publicId: itemId,
      context,
      tags,
    });
  } catch (error: any) {
    console.error("Sign error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "अपलोड हस्ताक्षर बनाने में त्रुटि आई।" },
      { status: 500 }
    );
  }
}
