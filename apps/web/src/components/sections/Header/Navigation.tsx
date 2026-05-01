import { Link } from '@/components/Link';
import styles from './Header.module.css';
import { zoneUrl } from '@pkg/next-multizone/helpers/zoneUrl';
import type { ComponentProps } from 'react';

export function Navigation(props: ComponentProps<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex items-center gap-4">
        <li>
          <Link className={styles.navItem} href={zoneUrl('docs', '/get-started')}>
            Documentation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
