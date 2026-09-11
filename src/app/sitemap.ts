import type { MetadataRoute } from "next";
import { navItems } from "@/lib/content";

const BASE_URL = "https://365health.global";

export default function sitemap(): MetadataRoute.Sitemap {
  const navRoutes = navItems.flatMap((item) => [
    item.href,
    ...("children" in item ? item.children.map((c) => c.href) : []),
  ]);
  const routes = Array.from(new Set(["/", "/request-a-quote", ...navRoutes]));

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
