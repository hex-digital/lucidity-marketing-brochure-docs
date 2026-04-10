import { ERROR_CODES } from '@/errors/codes';
import { BaseError, type ErrorOpts } from '@pkg/errors/BaseError';

export class NoFeedbackChannelError extends BaseError {
  constructor(message: string, errorOptions: ErrorOpts = {}) {
    super(message, errorOptions);

    this.name = 'ConfigNoFeedbackChannelError';
    this.code = ERROR_CODES.NO_FEEDBACK_CHANNEL_ID;
  }
}
