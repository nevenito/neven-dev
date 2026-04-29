import { DIRECT_EMAIL, UPWORK_URL } from "./home/_content/content";

const fallbackSiteUrl = "https://neven.dev";

const getSiteUrl = () => {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!envUrl) {
    return fallbackSiteUrl;
  }

  const withProtocol = envUrl.startsWith("http")
    ? envUrl
    : `https://${envUrl}`;

  return withProtocol.replace(/\/$/, "");
};

export const siteConfig = {
  name: "Neven Zdelar",
  title: "Neven Zdelar | Frontend & Product Engineer",
  description:
    "Neven Zdelar is a frontend and product engineer building web, mobile, desktop, and AI-heavy software with strong UI, UX, and implementation detail.",
  url: getSiteUrl(),
  homePath: "/home",
  email: DIRECT_EMAIL,
  upworkUrl: UPWORK_URL,
  locale: "en_US",
  language: "en",
  keywords: [
    "Neven Zdelar",
    "frontend engineer",
    "product engineer",
    "UI engineer",
    "UX engineer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "Electron developer",
    "TypeScript developer",
    "AI product engineer",
    "web app developer",
    "mobile app developer",
    "desktop app developer",
    "Upwork Top Rated Plus developer",
  ],
};

export const absoluteUrl = (path = "") => {
  return new URL(path, siteConfig.url).toString();
};

export const canonicalUrl = absoluteUrl(siteConfig.homePath);

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${canonicalUrl}#person`,
  name: siteConfig.name,
  url: canonicalUrl,
  email: `mailto:${siteConfig.email}`,
  sameAs: [siteConfig.upworkUrl],
  jobTitle: "Frontend and product engineer",
  description: siteConfig.description,
  knowsAbout: [
    "Frontend engineering",
    "Product engineering",
    "UI implementation",
    "UX implementation",
    "React",
    "Next.js",
    "React Native",
    "Electron",
    "TypeScript",
    "AI-heavy software products",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Frontend and product engineer",
    skills:
      "React, Next.js, React Native, Electron, TypeScript, UI engineering, UX implementation, web apps, mobile apps, desktop apps, AI product interfaces",
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Product UI engineering",
      description:
        "Frontend and product engineering for web, mobile, desktop, and AI-heavy software.",
      url: canonicalUrl,
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${canonicalUrl}#website`,
  name: siteConfig.name,
  url: canonicalUrl,
  inLanguage: siteConfig.language,
  description: siteConfig.description,
  publisher: {
    "@id": `${canonicalUrl}#person`,
  },
};

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd, websiteJsonLd],
};
