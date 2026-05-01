import { env } from '@/env';
import { normalizeBaseUrl } from '@/lib/jsonld/normalize-base-url';

/**
 * Join `NEXT_PUBLIC_DOCS_URL` with a path from Fumadocs (`page.url`, etc.).
 * When the public base already ends with the docs base URL and the path also starts with it,
 * the duplicate segment is removed so canonical URLs stay correct.
 */
export function joinPublicDocsUrl(baseUrl: string, pathname: string): string {
  const base = normalizeBaseUrl(baseUrl);
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const baseEndsWithDocs = base.endsWith(env.NEXT_PUBLIC_DOCS_BASE_PATH);

  if (
    baseEndsWithDocs &&
    (path === env.NEXT_PUBLIC_DOCS_BASE_PATH ||
      path.startsWith(`${env.NEXT_PUBLIC_DOCS_BASE_PATH}/`))
  ) {
    return `${base}${path.slice(env.NEXT_PUBLIC_DOCS_BASE_PATH.length) || '/'}`;
  }

  return `${base}${path}`;
}
