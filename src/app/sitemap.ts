import type { MetadataRoute } from "next";
import { works } from "@/data/works";
import { basePath, siteOrigin } from "@/lib/site";

const baseUrl = `${siteOrigin}${basePath}`;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/news",
    "/services",
    "/for-recruiters",
    "/works",
    "/gallery",
    "/published",
    "/research",
    "/about",
    "/story",
    "/storyboard",
    "/tools",
    "/contact"
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));

  const workPages: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${baseUrl}/works/${work.slug}/`,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...staticPages, ...workPages];
}
