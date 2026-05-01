'server only';

import { env } from '../env';
import type { AppName } from './apps';

const { NEXT_PUBLIC_WEB_URL, NEXT_PRIVATE_DOCS_ZONE_ORIGIN } = env();

export const appOriginsMap = new Map<AppName, string>([
  ['web', NEXT_PUBLIC_WEB_URL],
  ['docs', NEXT_PRIVATE_DOCS_ZONE_ORIGIN],
]);
