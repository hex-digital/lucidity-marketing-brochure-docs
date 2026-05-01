import { env } from '../env';

export type AppName = 'web' | 'docs';

const { NEXT_PUBLIC_WEB_URL, NEXT_PUBLIC_DOCS_BASE_PATH, NEXT_PRIVATE_DOCS_ZONE_ORIGIN } =
  env();

export const appMap = new Map<
  AppName,
  { path: string | undefined; origin: () => string | undefined }
>([
  ['web', { path: undefined, origin: () => NEXT_PUBLIC_WEB_URL }],
  ['docs', { path: NEXT_PUBLIC_DOCS_BASE_PATH, origin: () => NEXT_PRIVATE_DOCS_ZONE_ORIGIN }],
]);
