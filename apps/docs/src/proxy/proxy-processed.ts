import { XProxyProcessed } from '@/constants/headers';
import { defineNextProxy } from '@pkg/next-proxy/utilities';

export const proxyProcessed = defineNextProxy((_request, response) => {
  response.headers.set(XProxyProcessed, 'true');

  return response;
});
