import type { NextConfig } from "next";

// Set in config/env.shared.local — the current machine's LAN IP, so phones
// and other devices on the network can reach this dev server. Changes
// depending on which location you're working from.
const lanHost = process.env.LAN_HOST;

const nextConfig: NextConfig = {
  /* config options here */
	  allowedDevOrigins:[
      'tkb.local',
      ...(lanHost ? [lanHost] : []),

    ],
    experimental: {
      serverActions: {
        bodySizeLimit: "10mb",
      },
    },

};


export default nextConfig;
