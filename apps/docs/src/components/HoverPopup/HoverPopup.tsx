'use client';

import { createPortal } from 'react-dom';
import { cn } from '@/lib/cn';
import styles from './styles.module.css';
import type { CSSProperties, ReactNode, RefObject } from 'react';

interface HoverPopupProps {
  mounted: boolean;
  isOpen: boolean;
  popupId: string;
  popupRef: RefObject<HTMLDivElement | null>;
  popupStyle: CSSProperties;
  ariaLabel: string;
  className?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: ReactNode;
}

export function HoverPopup({
  mounted,
  isOpen,
  popupId,
  popupRef,
  popupStyle,
  ariaLabel,
  className,
  onMouseEnter,
  onMouseLeave,
  children,
}: HoverPopupProps) {
  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      id={popupId}
      ref={popupRef}
      role="dialog"
      aria-label={ariaLabel}
      className={cn(styles.popup, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={popupStyle}
    >
      {children}
    </div>,
    document.body,
  );
}
