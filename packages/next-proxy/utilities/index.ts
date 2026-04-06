import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export type NextProxyHandler<
  Request extends NextRequest = NextRequest,
  Response = NextResponse,
> = (
  request: Request,
  response: Response,
) => Promise<Response | undefined | void> | Response | undefined | void;

export function defineNextProxy<
  Request extends NextRequest = NextRequest,
  Response = NextResponse,
>(handler: NextProxyHandler<Request, Response>) {
  return handler;
}

export async function runNextProxyPipeline<Request extends NextRequest = NextRequest>(
  request: Request,
  proxyPipeline: Array<NextProxyHandler<Request>>,
) {
  let response = NextResponse.next();

  for (const proxyHandler of proxyPipeline) {
    const handlerResponse = await proxyHandler(request, response);

    if (handlerResponse) {
      response = handlerResponse;
    }

    if (!response.ok) {
      // Redirects or Errors should break out of the pipeline immediately
      return response;
    }
  }

  return response;
}

export async function fetchJson<DataType>(apiUrl: URL): Promise<DataType> {
  const response = await fetch(apiUrl);

  if (response.ok) {
    return response.json() as Promise<DataType>;
  } else {
    throw new Error('Unable to request API');
  }
}

export function mergeQueryParams(
  url: string | URL,
  params: Record<string, string> | URLSearchParams,
) {
  const urlObj = new URL(url);

  const addParam = (key: string, value: string) => {
    urlObj.searchParams.set(key, value);
  };

  if (params instanceof URLSearchParams) {
    params.forEach((value, key) => {
      addParam(key, value);
    });
  } else {
    Object.entries(params).forEach(([key, value]) => {
      addParam(key, value);
    });
  }

  return urlObj.toString();
}

export function shouldSkipProxy(request: NextRequest, prefixes: Array<string>) {
  const path = request.nextUrl.pathname;

  return prefixes.some((prefix) => path.startsWith(prefix));
}

export function urlWithoutHostname(request: NextRequest) {
  const url = request.nextUrl;

  return url.pathname + url.search;
}
