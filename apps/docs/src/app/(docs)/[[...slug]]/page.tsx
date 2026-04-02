import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { appConfig } from '@/config/app';
import { normalizeBaseUrl } from '@/lib/jsonld/normalize-base-url';
import { buildDocsJsonLdGraph } from '@/lib/jsonld/build-docs-graph';
import { docsJsonLdDocument } from '@/lib/jsonld/docs-json-ld-document';
import { JsonLd } from '@/lib/jsonld/json-ld';
import { HexDigitalTocAd } from '@/components/HexDigitalTocAd';
import { DocsFooter } from '@/components/DocsFooter';
import { DocsFeedbackWidget } from '@/features/feedback/components/DocsFeedbackWidget';
import { createBaseLink } from '@/mdx/createBaseLink';

export const dynamic = 'force-static';

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const Mdx = page.data.body;
  const jsonLd = docsJsonLdDocument(buildDocsJsonLdGraph({ source, page }));

  const pageGithubUrl = `https://github.com/${appConfig.git.user}/${appConfig.git.repo}/blob/${appConfig.git.branch}/content/docs/${page.path}`;

  return (
    <>
      <JsonLd data={jsonLd} />
      <div id="main-content" tabIndex={-1} className="outline-none" />
      <DocsPage
        toc={page.data.toc}
        full={page.data.full}
        tableOfContent={{ footer: <HexDigitalTocAd /> }}
        id="nd-page"
        tabIndex={-1}
      >
        <DocsTitle>{page.data.pageTitle ?? page.data.title}</DocsTitle>
        <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
        <div className="mb-3 flex flex-row gap-2 items-center border-b pb-6">
          <MarkdownCopyButton markdownUrl={`${page.url}.mdx`} />
          <ViewOptionsPopover markdownUrl={`${page.url}.mdx`} githubUrl={pageGithubUrl} />
        </div>
        <DocsBody>
          <Mdx
            components={getMDXComponents({
              // this allow us to link to other pages with relative file paths, and uses our pop-up component to view them
              a: createBaseLink(source, page),
            })}
          />
        </DocsBody>
        <DocsFooter
          className="mb-2"
          githubUrl={pageGithubUrl}
          lastModified={page.data.lastModified}
          pageTitle={page.data.pageTitle ?? page.data.title}
        />
        <DocsFeedbackWidget
          pageTitle={page.data.pageTitle ?? page.data.title}
          className="mb-4"
        />
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const canonicalBase = normalizeBaseUrl(appConfig.baseUrl);
  const canonical = `${canonicalBase}${page.url}`;

  return {
    title: page.data.pageTitle ?? page.data.title,
    description: page.data.description,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      images: getPageImage(page).url,
    },
  };
}
