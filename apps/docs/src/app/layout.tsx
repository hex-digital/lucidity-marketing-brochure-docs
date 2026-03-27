import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { appConfig } from '@/config/app';
import { seoConfig } from '@/config/seo';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

const siteTitle = 'Docs for Lucidity, the Enterprise Starter Kit for Sanity CMS';

export const metadata: Metadata = {
  title: {
    template: `%s — ${siteTitle}`,
    default: siteTitle,
  },
  description: 'The best way to start building with Sanity CMS',
  authors: { url: `${appConfig.baseUrl}/humans.txt` },
  robots: { index: !seoConfig.noIndex },
  icons: {
    icon: [
      /** svg favicon automatically swaps to dark mode */
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      /** Fallbacks for browsers that do not support svg favicons */
      { url: '/favicon-light.png', type: 'image/png' },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.png',
        type: 'image/png',
      },
    ],
  },
};
