import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = () =>
  createEnv({
    server: {
      /** Docs deployment origin for `apps/web` rewrites (multi-zone). Omit when docs run same origin. */
      NEXT_PRIVATE_DOCS_ZONE_ORIGIN: z.url(),
    },
    client: {
      NEXT_PUBLIC_DOCS_BASE_PATH: z.string(),
      NEXT_PUBLIC_WEB_URL: z.url(),
      NEXT_PUBLIC_DOCS_URL: z.url(),
    },
    runtimeEnv: {
      NEXT_PUBLIC_DOCS_BASE_PATH: '/docs',
      NEXT_PRIVATE_DOCS_ZONE_ORIGIN: process.env.NEXT_PRIVATE_DOCS_ZONE_ORIGIN,
      NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
      NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,
    },
  });
