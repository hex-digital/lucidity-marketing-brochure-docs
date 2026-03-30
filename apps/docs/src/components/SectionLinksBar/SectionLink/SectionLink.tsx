'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import styles from './styles.module.css';

function isActive(pathname: string, url: string) {
  return pathname === url || pathname.startsWith(`${url}/`);
}

interface Props {
  link: { text: string; url: string };
}

export function SectionLink({ link }: Props) {
  const pathname = usePathname();
  const active = isActive(pathname, link.url);

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
