import { createMDX } from 'fumadocs-mdx/next';
import { env } from '@/env';
import { config, withAnalyzer } from '@pkg/next-config';
import { withLogging, withSentry } from '@pkg/observability/next-config';
import type { NextConfig } from 'next';

const withMDX = createMDX();

let nextConfig: NextConfig = withLogging(
  withMDX({
    ...config,
    basePath: env.NEXT_PUBLIC_DOCS_BASE_PATH.replace(/\/+$/, ''),
    serverExternalPackages: ['@takumi-rs/image-response'],
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/:path*.mdx',
          destination: '/llms.mdx/docs/:path*',
        },
        // Serve docs homepage as /get-started
        {
          source: '/',
          destination: '/get-started',
        },
      ];
    },
  }),
);

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default withMDX(nextConfig);
