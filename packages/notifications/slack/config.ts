import { env as notificationEnv } from '../env';

import type { SlackApiOptions } from './types';

export const DEFAULT_SLACK_API_BASE_URL = 'https://slack.com/api';

export function getConfig(overrides?: Pick<SlackApiOptions, 'token' | 'apiBaseUrl'>) {
  const { SLACK_BOT_TOKEN, SLACK_FEEDBACK_API_BASE_URL } = notificationEnv();

  return {
    token: overrides?.token ?? SLACK_BOT_TOKEN,
    apiBaseUrl:
      overrides?.apiBaseUrl ?? SLACK_FEEDBACK_API_BASE_URL ?? DEFAULT_SLACK_API_BASE_URL,
  };
}
