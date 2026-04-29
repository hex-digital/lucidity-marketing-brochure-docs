import { appConfig } from '@/config/app';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${appConfig.protocolBaseUrl}/`,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${appConfig.protocolBaseUrl}/sales`,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];
}
