import { NOTIFICATION_ERROR_CODES } from '../../errors/codes';
import { NotificationError } from '../../errors/NotificationError';
import type { ErrorOpts } from '@pkg/errors/BaseError';

export class SlackConfigNoBotTokenError extends NotificationError {
  constructor(message: string, errorOptions: ErrorOpts = {}) {
    super(message, errorOptions);

    this.name = 'SlackConfigNoBotTokenError';
    this.code = NOTIFICATION_ERROR_CODES.GENERIC;
  }
}
