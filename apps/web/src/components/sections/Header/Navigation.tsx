import { Link } from '@/components/Link';
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
