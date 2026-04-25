import type { Stats } from '@/app/types/stats';

export const stats: Stats[] = [
  {
    key: crypto.randomUUID(),
    heading: '6+ months',
    content: 'head start on development work',
  },
  {
    key: crypto.randomUUID(),
    heading: '40+',
    content: 'production features out of the box',
  },
  {
    key: crypto.randomUUID(),
    heading: 'Unlimited',
    content: 'sites from a single licence + codebase',
  },
] as const;
