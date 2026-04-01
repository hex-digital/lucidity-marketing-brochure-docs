import { codes, PREFIX, SYSTEM } from '@/errors/helpers';

const FEEDBACK = codes('fb');

export const ERROR_CODES = {
  GENERIC: `${PREFIX}-${SYSTEM}-00`,

  FEEDBACK_GENERIC: `${FEEDBACK.SYSTEM}-00`,
  NO_FEEDBACK_CHANNEL_ID: `${FEEDBACK.SYSTEM}-01`,

  INVALID_FEEDBACK: `${FEEDBACK.USER}-01`,
};
