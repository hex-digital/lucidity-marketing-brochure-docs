import { docs } from 'collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { HexDigitalSidebarIcon } from '@/components/HexDigitalSidebarIcon';
import { normalizePathname, slugFromPathname } from '@/helpers';

const localIcons = {
  HexLogo: HexDigitalSidebarIcon,
} as const;

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;

    const LocalIcon = localIcons[icon as keyof typeof localIcons];
    if (LocalIcon) return createElement(LocalIcon);

    const LucideIcon = icons[icon as keyof typeof icons];
    if (LucideIcon) return createElement(LucideIcon);
  },
});

export type LucidityDocsSource = typeof source;
export type LucidityDocsPage = InferPageType<typeof source>;

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.webp'];

  return {
    segments,
    url: `/og/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}

export function getDocsPageByPathname(pathname: string): InferPageType<typeof source> | null {
  const slugs = slugFromPathname(normalizePathname(pathname));
  return source.getPage(slugs) ?? null;
}
