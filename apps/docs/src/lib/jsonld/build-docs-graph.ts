import { appConfig } from '@/config/app';
import { seoConfig } from '@/config/seo';
import { normalizeBaseUrl } from '@/lib/jsonld/normalize-base-url';
import { organizationId, softwareId, websiteId } from '@/lib/jsonld/schema-ids';
import type { LucidityDocsPage, LucidityDocsSource } from '@/lib/source';

function buildOrganization(base: string) {
  const logoUrl = `${base}/favicon.svg`;
  return {
    '@type': 'Organization',
    '@id': organizationId(base),
    name: 'Hex Digital',
    url: 'https://www.hexdigital.com',
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    sameAs: ['https://github.com/hex-digital'],
  };
}

function buildSoftwareApplication(base: string) {
  return {
    '@type': 'SoftwareApplication',
    '@id': softwareId(base),
    name: 'Lucidity',
    description: seoConfig.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    provider: { '@id': organizationId(base) },
  };
}

function buildWebSite(base: string, siteName: string, siteDescription: string) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(base),
    url: `${base}/`,
    name: siteName,
    description: siteDescription,
    inLanguage: 'en',
    publisher: { '@id': organizationId(base) },
    about: { '@id': softwareId(base) },
  };
}

function buildBreadcrumbListFromSource(
  base: string,
  page: LucidityDocsPage,
  source: LucidityDocsSource,
): Record<string, unknown> {
  const items: { name: string; item: string }[] = [
    {
      name: 'Home',
      item: `${base}/`,
    },
  ];

  for (let i = 0; i < page.slugs.length; i++) {
    const prefixSlugs = page.slugs.slice(0, i + 1);
    const p = source.getPage(prefixSlugs);
    const path = prefixSlugs.join('/');
    const itemUrl = p ? `${base}${p.url}` : `${base}/${path}`;
    const name = p?.data.title ?? path;
    items.push({ name, item: itemUrl });
  }

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

function buildWebPage(params: {
  base: string;
  canonicalUrl: string;
  name: string;
  description: string | undefined;
}): Record<string, unknown> {
  const { base, canonicalUrl, name, description } = params;
  return {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name,
    description,
    isPartOf: { '@id': websiteId(base) },
    publisher: { '@id': organizationId(base) },
  };
}

/**
 * Builds a schema.org `@graph` for documentation pages: Organization, WebSite, WebPage, BreadcrumbList.
 * FAQ pages use `WebPage` here; pair with `<Accordions faqJsonLd>` for a separate FAQPage JSON-LD script.
 */
export function buildDocsJsonLdGraph(options: {
  source: LucidityDocsSource;
  page: LucidityDocsPage;
}): Record<string, unknown>[] {
  const { source, page } = options;
  const base = normalizeBaseUrl(appConfig.baseUrl);
  const canonicalUrl = `${base}${page.url}`;

  const siteTitle =
    seoConfig.title.replace(/\s*\|\s*.*/, '').trim() || 'Lucidity documentation';
  const name = page.data.pageTitle ?? page.data.title;
  const description = page.data.description;

  const primaryPage = buildWebPage({ base, canonicalUrl, name, description });

  return [
    buildOrganization(base),
    buildSoftwareApplication(base),
    buildWebSite(base, siteTitle, seoConfig.description),
    primaryPage,
    buildBreadcrumbListFromSource(base, page, source),
  ];
}
