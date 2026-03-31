export const feedbackRatings = [
  'very-unhelpful',
  'unhelpful',
  'helpful',
  'very-helpful',
] as const;

export type FeedbackRating = (typeof feedbackRatings)[number];

export interface FeedbackRatingOption {
  value: FeedbackRating;
  label: string;
  emoji: string;
  iconLabel: string;
}
export interface UserFeedbackPayload {
  rating: FeedbackRating;
  pagePath: string;
  pageUrl: string;
  pageTitle: string;
  comment?: string;
}
