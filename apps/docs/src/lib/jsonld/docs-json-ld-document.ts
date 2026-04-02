export function docsJsonLdDocument(graph: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
