import { appConfig } from '@/config/app';
import { seoConfig } from '@/config/seo';
import { faqJsonLdEntries } from '@/data/faq-jsonld';
import { normalizeBaseUrl } from '@/lib/jsonld/normalize-base-url';
import type { LucidityDocsPage, LucidityDocsSource } from '@/lib/source';

/** Slug path for the FAQ MDX page (`content/docs/get-started/faq.mdx`). */
const FAQ_SLUG_KEY = 'get-started/faq';

function organizationId(base: string): string {
  return `${base}/#organization`;
}

function websiteId(base: string): string {
  return `${base}/#website`;
}

function softwareId(base: string): string {
  return `${base}/#software`;
}

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

function buildFaqPage(
  base: string,
  canonicalUrl: string,
  name: string,
  description: string | undefined,
): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name,
    description,
    isPartOf: { '@id': websiteId(base) },
    publisher: { '@id': organizationId(base) },
    mainEntity: faqJsonLdEntries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
      },
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
 * Builds a schema.org `@graph` for documentation pages: Organization, WebSite, WebPage (or FAQPage), BreadcrumbList.
 */
export function buildDocsJsonLdGraph(options: {
  source: LucidityDocsSource;
  page: LucidityDocsPage;
}): Record<string, unknown>[] {
  const { source, page } = options;
  const base = normalizeBaseUrl(appConfig.baseUrl);
  const canonicalUrl = `${base}${page.url}`;
  const slugKey = page.slugs.join('/');
  const isFaq = slugKey === FAQ_SLUG_KEY;

  const siteTitle =
    seoConfig.title.replace(/\s*\|\s*.*/, '').trim() || 'Lucidity documentation';
  const name = page.data.pageTitle ?? page.data.title;
  const description = page.data.description;

  const primaryPage = isFaq
    ? buildFaqPage(base, canonicalUrl, name, description)
    : buildWebPage({ base, canonicalUrl, name, description });

  return [
    buildOrganization(base),
    buildSoftwareApplication(base),
    buildWebSite(base, siteTitle, seoConfig.description),
    primaryPage,
    buildBreadcrumbListFromSource(base, page, source),
  ];
}
