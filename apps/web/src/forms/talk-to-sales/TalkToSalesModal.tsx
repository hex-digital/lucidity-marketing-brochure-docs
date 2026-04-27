'use client';

import { useState } from 'react';
import { Modal } from '@/components/modal/components/Modal';
import buttonStyles from '@/components/ui/Buttons/Buttons.module.css';
import { TalkToSalesForm } from '@/forms/talk-to-sales/TalkToSalesForm';
import { cn } from '@/lib/cn';

interface TalkToSalesModalProps {
  label?: string;
  triggerClassName?: string;
  triggerVariant?: 'primary' | 'secondary' | 'inline';
}

export function TalkToSalesModal({
  label = 'Talk to sales',
  triggerClassName,
  triggerVariant = 'primary',
}: TalkToSalesModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          triggerVariant === 'inline'
            ? 'cursor-pointer border-b-1 border-neutral-10 bg-transparent p-0 text-left text-current'
            : buttonStyles.btn,
          triggerVariant === 'primary' ? buttonStyles.primaryBtn : '',
          triggerVariant === 'secondary' ? buttonStyles.secondaryBtn : '',
          triggerClassName,
        )}
      >
        {label}
      </button>

      <Modal open={open} onClose={() => setOpen(false)} widthClassName="max-w-[760px]">
        <TalkToSalesForm className="w-full" />
      </Modal>
    </>
  );
}
