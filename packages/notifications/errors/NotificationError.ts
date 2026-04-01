import { BaseError, type ErrorOptions } from '@pkg/errors/BaseError';
import { NOTIFICATION_ERROR_CODES } from './codes';

export class NotificationError extends BaseError {
  constructor(message: string, errorOptions: ErrorOptions = {}) {
    super(message, errorOptions);

    this.name = 'NotificationError';
    this.code = NOTIFICATION_ERROR_CODES.GENERIC;
  }
}
