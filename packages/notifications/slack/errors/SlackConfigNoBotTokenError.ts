import { NotificationError } from '../../errors/NotificationError';
import { NOTIFICATION_ERROR_CODES } from '../../errors/codes';

export class SlackConfigNoBotTokenError extends NotificationError {
  constructor(message: string, errorOptions: ErrorOptions = {}) {
    super(message, errorOptions);

    this.name = 'SlackConfigNoBotTokenError';
    this.code = NOTIFICATION_ERROR_CODES.GENERIC;
  }
}
