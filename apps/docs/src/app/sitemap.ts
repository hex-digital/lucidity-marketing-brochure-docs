import { appConfig } from '@/config/app';
import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => ({
    url: `${appConfig.protocolBaseUrl}${page.url}`,
    lastModified: page.data.lastModified,
    changeFrequency: 'daily' as const,
    priority: 1,
  }));
}
