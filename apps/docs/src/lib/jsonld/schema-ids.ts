/** Stable @id values shared across docs JSON-LD entities. */
export function organizationId(base: string): string {
  return `${base}/#organization`;
}

export function websiteId(base: string): string {
  return `${base}/#website`;
}

export function softwareId(base: string): string {
  return `${base}/#software`;
}
