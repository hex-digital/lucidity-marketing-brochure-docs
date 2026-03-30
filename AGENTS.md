# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Lucidity marketing & docs monorepo — a pnpm/Turborepo workspace with two Next.js apps and six shared packages. No databases or backend services required.

### Services

| Service                     | Port | Start                    |
| --------------------------- | ---- | ------------------------ |
| `apps/web` (marketing site) | 3000 | `pnpm g:dev` (runs both) |
| `apps/docs` (documentation) | 3001 | `pnpm g:dev` (runs both) |

### Environment variables

Both apps need `.env` files. Copy `apps/docs/.env.example` into both `apps/web/.env` and `apps/docs/.env`. All analytics/observability env vars are optional (gated behind `VERCEL` env var).

### Key commands (see `package.json` scripts)

- **Dev:** `pnpm g:dev` — starts both apps via Turborepo
- **Lint:** `pnpm g:lint` — ESLint + Prettier across all packages
- **Test:** `pnpm g:test` — Vitest across all packages
- **Typecheck:** `pnpm g:typecheck` — TypeScript checking across all packages
- **Build:** `pnpm g:build` — production builds

### Gotchas

- `apps/docs` has pre-existing lint errors (`@ts-eslint/no-unsafe-*` rules) that are not caused by setup. These are in the existing codebase.
- `apps/docs` requires a `postinstall` step (`fumadocs-mdx`) that runs automatically during `pnpm install`.
- The `.nvmrc` specifies `lts/*`; the required Node version is `>=20.19.2` (see `engines` in root `package.json`).
- `pnpm@10.17.1` is the pinned package manager version (via `packageManager` field). Use `corepack enable && corepack prepare pnpm@10.17.1 --activate` if corepack isn't already set up.
- Git hooks (Husky): `pre-commit` runs lint-staged, `commit-msg` runs commitlint (conventional commits required).
- `pnpm.onlyBuiltDependencies` is configured in `pnpm-workspace.yaml` — no interactive build approval needed.
