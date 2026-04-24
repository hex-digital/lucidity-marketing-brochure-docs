import Link from 'next/link';
import { cn } from '@/app/utils/cn';
import styles from './Buttons.module.css';
import type { ComponentProps, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  href: ComponentProps<typeof Link>['href'];
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: boolean;
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>;

const variantClassMap: Record<ButtonVariant, string> = {
  primary: styles.primaryBtn,
  secondary: styles.secondaryBtn,
};

export function Button({
  href,
  children,
  variant = 'primary',
  className,
  icon = false,
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(styles.btn, variantClassMap[variant], className)}
      {...rest}
    >
      {children}

      {icon && (
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.28 9.936L7.128 8.784L9.192 6.72L10.392 5.712L10.368 5.64L8.064 5.784H0V4.152H8.064L10.368 4.296L10.392 4.224L9.192 3.216L7.128 1.152L8.28 0L13.248 4.968L8.28 9.936Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Link>
  );
}
