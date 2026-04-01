import { BaseError, type ErrorOptions } from '@pkg/errors/BaseError';

export class NotificationError extends BaseError {
  constructor(message: string, errorOptions: ErrorOptions) {
    super(message, errorOptions);

    this.name = 'NotificationError';
  }
}
