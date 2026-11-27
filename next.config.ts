import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Anciennes URL du site précédent (page de réservation à deux formats).
  async redirects() {
    return [
      { source: "/rendez-vous", destination: "/#echange", statusCode: 301 },
      { source: "/en/book", destination: "/en#echange", statusCode: 301 },
    ];
  },
};

export default nextConfig;
