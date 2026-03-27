import { env } from '@/env';

export const seoConfig = {
  noIndex: env.NEXT_PUBLIC_NO_INDEX === 'true',

  title: 'Lucidity, the Enterprise Starter Kit for Sanity CMS',
  description: 'The best way to start building with Sanity CMS',
};
