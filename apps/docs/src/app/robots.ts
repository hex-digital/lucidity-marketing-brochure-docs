import { appConfig } from '@/config/app';
import { joinPublicDocsUrl } from '@/lib/join-public-docs-url';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: joinPublicDocsUrl(appConfig.baseUrl, '/sitemap.xml'),
  };
}
