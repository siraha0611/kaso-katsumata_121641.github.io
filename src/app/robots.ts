import type { MetadataRoute } from "next";

const siteOrigin = "https://siraha0611.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteOrigin}${basePath}/sitemap.xml`
  };
}
