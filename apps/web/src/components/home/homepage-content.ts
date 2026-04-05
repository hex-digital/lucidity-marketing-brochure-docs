const techVersions = {
  next: '16',
  sanity: '5',
  react: '19',
} as const;

export interface FeatureCategory {
  id: string;
  label: string;
  description: string;
  spotlightTitle: string;
  spotlightCopy: string;
  features: readonly string[];
}

export interface TerminalEntry {
  id: string;
  text: string;
}

export const navigationItems = [
  { label: 'Included', href: '#included' },
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'ROI', href: '#roi' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const trustSignals = [
  'Full source code ownership',
  'Multi-site and multi-language ready',
  'Support from the team that built it',
] as const;

export const heroTerminalEntries: readonly TerminalEntry[] = [
  { id: 'clone', text: '$ git clone hex-digital/lucidity && pnpm install' },
  { id: 'web', text: '✓ apps/web configured' },
  { id: 'sanity', text: '✓ apps/sanity configured' },
  { id: 'storybook', text: '✓ apps/storybook configured' },
  { id: 'spacer-1', text: '' },
  { id: 'ready', text: '// Ready to go' },
  { id: 'preview', text: '✓ Visual editing + live preview' },
  { id: 'routing', text: '✓ Multisite routing' },
  { id: 'cache', text: '✓ Cache invalidation pipeline' },
  { id: 'security', text: '✓ Security, CSP, password protection' },
  { id: 'roles', text: '✓ Roles, permissions, recycling bin' },
  { id: 'seo', text: '✓ i18n, redirects, SEO, sitemap' },
  { id: 'spacer-2', text: '' },
  { id: 'dev', text: '$ pnpm dev' },
] as const;

export const audienceCards = [
  {
    title: 'Global market estates',
    copy: 'Run local market websites from one foundation without duplicating codebases or CMS setup.',
  },
  {
    title: 'Multi-brand groups',
    copy: 'Share components, tokens, and tooling while keeping brands editorially independent.',
  },
  {
    title: 'Federated organisations',
    copy: 'Balance central governance with local autonomy through roles, workflows, and reusable blocks.',
  },
  {
    title: 'Legacy CMS replacement',
    copy: 'Start with mature publishing infrastructure instead of rebuilding the basics from scratch.',
  },
  {
    title: 'Consolidation programmes',
    copy: 'Bring fragmented websites onto one structured platform with safer routing and redirects.',
  },
  {
    title: 'Multi-channel delivery',
    copy: 'Support websites, apps, displays, and other content-driven experiences from the same core.',
  },
] as const;

export const techStack = [
  `Next.js ${techVersions.next}`,
  `Sanity v${techVersions.sanity}`,
  `React ${techVersions.react}`,
  'Turborepo',
  'TypeScript',
  'Storybook',
  'Tailwind CSS',
  'pnpm workspaces',
] as const;

export const metrics = [
  {
    value: '6-12 months',
    label: 'of senior engineering time recovered',
    copy: 'The foundational work is already designed, built, and documented before your team starts.',
  },
  {
    value: '40+',
    label: 'enterprise-ready features included',
    copy: 'Preview, routing, security, governance, SEO, observability, and editorial tooling come ready to extend.',
  },
  {
    value: 'Day 1',
    label: 'editorial onboarding',
    copy: 'Your content team can use a configured Studio immediately instead of waiting on core infrastructure.',
  },
  {
    value: '1 deployment',
    label: 'for unlimited sites and locales',
    copy: 'Serve multiple websites from one codebase with shared tokens, components, and operational guardrails.',
  },
  {
    value: '1 year',
    label: 'of updates included',
    copy: 'New features, compatibility updates, and bug fixes continue shipping through the same repository.',
  },
] as const;

export const includedItems = [
  {
    index: '01',
    title: 'Configured Sanity Studio',
    copy: 'Structure builder, schema types, custom components, actions pipeline, roles, and permissions are ready for your editorial team from day one.',
  },
  {
    index: '02',
    title: 'Visual editing and live previews',
    copy: 'Editors and stakeholders can preview draft content before publishing, while automatic cache invalidation keeps published content fresh.',
  },
  {
    index: '03',
    title: 'Multi-site and multi-language foundations',
    copy: 'Subdomain-based routing, localisation, and site-aware tooling are designed in from the start rather than bolted on later.',
  },
  {
    index: '04',
    title: 'Modular content blocks',
    copy: 'Composable outer and inner blocks are defined in Sanity and Next.js once, then reused consistently across templates and sites.',
  },
  {
    index: '05',
    title: 'Security built in, not added later',
    copy: 'CSP headers, a composable Next.js proxy layer, redirect logic, and password-protected environments are part of the foundation.',
  },
  {
    index: '06',
    title: 'No single point of failure',
    copy: 'The architecture is documented, typed, and consistent across the codebase so new engineers can contribute confidently.',
  },
] as const;

export const spotlightPoints = [
  'Subdomain-based routing resolves each request to the right site and language context.',
  'Editorial teams stay independent while sharing one component library, one token system, and one deployment path.',
  'Roles and permissions keep access controlled at the site and language level.',
  'Shared tooling reduces duplicated maintenance cost across every market or brand.',
] as const;

export const featureCategories: readonly FeatureCategory[] = [
  {
    id: 'editorial',
    label: 'Editorial experience',
    description:
      'Make authoring feel deliberate from the start, with preview, reusable content patterns, and safer publishing workflows.',
    spotlightTitle: 'Built for editorial confidence',
    spotlightCopy:
      'Lucidity focuses heavily on the daily authoring experience so editors see exactly what they are changing and developers avoid bespoke one-off tooling.',
    features: [
      'Visual editing',
      'Live previews',
      'Shareable preview links',
      'Modular content blocks',
      'Recycling bin',
      'Page templates',
      'Document location resolvers',
      'Portable Text editor configuration',
      'Redirect warnings',
      'Redirect tester',
      'Redirect tracking',
      'Deep image, video, and file integrations',
      'Reusable global modular blocks',
    ],
  },
  {
    id: 'multisite',
    label: 'Multi-site and localisation',
    description:
      'Support multiple sites, languages, and teams from one system without giving up clarity over who owns what.',
    spotlightTitle: 'One platform, many publishing contexts',
    spotlightCopy:
      'This is the section that matters most for organisations with regional, federated, or multi-brand delivery models. The same foundation scales cleanly across sites and locales.',
    features: [
      'Multisite',
      'i18n',
      'Initial value templates',
      'Deep structure integration and helpers',
      'Roles + permissions for sites and languages',
      'Multi-site and multi-language routing via proxy',
      'URL and routing config',
      'Studio workspaces per site',
      'Document translations and field translations',
      'Codebase string translations',
    ],
  },
  {
    id: 'seo',
    label: 'SEO, routing, and delivery',
    description:
      'Ship the operational features content-led platforms usually discover they need too late in the project.',
    spotlightTitle: 'Operational details already handled',
    spotlightCopy:
      'Routing, redirects, SEO, feeds, and metadata are treated as part of product infrastructure, not launch-week patchwork.',
    features: [
      'Content visibility access rules',
      'SEO and metadata integrations',
      'Sitemap generation',
      'RSS feeds for XML and JSON',
      'CMS-powered redirects',
      'SEO preview pane',
      'JSON-LD structured data',
      'Headers and footers',
      'Announcement bar',
      'Editable 404 page',
    ],
  },
  {
    id: 'dx',
    label: 'Developer experience and AI',
    description:
      'Keep the engineering experience legible with generators, typed helpers, and explicit guidance for modern delivery workflows.',
    spotlightTitle: 'A codebase that explains itself',
    spotlightCopy:
      'Lucidity is structured so teams can understand it quickly, extend it safely, and use modern agent-driven workflows without fighting the repository.',
    features: [
      'Validation, hidden/readonly, structure, and singleton helpers',
      'Next.js middleware proxy pipeline',
      'Turbo generators',
      'Detailed documentation',
      'Solid repository architecture',
      'High code quality',
      'Configured CI/CD pipeline',
      '.agents directory with skills and sub-agents',
      'AGENTS.md codebase guidance',
      'Dev helpers',
      'Schema types and helpers',
    ],
  },
  {
    id: 'security',
    label: 'Security and governance',
    description:
      'Governance, permissions, workflow, and pre-launch protection are already part of the shape of the platform.',
    spotlightTitle: 'Enterprise concerns addressed early',
    spotlightCopy:
      'Security and governance are first-class considerations so delivery teams can move faster without improvising critical controls mid-project.',
    features: [
      'Roles and permissions',
      'Editorial workflow',
      'Pre-launch site password protection',
      'Security headers and CSP',
      'Content approvals and operational guardrails',
      'Site-aware access control',
    ],
  },
  {
    id: 'operations',
    label: 'Performance, observability, and analytics',
    description:
      'Make the platform easier to operate after launch with caching, monitoring, analytics, and QA tooling already considered.',
    spotlightTitle: 'Ready for real operations',
    spotlightCopy:
      'The foundation is prepared for performance-sensitive publishing and for the practical reality of debugging, tracking, and improving live products.',
    features: [
      'Caching and invalidation',
      'Asset optimisation',
      'Error monitoring integrations',
      'Observability integrations',
      'Analytics integrations',
      'Google Tag Manager',
      'PostHog and GA4 ready',
      'UAT integration',
    ],
  },
] as const;

export const architectureApps = [
  {
    title: 'apps/web',
    copy: 'The Next.js frontend with App Router, multisite routing, preview integration, and page template foundations.',
  },
  {
    title: 'apps/sanity',
    copy: 'A fully customised Sanity Studio with actions, structure builder, custom components, and production-ready schema types.',
  },
  {
    title: 'apps/storybook',
    copy: 'An isolated design system and component workshop for building, testing, and reviewing UI patterns.',
  },
] as const;

export const architecturePackages = [
  'sanity-toolkit',
  'modular-content-blocks',
  'security',
  'next-proxy',
  'pte-utilities',
  'utilities',
  'config',
  'tooling',
  'analytics and observability',
] as const;

export const architecturePrinciples = [
  'Built through repeated delivery, not speculative abstraction.',
  'Structured so packages stay typed, documented, and easy to reason about.',
  'Optimised for extending the core rather than rewriting it later.',
  'Designed to lower bus factor risk as teams evolve over time.',
] as const;

export const directorCaseItems = [
  {
    value: '6 months',
    title: 'of engineering time recovered',
    copy: 'Multisite routing, cache invalidation, Studio configuration, and security work are inherited rather than rediscovered.',
  },
  {
    value: 'Day 1',
    title: 'editorial team can be onboarded',
    copy: 'Your content team is not waiting on engineering to build the infrastructure they need to start publishing.',
  },
  {
    value: 'Unlimited',
    title: 'sites, one engineering team',
    copy: 'Shared foundations let one team operate many brands, regions, or experiences without duplicate maintenance cost.',
  },
  {
    value: 'Low',
    title: 'bus factor risk',
    copy: 'Typed packages and explicit documentation make the platform easier to maintain through team changes.',
  },
  {
    value: 'Zero',
    title: 'platform lock-in',
    copy: 'You own the source code and deployment from day one. Nothing depends on a proprietary runtime or subscription gate.',
  },
  {
    value: '1 year',
    title: 'of updates included',
    copy: 'Compatibility updates, new features, and fixes continue shipping through the same GitHub repository.',
  },
] as const;

export const objections = [
  {
    question: 'Can’t we just build it ourselves?',
    answer:
      'You can, but the comparable result usually requires several thousand hours, real Sanity and Next.js depth, and specialist UX and engineering input before the platform feels mature.',
  },
  {
    question: 'Are we dependent on a third party?',
    answer:
      'No. Lucidity is licensed software with full source code ownership from day one. Your team deploys it and continues evolving it independently.',
  },
  {
    question: 'What if we need to change the architecture?',
    answer:
      'That is expected. The packages are designed to be configured and extended, not treated as a black box you are afraid to touch.',
  },
  {
    question: 'What support exists if something goes wrong?',
    answer:
      'Issue tracking happens through GitHub, and optional white-glove onboarding, architecture reviews, consultancy, and Slack support are available when teams want it.',
  },
] as const;

export const offerIncluded = [
  'The full source code is yours to own, modify, and deploy indefinitely.',
  'One year of updates, bug fixes, and compatibility releases.',
  'GitHub access for raising issues and tracking fixes.',
] as const;

export const offerAddOns = [
  'Onboarding workshop with the Lucidity team',
  'Architectural review for your specific setup',
  'Implementation consultancy and embedded engineering',
] as const;

export const offerCards = [
  {
    title: 'Turnkey adoption',
    copy: 'Clone the repo, configure your environments, and get to a working foundation quickly.',
  },
  {
    title: 'Extensible by design',
    copy: 'Every package is typed, documented, and arranged to be adapted for the needs of your organisation.',
  },
  {
    title: 'Long-term confidence',
    copy: 'The architecture is the result of solving real content-platform problems across repeated enterprise deliveries.',
  },
  {
    title: 'Onboarding and consultancy',
    copy: 'Teams that want more support can add workshops, reviews, and hands-on implementation help.',
  },
] as const;

export const documentationSections = [
  {
    title: 'Quick start',
    copy: 'Prerequisites, installation, environment setup, and the path to first deployment.',
  },
  {
    title: 'Architecture',
    copy: 'Apps, packages, routing, concepts, and dependency structure explained clearly.',
  },
  {
    title: 'Features',
    copy: 'What the platform includes out of the box and where each capability lives.',
  },
  {
    title: 'Enterprise guide',
    copy: 'Security, governance, multi-team architecture, and permission models.',
  },
  {
    title: 'Guides',
    copy: 'Content modelling, editorial workflows, deployments, upgrades, and extension patterns.',
  },
  {
    title: 'Reference',
    copy: 'Package APIs, schema helpers, environment variables, and operational flows.',
  },
  {
    title: 'Troubleshooting',
    copy: 'Common issues across Studio, preview, routing, caching, and deployments.',
  },
  {
    title: 'Integrations',
    copy: 'Analytics, error monitoring, feedback tools, and third-party service guidance.',
  },
] as const;

export const faqs = [
  {
    question: 'Is Lucidity open source?',
    answer:
      'Lucidity is commercially licensed. When you license it, you receive the full source code with no platform dependency and no restrictions on how you extend or deploy it.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Lucidity is a one-off licence with a year of updates. Pricing is tailored to your team size and onboarding requirements.',
  },
  {
    question: 'What happens after the first year?',
    answer:
      'Your codebase keeps running exactly as it does today. Continued updates are optional, not required to keep the platform operational.',
  },
  {
    question: 'What support is available?',
    answer:
      'Bugs and issues are tracked through GitHub, and onboarding workshops, architecture reviews, and consultancy are available separately if your team wants more support.',
  },
  {
    question: 'Which deployment platforms are supported?',
    answer:
      'Vercel, Netlify, and Docker are explicitly supported, and any platform capable of running Next.js can be used with the documented environment and build guidance.',
  },
  {
    question: 'What does one year of updates include?',
    answer:
      'Compatibility updates, bug fixes, and new features as the Next.js and Sanity ecosystems evolve, delivered through the same repository.',
  },
] as const;
