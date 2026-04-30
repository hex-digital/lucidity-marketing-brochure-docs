import { normalizeBaseUrl } from '@/lib/jsonld/normalize-base-url';

/**
 * Join `NEXT_PUBLIC_DOCS_URL` with a path from Fumadocs (`page.url`, etc.).
 * When the public base already ends with `/docs` and the path also starts with `/docs`,
 * the duplicate segment is removed so canonical URLs stay correct.
 */
export function joinPublicDocsUrl(baseUrl: string, pathname: string): string {
  const base = normalizeBaseUrl(baseUrl);
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const baseEndsWithDocs = /\/docs$/i.test(base);

  if (baseEndsWithDocs && (path === '/docs' || path.startsWith('/docs/'))) {
    return `${base}${path.slice('/docs'.length) || '/'}`;
  }

  return `${base}${path}`;
}
