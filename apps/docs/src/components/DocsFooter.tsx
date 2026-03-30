import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { SquarePen } from 'lucide-react';
import { cn } from '@/lib/cn';

interface DocsFooterProps extends ComponentPropsWithoutRef<'div'> {
  githubUrl: string;
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

export function DocsFooter({ githubUrl, lastModified, className, ...props }: DocsFooterProps) {
  const formattedLastModified = formatLastModified(lastModified);

  return (
    <div
      className={cn(
        'mt-8 flex flex-col gap-3 border-t border-fd-border pt-6 text-sm text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
      {...props}
    >
      <Link
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 transition-colors hover:text-fd-foreground"
      >
        <SquarePen className="size-4" />
        <span>Edit this page on GitHub</span>
      </Link>
      {formattedLastModified ? <p>Last updated: {formattedLastModified}</p> : null}
    </div>
  );
}
