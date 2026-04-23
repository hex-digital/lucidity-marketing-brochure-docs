export const PREFIX = 'docs-';

export const SYSTEM = '0';
export const USER = '1';

export function codes(code: string) {
  return {
    SYSTEM: `${PREFIX}-${code}-${SYSTEM}-`,
    USER: `${PREFIX}-${code}-${USER}-`,
  };
}
