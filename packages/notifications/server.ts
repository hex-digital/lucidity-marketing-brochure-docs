import 'server-only';

import { env as notificationEnv } from './env';
import type {
  NotificationMessageInput,
  NotificationMessageUpdateInput,
  SlackChannelConfig,
  SlackWriteResult,
} from './types';

export {
  buildSlackFeedbackCommentText,
  buildSlackFeedbackInitialText,
  normalizeFeedbackComment,
  sanitizeSlackMrkdwn,
} from './slack-format';

const DEFAULT_SLACK_API_BASE_URL = 'https://slack.com/api';

interface SlackApiResponse {
  ok?: boolean;
  error?: string;
  channel?: string;
  ts?: string;
}

export class NotificationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotificationError';
  }
}

export interface SlackApiOptions {
  channel: SlackChannelConfig;
  token?: string;
  apiBaseUrl?: string;
}

export interface SlackMessageOptions extends SlackApiOptions, NotificationMessageInput {}

export interface SlackMessageUpdateOptions
  extends SlackApiOptions, NotificationMessageUpdateInput {}

function getSlackApiConfig(overrides?: Pick<SlackApiOptions, 'token' | 'apiBaseUrl'>) {
  const { SLACK_BOT_TOKEN, SLACK_FEEDBACK_API_BASE_URL } = notificationEnv();

  return {
    token: overrides?.token ?? SLACK_BOT_TOKEN,
    apiBaseUrl:
      overrides?.apiBaseUrl ?? SLACK_FEEDBACK_API_BASE_URL ?? DEFAULT_SLACK_API_BASE_URL,
  };
}

async function slackApi(
  method: 'chat.postMessage' | 'chat.update',
  options: SlackApiOptions,
  body: NotificationMessageInput | NotificationMessageUpdateInput,
): Promise<SlackWriteResult> {
  const { token, apiBaseUrl } = getSlackApiConfig(options);

  if (!token) {
    throw new NotificationError('Slack bot token is not configured.');
  }

  const response = await fetch(`${apiBaseUrl}/${method}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      channel: options.channel.channelId,
      unfurl_links: false,
      unfurl_media: false,
      ...body,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new NotificationError(`Slack API request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as SlackApiResponse;

  if (!data.ok || !data.ts || !data.channel) {
    throw new NotificationError(data.error ?? 'Slack API returned an invalid response.');
  }

  return {
    channel: data.channel,
    ts: data.ts,
  };
}

export async function postSlackMessage(
  options: SlackMessageOptions,
): Promise<SlackWriteResult> {
  return slackApi('chat.postMessage', options, {
    text: options.text,
    blocks: options.blocks,
  });
}

export async function updateSlackMessage(
  options: SlackMessageUpdateOptions,
): Promise<SlackWriteResult> {
  return slackApi('chat.update', options, {
    ts: options.ts,
    text: options.text,
    blocks: options.blocks,
  });
}
