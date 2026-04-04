import { versions } from '@pkg/common/versions';

/**
 * Plain-text FAQ entries for JSON-LD (FAQPage). Schema.org expects `Answer.text` without HTML.
 * Keep wording aligned with `content/docs/get-started/faq.mdx` when you change the page.
 */
export const faqJsonLdEntries: { question: string; answer: string }[] = [
  {
    question: 'What is Lucidity?',
    answer:
      'Lucidity is an enterprise-grade template for building multi-site, multi-language websites and content-driven experiences. It deeply integrates Next.js with Sanity CMS to create a publishing platform that is fully functional and enjoyable to use. Thousands of hours of development have gone into Lucidity by a team of UX and engineering specialists. Its aim is to be the most feature complete, enterprise-grade template for Sanity, built from the ground up on the learnings of building other real-world, enterprise digital experiences. Read the What is Lucidity page in the docs for more details.',
  },
  {
    question: 'Who is Lucidity for?',
    answer:
      'The focus is on global organisations looking to deliver content across multiple mediums, in multiple languages. If you are managing multiple websites, apps, digital experiences, or other internet-connected UIs, Lucidity is likely a great fit. Lucidity is designed to manage and deliver your content across these outputs efficiently whether you have a centralised editing team or a globally distributed one, with local-to-global content, local content guardrails, and re-using content where appropriate across outputs. Lucidity is ideal for organisations looking to derisk their Sanity projects but who may not have budget to pay for a Sanity specialist partner. Lucidity ensures you have a practical start point with a well-designed, future proofed Sanity build, with long-term flexibility and Enterprise-level support. Learn more in the use cases section on the What is Lucidity page.',
  },
  {
    question: 'Who is Lucidity not for?',
    answer:
      'For simple, single marketing websites in a single language, this starter kit may not be for you. For these use cases you may be better served by simple starters like SanityPress or Turbo Start, which are free to use. However, if later you need to move to a multi-site or multi-language setup, there is considerable work required to build that into these starters. This starter kit may be a good choice if you know you will be expanding into multiple sites or languages.',
  },
  {
    question: 'Why should we buy Lucidity instead of building our own Sanity setup?',
    answer:
      'Building something equivalent to Lucidity typically takes several thousand hours, a deep understanding of Sanity and Next.js, and UX and engineering specialists. Buying Lucidity saves that time and money and significantly derisks your Sanity project. Sanity puts emphasis on letting you build whatever you need in the CMS, which means there are fewer features out of the box than you would find with other headless CMS. Multi-site, i18n, redirects, flexible page sections, caching strategies, performance optimisations, and many more capabilities are built into Lucidity. With a well-designed architecture and features ready to use, Lucidity lets your team focus on what is unique to your organisation.',
  },
  {
    question: 'Why buy Lucidity over a free starter kit?',
    answer:
      'Free starters are a great fit for simple sites. If you only need a single marketing site in one language, a lighter starter may be enough; we would recommend SanityPress or Turbo Start. However, if you are managing and delivering content to multiple sites or experiences, in multiple languages, or need strong editorial UX and workflows, Lucidity is the best choice. Lucidity gives your team a solid framework to build upon, and the necessary features to let you launch quickly and with greatly reduced risk.',
  },
  {
    question: 'How does Lucidity reduce delivery risk?',
    answer:
      'Starting without Lucidity means starting from one of a few other starter kits, either from Sanity themselves or from the community. These are simple demonstrations of taking content from Sanity and displaying it on a page. They do not include the many features a global organisation needs to manage and deliver that content, so those features need building before you can start delivering content. They also do not integrate multi-site support into the Studio and the Website, which takes significant planning and effort. Teams moving to Sanity for the first time often lack depth of Sanity experience; without Lucidity they will be building critical content infrastructure for the first time—something that must be correct and scale for years. With Lucidity, you inherit thousands of hours of development and expertise from UX and Engineering specialists, built from the ground up on learnings from other real-world, enterprise digital experiences. We have also worked closely with Sanity solution engineers to ensure compatibility with all Sanity features, now and into the future.',
  },
  {
    question: 'What features does Lucidity include out of the box?',
    answer: `Alongside the configured and integrated Next.js v${versions.next} and Sanity v${versions.sanity} apps, Lucidity includes many features across editorial experience (visual editing, live previews, recycling bin, page templates, document location resolvers, redirect tooling, reusable blocks, portable text, deep media integrations), multi-site and multi-language (workspaces per site, translations, codebase strings, structure helpers, roles and permissions, routing via proxy, configurable setup), content (headers and footers, modular blocks, announcement bar, editable 404), SEO and discovery (access rules, metadata, sitemap, RSS, redirects, preview SEO, JSON-LD structured data), developer experience (validation and structure helpers, Next.js middleware proxy pipeline, Turborepo with generators), developing with AI agents (.agents directory and AGENTS.md), security (password protection, headers and CSP), performance (caching and asset optimisation), governance (roles scripts, editorial workflow), durability (documentation, architecture, code quality, CI/CD), observability (Sentry, BetterStack and more), analytics (PostHog, GA4, GTM and more), and QA and testing (UAT via FeedBucket). See the Features page for a full breakdown.`,
  },
  {
    question: 'Can I customise and change Lucidity?',
    answer:
      'Yes. Once you purchase Lucidity, you have full control over all of the code. Lucidity is the starting point from which you can continue developing your own functionality. For example, you can use your own Digital Asset Manager, tailor content workflows, adjust roles and permissions, or extend schemas as needed. The codebase is intended to be owned and evolved by your team, not treated as a black box. Each feature is designed with configuration and extensibility in mind; see the Apps configurations documentation for each config option.',
  },
  {
    question: 'What license does the code come with?',
    answer:
      'When you purchase a Lucidity licence, you can: use Lucidity for commercial and non-commercial projects; modify the code to fit your needs; use it in as many projects as you like; and as a freelancer or agency, create client projects using Lucidity (the licence must be purchased per client). You cannot: re-sell Lucidity even with significant modification; use the code to create a competing product or service, or another template; or share your licence with others. Read the Licence page in the docs for the full license breakdown.',
  },
  {
    question: 'How many sites and languages can Lucidity support?',
    answer: 'There is no limit on the number of sites or languages Lucidity can support.',
  },
  {
    question: 'What support is available after purchase?',
    answer:
      'We offer enterprise-level, hands-on support after you purchase. That includes: a dedicated account manager; a Slack Connect channel with our support engineers where you can ask questions under SLA; onboarding sessions to get you set up with Lucidity; monthly check-in sessions to see how your build is progressing; and news and updates about Lucidity that you can apply to your project. Beyond that, Hex Digital offers consultancy and delivery services if you need more capacity or depth: embedded engineers alongside your team; architecture and review sessions covering content models, multi-site structure, performance, accessibility, SEO, caching, redirects, and CI/CD; migration and launch support; and training and enablement in Sanity, Next.js, React, TypeScript, and adjacent tooling.',
  },
];
