import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = () =>
  createEnv({
    server: {
      // Added by Sentry Integration, Vercel Marketplace, if using
      SENTRY_ORG: z.string().optional(),
      SENTRY_PROJECT: z.string().optional(),
    },
    client: {
      NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN: z.string().optional(),
      NEXT_PUBLIC_BETTER_STACK_INGESTING_URL: z.url().optional().or(z.literal('')),

      // Added by Sentry Integration, Vercel Marketplace, if using
      NEXT_PUBLIC_SENTRY_DSN: z.url().optional().or(z.literal('')),
    },
    runtimeEnv: {
      NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN: process.env.NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN,
      NEXT_PUBLIC_BETTER_STACK_INGESTING_URL:
        process.env.NEXT_PUBLIC_BETTER_STACK_INGESTING_URL,
      SENTRY_ORG: process.env.SENTRY_ORG,
      SENTRY_PROJECT: process.env.SENTRY_PROJECT,
      NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    },
  });
