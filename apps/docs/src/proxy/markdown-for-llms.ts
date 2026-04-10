import { defineNextProxy } from '@pkg/next-proxy/utilities';
import { NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';

const llm = rewritePath('{/*path}', '/llms.mdx{/*path}');

export const markdownForLlms = defineNextProxy((request, response) => {
  if (request.nextUrl.pathname.startsWith('/llms.mdx')) {
    return response;
  }

  if (isMarkdownPreferred(request)) {
    const result = llm.rewrite(request.nextUrl.pathname);

    if (result) {
      const rewritten = request.nextUrl.clone();
      rewritten.pathname = result;

      return NextResponse.rewrite(rewritten);
    }
  }

  return response;
});
