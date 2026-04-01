import { NotificationError } from '../../errors/NotificationError';
import type { ErrorOptions } from '@pkg/errors/BaseError';

export class SlackNotificationError extends NotificationError {
  constructor(message: string, errorOptions: ErrorOptions) {
    super(message, errorOptions);

    this.name = 'SlackNotificationError';
  }
}
