import styles from './FAQ.module.css';
import type { CSSProperties } from 'react';

const BORDER_COLOR_VARS = [
  '--color-rose-dark',
  '--color-blush-dark',
  '--color-iris-dark',
  '--color-haze-dark',
  '--color-mist-dark',
  '--color-dew-dark',
] as const;

export interface FAQItem {
  summary: string;
  content: string[];
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <details
          key={item.summary}
          className={styles.item}
          style={
            {
              '--faq-border-color': `var(${BORDER_COLOR_VARS[index % BORDER_COLOR_VARS.length]})`,
            } as CSSProperties
          }
        >
          <summary className={styles.summary}>
            <span className={styles.summaryText}>{item.summary}</span>
            <span className={styles.icon} aria-hidden="true">
              <span className={styles.iconClosed}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id={`mask-plus-${index}`}
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <rect width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask={`url(#mask-plus-${index})`}>
                    <path
                      d="M7.33333 8.66667H2V7.33333H7.33333V2H8.66667V7.33333H14V8.66667H8.66667V14H7.33333V8.66667Z"
                      fill="#FAFAF8"
                    />
                  </g>
                </svg>
              </span>
              <span className={styles.iconOpen}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id={`mask-minus-${index}`}
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <rect width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask={`url(#mask-minus-${index})`}>
                    <path d="M2 8.66634V7.33301H14V8.66634H2Z" fill="#FAFAF8" />
                  </g>
                </svg>
              </span>
            </span>
          </summary>
          <div className={styles.content}>
            <div className="prose">
              {item.content.map((paragraph) => (
                <p key={`${item.summary}-${paragraph}`} className="text-page-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
