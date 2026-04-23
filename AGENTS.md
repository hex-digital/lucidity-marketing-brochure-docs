# Development Guide

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Codebase structure

### Monorepo Overview

This is a pnpm/turborepo monorepo containing the Lucidity.js marketing website, documentation website, and related packages. No databases or backend services required.

```
lucidity.js/
├── apps/               # The individual app entry points
└── packages/           # Monorepo packages used in the apps. These are not published to npm
```

### Apps

`apps/web` is the marketing website. It's a next.js 16 website. Content is static so all pages are `force-static`. It uses app router, but not cache components.

`apps/docs` is the documentation website. It's a next.js 16 website, using Fumadocs to take markdown files and turn them into pages with a theme. Content is static so all pages are `force-static`. It uses app router, but not cache components.

### Packages

Packages wrap features into re-usable pieces that the apps can use.

- `packages/analytics` - PostHog, GA4, and other analytics code
- `packages/brand` - Design tokens and fonts for the brand
- `packages/eslint-plugin` - Used to share configurable eslint configs to apps and other packages
- `packages/next-config` - Shared next.js configuration for next.config.ts
- `packages/notifications` - Infrastructure for sending notifications to channels like Slack
- `packages/observability` - Observability code such as Sentry or BetterStack
- `packages/tooling` - Configuration for repo tooling, such as Prettier

### README Files

Before editing or creating files in any subdirectory (e.g., `packages/*`, `apps/*`), read all `README.md` files in the directory path from the repo root up to and including the target file's directory. This helps identify any local patterns, conventions, and documentation.

## Build Commands (see `package.json` scripts)

- **Dev:** `pnpm g:dev` — starts both apps via Turborepo
- **Lint:** `pnpm g:lint` — ESLint + Prettier across all packages
- **Test:** `pnpm g:test` — Vitest across all packages
- **Typecheck:** `pnpm g:typecheck` — TypeScript checking across all packages
- **Build:** `pnpm g:build` — production builds

Any command prefixed with g: can be run with a filter, using the package name in package.json, to run it for just that app/package (turborepo functionality)

E.G. `pnpm g:dev --filter=apps-web`

## Fast Local Development

For iterative development, default to watch mode.

**Default agent rule:** If you are changing app or package source code, or integration tests, start `pnpm g:dev` in a separate terminal session before making edits (unless it is already running). If you skip this, explicitly state why (for example: read-only investigation, or CI-only analysis).

When done, kill the background watch process (if you started it).

## Testing

Use `pnpm g:test` to run all tests across all apps and packages.

Use `pnpm g:test:unit` to just run unit tests across them.

## Linting and Types

```bash
pnpm g:lint      # Full lint of all apps and packages (eslint, prettier)
pnpm g:lint:fix  # Full lint, changing files to auto fix where possible (eslint, prettier)
pnpm g:typecheck # Types checking
```

## Secrets and Env Safety

Always treat environment variable values as sensitive unless they are known test-mode flags.

- Never print or paste secret values (tokens, API keys, cookies) in chat responses, commits, or shared logs.
- Mirror CI env **names and modes** exactly, but do not inline literal secret values in commands.
- If a required secret is missing locally, stop and ask the user rather than inventing placeholder credentials.
- Never commit local secret files; if documenting env setup, use placeholder-only examples.
- When sharing command output, summarise and redact sensitive-looking values.

## Specialized Skills

Use skills for conditional, deep workflows. Keep baseline iteration/build/test policy in this file.

- `$pr-status-triage` - CI failure and PR review triage with `scripts/pr-status.js`
- `$authoring-skills` - how to create and maintain skills in `.agents/skills/`

## Context-Efficient Workflows

**Reading large files** (>500 lines, e.g. `app-render.tsx`):

- Grep first to find relevant line numbers, then read targeted ranges with `offset`/`limit`
- Never re-read the same section of a file without code changes in between
- For generated files (`dist/`, `node_modules/`, `.next/`): search only, don't read

## Commit and PR Style

- Do NOT add "Generated with Claude Code" or co-author footers to commits or PRs
- Keep commit messages concise and descriptive
- PR descriptions should focus on what changed and why
- Do NOT mark PRs as "ready for review" (`gh pr ready`) - leave PRs in draft mode and let the user decide when to mark them ready

## Task Decomposition and Verification

- **Split work into smaller, individually verifiable tasks.** Before starting, break the overall goal into incremental steps where each step produces a result that can be checked independently.
- **Verify each task before moving on to the next.** After completing a step, confirm it works correctly (e.g., run relevant tests, check types, build, or manually inspect output). Do not proceed to the next task until the current one is verified.
- **Choose the right verification method for each change.** This may include running unit tests, integration tests, type checking, linting, building the project, or inspecting runtime behavior depending on what was changed.
- **When unclear how to verify a change, ask the user.** If there is no obvious test or verification method for a particular change, ask the user how they would like it verified before moving on.

**Pre-validate before committing** to avoid slow lint-staged failures (~2 min each): Run exactly what the pre-commit hook runs on your changed files

## Skills

These are react and next.js applications using app router. Use skills react best practices next best practices.

## Cursor Cloud specific instructions

### Services

| Service                     | Port | Start                    |
| --------------------------- | ---- | ------------------------ |
| `apps/web` (marketing site) | 3000 | `pnpm g:dev` (runs both) |
| `apps/docs` (documentation) | 3001 | `pnpm g:dev` (runs both) |

### Environment variables

Both apps need `.env` files. Copy `apps/docs/.env.example` into both `apps/web/.env` and `apps/docs/.env`. All analytics/observability env vars are optional (gated behind `VERCEL` env var).

### Gotchas

- `apps/docs` requires a `postinstall` step (`fumadocs-mdx`) that runs automatically during `pnpm install`.
- The `.nvmrc` specifies `lts/*`; the required Node version is `>=20.19.2` (see `engines` in root `package.json`).
- `pnpm@10.17.1` is the pinned package manager version (via `packageManager` field). Use `corepack enable && corepack prepare pnpm@10.17.1 --activate` if corepack isn't already set up.
- Git hooks (Husky): `pre-commit` runs lint-staged, `commit-msg` runs commitlint (conventional commits required).
- `pnpm.onlyBuiltDependencies` is configured in `pnpm-workspace.yaml` — no interactive build approval needed.
