import posthog from 'posthog-js';
import { env } from './env';

export const initializeAnalytics = () => {
  const {
    NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,
    NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_POSTHOG_UI_HOST,
  } = env();

  if (!(NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && NEXT_PUBLIC_POSTHOG_HOST)) {
    return;
  }

  posthog.init(NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
    api_host: NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: NEXT_PUBLIC_POSTHOG_UI_HOST ?? NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2026-01-30',
    person_profiles: 'always',
  });
};
