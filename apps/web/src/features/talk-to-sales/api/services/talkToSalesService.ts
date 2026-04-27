import { talkToSalesConfig } from '@/config/talkToSales';
import type { TalkToSalesRequest } from '@/features/talk-to-sales/api/validation/sendTalkToSales';
import { postSlackMessage } from '@pkg/notifications/slack/lib';
import type { SlackBlock } from '@pkg/notifications/slack/types';
import { escapeSlackText, sanitizeSlackMrkdwn } from '@pkg/notifications/slack/utilities';

export function talkToSalesService() {
  return {
    sendTalkToSales: async (request: TalkToSalesRequest) => {
      const channels = talkToSalesConfig.channels;

      if (channels.includes('slack')) {
        await sendTalkToSalesToSlack(request);
      }
    },
  };
}

async function sendTalkToSalesToSlack(input: TalkToSalesRequest) {
  const slackChannel = talkToSalesConfig.slack.slackChannel;

  if (!slackChannel) {
    throw new Error('Missing WEB_CONTACT_SLACK_CHANNEL_ID');
  }

  const mention = `<@${talkToSalesConfig.slack.mentionUserId}>`;
  const message = input.message.trim();
  const phone = input.phone.trim();

  const text = [
    `${mention} *New Lucidity.js talk to sales submission*`,
    `*Name:* ${escapeSlackText(`${input.firstName} ${input.lastName}`)}`,
    `*Email:* ${escapeSlackText(input.email)}`,
    `*Job title:* ${escapeSlackText(input.jobTitle)}`,
    `*Organisation:* ${escapeSlackText(input.organisation)}`,
    `*Phone:* ${phone ? sanitizeSlackMrkdwn(phone) : 'Not provided'}`,
    `*Register for updates:* ${input.registerForUpdates ? 'Yes' : 'No'}`,
    `*Agreed to Privacy Policy:* ${input.agreeToPrivacyPolicy ? 'Yes' : 'No'}`,
    `\n*Message:*\n${message ? sanitizeSlackMrkdwn(message) : 'Not provided'}`,
  ].join('\n');

  const blocks: Array<SlackBlock> = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        verbatim: true,
        text,
      },
    },
  ];

  return postSlackMessage({
    channel: slackChannel,
    text,
    blocks,
  });
}
