import { createEnv } from '@t3-oss/env-nextjs';
import { keys as core } from '@pkg/next-config/env';

export const env = createEnv({
  extends: [core()],
  server: {},
  client: {},
  runtimeEnv: {},
});
