import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
