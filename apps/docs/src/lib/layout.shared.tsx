import { DocsSectionBar } from '@/components/docs-section-bar';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user: 'hex-digital',
  repo: 'lucidity-marketing-brochure-docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Lucidity',
      component: (
        <div className="[grid-area:header]">
          <DocsSectionBar />
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

export type DocsSectionLink = {
  text: string;
  url: string;
};

export const docsSectionLinks: DocsSectionLink[] = [
  {
    text: 'Get Started',
    url: '/get-started',
  },
  {
    text: 'Features',
    url: '/features',
  },
  {
    text: 'Reference',
    url: '/reference',
  },
  {
    text: 'Enterprise',
    url: '/enterprise',
  },
];
