import type { MetadataRoute } from "next";
import { SITE_NAME, pages } from "@/data/site";

// Nom et icônes utilisés quand le site est ajouté à l'écran d'accueil d'un téléphone.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: pages.home.fr.description,
    lang: "fr",
    start_url: "/",
    display: "browser",
    background_color: "#FFFFFF",
    theme_color: "#F4F6F8",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
