export const talkToSalesConfig = {
  channels: ['slack'],
  slack: {
    slackChannel: process.env.WEB_CONTACT_SLACK_CHANNEL_ID,
    mentionUserId: 'U02KJPMLE',
  },
  form: {
    maxFieldLength: 250,
  },
} as const;
