import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pooja Booking Ujjain",
    "Pandit in Ujjain",
    "Kaal Sarp Dosh Puja Ujjain",
    "Mangal Dosh Puja Mangalnath Ujjain",
    "Best Pandit for Kaal Sarp in Ujjain",
    "उज्जैन में कालसर्प पूजा",
    "उज्जैन मंगलनाथ भात पूजा",
    "महामृत्युंजय जाप उज्जैन",
    "कुंभ विवाह पूजा उज्जैन",
    "अर्क विवाह उज्जैन",
    "रुद्राभिषेक उज्जैन",
    "Pandit Gopal Shastri Ujjain",
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
        name: "Pandit Gopal Shastri",
        alternateName: "पंडित गोपाल शास्त्री",
        jobTitle: "Vedic Priest & Astrologer (तीर्थ पुरोहित)",
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
        name: siteConfig.name,
        alternateName: siteConfig.englishName,
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
    <html lang="hi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
