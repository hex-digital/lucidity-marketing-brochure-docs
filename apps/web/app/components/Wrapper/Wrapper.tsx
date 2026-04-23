import React, { ComponentPropsWithoutRef} from "react";
import {cn} from "@/utils/cn";

type WrapperProps<T extends React.ElementType = "section"> = {
    children: React.ReactNode;
    padding?: 'none' | 'small' | 'medium' | 'large';
    as?: T;
} & ComponentPropsWithoutRef<T>;

export function Wrapper<T extends React.ElementType = "section">({
     children,
     className,
     padding = 'medium',
     as,
     ...rest
 }: WrapperProps<T>) {
    const Tag = (as ?? "section") as React.ElementType;

    const paddingClass = {
        none: 'wrapper--padding-none',
        small: 'wrapper--padding-small',
        medium: 'wrapper--padding-medium',
        large: 'wrapper--padding-large',
    }[padding];

    return (
        <Tag className={cn('wrapper flex flex-col gap-10 relative', paddingClass, className)} {...rest}>
            {children}
        </Tag>
    )
}