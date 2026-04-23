'use client';

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';

interface Position {
  left: number;
  top: number;
}

interface UseHoverPopupOptions {
  gap?: number;
  openDelay?: number;
  closeDelay?: number;
  fallbackWidth?: number;
  fallbackHeight?: number;
}

interface HoverPopupStyle extends CSSProperties {
  '--hover-preview-left': string;
  '--hover-preview-top': string;
}

const VIEWPORT_PADDING = 12;

export function useHoverPopup({
  gap = 12,
  openDelay = 150,
  closeDelay = 120,
  fallbackWidth = 320,
  fallbackHeight = 180,
}: UseHoverPopupOptions = {}) {
  const triggerRef = useRef<HTMLAnchorElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const openTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>({ left: 0, top: 0 });

  const popupId = useId();

  const clearOpenTimer = useCallback(() => {
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const open = useCallback(() => {
    clearOpenTimer();
    clearCloseTimer();
    setIsOpen(true);
  }, [clearCloseTimer, clearOpenTimer]);

  const close = useCallback(() => {
    clearOpenTimer();
    clearCloseTimer();
    setIsOpen(false);
  }, [clearCloseTimer, clearOpenTimer]);

  const scheduleOpen = useCallback(() => {
    clearCloseTimer();
    clearOpenTimer();

    openTimerRef.current = window.setTimeout(() => {
      setIsOpen(true);
    }, openDelay);
  }, [clearCloseTimer, clearOpenTimer, openDelay]);

  const scheduleClose = useCallback(() => {
    clearOpenTimer();
    clearCloseTimer();

    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  }, [clearCloseTimer, clearOpenTimer, closeDelay]);

  const updatePosition = useCallback(() => {
    const triggerEl = triggerRef.current;
    const popupEl = popupRef.current;

    if (!triggerEl) return;

    const triggerRect = triggerEl.getBoundingClientRect();
    const popupWidth = popupEl?.offsetWidth ?? fallbackWidth;
    const popupHeight = popupEl?.offsetHeight ?? fallbackHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const spaceRight = viewportWidth - triggerRect.right;
    const spaceLeft = triggerRect.left;

    const placeRight = spaceRight >= popupWidth + gap || spaceRight >= spaceLeft;
    let left = placeRight ? triggerRect.right + gap : triggerRect.left - popupWidth - gap;
    let top = triggerRect.top + triggerRect.height / 2 - popupHeight / 2;

    left = Math.max(
      VIEWPORT_PADDING,
      Math.min(left, viewportWidth - popupWidth - VIEWPORT_PADDING),
    );

    top = Math.max(
      VIEWPORT_PADDING,
      Math.min(top, viewportHeight - popupHeight - VIEWPORT_PADDING),
    );

    setPosition({ left, top });
  }, [fallbackHeight, fallbackWidth, gap]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) return;
    updatePosition();
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => updatePosition();
    const handleScroll = () => updatePosition();
    const scrollListenerOptions: AddEventListenerOptions = { capture: true, passive: true };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, scrollListenerOptions);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, scrollListenerOptions);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    return () => {
      clearOpenTimer();
      clearCloseTimer();
    };
  }, [clearCloseTimer, clearOpenTimer]);

  const popupStyle: HoverPopupStyle = {
    '--hover-preview-left': `${position.left}px`,
    '--hover-preview-top': `${position.top}px`,
  };

  return {
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
  };
}
