import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	  allowedDevOrigins:[
      'tkb.local',
      '192.168.1.248',
      
    ],
    experimental: {
      serverActions: {
        bodySizeLimit: "10mb",
      },
    },

};


export default nextConfig;
