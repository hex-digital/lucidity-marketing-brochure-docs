/**
 * Plain-text FAQ entries for JSON-LD (FAQPage). Schema.org expects `Answer.text` without HTML.
 * Keep wording aligned with `content/docs/get-started/faq.mdx` when you change the page.
 */
export const faqJsonLdEntries: { question: string; answer: string }[] = [
  {
    question: 'What is Lucidity?',
    answer:
      'Lucidity is a starter kit for building multi-site, multi-language websites and content-driven experiences. It deeply integrates Next.js with Sanity CMS to create a publishing platform that is fully functional and enjoyable to use. It aims to provide sensible defaults, clear boundaries, and a path from simple implementation to enterprise-grade delivery.',
  },
  {
    question: 'Who is Lucidity for?',
    answer:
      'Our focus is on multi-region or multi-brand organisations looking to deliver content across numerous mediums, in multiple languages. If you are managing multiple websites, apps, digital experiences, or other internet-connected UIs, Lucidity is likely a great fit. It helps whether you have a centralised editing team or a globally distributed one—with local-to-global content, guardrails, and reuse where appropriate. Lucidity is ideal for organisations looking to derisk their Sanity projects, including those who may not have budget for a Sanity specialist partner. It gives you a practical start point with a well-designed, future-proofed Sanity build, long-term flexibility, and enterprise-level support.',
  },
  {
    question: 'Who is Lucidity not for?',
    answer:
      'For simple, single marketing websites in a single language, this starter kit may not be for you. For those use cases you may be better served by simple starters like SanityPress or Turbo Start, which are free to use. If you later need multi-site or multi-language setup, there is considerable work to retrofit that into those starters. Lucidity may be a better choice if you already know you will expand into multiple sites or languages.',
  },
  {
    question: 'Why should we buy Lucidity instead of building our own Sanity setup?',
    answer:
      'Building something equivalent to Lucidity typically takes several hundred development hours, a deep understanding of Sanity and Next.js, and UX and engineering specialists. Buying Lucidity saves that time and money and significantly derisks your Sanity project. Sanity is flexible by design, so multi-site, i18n, redirects, page sections, and smart fields for links or media do not come out of the box. Teams often spend their first Sanity projects building foundations, then rebuilding once they understand the CMS better. Lucidity gives you well-designed architecture and features ready to use so your team can focus on what is unique to your organisation.',
  },
  {
    question: 'Why not just use a free Sanity starter?',
    answer:
      'Free starters are a great fit for simple sites. Lucidity targets organisations that need multi-site, multi-language, strong editorial UX, workflows, and enterprise-style delivery from day one. If you only need a single marketing site in one language, a lighter starter may be enough. If you expect to grow into multiple sites, languages, or brands, starting from Lucidity avoids a costly migration later.',
  },
  {
    question: 'How does Lucidity reduce delivery risk?',
    answer:
      'You inherit hundreds of hours of tested patterns, UX-focused Studio configuration, and Next.js integration that has been reviewed with Sanity solution engineers—so you are aligned with current and upcoming Sanity capabilities (including Create, the App SDK, Content Agent, and the Media Library). Features are designed to be extended rather than thrown away, which reduces the risk of rework as your platform matures.',
  },
  {
    question: 'What features does Lucidity include out of the box?',
    answer:
      'You get a configured Sanity Studio with structure, workflows where appropriate, visual editing, live previews, redirects, SEO-related tooling, media handling, multi-site and i18n-oriented architecture, and a consistent monorepo layout with typed packages and documentation. Exact modules evolve with the product; the Welcome page summarises the direction and philosophy.',
  },
  {
    question: 'How customisable is Lucidity?',
    answer:
      'Fully. Use your own DAM by changing asset fields, tailor or replace workflows, adjust roles and permissions—including from SAML SSO—and extend schemas and front-end code in line with your standards. The codebase is intended to be owned and evolved by your team, not treated as a black box.',
  },
  {
    question: 'Do we own the code?',
    answer:
      'Yes. You receive the source and can change, extend, and deploy it as your own. Lucidity is a foundation to build on, not a hosted proprietary runtime you are locked into.',
  },
  {
    question: "Can Lucidity fit our organisation's workflows, roles and permissions?",
    answer:
      'Yes. Workflows can be customised (including via JSON configuration) or replaced. Roles and permissions can match how your organisation actually works, including complex setups integrated with your identity stack where required.',
  },
  {
    question:
      'Is Lucidity suitable if we expect to expand into more sites or languages later?',
    answer:
      'Yes. Multi-site routing, i18n, shared components, and content modelling are part of the kit’s design, so growth in sites, locales, or brands is a first-class scenario rather than an afterthought.',
  },
  {
    question: 'Do we need a specialist Sanity team to use Lucidity?',
    answer:
      'No—that is one of the reasons Lucidity exists. Sensible defaults and documentation help generalist teams succeed; you can still bring specialists later for bespoke work without fighting the foundation.',
  },
  {
    question: 'What support is available after purchase?',
    answer:
      'Lucidity is offered with enterprise-level support options (details depend on your agreement with Hex). Expect help oriented around keeping your Sanity and Next.js implementation healthy, secure, and aligned with best practices—not just one-off installation assistance. Contact Hex for current tiers, SLAs, and what is included for your organisation.',
  },
];
