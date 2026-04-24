import { cn } from '@/app/utils/cn';
import styles from './Eyebrow.module.css';
import type { ReactNode } from 'react';

export type EyebrowVariant =
  | 'rose-blush'
  | 'blush-iris'
  | 'iris-haze'
  | 'haze-mist'
  | 'mist-dew'
  | 'dew-rose';

const variantClassMap = {
  'rose-blush': styles.variantRoseBlush ?? '',
  'blush-iris': styles.variantBlushIris ?? '',
  'iris-haze': styles.variantIrisHaze ?? '',
  'haze-mist': styles.variantHazeMist ?? '',
  'mist-dew': styles.variantMistDew ?? '',
  'dew-rose': styles.variantDewRose ?? '',
} satisfies Record<EyebrowVariant, string>;

export interface EyebrowProps {
  variant?: EyebrowVariant;
  /** Plain string label (optional if you pass `children` instead). */
  label?: string;
  children?: ReactNode;
  className?: string;
}

export function Eyebrow({ variant = 'blush-iris', label, children, className }: EyebrowProps) {
  const content = children ?? label;

  return (
    <div className={cn(styles.root, variantClassMap[variant], className)}>
      <p className={styles.text}>{content}</p>
    </div>
  );
}
