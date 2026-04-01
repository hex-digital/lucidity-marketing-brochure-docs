export const codePrefix = 'no-';

export const NOTIFICATION_ERROR_CODES = {
  GENERIC: `${codePrefix}-sla-0000`,

  GENERIC_CONFIG_ERROR: `${codePrefix}-sla-0001`,

  NO_SLACK_BOT_TOKEN: `${codePrefix}-sla-0011`,
  NO_FEEDBACK_CHANNEL: `${codePrefix}-sla-0012`,

  SLACK_API_REQUEST_ERROR: `${codePrefix}-sla-0101`,
  SLACK_API_RESPONSE_ERROR: `${codePrefix}-sla-0102`,
} as const;
