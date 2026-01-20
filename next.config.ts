import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Portifolio-2.0' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portifolio-2.0' : '',
  images: {
    unoptimized: true,
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
