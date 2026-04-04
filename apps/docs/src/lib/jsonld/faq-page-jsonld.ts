import { organizationId, websiteId } from '@/lib/jsonld/schema-ids';

/**
 * Root JSON-LD object for FAQPage (includes `@context`). For use with `<JsonLd />` alongside the main docs `@graph`.
 */
export function buildFaqPageJsonLdRoot(options: {
  base: string;
  canonicalUrl: string;
  name: string;
  description: string | undefined;
  mainEntity: { question: string; answer: string }[];
}): Record<string, unknown> {
  const { base, canonicalUrl, name, description, mainEntity } = options;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faqpage`,
    url: canonicalUrl,
    name,
    description,
    isPartOf: { '@id': websiteId(base) },
    publisher: { '@id': organizationId(base) },
    mainEntity: mainEntity.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
      },
    })),
  };
}
