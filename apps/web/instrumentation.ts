import { initializeSentry } from '@pkg/observability/instrumentation';

export const register = initializeSentry;
export { onRequestError } from '@pkg/observability/instrumentation';
