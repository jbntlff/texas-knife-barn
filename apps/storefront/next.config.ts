import type { NextConfig } from "next";

// Set in config/env.shared.local — the current machine's LAN IP, so phones
// and other devices on the network can reach this dev server's Supabase
// storage images. Changes depending on which location you're working from.
const lanHost = process.env.LAN_HOST;

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
      ...(lanHost
        ? [
            {
              protocol: "http" as const,
              hostname: lanHost,
              port: "54321",
              pathname:
                "/storage/v1/object/public/**",
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;