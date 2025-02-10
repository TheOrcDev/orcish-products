import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
