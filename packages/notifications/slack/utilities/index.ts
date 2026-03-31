const SLACK_CONTROL_CHARACTER_PATTERN = /[&<>]/g;
const MARKDOWN_LINK_PATTERN = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g;

const SLACK_CONTROL_CHARACTER_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
};

export function escapeSlackText(value: string) {
  return value.replace(SLACK_CONTROL_CHARACTER_PATTERN, (character) => {
    return SLACK_CONTROL_CHARACTER_ESCAPES[character] ?? character;
  });
}

export function sanitizeSlackMrkdwn(value: string) {
  const markdown = value.trim();
  const transformedLinks: string[] = [];

  const withPlaceholders = markdown.replace(
    MARKDOWN_LINK_PATTERN,
    (_match, label: string, href: string) => {
      const token = `__SLACK_LINK_${transformedLinks.length}__`;

      // Preserve query strings (including "&"), but prevent mrkdwn delimiter injection.
      const safeHref = href.replace(/[<>|]/g, (character) => encodeURIComponent(character));
      transformedLinks.push(`&lt;${safeHref}|${escapeSlackText(label)}&gt;`);

      return token;
    },
  );

  const escaped = escapeSlackText(withPlaceholders);

  return escaped.replace(/__SLACK_LINK_(\d+)__/g, (_match, index: string) => {
    return transformedLinks[Number(index)] ?? '';
  });
}
