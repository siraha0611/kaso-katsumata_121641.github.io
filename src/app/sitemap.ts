import type { MetadataRoute } from "next";
import { works } from "@/data/works";

const siteOrigin = "https://siraha0611.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const baseUrl = `${siteOrigin}${basePath}`;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/works",
    "/gallery",
    "/published",
    "/animation-process",
    "/research",
    "/about",
    "/story",
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
