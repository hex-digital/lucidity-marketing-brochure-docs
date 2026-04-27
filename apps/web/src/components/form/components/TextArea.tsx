import { FieldLabel } from '@/components/form/components/FieldLabel';
import { cn } from '@/lib/cn';
import type { ComponentProps, ReactNode } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
  id: string;
  label: string;
  required?: boolean;
  description?: ReactNode;
  error?: string;
}

export function TextArea({
  id,
  label,
  required = false,
  description,
  error,
  className,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      <FieldLabel htmlFor={id} label={label} required={required} description={description} />
      <textarea
        id={id}
        className={cn(
          'min-h-32 w-full rounded-[12px] border bg-transparent px-3 py-2 text-[1rem] leading-[1.3] text-neutral-10 outline-none transition-colors placeholder:text-neutral-30',
          'border-neutral-30/50 focus:border-neutral-10',
          error ? 'border-red-400' : '',
          className,
        )}
        {...rest}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
