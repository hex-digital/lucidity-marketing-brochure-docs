import { initializeAnalytics } from '@pkg/analytics/instrumentation-client';
import { initializeSentry } from '@pkg/observability/instrumentation-client';

initializeSentry();
initializeAnalytics();

export { onRouterTransitionStart } from '@pkg/observability/instrumentation-client';
