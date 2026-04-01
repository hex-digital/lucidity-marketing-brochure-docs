import { NotificationError } from '../../errors/NotificationError';
import { NOTIFICATION_ERROR_CODES } from '../../errors/codes';
import type { ErrorOptions } from '@pkg/errors/BaseError';

export class SlackApiResponseError extends NotificationError {
  constructor(message: string, errorOptions: ErrorOptions = {}) {
    super(message, errorOptions);

    this.name = 'SlackApiResponseError';
    this.code = NOTIFICATION_ERROR_CODES.SLACK_API_RESPONSE_ERROR;
  }
}
