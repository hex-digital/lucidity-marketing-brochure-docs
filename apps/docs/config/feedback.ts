import type {
  FeedbackRating,
  FeedbackRatingOption,
  MarkdownGuideItem,
} from '@pkg/notifications';

type DocsFeedbackChannelId = 'docs-feedback';

export const feedbackRatingOptions: readonly FeedbackRatingOption[] = [
  {
    value: 'very-unhelpful',
    label: 'Terrible',
    emoji: '😭',
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
] as const;

export const feedbackMarkdownGuide: readonly MarkdownGuideItem[] = [
  { label: 'Bold', syntax: '*bold*' },
  { label: 'Italic', syntax: '_italic_' },
  { label: 'Strike', syntax: '~strike~' },
  { label: 'Inline code', syntax: '`code`' },
  { label: 'Code block', syntax: '```code```' },
  { label: 'Quote', syntax: '> quote' },
  { label: 'Link', syntax: '[label](https://example.com)' },
] as const;

export const feedbackChannels = {
  feedback: ['docs-feedback'],
} as const satisfies Record<string, readonly DocsFeedbackChannelId[]>;

export const feedbackConfig = {
  title: 'Was this helpful?',
  placeholder: 'Share what worked or what should improve.',
  submitLabel: 'Send',
  successTitle: 'Your feedback has been received!',
  successDescription: 'Thank you for your help.',
  errorMessage: 'Please try again.',
  markdownHint:
    'Supports Slack formatting only: bold, italic, strikethrough, inline code, code blocks, quotes, and links.',
  commentPrompt: 'Add an optional note with Slack-style formatting.',
  ratings: feedbackRatingOptions,
  markdownGuide: feedbackMarkdownGuide,
  commentMaxLength: 1_500,
  channels: feedbackChannels,
} as const;

export type DocsFeedbackChannel = (typeof feedbackChannels.feedback)[number];
export type DocsFeedbackRating = FeedbackRating;
