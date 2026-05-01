const NS = 'http://www.sitemaps.org/schemas/sitemap/0.9';

export function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function normalizeSiteOrigin(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

export interface UrlsetEntry {
  loc: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  lastmod?: string;
}

export function buildUrlsetSitemap(entries: UrlsetEntry[]): string {
  const urls = entries
    .map((e) => {
      const parts = [`<loc>${escapeXml(e.loc)}</loc>`];
      if (e.lastmod) {
        parts.push(`<lastmod>${escapeXml(e.lastmod)}</lastmod>`);
      }
      if (e.changefreq) {
        parts.push(`<changefreq>${e.changefreq}</changefreq>`);
      }
      if (
        e.priority != null &&
        Number.isFinite(e.priority) &&
        e.priority >= 0 &&
        e.priority <= 1
      ) {
        parts.push(`<priority>${e.priority}</priority>`);
      }
      return `<url>${parts.join('')}</url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="${NS}">${urls}</urlset>`;
}

export function buildSitemapIndex(locs: string[]): string {
  const items = locs.map((loc) => `<sitemap><loc>${escapeXml(loc)}</loc></sitemap>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="${NS}">${items}</sitemapindex>`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
