import { appConfig } from '@/config/app';
import {
  buildSitemapIndex,
  normalizeSiteOrigin,
  xmlResponse,
} from '@/features/sitemap/sitemap-xml';
import { zoneUrl } from '@pkg/next-multizone/helpers/zoneUrl';

export const dynamic = 'force-static';

export async function GET() {
  const origin = normalizeSiteOrigin(appConfig.baseUrl);

  const body = buildSitemapIndex([
    `${origin}/sitemap-web.xml`,
    `${origin}${zoneUrl('docs', '/sitemap.xml')}`,
  ]);

  return xmlResponse(body);
}
