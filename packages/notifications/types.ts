export type NotificationTransport = 'slack';

export interface SlackChannelConfig {
  id: string;
  transport: 'slack';
  channelId: string;
  name?: string;
}

export type NotificationChannel = SlackChannelConfig;

export type NotificationChannelMap<TChannelId extends string = string> = Record<
  TChannelId,
  NotificationChannel
>;

export type FeedbackRating = 'very-unhelpful' | 'unhelpful' | 'helpful' | 'very-helpful';

export interface FeedbackRatingOption {
  value: FeedbackRating;
  label: string;
  emoji: string;
  iconLabel: string;
}

export interface MarkdownGuideItem {
  label: string;
  syntax: string;
}

export interface UserFeedbackPayload {
  rating: FeedbackRating;
  pagePath: string;
  pageTitle: string;
  comment?: string;
}

export interface SlackMrkdwnTextObject {
  type: 'mrkdwn';
  text: string;
  verbatim: true;
}

export interface SlackPlainTextObject {
  type: 'plain_text';
  text: string;
  emoji?: boolean;
}

export interface SlackSectionBlock {
  type: 'section';
  text: SlackMrkdwnTextObject | SlackPlainTextObject;
}

export interface SlackContextBlock {
  type: 'context';
  elements: Array<SlackMrkdwnTextObject | SlackPlainTextObject>;
}

export interface SlackDividerBlock {
  type: 'divider';
}

export type SlackBlock = SlackSectionBlock | SlackContextBlock | SlackDividerBlock;

export interface NotificationMessageInput {
  text: string;
  blocks?: SlackBlock[];
}

export interface NotificationMessageUpdateInput extends NotificationMessageInput {
  ts: string;
}

export interface SlackMessagePayload extends NotificationMessageInput {
  channel: string;
  ts?: string;
  unfurl_links: false;
  unfurl_media: false;
}

export interface SlackWriteResult {
  channel: string;
  ts: string;
}
