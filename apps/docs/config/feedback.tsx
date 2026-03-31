import { env } from '@/env';
import type { FeedbackRatingOption } from '@/features/feedback/types';

export const feedbackConfig = {
  channels: ['slack'],

  slack: {
    slackChannel: env.NEXT_PUBLIC_DOCS_FEEDBACK_SLACK_CHANNEL_ID,
  },

  widget: {
    commentMaxLength: 1_500,
    title: 'Was this helpful?',
    placeholder: 'Your feedback...',
    submitLabel: 'Send',
    successTitle: 'Your feedback has been received!',
    successDescription: 'Thank you for your help.',
    errorMessage: 'Please try again.',
    errorNoMessage: 'Please add your feedback',
    ratings: [
      {
        value: 'very-unhelpful',
        label: 'Terrible',
        emoji: '😤',
        iconLabel: 'Very unhappy',
      },
      {
        value: 'unhelpful',
        label: 'Needs work',
        emoji: '🙁',
        iconLabel: 'Unhappy',
      },
      {
        value: 'helpful',
        label: 'Okay',
        emoji: '🙂',
        iconLabel: 'Happy',
      },
      {
        value: 'very-helpful',
        label: 'Great',
        emoji: '🤩',
        iconLabel: 'Very happy',
      },
    ] satisfies Array<FeedbackRatingOption>,
  },
} as const;
