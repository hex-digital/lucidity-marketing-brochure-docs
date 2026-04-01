import { NOTIFICATION_ERROR_CODES } from '../../errors/codes';
import { NotificationError } from '../../errors/NotificationError';
import type { ErrorOptions } from '@pkg/errors/BaseError';

export class SlackConfigNoFeedbackChannelError extends NotificationError {
  constructor(message: string, errorOptions: ErrorOptions = {}) {
    super(message, errorOptions);

    this.name = 'SlackConfigNoFeedbackChannelError';
    this.code = NOTIFICATION_ERROR_CODES.NO_FEEDBACK_CHANNEL;
  }
}
