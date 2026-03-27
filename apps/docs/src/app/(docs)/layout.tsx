import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsSectionBar } from '@/components/docs-section-bar';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <DocsLayout
        tree={source.getPageTree()}
        {...baseOptions()}
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
    </>
  );
}
