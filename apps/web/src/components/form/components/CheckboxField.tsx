interface CheckboxFieldProps extends React.ComponentProps<'input'> {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  required?: boolean;
  error?: string;
  showPrivacyLink?: boolean;
}

export function CheckboxField({
  id,
  children,
  checked,
  onCheckedChange,
  label,
  required = false,
  error,
}: CheckboxFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="inline-flex cursor-pointer items-start gap-3 text-[1rem]">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(event) => onCheckedChange(event.target.checked)}
          className="mt-1 h-6 w-6 appearance-none rounded-[6px] border border-neutral-30/50 bg-transparent bg-center bg-no-repeat checked:border-neutral-10 checked:bg-neutral-10"
          style={
            checked
              ? {
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='black' d='M6.4 11.2 3.2 8l-1.1 1.1 4.3 4.3L14 5.8l-1.1-1.1z'/%3E%3C/svg%3E\")",
                  backgroundSize: '14px 14px',
                }
              : undefined
          }
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <span className="text-neutral-10">
          {children ?? label}
          {required ? '\u00a0*' : ''}
        </span>
      </label>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
