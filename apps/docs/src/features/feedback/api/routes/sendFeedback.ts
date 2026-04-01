import { z } from 'zod';
import { SlackNotificationError } from '@pkg/notifications/slack/errors/SlackNotificationError';
import { SlackConfigError } from '@pkg/notifications/slack/errors/SlackConfigError';
import { feedbackService } from '@/features/feedback/api/services/feedbackService';
import { feedbackRequestSchema } from '@/features/feedback/api/validation/sendFeedback';

export const sendFeedback = {
  post: async (rawRequest: Request) => {
    try {
      const { rating, comment, pagePath, pageUrl, pageTitle } = feedbackRequestSchema.parse(
        await rawRequest.json(),
      );

      await feedbackService().sendFeedback({ rating, comment, pagePath, pageUrl, pageTitle });

      return Response.json({
        ok: true,
        status: 'created' as const,
      });
    } catch (error) {
      console.error('Feedback submission failed.', error);

      if (error instanceof z.ZodError) {
        return Response.json(
          { ok: false, error: 'Invalid feedback request.' },
          { status: 400 },
        );
      }

      if (error instanceof SlackNotificationError) {
        return Response.json(
          { ok: false, error: 'Unable to send feedback.' },
          { status: 502 },
        );
      }

      if (error instanceof SlackConfigError) {
        return Response.json(
          { ok: false, error: 'Unable to send feedback. C Error' },
          { status: 502 },
        );
      }

      return Response.json({ ok: false, error: 'Unable to send feedback.' }, { status: 500 });
    }
  },
};
