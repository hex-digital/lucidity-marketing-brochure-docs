import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

export const config: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export const withAnalyzer = (sourceConfig: NextConfig): NextConfig =>
  withBundleAnalyzer()(sourceConfig);
