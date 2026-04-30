import { env } from '@/env';
import { config, withAnalyzer } from '@pkg/next-config';
import { withLogging, withSentry } from '@pkg/observability/next-config';
import type { NextConfig } from 'next';

/**
 * Docs zone URL for multi-zone rewrites. Uses env when set; in local dev defaults to the usual docs port so `/docs` works without copying env vars.
 */
function docsZoneOriginForRewrites(): string | undefined {
  const explicit = process.env.NEXT_PRIVATE_DOCS_ZONE_ORIGIN?.trim().replace(/\/+$/, '');
  if (explicit) {
    return explicit;
  }
  if (process.env.NODE_ENV === 'development') {
    return 'http://127.0.0.1:3001';
  }
  return undefined;
}

const docsZoneOrigin = docsZoneOriginForRewrites();
const docsBasePath = env.NEXT_PUBLIC_DOCS_BASE_PATH;

/* eslint-disable import-x/no-mutable-exports */
let nextConfig: NextConfig = withLogging({
  ...config,

  async rewrites() {
    return [...rewriteMultizonePaths(docsZoneOrigin, docsBasePath)];
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
  const origin = zoneOrigin?.trim().replace(/\/+$/, '');
  if (!origin || !basePath) {
    return [];
  }

  return [
    { source: `${basePath}`, destination: `${origin}${basePath}` },
    { source: `${basePath}/`, destination: `${origin}${basePath}/` },
    { source: `${basePath}/:path*`, destination: `${origin}${basePath}/:path*` },
  ];
}
