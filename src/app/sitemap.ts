import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-pandit-ji`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic Pooja Service Pages (SEO Silo)
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
