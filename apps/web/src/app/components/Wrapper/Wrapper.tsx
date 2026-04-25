import React from 'react';
import { cn } from '@/app/utils/cn';
import type { ComponentPropsWithoutRef } from 'react';

type WrapperProps<T extends React.ElementType = 'section'> = {
  children: React.ReactNode;
  padding?: 'none' | 'small' | 'medium' | 'large';
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'className'>;

export function Wrapper<T extends React.ElementType = 'section'>({
  children,
  className,
  padding = 'medium',
  as,
  ...rest
}: WrapperProps<T>) {
  const Tag = as ?? 'section';

  const paddingClass = {
    none: 'wrapper--padding-none',
    small: 'wrapper--padding-small',
    medium: 'wrapper--padding-medium',
    large: 'wrapper--padding-large',
  }[padding];

  return (
    <Tag
      className={cn('wrapper flex flex-col gap-10 relative', paddingClass, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
