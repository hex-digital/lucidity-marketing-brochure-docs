'use client';

import React from 'react';
import { ExternalLink, FileText, Link2 } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.css';
import { cn } from '@/lib/cn';
import { HoverPopup } from '@/components/HoverPopup/HoverPopup';
import { useHoverPopup } from '@/components/HoverPopup/hooks/useHoverPopup';

type BaseLinkKind = 'internal' | 'external' | 'same-page-anchor' | 'special';

interface BaseLinkProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'children' | 'title'
> {
  href: string;
  linkKind?: BaseLinkKind;
  hoverPreview?: boolean;
  title?: string;
  description?: string;
  absoluteUrl?: string;
  children: React.ReactNode;
  popupGap?: number;
  popupOpenDelay?: number;
  popupCloseDelay?: number;
}

export function BaseLink({
  href,
  linkKind,
  hoverPreview = true,
  title,
  description,
  absoluteUrl,
  children,
  className,
  target,
  rel,
  popupGap = 12,
  popupOpenDelay = 150,
  popupCloseDelay = 120,
  ...anchorProps
}: BaseLinkProps) {
  const {
    triggerRef,
    popupRef,
    popupId,
    mounted,
    isOpen,
    popupStyle,
    open,
    close,
    scheduleOpen,
    scheduleClose,
    clearCloseTimer,
  } = useHoverPopup({
    gap: popupGap,
    openDelay: popupOpenDelay,
    closeDelay: popupCloseDelay,
  });

  const isExternal = linkKind === 'external';
  const isSamePageAnchor = linkKind === 'same-page-anchor';
  const enablePreview = hoverPreview && !isSamePageAnchor && linkKind !== 'special';
  const resolvedTarget =
    target ?? (isExternal ? '_blank' : undefined); /** Default external to open in new tab */
  const opensInNewTab = resolvedTarget === '_blank';

  let hostname = href;

  try {
    const parsed = new URL(href, 'https://docs.local');
    hostname = parsed.hostname;
  } catch {
    hostname = href;
  }

  const displayTitle = title?.trim() || hostname;
  const displayUrl = (absoluteUrl ?? href).split('?')[0];
  const sanitizedRel = rel ?? (opensInNewTab ? 'noreferrer' : undefined);
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  const popupAriaLabel = isExternal
    ? `External link preview of ${href}`
    : `Internal link preview of ${href}`;

  const linkInnerContent = (
    <span className={styles.linkContent}>
      {children}
      {isExternal ? (
        <ExternalLink className={styles.inlineLinkIcon} aria-hidden="true" />
      ) : null}
      {isSamePageAnchor ? (
        <Link2 className={styles.inlineLinkIcon} aria-hidden="true" />
      ) : null}
    </span>
  );

  return (
    <>
      <Link
        ref={triggerRef}
        href={href}
        className={className}
        target={resolvedTarget}
        rel={sanitizedRel}
        aria-describedby={enablePreview && isOpen ? popupId : undefined}
        onMouseEnter={enablePreview ? scheduleOpen : undefined}
        onMouseLeave={enablePreview ? scheduleClose : undefined}
        onFocus={enablePreview ? open : undefined}
        onBlur={enablePreview ? close : undefined}
        {...anchorProps}
      >
        {linkInnerContent}
      </Link>

      {enablePreview ? (
        <HoverPopup
          mounted={mounted}
          isOpen={isOpen}
          popupId={popupId}
          popupRef={popupRef}
          popupStyle={popupStyle}
          ariaLabel={popupAriaLabel}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
        >
          <div
            className={cn(
              'flex h-full flex-col justify-between gap-3 p-4',
              styles.popupLinkGroup,
            )}
          >
            <div className="flex flex-col">
              {isExternal && (
                <div className="flex items-center gap-1.5 mb-2">
                  {isExternal ? (
                    <span className={cn(styles.kicker)}>EXTERNAL LINK</span>
                  ) : null}
                  <ExternalLink className={styles.externalLinkIcon} aria-hidden="true" />
                </div>
              )}

              <Link
                href={href}
                target={resolvedTarget}
                rel={sanitizedRel}
                className={cn('flex items-start gap-2', styles.hostname, styles.popupLink)}
              >
                {isExternal ? (
                  <img
                    src={faviconUrl}
                    alt=""
                    width={18}
                    height={18}
                    className={styles.favicon}
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <FileText className={styles.faviconIcon} aria-hidden="true" />
                )}
                {displayTitle}
              </Link>

              {!isExternal && description ? (
                <p className={styles.description}>{description}</p>
              ) : null}

              <Link
                href={href}
                target={resolvedTarget}
                rel={sanitizedRel}
                className={cn(styles.url, styles.popupLink)}
              >
                {displayUrl}
              </Link>
            </div>
            {opensInNewTab ? (
              <Link
                href={href}
                target={resolvedTarget}
                rel={sanitizedRel}
                className={cn(styles.footerRow, styles.popupLink)}
              >
                <span className={styles.footer}>Opens in a new tab</span>
              </Link>
            ) : null}
          </div>
        </HoverPopup>
      ) : null}
    </>
  );
}
