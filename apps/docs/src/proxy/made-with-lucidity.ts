import { defineNextProxy } from '@pkg/next-proxy/utilities';

export const madeWithLucidity = defineNextProxy((_request, response) => {
  response.headers.set(
    'X-Made-With',
    'https://github.com/hex-digital/lucidity.js-next-sanity-enterprise-starter',
  );

  return response;
});
