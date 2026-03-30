import 'server-only';

import type { NotificationChannelMap } from '@pkg/notifications';
import { env } from '@/env';

export type DocsFeedbackChannelId = 'docs-feedback';

export const docsFeedbackChannelIds = [
  'docs-feedback',
] as const satisfies readonly DocsFeedbackChannelId[];

export const docsFeedbackChannelMap = {
  'docs-feedback': {
    id: 'docs-feedback',
    transport: 'slack',
    channelId: env.DOCS_FEEDBACK_SLACK_CHANNEL_ID ?? '',
    name: env.DOCS_FEEDBACK_SLACK_CHANNEL_NAME,
  },
} as const satisfies NotificationChannelMap<DocsFeedbackChannelId>;

export function getDocsFeedbackChannels(channelIds: readonly DocsFeedbackChannelId[]) {
  return channelIds
    .map((channelId) => docsFeedbackChannelMap[channelId])
    .filter((channel) => Boolean(channel.channelId));
}

export function getDocsFeedbackChannel() {
  const [channel] = getDocsFeedbackChannels(docsFeedbackChannelIds);

  if (!channel) {
    throw new Error('Docs feedback channel is not configured.');
  }

  return channel;
}
