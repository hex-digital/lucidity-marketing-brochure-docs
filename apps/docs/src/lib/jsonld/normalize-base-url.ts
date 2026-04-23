/** Strip trailing slashes for stable JSON-LD URLs. */
export function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}
