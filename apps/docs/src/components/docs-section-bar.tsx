'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsSectionLinks } from '@/lib/layout.shared';
import { cn } from '@/lib/cn';

function isActive(pathname: string, url: string) {
  return pathname === url || pathname.startsWith(`${url}/`);
}

export function DocsSectionBar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-b bg-fd-background lg:block">
      <div className="mx-auto flex w-full items-center gap-2 px-4 py-3">
        {docsSectionLinks.map((link) => (
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
        ))}
      </div>
    </div>
  );
}
