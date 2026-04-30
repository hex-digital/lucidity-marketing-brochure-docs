import withBundleAnalyzer from '@next/bundle-analyzer';
import { env } from './env';
import type { NextConfig } from 'next';

const { NEXT_PUBLIC_WEB_URL, VERCEL_URL } = env();

export const config: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [NEXT_PUBLIC_WEB_URL, ...(VERCEL_URL ? [VERCEL_URL] : [])],
    },
  },
  images: {
    unoptimized: true,
  },
};

export const withAnalyzer = (sourceConfig: NextConfig): NextConfig =>
  withBundleAnalyzer()(sourceConfig);
