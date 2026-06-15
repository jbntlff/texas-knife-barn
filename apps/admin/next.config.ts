import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	  allowedDevOrigins:[
      'tkb.local'
    ],
    experimental: {
      serverActions: {
        bodySizeLimit: "10mb",
      },
    },

};


export default nextConfig;
