import type { FAQItem } from '@/app/components/FAQ/FAQ';

export const directorFaqs: FAQItem[] = [
  {
    key: crypto.randomUUID(),
    summary: "Can't we just build it?",
    content: [
      'To create something like Lucidity.js yourself would take several hundreds of development hours, a deep understanding of Sanity and Next.js, and a team of UX and engineering specialists. Buying Lucidity saves you that time and money, and significantly de-risks your Sanity project.',
    ],
  },
  {
    key: crypto.randomUUID(),
    summary: "Aren't we dependent on a third-party?",
    content: [
      'No. You own the full source code from day one, with no platform subscription. All packages used are appropriately licensed for your commercial use. Our plan includes a year of Lucidity updates.',
    ],
  },
  {
    key: crypto.randomUUID(),
    summary: 'What if we need to change things?',
    content: [
      'Lucidity is designed to be configured and extended. Every package is modular and well documented.',
    ],
  },
  {
    key: crypto.randomUUID(),
    summary: 'Is there support if something goes wrong?',
    content: [
      'For bugs and feature requests, support is available with the direct team via GitHub.\n' +
        '\n' +
        'We’re also available for white glove onboarding and hands-on support, with a dedicated Slack Connect channel, via an additional consultancy service.',
    ],
  },
];
