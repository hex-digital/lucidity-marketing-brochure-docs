import { env } from '@/env';

export const appConfig = {
  baseUrl: env.NEXT_PUBLIC_WEB_URL,
  docsUrl: env.NEXT_PUBLIC_DOCS_URL,
};
