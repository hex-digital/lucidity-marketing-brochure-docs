import { env } from '@/env';

export const seoConfig = {
  noIndex: env.NEXT_PUBLIC_NO_INDEX === 'true',
};
