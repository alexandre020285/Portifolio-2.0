import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/Portifolio-2.0' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
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
