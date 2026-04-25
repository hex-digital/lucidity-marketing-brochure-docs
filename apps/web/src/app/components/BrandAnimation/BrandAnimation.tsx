import { cn } from '@/app/utils/cn';
import styles from './BrandAnimation.module.css';

interface BrandAnimationProps {
  className?: string;
}

export function BrandAnimation({ className }: BrandAnimationProps) {
  return (
    <div className={cn(styles.root, className, 'z-2')} aria-hidden="true">
      <span className={styles.shapeOne}>
        <svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="brand-gradient-one-static" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="27.71%" stopColor="#79DFAF" />
              <stop offset="50.6%" stopColor="#72A5E8" />
              <stop offset="77.53%" stopColor="#1C1C1C" />
            </linearGradient>
            <filter id="brand-blur-one-static" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="57" />
            </filter>
          </defs>
          <g filter="url(#brand-blur-one-static)">
            <polygon points="70,260 450,70 450,450" fill="url(#brand-gradient-one-static)" />
          </g>
        </svg>
      </span>
      <span className={styles.shapeTwo}>
        <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="brand-gradient-two-static" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="28.07%" stopColor="#E98EDD" />
              <stop offset="50.85%" stopColor="#72A5E8" />
              <stop offset="79.51%" stopColor="#1C1C1C" />
            </linearGradient>
            <filter id="brand-blur-two-static" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="57" />
            </filter>
          </defs>
          <g filter="url(#brand-blur-two-static)" opacity="0.8">
            <path
              d="M90 280 Q40 180 90 80 L490 280 L90 480 Q40 380 90 280 Z"
              fill="url(#brand-gradient-two-static)"
            />
          </g>
        </svg>
      </span>
    </div>
  );
}
