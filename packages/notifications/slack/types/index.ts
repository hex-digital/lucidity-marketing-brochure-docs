export interface MarkdownGuideItem {
  label: string;
  syntax: string;
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

export interface SlackWriteResult {
  channel: string;
  ts: string;
}
export interface SlackApiResponse {
  ok?: boolean;
  error?: string;
  channel?: string;
  ts?: string;
}

export interface SlackApiOptions {
  channel: string;
  token?: string;
  apiBaseUrl?: string;
}

export interface SlackMessageOptions extends SlackApiOptions, NotificationMessageInput {}
