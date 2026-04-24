import type { GridContent } from '@/app/types/gridContent';

export const directorsGrid: GridContent[] = [
  {
    key: '01',
    keyColor: '--color-rose-dark',
    title: '6 months',
    subtitle: 'of engineering time recovered.',
    body: [
      'The infrastructure is already built.',
      'Multisite routing, cache invalidation, Studio configuration, security — this work costs 6 to 12 months of senior engineering time. With Lucidity.js, your team inherits it on day one.',
    ],
  },
  {
    key: '02',
    keyColor: '--color-blush-dark',
    title: 'Day 1',
    subtitle: 'onboard your editorial team.',
    body: [
      'No waiting on infrastructure',
      "Your content team can log into a fully configured Studio straight away. There's no period where editorial ambitions are waiting on engineering to catch up.",
    ],
  },
  {
    key: '03',
    keyColor: '--color-iris-dark',
    title: 'Unlimited sites',
    subtitle: 'one engineering team.',
    body: [
      'Scale without the headcount.',
      'For organisations managing multiple brands or regional sites, one team can own all of them.',
      'No duplicate codebases and no duplicate maintenance cost.',
    ],
  },
  {
    key: '04',
    keyColor: '--color-haze-dark',
    title: 'Low',
    subtitle: 'bus factor risk.',
    body: [
      'Architecture that survives team changes.',
      'One of the highest sources of engineering risk in content teams is an undocumented, bespoke CMS. Lucidity.js is built on SanityCMS, the industry leader four years running, and is fully documented and fully typesafe, which means you’re not dependent on any one engineer.',
    ],
  },
  {
    key: '05',
    keyColor: '--color-mist-dark',
    title: 'Zero',
    subtitle: 'lock in.',
    body: [
      'Full source code. No dependency on us.',
      'You own the codebase from day one. Lucidity.js is a starting point, not a platform subscription. If you stop working with us tomorrow, your codebase continues operating exactly as it did.',
    ],
  },
  {
    key: '06',
    keyColor: '--color-dew-dark',
    title: '1 year',
    subtitle: 'of updates included.',
    body: [
      'A foundation that stays current.',
      'Your licence includes one year of updates. New features, compatibility updates, and bug fixes delivered via the same GitHub repository. Raise issues, track progress, and stay current without any additional cost in year one.',
    ],
  },
];
