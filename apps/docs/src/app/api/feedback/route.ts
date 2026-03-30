import { z } from 'zod';
import { getDocsFeedbackChannel } from '@/config/channels';
import { feedbackConfig } from '@/config/feedback';
import {
  buildSlackFeedbackCommentText,
  buildSlackFeedbackInitialText,
  normalizeFeedbackComment,
  NotificationError,
  postSlackMessage,
  updateSlackMessage,
} from '@pkg/notifications/server';

const feedbackRequestSchema = z.object({
  rating: z.enum(['very-unhelpful', 'unhelpful', 'helpful', 'very-helpful']),
  comment: z.string().max(feedbackConfig.commentMaxLength).optional().default(''),
  ts: z
    .string()
    .trim()
    .regex(/^\d+\.\d+$/)
    .optional(),
  pagePath: z.string().trim().min(1).max(300),
  pageTitle: z.string().trim().min(1).max(200),
});

type FeedbackRequest = z.infer<typeof feedbackRequestSchema>;

function buildPayload(input: FeedbackRequest, comment: string) {
  return {
    rating: input.rating,
    pagePath: input.pagePath,
    pageTitle: input.pageTitle,
    comment,
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const input = feedbackRequestSchema.parse(body);
    const channel = getDocsFeedbackChannel();
    const comment = normalizeFeedbackComment(input.comment);

    if (!comment) {
      if (input.ts) {
        return Response.json({ ok: true, ts: input.ts, status: 'received' as const });
      }

      const result = await postSlackMessage({
        channel,
        text: buildSlackFeedbackInitialText(buildPayload(input, '')),
      });

      return Response.json({
        ok: true,
        ts: result.ts,
        status: 'created' as const,
      });
    }

    const payload = buildPayload(input, comment);
    const text = `${buildSlackFeedbackInitialText(payload)}\n\n${buildSlackFeedbackCommentText(comment)}`;
    const result = input.ts
      ? await updateSlackMessage({
          channel,
          ts: input.ts,
          text,
        })
      : await postSlackMessage({
          channel,
          text,
        });

    return Response.json({
      ok: true,
      ts: result.ts,
      status: input.ts ? ('updated' as const) : ('created' as const),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ ok: false, error: 'Invalid feedback request.' }, { status: 400 });
    }

    if (error instanceof NotificationError) {
      return Response.json({ ok: false, error: 'Unable to send feedback.' }, { status: 502 });
    }

    console.error('Feedback submission failed.', error);

    return Response.json({ ok: false, error: 'Unable to send feedback.' }, { status: 500 });
  }
}
