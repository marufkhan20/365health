import type { MetadataRoute } from "next";
import { navItems } from "@/lib/content";

const BASE_URL = "https://365health.global";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/request-a-quote", ...navItems.map((i) => i.href)];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
