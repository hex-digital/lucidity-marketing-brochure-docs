import { env } from '@/env';

export const appConfig = {
  httpProtocol: env.NEXT_PUBLIC_HTTP_PROTOCOL,
  baseUrl: env.NEXT_PUBLIC_DOCS_URL,
  protocolBaseUrl: `${env.NEXT_PUBLIC_HTTP_PROTOCOL}${env.NEXT_PUBLIC_DOCS_URL}`,

  webUrl: env.NEXT_PUBLIC_WEB_URL,

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
