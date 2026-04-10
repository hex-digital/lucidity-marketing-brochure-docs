import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { appConfig } from '@/config/app';
import { seoConfig } from '@/config/seo';
import { env } from '@/env';
import { AnalyticsProvider } from '@pkg/analytics/provider';
import { PerformanceMonitorProvider } from '@pkg/observability/provider';
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased touch-manipulation`}
      >
        <ProductionOnlyProviders />
        {children}
      </body>
    </html>
  );
}

function ProductionOnlyProviders() {
  return (
    !!env.VERCEL && (
      <>
        <PerformanceMonitorProvider />
        <AnalyticsProvider />
      </>
    )
  );
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${seoConfig.title}`,
    default: seoConfig.homepageTitle,
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
