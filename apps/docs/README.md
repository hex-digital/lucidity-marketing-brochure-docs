# docs

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs

## Content Guidelines

When writing content to /content follow these guidelines:

- Links to internal pages should be relative to the current page, start with `./`, and end with the file extension. E.G. [Link](./../get-started/index.mdx)
- Content should be written in British English
- Use the Oxford Comma in lists

### Technical Writing Guidelines

When writing technical documentation:

- Write for a reader, not for the system
- Start with the outcome, not the background (put the most useful info first: what this doc helps with, when to use it, the fastest route to success, common gotchas)
- Prefer concrete nouns and verbs over abstractions (Bad: "The system facilitates content orchestration across multiple contexts". Good: "The API fetches campaign content from Sanity and returns it to the website")
- Prefer using one sentence per idea. Aim to keep them short and concise
- Put information in the order the reader needs it (e.g. what this is, when to use it, prerequisites, steps, verification, troubleshooting, deeper explanation)
- Be explicit about assumptions and prerequisites (Bad: "Add the webhook secret". Good: "Add STRIPE_WEBHOOK_SECRET to .env.local. You can get the value from the Stripe dashboard under Developers -> Webhooks")
- Use examples that are realistic, not toy examples (use real field names, reflect actual constraints, include failure cases where relevant, show expected output not just input)
- Show the happy path first, then the edge cases (e.g. here is the standard way, here is when it breaks down, here is what to do then)
- Define terms once, then use them consistently
- Use headings that help scanning
- Separate instructions from explanation (Bad: "Run pnpm codegen, which works by traversing the schema tree and generating…")
- Prefer examples, tables, and bullets where they reduce effort
- Cut anything the reader cannot act on (E.G. remove: history that does not affect today’s decision, internal debate that does not change implementation, repeated warnings, obvious statements, vague filler)
- Write like a calm engineer talking to another engineer

### Editing Checklist

When you finish writing a page, review it with these questions:

- Who is this for?
- What problem does it solve?
- Can the reader find the answer in under 20 seconds?
- Are the steps in the right order?
- Are assumptions explicit?
- Are terms used consistently?
- Does each sentence carry one idea?
- Have I shown what success looks like?
- Have I covered the main failure modes?
- Can I cut 20% without losing meaning?
