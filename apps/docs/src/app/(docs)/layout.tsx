import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { SectionLinksBar } from '@/components/SectionLinksBar/SectionLinksBar';
import { appConfig } from '@/config/app';
import { SidebarLogo } from '@/components/SidebarLogo';
import Image from 'next/image';
import starryBg from '../../../public/starry-bg.png';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <Image src={starryBg} alt="" priority className="h-auto w-full" />
      </div>
      <DocsLayout
        tree={source.getPageTree()}
        sidebar={{ prefetch: false }}
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
  );
}
