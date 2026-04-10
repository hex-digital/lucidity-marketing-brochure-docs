import { NOTIFICATION_ERROR_CODES } from './codes';
import { BaseError, type ErrorOpts } from '@pkg/errors/BaseError';

export class NotificationError extends BaseError {
  constructor(message: string, errorOptions: ErrorOpts = {}) {
    super(message, errorOptions);

    this.name = 'NotificationError';
    this.code = NOTIFICATION_ERROR_CODES.GENERIC;
  }
}
