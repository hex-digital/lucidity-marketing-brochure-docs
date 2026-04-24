import { DM_Sans, Figtree, Martian_Mono } from 'next/font/google';
import './globals.css';
import { appConfig } from '@/config/app';
import { seoConfig } from '@/config/seo';
import { env } from '@/env';
import { AnalyticsProvider } from '@pkg/analytics/provider';
import { PerformanceMonitorProvider } from '@pkg/observability/provider';
import type { Metadata } from 'next';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-heading-google',
  display: 'swap',
  weight: ['300', '400', '500'],
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-body-google',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

const martianMono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-mono-google',
  display: 'swap',
  weight: ['300', '400', '600'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${figtree.variable} ${martianMono.variable} antialiased touch-manipulation`}
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
