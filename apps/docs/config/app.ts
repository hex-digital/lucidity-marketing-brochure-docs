import { env } from '@/env';

export const appConfig = {
  baseUrl: env.NEXT_PUBLIC_DOCS_URL,

  git: {
    user: 'hex-digital',
    repo: 'lucidity-marketing-brochure-docs',
    branch: 'main',
  },

  sectionLinks: [
    {
      text: 'Get Started',
      url: '/get-started',
    },
    {
      text: 'Features',
      url: '/features',
    },
    {
      text: 'Reference',
      url: '/reference',
    },
    {
      text: 'Enterprise',
      url: '/enterprise',
    },
  ],
};
