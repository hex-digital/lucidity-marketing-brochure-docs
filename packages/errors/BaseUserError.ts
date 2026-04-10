import { BaseError, type ErrorOpts } from './BaseError';

export class BaseUserError extends BaseError {
  constructor(
    message: string,
    {
      publicMessage = "We couldn't process your request.",
      statusCode = 400,
      details,
      cause,
    }: ErrorOpts,
  ) {
    super(message, { cause });

    this.name = 'BaseUserError';
    this.code = '00100';

    this.publicMessage = publicMessage;
    this.statusCode = statusCode;
    this.details = details;
  }
}
