import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = () =>
  createEnv({
    server: {
      DOCS_FEEDBACK_SLACK_CHANNEL_ID: z.string().min(1).optional(),
      DOCS_FEEDBACK_SLACK_CHANNEL_NAME: z.string().min(1).optional(),
      SLACK_BOT_TOKEN: z.string().min(1).optional(),
      SLACK_FEEDBACK_API_BASE_URL: z.url().optional(),
    },
    runtimeEnv: {
      DOCS_FEEDBACK_SLACK_CHANNEL_ID: process.env.DOCS_FEEDBACK_SLACK_CHANNEL_ID,
      DOCS_FEEDBACK_SLACK_CHANNEL_NAME: process.env.DOCS_FEEDBACK_SLACK_CHANNEL_NAME,
      SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
      SLACK_FEEDBACK_API_BASE_URL: process.env.SLACK_FEEDBACK_API_BASE_URL,
    },
  });
