import { env } from '@/env';

export const seoConfig = {
  noIndex: env.NEXT_PUBLIC_NO_INDEX === 'true',

  title: 'Lucidity.js, the Enterprise Starter Kit for Sanity CMS',
  homepageTitle: 'Lucidity.js by Hex Digital – The best way to start your Sanity project',
  description:
    'Cut 6 months off the delivery of your next Sanity project by building on top of Lucidity.js',
};
