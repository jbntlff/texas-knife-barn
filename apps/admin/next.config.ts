import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	  allowedDevOrigins:[
      'tkb.local',
      '192.168.0.200',
      
    ],
    experimental: {
      serverActions: {
        bodySizeLimit: "10mb",
      },
    },

};


export default nextConfig;
