import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = () =>
  createEnv({
    client: {
      NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN: z.string().startsWith('phc_').optional(),
      NEXT_PUBLIC_POSTHOG_HOST: z.url().optional(),
      NEXT_PUBLIC_POSTHOG_UI_HOST: z.url().optional(),
      NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().startsWith('G-').optional(),
    },
    runtimeEnv: {
      NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN: process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,
      NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      NEXT_PUBLIC_POSTHOG_UI_HOST: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST,
      NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    },
  });
