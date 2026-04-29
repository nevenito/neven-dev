import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl(siteConfig.homePath),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
