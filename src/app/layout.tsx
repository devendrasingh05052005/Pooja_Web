import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import LanguageSelector from "@/components/LanguageSelector";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Ujjain Pooja Booking`,
  },
  description: siteConfig.description,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-token",
  },
  keywords: [
    // Top 10 Most Searched Keywords in Ujjain for Puja & Pandit
    "Ujjain Pooja Pandit",
    "Ujjain Puja Booking",
    "Kaal Sarp Puja Ujjain",
    "Kaal Sarp Dosh Puja in Ujjain",
    "Mangalnath Mandir Ujjain Pooja Booking",
    "Mangal Dosh Puja Ujjain",
    "Best Pandit in Ujjain for Puja",
    "Mahamrityunjay Jaap Ujjain",
    "Baglamukhi Puja Ujjain",
    "Baglamukhi Vishesh Anushthan Ujjain",
    "Pandit Gopal Krishna Shastri Ujjain",
    "Pandit Gopal Shastri Ujjain",
    "Vastu Shanti Puja Ujjain",
    "Mool Nakshatra Shanti Puja Ujjain",
    "Kumbh Vivah Ark Vivah Ujjain",
    "उज्जैन पूजा पंडित",
    "उज्जैन में कालसर्प पूजा",
    "मंगलनाथ भात पूजा उज्जैन",
    "उज्जैन के प्रसिद्ध पंडित जी",
    "उज्जैन पूजा बुकिंग",
    "पंडित गोपाल कृष्ण शास्त्री उज्जैन",
    "महामृत्युंजय जाप उज्जैन",
    "मां बगलामुखी अनुष्ठान उज्जैन",
    "Online Pooja Booking Ujjain"
  ],
  authors: [{ name: siteConfig.englishName, url: siteConfig.url }],
  creator: siteConfig.englishName,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: ["en_IN"],
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#pandit`,
        name: "Pandit Gopal Krishna Shastri",
        alternateName: "पंडित गोपाल कृष्ण शास्त्री",
        jobTitle: "Vedic Priest & Astrologer (वैदिक पुरोहित)",
        description: "18+ years experienced Vedic priest conducting Kaal Sarp, Mangal Dosh Bhat Puja, Mahamrityunjay Jaap in Ujjain.",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.line1,
          addressLocality: "Ujjain",
          addressRegion: "Madhya Pradesh",
          postalCode: siteConfig.contact.address.pincode,
          addressCountry: "IN",
        },
        telephone: siteConfig.contact.callNumber,
        sameAs: [siteConfig.contact.instagramUrl],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#organization`,
        name: "Ujjain Pooja Booking - Pandit Gopal Krishna Shastri",
        alternateName: [
          "Ujjain Pandit Booking",
          "Ujjain Pooja Booking",
          "पंडित गोपाल कृष्ण शास्त्री - उज्जैन",
          siteConfig.englishName,
        ],
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        image: `${siteConfig.url}/images/og-image.jpg`,
        telephone: siteConfig.contact.callNumber,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.line1,
          addressLocality: "Ujjain",
          addressRegion: "Madhya Pradesh",
          postalCode: siteConfig.contact.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "23.1828",
          longitude: "75.7682",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "05:00",
            closes: "22:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1420",
        },
      },
    ],
  };

  return (
    <html lang="hi" className="notranslate-custom">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
        <LanguageProvider>
          {/* Hidden Google Translate Element for site-wide auto-translation */}
          <div id="google_translate_element" className="hidden" aria-hidden="true" />
          <Script
            id="google-translate-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new window.google.translate.TranslateElement({
                    pageLanguage: 'hi',
                    includedLanguages: 'hi,en,mr,gu,te,ta,bn,kn,ml,pa',
                    autoDisplay: false
                  }, 'google_translate_element');
                }
              `,
            }}
          />
          <Script
            id="google-translate-script"
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />

          <Navbar />
          {/* Universal Language Selector Bar on ALL Pages */}
          <LanguageSelector />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
