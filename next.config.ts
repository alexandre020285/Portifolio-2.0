import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/**',
      },
      {
        protocol: 'https',
        hostname: 'nestjs.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jwt.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
