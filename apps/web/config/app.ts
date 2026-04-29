import { env } from '@/env';

export const appConfig = {
  httpProtocol: env.NEXT_PUBLIC_HTTP_PROTOCOL,
  baseUrl: env.NEXT_PUBLIC_WEB_URL,
  protocolBaseUrl: `${env.NEXT_PUBLIC_HTTP_PROTOCOL}${env.NEXT_PUBLIC_WEB_URL}`,

  docsUrl: env.NEXT_PUBLIC_DOCS_URL,
};
