import type {
  NotificationMessageInput,
  SlackApiOptions,
  SlackApiResponse,
  SlackMessageOptions,
  SlackWriteResult,
} from '../types';
import { getConfig } from '../config';
import { SlackNotificationError } from '../errors/SlackNotificationError';

async function slackApi(
  method: 'chat.postMessage',
  options: SlackApiOptions,
  body: NotificationMessageInput,
): Promise<SlackWriteResult> {
  const { token, apiBaseUrl } = getConfig(options);

  if (!token) {
    throw new SlackNotificationError('Slack bot token is not configured.');
  }

  const response = await fetch(`${apiBaseUrl}/${method}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      channel: options.channel,
      unfurl_links: false,
      unfurl_media: false,
      ...body,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new SlackNotificationError(
      `Slack API request failed with status ${response.status}.`,
    );
  }

  const data = (await response.json()) as SlackApiResponse;

  if (!data.ok || !data.ts || !data.channel) {
    throw new SlackNotificationError(data.error ?? 'Slack API returned an invalid response.');
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
