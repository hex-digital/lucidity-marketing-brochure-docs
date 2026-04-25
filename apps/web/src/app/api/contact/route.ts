import { NextResponse } from 'next/server';
import { postSlackMessage } from '@pkg/notifications/slack/lib';
import { escapeSlackText, sanitizeSlackMrkdwn } from '@pkg/notifications/slack/utilities';

function valueFromForm(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const fullName = valueFromForm(formData, 'fullName');
  const companyName = valueFromForm(formData, 'companyName');
  const email = valueFromForm(formData, 'email');
  const telephone = valueFromForm(formData, 'telephone');

  if (!fullName || !companyName || !email) {
    return NextResponse.json(
      { ok: false, error: 'Missing required fields: full name, company name, and email.' },
      { status: 400 },
    );
  }

  const slackChannel = process.env.WEB_CONTACT_SLACK_CHANNEL_ID;

  if (!slackChannel) {
    return NextResponse.json(
      { ok: false, error: 'Missing WEB_CONTACT_SLACK_CHANNEL_ID configuration.' },
      { status: 500 },
    );
  }

  const text = [
    '*New Lucidity.js web contact form submission*',
    `*Full name:* ${escapeSlackText(fullName)}`,
    `*Company name:* ${escapeSlackText(companyName)}`,
    `*Email:* ${escapeSlackText(email)}`,
    `*Telephone:* ${telephone ? sanitizeSlackMrkdwn(telephone) : 'Not provided'}`,
  ].join('\n');

  await postSlackMessage({
    channel: slackChannel,
    text,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          verbatim: true,
          text,
        },
      },
    ],
  });

  return NextResponse.redirect(new URL('/#get-started', request.url), 303);
}
