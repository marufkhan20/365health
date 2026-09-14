import type { MetadataRoute } from "next";

const BASE_URL = "https://365health.global";

// These map 1:1 to the route files under src/app — adding a page means
// adding a route file, so this list only ever changes alongside a deploy
// anyway. Not CMS content, so it isn't Sanity-sourced.
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/delivery",
  "/warehouse",
  "/product-solutions",
  "/flexible-hot-cold-gel-packs",
  "/contact",
  "/request-a-quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set(ROUTES));

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
