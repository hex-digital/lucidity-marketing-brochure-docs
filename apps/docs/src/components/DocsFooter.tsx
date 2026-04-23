import { SquarePen } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import type { ComponentPropsWithoutRef } from 'react';

interface DocsFooterProps extends ComponentPropsWithoutRef<'div'> {
  githubUrl: string;
  pageTitle: string;
  lastModified?: string | Date | null;
}

function formatLastModified(value?: string | Date | null) {
  if (!value) return null;

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  }).format(date);
}

export function DocsFooter({
  githubUrl,
  pageTitle,
  lastModified,
  className,
  ...props
}: DocsFooterProps) {
  const formattedLastModified = formatLastModified(lastModified);

  return (
    <div
      className={cn(
        'mt-8 flex flex-col gap-6 border-t border-fd-border pt-6 text-sm text-fd-muted-foreground',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-fd-foreground"
        >
          <SquarePen className="size-4" />
          <span className="underline">Edit this page on GitHub</span>
        </Link>
        {formattedLastModified ? <p>Last updated: {formattedLastModified}</p> : null}
      </div>
    </div>
  );
}
