import { env } from '@/env';
import { config, withAnalyzer } from '@pkg/next-config';
import { withLogging, withSentry } from '@pkg/observability/next-config';
import type { NextConfig } from 'next';

const docsZoneOrigin = 'http://localhost:3001';
const docsBasePath = '/docs';

/* eslint-disable import-x/no-mutable-exports */
let nextConfig: NextConfig = withLogging({
  ...config,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async rewrites() {
    return [
      ...rewriteMultizonePaths(docsZoneOrigin, docsBasePath),
    ];
  },
});

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;

/**
 * Handle rewrites for proxy-based multizone hosting.
 * @param zoneOrigin - The origin of the zone to rewrite to.
 * @param basePath - The base path of the zone to rewrite to.
 * @returns The rewrites to apply.
 */
function rewriteMultizonePaths(zoneOrigin?: string, basePath?: string) {
  if (!docsZoneOrigin || !basePath) {
    return [];
  }

  return [
    { source: `${basePath}`, destination: `${zoneOrigin}${basePath}` },
    { source: `${basePath}/`, destination: `${zoneOrigin}${basePath}/` },
    { source: `${basePath}/:path*`, destination: `${zoneOrigin}${basePath}/:path*` },
  ];
}