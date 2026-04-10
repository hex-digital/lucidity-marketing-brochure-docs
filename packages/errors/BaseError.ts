export interface ErrorOpts {
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
    { publicMessage = 'Something went wrong.', statusCode = 500, details, cause }: ErrorOpts,
  ) {
    super(message, { cause });

    this.name = 'BaseError';
    this.code = '00000';

    this.publicMessage = publicMessage;
    this.statusCode = statusCode;
    this.details = details;
  }
}
