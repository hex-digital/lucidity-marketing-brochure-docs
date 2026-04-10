import { MarkdownCopyButton, ViewOptionsPopover } from 'fumadocs-ui/layouts/docs/page';
import { DocsDescription, DocsTitle } from 'fumadocs-ui/page';
import { cn } from '@/lib/cn';
import styles from './styles.module.css';

export function DocsPageHeader({
  data,
  url,
  pageGithubUrl,
}: Readonly<{
  data: {
    title: string;
    pageTitle?: string;
    description?: string;
  };
  url: string;
  pageGithubUrl: string;
}>) {
  return (
    <>
      <div className={cn(styles.headerGrid, 'mb-3')}>
        <DocsTitle className={cn(styles.title, 'mb-0')}>
          {data.pageTitle ?? data.title}
        </DocsTitle>
        {data.description && (
          <DocsDescription className={cn(styles.desc, 'mb-2')}>
            {data.description}
          </DocsDescription>
        )}
        <div className={cn(styles.actions, 'flex flex-row gap-2 items-center shrink-0')}>
          <MarkdownCopyButton markdownUrl={`${url}.mdx`} />
          <ViewOptionsPopover markdownUrl={`${url}.mdx`} githubUrl={pageGithubUrl} />
        </div>
      </div>
      <div className="border-b pb-2"></div>
    </>
  );
}
