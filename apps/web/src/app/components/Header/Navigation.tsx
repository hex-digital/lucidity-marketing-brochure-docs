import Link from 'next/link';
import styles from './Header.module.css';

export function Navigation() {
  return (
    <nav>
      <Link className={styles.navItem} href="#">
        Documentation
      </Link>
    </nav>
  );
}
