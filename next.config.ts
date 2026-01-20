import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/Portifolio-2.0' : '',
  assetPrefix: isProd ? '/Portifolio-2.0/' : '',
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
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/Portifolio-2.0' : '',
  },
};

export default nextConfig;
