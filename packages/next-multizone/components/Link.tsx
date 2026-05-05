import NextLink from 'next/link';
import { pathInZone, zoneUrl } from '../helpers/zoneUrl';
import type { AppName } from '../config/apps';
import type { ComponentProps } from 'react';

type NextLinkProps = ComponentProps<typeof NextLink>;
export type MultizoneLinkProps = NextLinkProps & {
  appName: AppName;
  targetAppName?: AppName;
};

/**
 * Wrapper component around next/link for multizone links.
 * It ensures an <a> tag is used when the link is to a different app zone. E.G. web -> docs.
 * @returns The rendered <a> or <NextLink> component.
 */
export function MultizoneLink({ appName, targetAppName, href, ...props }: MultizoneLinkProps) {
  if (shouldUseAnchorTag(href, appName, targetAppName)) {
    return <a href={hrefForAnchor(href, targetAppName)} {...props} />;
  }

  return <NextLink href={href} {...props} />;
}

function shouldUseAnchorTag(
  href: NextLinkProps['href'],
  appName: AppName,
  targetAppName?: AppName,
): boolean {
  if (targetAppName) {
    return appName !== targetAppName;
  }

  const pathname = pathnameFromHref(href);

  if (!pathname) {
    return false;
  }

  return !pathInZone(pathname, appName);
}

function hrefForAnchor(href: NextLinkProps['href'], targetAppName?: AppName): string {
  const hrefString = hrefToString(href);

  if (!targetAppName || isAbsoluteHref(hrefString)) {
    return hrefString;
  }

  return zoneUrl(targetAppName, hrefString);
}

/** Build a string pathname from next/link 'href' prop, in case a non-string is passed to it. */
function pathnameFromHref(href: NextLinkProps['href']): string | undefined {
  if (typeof href === 'string') {
    return isAbsoluteHref(href) ? new URL(href).pathname : href;
  }

  if (href instanceof URL) {
    return href.pathname;
  }

  if (href && typeof href === 'object' && 'pathname' in href) {
    const pathname = href.pathname;
    return typeof pathname === 'string' ? pathname : undefined;
  }

  return undefined;
}

function isAbsoluteHref(href: string): boolean {
  try {
    const _url = new URL(href);
    return true;
  } catch {
    return false;
  }
}

/** Build a string href from next/link 'href' prop, for use on an <a> tag. */
function hrefToString(href: NextLinkProps['href']): string {
  if (typeof href === 'string') {
    return href;
  }

  if (href instanceof URL) {
    return href.toString();
  }

  const pathname = typeof href.pathname === 'string' ? href.pathname : '/';
  const hash = typeof href.hash === 'string' ? href.hash : '';

  if (!href.query) {
    return `${pathname}${hash}`;
  }

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(href.query)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined) {
          params.append(key, String(item));
        }
      }
      continue;
    }

    if (value !== undefined) {
      params.set(key, String(value));
    }
  }

  const queryString = params.toString();
  return queryString ? `${pathname}?${queryString}${hash}` : `${pathname}${hash}`;
}
