import { ERROR_CODES } from '@/errors/codes';
import { BaseError, type ErrorOptions } from '@pkg/errors/BaseError';

export class NoFeedbackChannelError extends BaseError {
  constructor(message: string, errorOptions: ErrorOptions = {}) {
    super(message, errorOptions);

    this.name = 'ConfigNoFeedbackChannelError';
    this.code = ERROR_CODES.NO_FEEDBACK_CHANNEL_ID;
  }
}
