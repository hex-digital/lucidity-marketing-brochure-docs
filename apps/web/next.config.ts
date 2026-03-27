import type { NextConfig } from 'next';
import { env } from '@/env';
import { config, withAnalyzer } from '@pkg/next-config';
import { withLogging, withSentry } from '@pkg/observability/next-config';

/* eslint-disable import-x/no-mutable-exports */
let nextConfig: NextConfig = withLogging({
  ...config,
});

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
