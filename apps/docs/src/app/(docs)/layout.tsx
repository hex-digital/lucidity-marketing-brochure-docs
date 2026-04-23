import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { DocsBackground } from '@/components/DocsBackground';
import { SectionLinksBar } from '@/components/SectionLinksBar/SectionLinksBar';
import { SidebarLogo } from '@/components/SidebarLogo';
import { SkipToMainContent } from '@/components/SkipToMainContent';
import { appConfig } from '@/config/app';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <>
      {/*<Banner>Lucidity.js is now available. Talk to sales now</Banner>*/}
      <div className="relative isolate">
        <SkipToMainContent />
        <DocsBackground />
        <DocsLayout
          tree={source.getPageTree()}
          sidebar={{ prefetch: false, collapsible: false }}
          themeSwitch={{ mode: 'light-dark-system' }}
          nav={{
            title: <SidebarLogo />,
            component: <SectionLinksBar />,
          }}
          githubUrl={`https://github.com/${appConfig.git.user}/${appConfig.git.repo}`}
          containerProps={{
            style: {
              gridTemplate: `
                "sidebar sidebar header header header"
                "sidebar sidebar toc-popover toc toc"
                "sidebar sidebar main toc toc"
                1fr /
                1fr
                var(--fd-sidebar-width)
                minmax(0, calc(var(--fd-layout-width, 97rem) - var(--fd-sidebar-width) - var(--fd-toc-width)))
                var(--fd-toc-width)
                1fr`,
            },
          }}
        >
          {children}
        </DocsLayout>
      </div>
    </>
  );
}
