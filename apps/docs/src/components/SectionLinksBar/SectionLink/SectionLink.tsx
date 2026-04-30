'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { env } from '@/env';
import { normalizePathname } from '@/helpers';
import { cn } from '@/lib/cn';
import styles from './styles.module.css';

/** Normalize to app-relative segments (Next usually omits `basePath`; multi-zone edge cases may not). */
function appRelativePathname(pathname: string): string {
  const p = normalizePathname(pathname);
  if (
    p === env.NEXT_PUBLIC_DOCS_BASE_PATH ||
    p.startsWith(`${env.NEXT_PUBLIC_DOCS_BASE_PATH}/`)
  ) {
    return p.slice(env.NEXT_PUBLIC_DOCS_BASE_PATH.length) || '/';
  }
  return p;
}

/**
 * Section `url` values are app-relative (e.g. `/features`). Compare in the same space as
 * `usePathname()` after stripping optional `/docs` prefix.
 */
function isActive(pathname: string, url: string) {
  const p = appRelativePathname(pathname);

  if (url === '/get-started') {
    return p === '/' || p === '/get-started' || p.startsWith('/get-started/');
  }
  const prefix = url === '/' ? '/' : url;
  return p === prefix || p.startsWith(`${prefix}/`);
}

interface Props {
  link: { text: string; url: string };
}

export function SectionLink({ link }: Props) {
  const pathname = usePathname();
  const active = isActive(pathname, link.url);

  return (
    <Link
      key={link.url}
      href={link.url}
      className={cn(styles.link, active ? styles.active : styles.inactive)}
    >
      {link.text}
    </Link>
  );
}
