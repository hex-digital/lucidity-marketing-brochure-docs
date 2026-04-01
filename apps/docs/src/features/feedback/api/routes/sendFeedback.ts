import { z } from 'zod';
import { feedbackService } from '@/features/feedback/api/services/feedbackService';
import { feedbackRequestSchema } from '@/features/feedback/api/validation/sendFeedback';
import { BaseUserError } from '@pkg/errors/BaseUserError';

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

      return Response.json(
        { ok: false, error: 'Unable to send feedback.' },
        { status: error instanceof BaseUserError ? 400 : 500 },
      );
    }
  },
};
