import { BaseError, type ErrorOpts } from './BaseError';

export class BaseUserError extends BaseError {
  constructor(
    message: string,
    {
      publicMessage = "We couldn't process your request.",
      statusCode = 400,
      details,
      cause,
    }: ErrorOpts = {},
  ) {
    super(message, { publicMessage, statusCode, details, cause });

    this.name = 'BaseUserError';
    this.code = '00100';
  }
}
