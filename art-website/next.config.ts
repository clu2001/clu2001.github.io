import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cache optimized images for 30 days (default is 60 seconds)
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Standard quality default (75 is Next.js default, being explicit)
    qualities: [40, 60, 75, 85, 100],
  },
};

export default nextConfig;
