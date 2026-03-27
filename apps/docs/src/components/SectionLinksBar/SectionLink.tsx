'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';

function isActive(pathname: string, url: string) {
  return pathname === url || pathname.startsWith(`${url}/`);
}

interface Props {
  link: { text: string; url: string };
}

export function SectionLink({ link }: Props) {
  const pathname = usePathname();

  return (
    <Link
      key={link.url}
      href={link.url}
      className={cn(
        'rounded-md px-3 py-2 text-sm font-medium text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground',
        isActive(pathname, link.url) && 'bg-fd-accent text-fd-accent-foreground',
      )}
    >
      {link.text}
    </Link>
  );
}
