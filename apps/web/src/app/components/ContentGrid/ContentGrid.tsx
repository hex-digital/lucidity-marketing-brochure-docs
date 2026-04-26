import type { GridContent } from '@/app/types/gridContent';
import { cn } from '@/app/utils/cn';
import styles from './ContentGrid.module.css';

export function ContentGrid({ content }: { content: GridContent[] }) {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-0 z-[1] grid grid-cols-1 md:grid-cols-3">
        {content.map((item) => (
          <div key={`bg-${item.key}`} />
        ))}
      </div>

      <div className="relative z-[3] grid grid-cols-1 md:grid-cols-3">
        {content.map((item) => (
          <div
            key={item.key}
            className={cn(styles.contentGridItem, 'flex flex-col gap-5 py-4 md:p-8')}
          >
            <span className="text-page-eyebrow" style={{ color: `var(${item.keyColor})` }}>
              {item.key}
            </span>
            <div>
              <h4 className="text-page-title-s-desktop">{item.title}</h4>
              {item.subtitle && <p className="text-post-subtitle-desktop">{item.subtitle}</p>}
            </div>
            {item?.body?.length >= 1 && (
              <div className="prose">
                {item.body.map((paragraph) => (
                  <p key={paragraph} className="text-page-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
