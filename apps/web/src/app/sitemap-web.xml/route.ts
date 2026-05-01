import { appConfig } from '@/config/app';
import {
  buildUrlsetSitemap,
  normalizeSiteOrigin,
  xmlResponse,
} from '@/features/sitemap/sitemap-xml';

export const dynamic = 'force-static';

export async function GET() {
  const origin = normalizeSiteOrigin(appConfig.baseUrl);

  const body = buildUrlsetSitemap([
    {
      loc: `${origin}/`,
      changefreq: 'daily',
      priority: 1,
    },
    {
      loc: `${origin}/sales`,
      changefreq: 'daily',
      priority: 1,
    },
  ]);

  return xmlResponse(body);
}
