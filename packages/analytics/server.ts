import 'server-only';
import { PostHog } from 'posthog-node';
import { env } from './env';

const { NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, NEXT_PUBLIC_POSTHOG_HOST } = env();

export const analytics =
  NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && NEXT_PUBLIC_POSTHOG_HOST
    ? new PostHog(NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
        host: NEXT_PUBLIC_POSTHOG_HOST,

        // Don't batch events and flush immediately - we're running in a serverless environment
        flushAt: 1,
        flushInterval: 0,
      })
    : { capture: () => {} };
