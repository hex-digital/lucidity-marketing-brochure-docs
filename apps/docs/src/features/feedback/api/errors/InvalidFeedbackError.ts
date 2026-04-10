import { ERROR_CODES } from '@/errors/codes';
import type { ErrorOpts } from '@pkg/errors/BaseError';
import { BaseUserError } from '@pkg/errors/BaseUserError';

export class InvalidFeedbackError extends BaseUserError {
  constructor(message: string, errorOptions: ErrorOpts = {}) {
    super(message, errorOptions);

    this.name = 'InvalidFeedbackError';
    this.code = ERROR_CODES.INVALID_FEEDBACK;
  }
}
