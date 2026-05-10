import { Link } from '@/components/Link';
import styles from './Header.module.css';
import type { ComponentProps } from 'react';

export function Navigation(props: ComponentProps<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex items-center gap-4">
        <li>
          <Link className={styles.navItem} href="/built-for-ai">
            Built for AI
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} href="/get-started" targetAppName="docs">
            Documentation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
