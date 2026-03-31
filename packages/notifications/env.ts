import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = () =>
  createEnv({
    server: {
      SLACK_BOT_TOKEN: z.string().min(1).optional(),
      SLACK_FEEDBACK_API_BASE_URL: z.url().optional(),
    },
    client: {
      NEXT_PUBLIC_DOCS_FEEDBACK_SLACK_CHANNEL_ID: z.string().min(1).optional(),
    },
    runtimeEnv: {
      NEXT_PUBLIC_DOCS_FEEDBACK_SLACK_CHANNEL_ID:
        process.env.NEXT_PUBLIC_DOCS_FEEDBACK_SLACK_CHANNEL_ID,
      SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
      SLACK_FEEDBACK_API_BASE_URL: process.env.SLACK_FEEDBACK_API_BASE_URL,
    },
  });
