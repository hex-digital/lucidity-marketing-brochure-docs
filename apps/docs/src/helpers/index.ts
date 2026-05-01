import { appConfig } from '@/config/app';
import { pathWithoutMultizoneBase } from '@/features/multizone/helpers';

/**
 * This function checks if the current pathname is active based on the section link URL.
 * We use this to e.g. highlight the active section link in the sidebar.
 *
 * As this is part of a multi-zone app, it's worth noting that the section `url` values are
 * app-relative (e.g. `/features` rather than `/docs/features`).
 * Therefore we need to compare URLs after stripping `/docs` prefix from usePathname.
 *
 * @param pathname - The current pathname from `usePathname()`. Likely has a `/docs` prefix.
 * @param url - The URL of the section link. App relative, so no `/docs` prefix.
 * @returns `true` if the current pathname is active, `false` otherwise.
 */
export function urlIsActive(pathname: string, sectionLinkUrl: string) {
  const path = pathWithoutMultizoneBase(pathname);

  return path === sectionLinkUrl || path.startsWith(`${sectionLinkUrl}/`);
}

export function isExternalLink(url: string): boolean {
  if (!url || url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) {
    return false;
  }

  try {
    const currentHost = new URL(appConfig.baseUrl).hostname
      .replace(/^www\./, '')
      .toLowerCase();
    const targetHost = new URL(url).hostname.replace(/^www\./, '').toLowerCase();

    return targetHost !== currentHost && !targetHost.endsWith(`.${currentHost}`);
  } catch {
    return false;
  }
}

export function trimSlashes(value: string): string {
  return value.replace(/^\/+|\/+$/g, '');
}

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const trimmed = trimSlashes(pathname);
  return trimmed ? `/${trimmed}` : '/';
}

export function slugFromPathname(pathname: string): string[] {
  const normalized = normalizePathname(pathname);
  if (normalized === '/') return [];
  return trimSlashes(normalized).split('/');
}
