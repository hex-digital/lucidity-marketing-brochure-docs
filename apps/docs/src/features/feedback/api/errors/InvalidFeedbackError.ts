import { BaseUserError, type ErrorOptions } from '@pkg/errors/BaseUserError';
import { ERROR_CODES } from '@/errors/codes';

export class InvalidFeedbackError extends BaseUserError {
  constructor(message: string, errorOptions: ErrorOptions = {}) {
    super(message, errorOptions);

    this.name = 'InvalidFeedbackError';
    this.code = ERROR_CODES.INVALID_FEEDBACK;
  }
}
