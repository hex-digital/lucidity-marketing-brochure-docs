import { createEnv } from '@t3-oss/env-nextjs';
import { env as core } from '@pkg/next-config/env';
import { env as analytics } from '@pkg/analytics/env';
import { env as notifications } from '@pkg/notifications/env';
import { env as observability } from '@pkg/observability/env';

export const env = createEnv({
  extends: [analytics(), core(), notifications(), observability()],
  server: {},
  client: {},
  runtimeEnv: {},
});
