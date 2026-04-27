'use client';

import { useEffect } from 'react';
import { ModalOverlay } from '@/components/modal/components/ModalOverlay';
import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  widthClassName?: string;
}

export function Modal({ open, onClose, children, widthClassName }: ModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-modal overflow-y-auto p-4 md:p-10">
      <ModalOverlay />
      <div
        className="relative z-modal flex min-h-full items-center justify-center"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) => event.stopPropagation()}
          className={cn(
            'w-full rounded-[16px] border border-neutral-30/40 bg-surface-dark p-5 md:p-8',
            widthClassName,
          )}
        >
          <button
            type="button"
            className="ml-auto block text-neutral-10 text-[1.25rem] leading-none"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span aria-hidden>×</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
