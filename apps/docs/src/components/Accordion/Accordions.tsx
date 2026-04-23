import { Accordions as FumaAccordions } from 'fumadocs-ui/components/accordion';
import { appConfig } from '@/config/app';
import { buildFaqPageJsonLdRoot } from '@/lib/jsonld/faq-page-jsonld';
import { JsonLd } from '@/lib/jsonld/json-ld';
import { normalizeBaseUrl } from '@/lib/jsonld/normalize-base-url';
import { accordionChildrenToFaqEntries } from '@/lib/react-node-to-plain-text';
import { source } from '@/lib/source';
import { Accordion } from './Accordion';
import type { ComponentProps, ReactElement } from 'react';

type FumaAccordionsProps = ComponentProps<typeof FumaAccordions>;

export type AccordionsProps = FumaAccordionsProps & {
  /**
   * When `true`, renders an `application/ld+json` script with FAQPage data from each direct
   * `Accordion` child (`title` → Question name, body → Answer text, plain text only).
   * When `false` or omitted, no FAQ JSON-LD is emitted.
   */
  withJsonLd?: boolean;
  /**
   * Fumadocs doc slug segments for the page that contains this FAQ (e.g. `['get-started', 'faq']`).
   * Required when `withJsonLd` is `true` (otherwise FAQ JSON-LD is skipped).
   */
  faqPageSlugs?: readonly string[];
};

function isAccordionElement(el: ReactElement): boolean {
  if (el.type === Accordion) {
    return true;
  }
  const t = el.type as { displayName?: string; name?: string };
  return t.displayName === 'Accordion' || t.name === 'Accordion';
}

export function Accordions({ withJsonLd, faqPageSlugs, children, ...rest }: AccordionsProps) {
  const emitFaqLd =
    withJsonLd === true && Array.isArray(faqPageSlugs) && faqPageSlugs.length > 0;

  const faqPage = emitFaqLd && faqPageSlugs ? source.getPage(faqPageSlugs.slice()) : null;
  const entries =
    emitFaqLd && faqPage ? accordionChildrenToFaqEntries(children, isAccordionElement) : [];

  const faqLd =
    emitFaqLd && faqPage && entries.length > 0
      ? buildFaqPageJsonLdRoot({
          base: normalizeBaseUrl(appConfig.baseUrl),
          canonicalUrl: `${normalizeBaseUrl(appConfig.baseUrl)}${faqPage.url}`,
          name: faqPage.data.pageTitle ?? faqPage.data.title,
          description: faqPage.data.description,
          mainEntity: entries,
        })
      : null;

  return (
    <>
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <FumaAccordions {...rest}>{children}</FumaAccordions>
    </>
  );
}
