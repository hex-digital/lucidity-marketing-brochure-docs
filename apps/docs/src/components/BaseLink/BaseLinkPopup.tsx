import { cn } from '@/lib/cn';
import styles from '@/components/BaseLink/styles.module.css';
import { ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function BaseLinkPopup(props: {
  external: boolean;
  href: string;
  target: string | undefined;
  rel: string | undefined;
  src: string;
  displayUrl: string;
  displayTitle: string;
  description: string | undefined;
  opensInNewTab: boolean;
}) {
  return (
    <div
      className={cn('flex h-full flex-col justify-between gap-3 p-4', styles.popupLinkGroup)}
    >
      <div className="flex flex-col">
        {props.external && (
          <div className="flex items-center gap-1.5 mb-2">
            {props.external ? <span className={cn(styles.eyebrow)}>EXTERNAL LINK</span> : null}
            <ExternalLink className={styles.externalLinkIcon} aria-hidden="true" />
          </div>
        )}

        <Link
          href={props.href}
          target={props.target}
          rel={props.rel}
          className={cn(styles.popupLink)}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {props.external ? (
                <img
                  src={props.src}
                  alt=""
                  width={22}
                  height={22}
                  className={styles.favicon}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <FileText className={styles.localPageIcon} aria-hidden="true" />
              )}
              <span className={cn(styles.url)}>{props.displayUrl}</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className={styles.linkTitle}>{props.displayTitle}</span>
              {!props.external && props.description && (
                <p className={styles.description}>{props.description}</p>
              )}
            </div>
          </div>
        </Link>
      </div>
      {props.opensInNewTab && (
        <span className={cn(styles.footerRow)}>
          <span className={styles.footer}>Opens in a new tab</span>
        </span>
      )}
    </div>
  );
}
