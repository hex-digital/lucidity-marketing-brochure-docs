'use client';

import { useEffect, useState } from 'react';
import { appConfig } from '@/config/app';
import { SectionLink } from '@/components/SectionLinksBar/SectionLink/SectionLink';
import { cn } from '@/lib/cn';

const SCROLL_THRESHOLD = 25;

export function SectionLinksBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const syncScrolledState = () => {
      setIsScrolled(window.scrollY >= SCROLL_THRESHOLD);
    };

    syncScrolledState();
    window.addEventListener('scroll', syncScrolledState, { passive: true });

    return () => {
      window.removeEventListener('scroll', syncScrolledState);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.docsScrolled = String(isScrolled);

    return () => {
      delete document.documentElement.dataset.docsScrolled;
    };
  }, [isScrolled]);

  return (
    <div className="[grid-area:header] sticky top-(--fd-docs-row-1) z-30">
      <div
        suppressHydrationWarning
        className={cn(
          'hidden h-(--docs-section-links-height) border-b transition-[background-color,border-color,backdrop-filter] duration-[180ms] lg:block',
          isScrolled
            ? 'border-fd-border bg-fd-background/80 backdrop-blur-md'
            : 'border-transparent bg-transparent backdrop-blur-none',
        )}
      >
        <div className="mx-auto flex h-full w-full items-center gap-2 px-4">
          {appConfig.sectionLinks.map((link) => (
            <SectionLink key={link.url} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
