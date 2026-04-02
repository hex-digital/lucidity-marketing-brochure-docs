/**
 * Renders a `<script type="application/ld+json">` tag. Pass a schema.org root object
 * (typically with `@context` and `@graph`).
 *
 * Content is built from static config and `JSON.stringify` (no user HTML).
 *
 * @see https://nextjs.org/docs/app/guides/json-ld
 */
export function JsonLd(props: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml -- JSON-LD; HTML is never interpolated, only JSON.stringify output
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.data) }}
    />
  );
}
