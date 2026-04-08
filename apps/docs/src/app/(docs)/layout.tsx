import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { MessageCircleIcon } from 'lucide-react';
import { DocsBackground } from '@/components/DocsBackground';
import { SectionLinksBar } from '@/components/SectionLinksBar/SectionLinksBar';
import { SidebarLogo } from '@/components/SidebarLogo';
import { SkipToMainContent } from '@/components/SkipToMainContent';
import { buttonVariants } from '@/components/ui/button';
import { aiConfig } from '@/config/ai';
import { appConfig } from '@/config/app';
import {
  AISearch,
  AISearchPanel,
  AISearchTrigger,
} from '@/features/ai-chat/components/search';
import { cn } from '@/lib/cn';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <>
      {/*<Banner>Lucidity is now available. Talk to sales now</Banner>*/}
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
          {aiConfig.chat.enabled && (
            <AISearch>
              <AISearchPanel />
              <AISearchTrigger
                position="float"
                className={cn(
                  buttonVariants({
                    variant: 'secondary',
                    className: 'text-fd-muted-foreground rounded-2xl',
                  }),
                )}
              >
                <MessageCircleIcon className="size-4.5" />
                Ask AI
              </AISearchTrigger>
            </AISearch>
          )}

          {children}
        </DocsLayout>
      </div>
    </>
  );
}
