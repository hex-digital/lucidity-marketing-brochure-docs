import { env } from '../env';

export type AppName = 'web' | 'docs';
export interface App {
  path: string | undefined;
  baseUrl: string;
}

const { NEXT_PUBLIC_DOCS_BASE_PATH, NEXT_PUBLIC_WEB_URL, NEXT_PUBLIC_DOCS_URL } = env();

export const defaultAppName: AppName = 'web';

export const appMap = new Map<AppName, App>([
  ['web', { path: undefined, baseUrl: NEXT_PUBLIC_WEB_URL }],
  ['docs', { path: NEXT_PUBLIC_DOCS_BASE_PATH, baseUrl: NEXT_PUBLIC_DOCS_URL }],
]);
