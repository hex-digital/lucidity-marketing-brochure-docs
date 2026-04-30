import { appConfig } from '@/config/app';
import { joinPublicDocsUrl } from '@/lib/join-public-docs-url';
import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => ({
    url: joinPublicDocsUrl(appConfig.baseUrl, page.url),
    lastModified: page.data.lastModified,
    changeFrequency: 'daily' as const,
    priority: 1,
  }));
}
