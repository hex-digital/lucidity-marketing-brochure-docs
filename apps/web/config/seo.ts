import { env } from '@/env';

export const seoConfig = {
  noIndex: env.NEXT_PUBLIC_NO_INDEX === 'true',

  title: 'Lucidity, the Enterprise Starter Kit for Sanity CMS',
  homepageTitle: 'Lucidity by Hex Digital – The best way to start your Sanity project',
  description:
    'Cut 6 months off the delivery of your next Sanity project by building on top of Lucidity',
};
