import { defineNextProxy } from '@pkg/next-proxy/utilities';
import { NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';

const llm = rewritePath('{/*path}', '/llms.mdx{/*path}');

export const markdownForLlms = defineNextProxy((request, response) => {
  if (isMarkdownPreferred(request)) {
    const result = llm.rewrite(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return response;
});
