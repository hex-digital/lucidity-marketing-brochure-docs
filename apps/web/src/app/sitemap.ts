import { appConfig } from '@/config/app';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${appConfig.baseUrl}/`,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${appConfig.baseUrl}/sales`,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];
}
