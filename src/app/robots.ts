import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cv", "/cv/"],
    },
    sitemap: "https://segunalabi.co.uk/sitemap.xml",
    host: "https://segunalabi.co.uk",
  };
}
