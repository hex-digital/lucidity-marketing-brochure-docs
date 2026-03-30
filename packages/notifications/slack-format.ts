import type { FeedbackRating, UserFeedbackPayload } from './types';

const SLACK_CONTROL_CHARACTER_PATTERN = /[&<>]/g;
const MARKDOWN_LINK_PATTERN = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g;

const SLACK_CONTROL_CHARACTER_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
};

const FEEDBACK_RATING_LABELS: Record<FeedbackRating, string> = {
  'very-unhelpful': 'Very unhelpful',
  unhelpful: 'Unhelpful',
  helpful: 'Helpful',
  'very-helpful': 'Very helpful',
};

export function escapeSlackText(value: string) {
  return value.replace(SLACK_CONTROL_CHARACTER_PATTERN, (character) => {
    return SLACK_CONTROL_CHARACTER_ESCAPES[character] ?? character;
  });
}

export function sanitizeSlackMrkdwn(value: string) {
  const escaped = escapeSlackText(value.trim());

  return escaped.replace(MARKDOWN_LINK_PATTERN, (_match, label: string, href: string) => {
    return `&lt;${href}|${escapeSlackText(label)}&gt;`;
  });
}

export function getFeedbackRatingLabel(rating: FeedbackRating) {
  return FEEDBACK_RATING_LABELS[rating];
}

export function normalizeFeedbackComment(input: unknown, maxLength = 1_500) {
  if (typeof input !== 'string') return '';

  return input.trim().slice(0, maxLength);
}

export function buildSlackFeedbackInitialText(payload: UserFeedbackPayload) {
  return [
    '*Docs feedback received*',
    `*Page:* ${escapeSlackText(payload.pageTitle)}`,
    `*Path:* ${escapeSlackText(payload.pagePath)}`,
    `*Rating:* ${escapeSlackText(getFeedbackRatingLabel(payload.rating))}`,
  ].join('\n');
}

export function buildSlackFeedbackCommentText(comment: string) {
  return `*Comment:*\n${sanitizeSlackMrkdwn(comment)}`;
}
