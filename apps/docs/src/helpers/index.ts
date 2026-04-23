import { appConfig } from '@/config/app';

export function isExternalLink(url: string): boolean {
  if (!url || url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) {
    return false;
  }

  try {
    const currentHost = appConfig.baseUrl
      .replace(/^https?:\/\//, '')
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
