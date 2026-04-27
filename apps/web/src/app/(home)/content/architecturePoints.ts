export const architecturePoints = [
  {
    key: crypto.randomUUID(),
    heading: 'apps/web',
    content:
      'The Next.js frontend. App Router, multisite routing, visual editing integration and all your page templates',
    bulletColor: '--color-dew-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: 'apps/sanity',
    content:
      'The Sanity Studio. Fully customised with actions, structure builder, custom components and all schema types.',
    bulletColor: '--color-mist-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: 'apps/storybook',
    content:
      'Component library and design system workshop. Isolated component development and visual regression testing.',
    bulletColor: '--color-haze-dark',
  },
  {
    key: crypto.randomUUID(),
    heading: '11 shared packages',
    content:
      'sanity-toolkit, modular-content-blocks, security,  next-proxy, pte-utilities, utilities, config, tooling, and more.',
    bulletColor: '--color-iris-dark',
  },
] as const;
