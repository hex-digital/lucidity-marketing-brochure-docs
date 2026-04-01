import { z } from 'zod';
import { feedbackConfig } from '@/config/feedback';
import { feedbackRatings } from '@/features/feedback/types';

export const feedbackItem = z.object({
  rating: z.enum(feedbackRatings),
  comment: z.string().max(feedbackConfig.widget.commentMaxLength).optional().default(''),
  pagePath: z.string().trim().min(1).max(300),
  pageUrl: z.url().max(2048),
  pageTitle: z.string().trim().min(1).max(300),
});
export type FeedbackItem = z.infer<typeof feedbackItem>;

export const feedbackRequestSchema = feedbackItem;
export type FeedbackRequest = z.infer<typeof feedbackRequestSchema>;
