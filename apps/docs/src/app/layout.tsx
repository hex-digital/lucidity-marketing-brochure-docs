import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { appConfig } from '@/config/app';
import { seoConfig } from '@/config/seo';
import { fonts } from '@pkg/brand/fonts';
import { AnalyticsProvider } from '@pkg/analytics/provider';
import { PerformanceMonitorProvider } from '@pkg/observability/provider';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={fonts.inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <AnalyticsProvider>
          <PerformanceMonitorProvider>
            <RootProvider>{children}</RootProvider>
          </PerformanceMonitorProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${seoConfig.title}`,
    default: seoConfig.title,
  },
  description: seoConfig.description,
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
