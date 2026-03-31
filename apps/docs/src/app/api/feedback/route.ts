import { z } from 'zod';
import { feedbackConfig } from '@/config/feedback';
import { feedbackRatings } from '@/features/feedback/types';
import { SlackNotificationError } from '@pkg/notifications/slack/errors/SlackNotificationError';
import { postSlackMessage } from '@pkg/notifications/slack/lib';
import type { SlackBlock } from '@pkg/notifications/slack/types';
import { escapeSlackText, sanitizeSlackMrkdwn } from '@pkg/notifications/slack/utilities';
import { SlackConfigError } from '@pkg/notifications/slack/errors/SlackConfigError';

const feedbackRequestSchema = z.object({
  rating: z.enum(feedbackRatings),
  comment: z.string().max(feedbackConfig.widget.commentMaxLength).optional().default(''),
  pagePath: z.string().trim().min(1).max(300),
  pageUrl: z.url().max(2048),
  pageTitle: z.string().trim().min(1).max(200),
});
type FeedbackRequest = z.infer<typeof feedbackRequestSchema>;

export async function POST(request: Request) {
  try {
    const input = feedbackRequestSchema.parse(await request.json());

    const channels = feedbackConfig.channels;

    if (channels.includes('slack')) {
      await sendFeedbackToSlack(input);
    }

    return Response.json({
      ok: true,
      status: 'created' as const,
    });
  } catch (error) {
    console.error('Feedback submission failed.', error);

    if (error instanceof z.ZodError) {
      return Response.json({ ok: false, error: 'Invalid feedback request.' }, { status: 400 });
    }

    if (error instanceof SlackNotificationError) {
      return Response.json({ ok: false, error: 'Unable to send feedback.' }, { status: 502 });
    }

    if (error instanceof SlackConfigError) {
      return Response.json(
        { ok: false, error: 'Unable to send feedback. C Error' },
        { status: 502 },
      );
    }

    return Response.json({ ok: false, error: 'Unable to send feedback.' }, { status: 500 });
  }
}

async function sendFeedbackToSlack(input: FeedbackRequest) {
  const slackChannel = feedbackConfig.slack.slackChannel;

  if (!slackChannel) {
    throw new SlackConfigError('Missing feedback slack channel ID');
  }

  const comment = input.comment.trim().slice(0, feedbackConfig.widget.commentMaxLength);

  const rating = feedbackConfig.widget.ratings.find(
    (ratingConfigItem) => ratingConfigItem.value === input.rating,
  );

  if (!rating) {
    throw new SlackConfigError('Incorrect feedback rating label');
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
