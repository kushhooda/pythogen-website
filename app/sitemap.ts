import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pythogen.dev";

  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/canvas",
    "/canvas/download",
    "/changelog",
    "/contact",
    "/license",
    "/privacy",
    "/security",
    "/store",
    "/support",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const supportArticles = [
    "how-to-install",
    "macos-security-warning",
    "how-to-add-imported-wallpapers",
    "how-to-use-live-wallpapers",
    "how-to-uninstall",
    "where-canvas-stores-imported-files",
    "why-imported-images-may-crop"
  ].map((slug) => ({
    url: `${baseUrl}/support/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...supportArticles];
}
