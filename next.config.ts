import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.spoonacular.com",
        pathname: "**",
      },
    ],
  },


  async rewrites() {

    return [
      {
        source: '/',
        destination: process.env.NEXT_PUBLIC_API_URL ?? ''
      }
    ]
  }
};

export default nextConfig;
