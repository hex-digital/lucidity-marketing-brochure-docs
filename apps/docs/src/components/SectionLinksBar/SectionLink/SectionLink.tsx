'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/components/Link';
import { urlIsActive } from '@/helpers';
import { cn } from '@/lib/cn';
import styles from './styles.module.css';

interface Props {
  link: { text: string; url: string };
}

export function SectionLink({ link }: Props) {
  const pathname = usePathname();
  const active = urlIsActive(pathname, link.url);

  return (
    <Link
      key={link.url}
      href={link.url}
      className={cn(styles.link, active ? styles.active : styles.inactive)}
    >
      {link.text}
    </Link>
  );
}
