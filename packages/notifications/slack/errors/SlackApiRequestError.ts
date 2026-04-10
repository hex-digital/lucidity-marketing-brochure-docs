import { NOTIFICATION_ERROR_CODES } from '../../errors/codes';
import { NotificationError } from '../../errors/NotificationError';
import type { ErrorOpts } from '@pkg/errors/BaseError';

export class SlackApiRequestError extends NotificationError {
  constructor(message: string, errorOptions: ErrorOpts = {}) {
    super(message, errorOptions);

    this.name = 'SlackApiRequestError';
    this.code = NOTIFICATION_ERROR_CODES.SLACK_API_REQUEST_ERROR;
  }
}
