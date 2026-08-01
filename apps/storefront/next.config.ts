import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "tkb.local",
        port: "54321",
        pathname:
          "/storage/v1/object/public/**",
      },
      {
        protocol: "http",
        hostname: "192.168.0.252",
        port: "54321",
        pathname:
          "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;