import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { env } from './env';

const { NEXT_PUBLIC_GA_MEASUREMENT_ID } = env();

export const AnalyticsProvider = () => (
  <>
    <VercelAnalytics />
    {NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics gaId={NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
  </>
);
