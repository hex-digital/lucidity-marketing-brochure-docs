export interface ErrorOptions {
  code: string;
  publicMessage?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
  cause?: unknown;
}

export class BaseError extends Error {
  public readonly code: string;
  public readonly publicMessage: string;
  public readonly statusCode: number;
  public readonly details?: Record<string, unknown>;

  constructor(
    message: string,
    {
      code,
      publicMessage = 'Something went wrong.',
      statusCode = 500,
      details,
      cause,
    }: ErrorOptions,
  ) {
    super(message, { cause });
    this.name = 'NotificationError';
    this.code = code;
    this.publicMessage = publicMessage;
    this.statusCode = statusCode;
    this.details = details;
  }
}
