import type {
  FeedbackItem,
  FeedbackRequest,
} from '@/features/feedback/api/validation/sendFeedback';
import { feedbackConfig } from '@/config/feedback';
import { NoFeedbackChannelError } from '@/features/feedback/api/errors/NoFeedbackChannelError';
import { postSlackMessage } from '@pkg/notifications/slack/lib';
import type { SlackBlock } from '@pkg/notifications/slack/types';
import { escapeSlackText, sanitizeSlackMrkdwn } from '@pkg/notifications/slack/utilities';
import { InvalidFeedbackError } from '@/features/feedback/api/errors/InvalidFeedbackError';

export function feedbackService() {
  return {
    sendFeedback: async (request: FeedbackItem) => {
      const channels = feedbackConfig.channels;

      if (channels.includes('slack')) {
        await sendFeedbackToSlack(request);
      }
    },
  };
}

async function sendFeedbackToSlack(input: FeedbackRequest) {
  const slackChannel = feedbackConfig.slack.slackChannel;

  if (!slackChannel) {
    throw new NoFeedbackChannelError('Missing feedback slack channel ID');
  }

  const comment = input.comment.trim().slice(0, feedbackConfig.widget.commentMaxLength);

  const rating = feedbackConfig.widget.ratings.find(
    (ratingConfigItem) => ratingConfigItem.value === input.rating,
  );

  if (!rating) {
    throw new InvalidFeedbackError('Incorrect feedback rating label');
  }

  const text = [
    '*New Lucidity docs feedback*',
    `*Page:* ${escapeSlackText(input.pageTitle)}`,
    `*URL:* <${input.pageUrl}|${input.pageUrl}>`,
    `*Rating:* ${escapeSlackText(rating.emoji)}`,
    `\n*Comment:*\n${sanitizeSlackMrkdwn(comment)}`,
  ].join('\n');

  const blocks: Array<SlackBlock> = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        verbatim: true,
        text,
      },
    },
  ];

  return postSlackMessage({
    channel: slackChannel,
    text,
    blocks,
  });
}
