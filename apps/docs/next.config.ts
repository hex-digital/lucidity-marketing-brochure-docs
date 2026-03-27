import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';
import { env } from '@/env';
import { config, withAnalyzer } from '@pkg/next-config';

const withMDX = createMDX();

let nextConfig: NextConfig = {
  ...config,
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/get-started',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
};

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default withMDX(nextConfig);
