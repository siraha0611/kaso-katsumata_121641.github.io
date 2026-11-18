import type { MetadataRoute } from "next";
import { basePath, siteOrigin } from "@/lib/site";


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
