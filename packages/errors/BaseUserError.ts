export interface ErrorOptions {
  publicMessage?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
  cause?: unknown;
}

export class BaseUserError extends Error {
  code: string;
  publicMessage: string;
  statusCode: number;
  details?: Record<string, unknown>;

  constructor(
    message: string,
    {
      publicMessage = "We couldn't process your request.",
      statusCode = 400,
      details,
      cause,
    }: ErrorOptions,
  ) {
    super(message, { cause });

    this.name = 'BaseUserError';
    this.code = '00100';

    this.publicMessage = publicMessage;
    this.statusCode = statusCode;
    this.details = details;
  }
}
