import type {
  NotificationMessageInput,
  SlackApiOptions,
  SlackApiResponse,
  SlackMessageOptions,
  SlackWriteResult,
} from '../types';
import { getConfig } from '../config';
import { SlackConfigNoBotTokenError } from '../errors/SlackConfigNoBotTokenError';
import { SlackApiRequestError } from '../errors/SlackApiRequestError';
import { SlackApiResponseError } from '../errors/SlackApiResponseError';

async function slackApi(
  method: 'chat.postMessage',
  options: SlackApiOptions,
  body: NotificationMessageInput,
): Promise<SlackWriteResult> {
  const { token, apiBaseUrl } = getConfig(options);

  if (!token) {
    throw new SlackConfigNoBotTokenError('Slack bot token is not configured.');
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
    throw new SlackApiRequestError(`Slack API request failed`, {
      details: { response: response.status },
    });
  }

  const data = (await response.json()) as SlackApiResponse;

  if (!data.ok || !data.ts || !data.channel) {
    throw new SlackApiResponseError('Slack API returned an invalid response.', {
      details: { error: data.error },
    });
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
