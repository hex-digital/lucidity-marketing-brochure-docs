import { env } from '@/env';
import { config, withAnalyzer } from '@pkg/next-config';
import { withMultizone } from '@pkg/next-multizone/next-config';
import { withLogging, withSentry } from '@pkg/observability/next-config';
import type { NextConfig } from 'next';

/* eslint-disable import-x/no-mutable-exports */
let nextConfig: NextConfig = withLogging(
  withMultizone(
    'web',
    {
      ...config,
    },
    { default: true },
  ),
);

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
