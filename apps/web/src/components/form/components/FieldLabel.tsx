import type { ReactNode } from 'react';

interface FieldLabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  description?: ReactNode;
}

export function FieldLabel({
  htmlFor,
  label,
  required = false,
  description,
}: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex items-center justify-between gap-3">
      <span className="text-neutral-10 text-[1rem] leading-[1.2]">
        {label}
        {required ? '\u00a0*' : ''}
      </span>
      {description ? (
        <span className="text-neutral-20/70 text-[1rem] leading-[1.2]">{description}</span>
      ) : null}
    </label>
  );
}
