export interface ErrorOptions {
  publicMessage?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
  cause?: unknown;
}

export class BaseError extends Error {
  code: string;
  publicMessage: string;
  statusCode: number;
  details?: Record<string, unknown>;

  constructor(
    message: string,
    {
      publicMessage = 'Something went wrong.',
      statusCode = 500,
      details,
      cause,
    }: ErrorOptions,
  ) {
    super(message, { cause });

    this.name = 'NotificationError';
    this.code = '00000';

    this.publicMessage = publicMessage;
    this.statusCode = statusCode;
    this.details = details;
  }
}
