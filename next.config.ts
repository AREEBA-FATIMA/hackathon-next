import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        hostname:'cdn.sanity.io',
      }
    ]
    // domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
  },
};

export default nextConfig;
