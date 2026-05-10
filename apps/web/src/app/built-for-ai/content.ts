import type { GridContent } from '@/components/ui/ContentGrid/gridContent';

/**
 * Top-of-pyramid summary tiles. Three pillars that justify the headline claim.
 */
export const overviewCards: GridContent[] = [
  {
    key: '01',
    keyColor: '--color-rose-dark',
    title: 'A foundation, not a blank canvas',
    body: [
      'Agents inherit a battle-tested architecture, established conventions, and 40+ working features instead of inventing them on the spot.',
    ],
  },
  {
    key: '02',
    keyColor: '--color-blush-dark',
    title: 'Configured for agents on day one',
    body: [
      'AGENTS.md, on-demand skills, and specialist sub-agents are checked into the repository, ready for Claude Code, Cursor, and any other coding agent.',
    ],
  },
  {
    key: '03',
    keyColor: '--color-iris-dark',
    title: 'Verification agents can trust',
    body: [
      'A stable command surface, pre-commit hooks, and CI gates give agents a fast, honest signal that their work is correct before it merges.',
    ],
  },
];

/**
 * "You get out what you put in" — bordered points pattern.
 */
export const foundationPoints = [
  {
    key: 'starting-point',
    heading: 'A higher starting point',
    content:
      'Greenfield AI work has to invent structure as it goes. On Lucidity.js, an agent starts from a documented monorepo with apps, packages, and patterns already in place — so its first decision is rarely a structural one.',
    borderColor: '--color-dew-dark',
  },
  {
    key: 'patterns-to-copy',
    heading: 'Patterns worth copying',
    content:
      'Modular content blocks, schema patterns, the proxy pipeline, multisite routing, and editorial workflows are all in the repo. Agents extend what is already idiomatic, instead of guessing what idiomatic looks like.',
    borderColor: '--color-mist-dark',
  },
  {
    key: 'fewer-unknowns',
    heading: 'Fewer load-bearing unknowns',
    content:
      'The hard, easy-to-get-wrong parts — security headers, caching, redirects, observability, multi-language routing — are already implemented. That leaves AI to focus on the work that is actually unique to your platform.',
    borderColor: '--color-haze-dark',
  },
] as const;

/**
 * "Configured for agents on day one" — arrow-bullet pattern.
 */
export const aiReadyPoints = [
  {
    key: 'agents-md',
    heading: 'AGENTS.md as a single entry point',
    content:
      'A maintained operational guide tells agents the repository map, canonical commands, verification expectations, and safety rules — so they spend their context budget on your task, not on inferring conventions.',
    bulletColor: '--color-dew-dark',
  },
  {
    key: 'skills',
    heading: 'Reusable skills checked into the repo',
    content:
      'Deep, on-demand procedures for Next.js, Turborepo, React performance, and composition patterns live under .claude/skills/, loaded only when relevant. Procedural knowledge becomes a versioned engineering asset, not tribal chat history.',
    bulletColor: '--color-mist-dark',
  },
  {
    key: 'sub-agents',
    heading: 'Specialist sub-agents for review',
    content:
      'Dedicated sub-agents for code quality, performance, security, test coverage, and documentation accuracy run through reusable review commands. Quality checks happen in narrow, focused prompts instead of one noisy generalist.',
    bulletColor: '--color-haze-dark',
  },
  {
    key: 'no-stale',
    heading: 'Guardrails against stale training data',
    content:
      'AGENTS.md tells agents up front: this is not the Next.js you know — read the local framework docs before changing APIs. That single rule heads off a whole class of confidently-wrong edits.',
    bulletColor: '--color-iris-dark',
  },
] as const;

/**
 * "A repository AI can navigate" — bordered points pattern.
 */
export const navigablePoints = [
  {
    key: 'workspace-boundaries',
    heading: 'Workspace boundaries as contracts',
    content:
      'pnpm workspaces split apps from packages, and dependency catalogues prevent silent version drift. Agents get explicit placement rules, not a sprawling repository with no sense of where new code belongs.',
    borderColor: '--color-rose-dark',
  },
  {
    key: 'shared-eslint',
    heading: 'One composable lint policy',
    content:
      'A shared eslint-plugin in packages/ defines the rules every workspace inherits. Agents extend a single baseline rather than reinventing tooling per package, and "fixes" land in a predictable place.',
    borderColor: '--color-blush-dark',
  },
  {
    key: 'safe-autofix',
    heading: 'Conservative staged autofixes',
    content:
      'lint-staged is configured to limit ESLint auto-fixes to safer types and to keep risky rules — like exhaustive hooks dependency changes — out of automatic edits. A common AI footgun is disarmed before it can land in a commit.',
    borderColor: '--color-iris-dark',
  },
  {
    key: 'generated-types',
    heading: 'Generated types and schema artefacts',
    content:
      'Sanity schema extraction and query type generation happen through documented scripts, with pre-commit hooks keeping generated files in sync. Agents work against real types, not approximations they had to invent.',
    borderColor: '--color-haze-dark',
  },
] as const;

/**
 * "Verifiable feedback loops" — arrow-bullet pattern.
 */
export const verificationPoints = [
  {
    key: 'g-scripts',
    heading: 'A stable command vocabulary',
    content:
      'pnpm g:dev, g:lint, g:test, g:typecheck, and g:build are the same commands documented in AGENTS.md and used by CI. Agents can run, fail, and fix using exactly the verbs the team already uses.',
    bulletColor: '--color-rose-dark',
  },
  {
    key: 'pre-commit',
    heading: 'Pre-commit hooks that catch mistakes early',
    content:
      'Husky runs lint-staged and Commitlint on every commit. Subtle regressions, malformed messages, and forgotten generated files surface before code leaves a laptop, not in a noisy CI failure ten minutes later.',
    bulletColor: '--color-blush-dark',
  },
  {
    key: 'ci-mirror',
    heading: 'CI that mirrors local commands',
    content:
      'Path-filtered workflows under .github/workflows run the same Turbo tasks an agent runs locally. "Rerun what CI runs" is a literal instruction, not a guessing game about which CLI flag was different.',
    bulletColor: '--color-iris-dark',
  },
] as const;

/**
 * "Documentation that doubles as context" — bordered points pattern.
 */
export const documentationPoints = [
  {
    key: 'docs-as-context',
    heading: 'Docs written against real code',
    content:
      'Feature pages cite specific files, scripts, and conventions. An agent following a docs link lands on grounded, implementation-backed prose — not marketing claims it has to reverse-engineer.',
    borderColor: '--color-mist-dark',
  },
  {
    key: 'philosophy',
    heading: 'A documented philosophy',
    content:
      'Durable, scalable, governable, configurable, safe — these are not slogans, they are the principles every architectural decision in the repository is justified against. Agents inherit the same north star your team uses.',
    borderColor: '--color-dew-dark',
  },
  {
    key: 'auditable',
    heading: 'Agent behaviour as code review',
    content:
      'Skills, sub-agents, and review commands are checked-in files. Changes to how AI works in your codebase go through pull requests, code review, and git history — the same governance every other engineering asset gets.',
    borderColor: '--color-rose-dark',
  },
] as const;
