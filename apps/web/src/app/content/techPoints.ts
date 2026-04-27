import { versions } from '@pkg/common/versions';

export const techPoints = [
  {
    key: crypto.randomUUID(),
    heading: `Next.js v${versions.next}`,
    content: 'Industry-leading framework for production web applications.',
    borderColor: '--color-rose-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: `Sanity v${versions.sanity}`,
    content: 'Headless CMS of the year 4 years in a row.',
    borderColor: '--color-blush-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: 'Turborepo',
    content: 'Monorepo build system built for scale, by Vercel.',
    borderColor: '--color-iris-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: `React v${versions.react}`,
    content: "The UI library powering the world's most complex web products.",
    borderColor: '--color-haze-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: 'TypeScript',
    content: 'Type-safe development across every app and package.',
    borderColor: '--color-mist-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: `Storybook v${versions.storybook}`,
    content: 'The standard for building and documenting component libraries.',
    borderColor: '--color-dew-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: 'Tailwind CSS',
    content: 'Utility-first CSS used by engineering teams at scale.',
    borderColor: '--color-rose-dark',
  },
] as const;
