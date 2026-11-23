import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

// Tout le site est ouvert aux moteurs de recherche, et le sitemap leur donne la liste des pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
