import type { NextRequest } from 'next/server';
import { runNextProxyPipeline } from '@pkg/next-proxy/utilities';
import { proxyProcessed } from '@/proxy/proxy-processed';
import { madeWithLucidity } from '@/proxy/made-with-lucidity';
import { markdownForLlms } from '@/proxy/markdown-for-llms';

/** Add proxy to the pipeline here. They will be executed in the order they are listed here. */
const proxyPipeline = [markdownForLlms, proxyProcessed, madeWithLucidity];

/** See: https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher */
export const config = {
  // FYI Variables are ignored in this array as it's managed at build time by the compiler.
  matcher: [
    /*
     * Match all request paths except for:
     * - Static files (starting with _next/static)
     * - Image optimization files (starting with _next/image)
     * - Humans and Robots txt files
     * - Favicon file (favicon.ico file)
     * - Assets served from /assets
     * - Any route ending in one of multiple file types
     */
    '/((?!_next/static|_next/image|robots.txt|humans.txt|favicon.ico|apple-touch-icon*|assets/.*|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4)).*)',
  ],
};

export async function proxy(request: NextRequest) {
  return runNextProxyPipeline(request, proxyPipeline);
}
