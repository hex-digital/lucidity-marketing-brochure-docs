import withBundleAnalyzer from '@next/bundle-analyzer';
import { withMicrofrontends } from '@vercel/microfrontends/next/config';
import type { NextConfig } from 'next';
import { env } from './env';

const { NEXT_PUBLIC_WEB_URL, VERCEL_URL } = env();

export const config: NextConfig = withMicrofrontends({
  experimental: {
    serverActions: {
      allowedOrigins: [
        NEXT_PUBLIC_WEB_URL,
        ...(VERCEL_URL ? [VERCEL_URL] : []),
      ],
    },
  },
  images: {
    unoptimized: true,
  },
}, { debug: true });

export const withAnalyzer = (sourceConfig: NextConfig): NextConfig =>
  withBundleAnalyzer()(sourceConfig);
