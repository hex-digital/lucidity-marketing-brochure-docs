'use client';

import { useState } from 'react';
import clsx from 'clsx';
import type { FeatureCategory } from './homepage-content';

interface FeatureExplorerProps {
  categories: readonly FeatureCategory[];
}

export function FeatureExplorer({ categories }: FeatureExplorerProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');

  const activeCategory =
    categories.find((category) => category.id === activeId) ?? categories[0];

  if (!activeCategory) {
    return null;
  }

  return (
    <div className="blueprint-card overflow-hidden">
      <div className="border-b border-[var(--grid-line)] p-4 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category.id === activeCategory.id;

            return (
              <button
                key={category.id}
                type="button"
                className={clsx(
                  'pill-button rounded-full border px-3 py-2 text-left text-sm transition-colors sm:px-4',
                  isActive
                    ? 'border-[var(--grid-line-strong)] bg-[var(--surface-strong)] text-[var(--foreground)] shadow-[inset_0_0_0_1px_var(--grid-line)]'
                    : 'border-[var(--grid-line)] bg-transparent text-[var(--muted-foreground)] hover:border-[var(--grid-line-strong)] hover:text-[var(--foreground)]',
                )}
                onClick={() => setActiveId(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="blueprint-kicker">Feature category</p>
            <h3 className="text-2xl font-medium tracking-[-0.04em] text-balance">
              {activeCategory.label}
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
              {activeCategory.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {activeCategory.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-[var(--grid-line)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)]"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <aside className="blueprint-panel space-y-3 p-5 sm:p-6">
          <p className="blueprint-kicker">Spotlight</p>
          <h4 className="text-lg font-medium tracking-[-0.03em] text-balance">
            {activeCategory.spotlightTitle}
          </h4>
          <p className="text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            {activeCategory.spotlightCopy}
          </p>
          <div className="rounded-3xl border border-[var(--grid-line)] bg-[var(--background)]/80 px-4 py-3 text-sm text-[var(--muted-foreground)]">
            {activeCategory.features.length} capabilities surfaced in this cluster.
          </div>
        </aside>
      </div>
    </div>
  );
}
