import { env } from './env';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BetterStackWebVitals } from '@logtail/next/webVitals';

const { NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN, NEXT_PUBLIC_BETTER_STACK_INGESTING_URL } =
  env();

export function PerformanceMonitorProvider() {
  return (
    <>
      <SpeedInsights />
      {!!NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN && !!NEXT_PUBLIC_BETTER_STACK_INGESTING_URL && (
        <BetterStackWebVitals />
      )}
    </>
  );
}
