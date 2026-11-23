import type { MetadataRoute } from "next";
import { LAST_UPDATE, pages, type Lang, type PageKey } from "@/data/site";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

// Les six pages (FR et EN), chacune avec ses équivalents de langue, comme dans les balises hreflang.
export default function sitemap(): MetadataRoute.Sitemap {
  const langs: Lang[] = ["fr", "en"];

  return (Object.keys(pages) as PageKey[]).flatMap((page) =>
    langs.map((lang) => ({
      url: absoluteUrl(pages[page][lang].path),
      lastModified: LAST_UPDATE,
      alternates: { languages: languageAlternates(page, absoluteUrl) },
    })),
  );
}
