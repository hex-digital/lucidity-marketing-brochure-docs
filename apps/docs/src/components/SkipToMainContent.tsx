import { cn } from '@/lib/cn';

interface SkipToMainContentProps {
  className?: string;
  id?: string;
}

export function SkipToMainContent({ className, id }: SkipToMainContentProps) {
  return (
    <a
      href={`#${id ?? 'main-content'}`}
      className={cn(
        'sr-only fixed top-4 left-4 z-50 rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground shadow-lg focus:not-sr-only focus:fixed focus:px-4 focus:py-2 focus:outline-none focus:ring-2 focus:ring-fd-ring focus:ring-offset-2 focus:ring-offset-fd-background',
        className,
      )}
    >
      Skip to main content
    </a>
  );
}
