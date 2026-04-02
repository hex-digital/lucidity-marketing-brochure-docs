import {
  getDocsPageByPathname,
  type LucidityDocsPage,
  type LucidityDocsSource,
} from '@/lib/source';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BaseLink } from '@/components/BaseLink/BaseLink';
import { isExternalLink } from '@/helpers';
import { appConfig } from '@/config/app';

type MdxAnchorProps = ComponentPropsWithoutRef<'a'>;

type BaseLinkKind = 'internal' | 'external' | 'same-page-anchor' | 'special';

interface BuildBaseLinkPropsOptions {
  href: string;
  page: LucidityDocsPage;
}

interface ResolvedBaseLinkProps {
  href: string;
  linkKind: BaseLinkKind;
  title?: string;
  description?: string;
  absoluteUrl?: string;
}

function buildBaseLinkProps({ href, page }: BuildBaseLinkPropsOptions): ResolvedBaseLinkProps {
  if (href.startsWith('#')) {
    return { href, linkKind: 'same-page-anchor' };
  }

  if (href.startsWith('mailto:') || href.startsWith('tel:')) {
    return { href, linkKind: 'special' };
  }

  if (isExternalLink(href)) {
    return { href, linkKind: 'external' };
  }

  /** We use a fake domain just to get a URL object for the href */
  let url;
  try {
    url = new URL(href, `https://mock.local${page.url}`);
  } catch {
    return { href, linkKind: 'special' };
  }

  const linkedPage = getDocsPageByPathname(url.pathname);
  if (!linkedPage) {
    return { href, linkKind: 'special' };
  }

  /** In case the full page URL is used instead of one starting with '#' */
  const isSamePageAnchor = linkedPage.url === page.url && Boolean(url.hash);
  if (isSamePageAnchor) {
    return { href, linkKind: 'same-page-anchor' };
  }

  return {
    href,
    linkKind: 'internal',
    title: linkedPage.data.pageTitle ?? linkedPage.data.title,
    description: linkedPage.data.description,
    absoluteUrl: `${appConfig.baseUrl}${linkedPage.url}`,
  };
}

export function createBaseLink(source: LucidityDocsSource, page: LucidityDocsPage) {
  return ({ children, href, ...rest }: MdxAnchorProps): ReactNode => {
    const hrefValue = typeof href === 'string' ? href : '#';
    const linkProps = buildBaseLinkProps({
      href: source.resolveHref(hrefValue, page),
      page,
    });

    return (
      <BaseLink {...linkProps} {...rest}>
        {children}
      </BaseLink>
    );
  };
}
