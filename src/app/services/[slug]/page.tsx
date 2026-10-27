import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData, PoojaService } from "@/data/services";
import { siteConfig } from "@/config/site";
import BookingForm from "@/components/BookingForm";
import {
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  BookOpen,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for all 10 poojas for 100% pre-rendering & lightning speed
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamic SEO Metadata for Google
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "सेवा नहीं मिली" };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.targetKeywords,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: "article",
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.titleHindi,
        alternateName: service.titleEnglish,
        description: service.fullDescription,
        provider: {
          "@type": "Person",
          name: siteConfig.name,
          telephone: siteConfig.contact.callNumber,
        },
        areaServed: {
          "@type": "City",
          name: "Ujjain",
        },
        serviceType: "Vedic Religious Puja",
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "मुख्य पृष्ठ",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "पूजन सेवाएं",
            item: `${siteConfig.url}/#services-grid`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.titleHindi,
            item: `${siteConfig.url}/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Header */}
      <div className="bg-amber-900/90 text-amber-100 py-3 px-4 border-b border-amber-800">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs">
          <Link href="/" className="hover:text-white transition">
            होम (Home)
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
          <Link href="/#services-grid" className="hover:text-white transition">
            वैदिक सेवाएं
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-white font-medium truncate">
            {service.titleHindi}
          </span>
        </div>
      </div>

      {/* Hero Banner for this specific pooja */}
      <div className="bg-gradient-to-r from-stone-900 via-vedic-maroon to-stone-900 text-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{service.badgeHindi} | उज्जैन सिद्ध तीर्थ</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {service.titleHindi}
          </h1>
          <p className="text-amber-200/80 text-sm sm:text-lg font-medium mt-1">
            {service.titleEnglish}
          </p>

          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10">
              <MapPin className="w-4 h-4 text-amber-400" />
              {service.locationInUjjain}
            </span>

            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10">
              <Clock className="w-4 h-4 text-amber-400" />
              अवधि: {service.duration}
            </span>

            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              पंडित गोपाल कृष्ण शास्त्री जी द्वारा संचालित
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Comprehensive Details (8 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Detailed Description */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-amber-100">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 border-b border-amber-100 pb-3">
                पूजा का शास्त्रीय महत्व एवं विवरण
              </h2>
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="mt-6 bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-vedic-saffron" />
                  यह पूजा उज्जैन तीर्थ में ही क्यों विशेष फलदायी है?
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                  {service.whyInUjjain}
                </p>
              </div>
            </section>

            {/* Benefits of this pooja */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-amber-100">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 border-b border-amber-100 pb-3">
                पूजा के प्रमुख लाभ एवं फल (Benefits)
              </h2>
              <div className="mt-5 space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700 leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Vidhi */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-amber-100">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 border-b border-amber-100 pb-3">
                संपूर्ण वैदिक पूजा विधि एवं क्रम
              </h2>
              <div className="mt-6 space-y-5">
                {service.vidhiSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-vedic-saffron text-white flex items-center justify-center font-bold text-xs shrink-0 shadow">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Samagri Included */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-amber-100">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 border-b border-amber-100 pb-3">
                पंडित जी द्वारा व्यवस्थित सामग्री
              </h2>
              <p className="text-xs text-stone-500 mt-2">
                यजमान को कोई भी सामग्री अलग से नहीं लानी होती। सभी शुद्ध वैदिक सामग्री पंडित जी द्वारा पूर्व व्यवस्थित रहती है:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.samagriIncluded.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 bg-amber-50/50 rounded-xl text-xs font-medium text-stone-700 border border-amber-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-vedic-saffron"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs for this specific pooja */}
            {service.faqs.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-amber-100">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 border-b border-amber-100 pb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-vedic-saffron" />
                  <span>{service.titleHindi} से जुड़े प्रश्नोत्तर</span>
                </h2>
                <div className="mt-6 space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 bg-amber-50/30 rounded-2xl border border-amber-100">
                      <h3 className="font-bold text-stone-900 text-sm">
                        Q. {faq.question}
                      </h3>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                        A. {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Pre-Selected Booking Form (Sticky 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24">
              <BookingForm defaultPooja={service.titleHindi} source={service.slug} />

              {/* Direct Quick WhatsApp / Call Box */}
              <div className="mt-6 bg-gradient-to-br from-amber-100 via-amber-50 to-white p-6 rounded-3xl border border-amber-300 shadow-sm text-center space-y-3">
                <div className="font-bold text-stone-900 text-base">
                  सीधे पंडित गोपाल कृष्ण शास्त्री जी से बात करें
                </div>
                <p className="text-xs text-stone-600">
                  कुंडली में {service.titleHindi} का प्रभाव जानने एवं शुभ मुहूर्त पूछने हेतु कॉल अथवा WhatsApp करें:
                </p>

                <div className="flex flex-col gap-2.5 pt-1">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                      `जय श्री महाकाल पंडित जी! मुझे उज्जैन में ${service.titleHindi} के बारे में जानकारी चाहिए।`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 text-xs sm:text-sm transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp पर तुरंत चैट करें</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.callNumber}`}
                    className="bg-stone-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 text-xs sm:text-sm transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>कॉल करें: {siteConfig.contact.callDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
