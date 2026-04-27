import Link from 'next/link';
import { Wrapper } from '@/components/layout/Wrapper/Wrapper';
import { Eyebrow } from '@/components/ui/Eyebrow/Eyebrow';
import { appConfig } from '@/config/app';
import { TalkToSalesForm } from '@/forms/talk-to-sales/TalkToSalesForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    'Talk to the Lucidity.js team about your content platform goals, get a tailored demo, and explore enterprise support options.',
};

export const dynamic = 'force-static';

const trustedLogos = [
  {
    alt: 'Conservation International',
    src: '/logos/ci.svg',
    width: 120,
  },
  { alt: 'Too Good To Go', src: '/logos/tgtg.svg', width: 60 },
  { alt: 'BirdLife International', src: '/logos/birdlife.svg', width: 60 },
  { alt: 'Atomos', src: '/logos/atomos.svg', width: 85 },
];

export default function TalkToSalesPage() {
  return (
    <Wrapper className="z-base-content">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        <section className="flex flex-col gap-8">
          <Eyebrow label="Contact" variant="mist-dew" />

          <div>
            <h1 className="text-page-title-l-desktop">Let&apos;s talk</h1>
            <p className="mt-4 max-w-[56ch] opacity-80">
              Share your goals and we&apos;ll tailor a practical Lucidity.js conversation
              around your stack, editorial workflows, and delivery timeline.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <span aria-hidden className="text-mist-dark">
                ✓
              </span>
              <span>Tell us about your content operations needs</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="text-mist-dark">
                ✓
              </span>
              <span>Get a custom demo focused on your team&apos;s priorities</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="text-mist-dark">
                ✓
              </span>
              <span>Explore enterprise support and rollout options</span>
            </li>
          </ul>

          <div className="flex flex-col gap-5">
            <h2 className="text-page-eyebrow uppercase tracking-[0.16em] opacity-90">
              Trusted by leaders and innovators
            </h2>

            <div className="flex flex-wrap gap-x-8 gap-y-4 md:max-w-[30rem]">
              {trustedLogos.map((logo) => (
                <img
                  alt={logo.alt}
                  key={logo.src}
                  src={logo.src}
                  width={logo.width}
                  className="w-auto object-contain opacity-95"
                  style={{ width: logo.width }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[12px] border border-neutral-30/40 bg-neutral-70/40 p-5 md:p-6">
          <TalkToSalesForm showIntro={false} />
        </section>
      </div>

      <div className="grid gap-6 border-t border-neutral-30/30 pt-6 md:grid-cols-3">
        <article>
          <h2 className="text-page-eyebrow uppercase">FAQ</h2>
          <p className="mt-2 opacity-80">
            See our frequently asked questions about pricing, licensing, and long-term support.
          </p>
          <Link
            href={`${appConfig.docsUrl}/get-started/faq`}
            className="mt-2 inline-block underline decoration-neutral-30"
          >
            View FAQs
          </Link>
        </article>

        <article>
          <h2 className="text-page-eyebrow uppercase">Technical support</h2>
          <p className="mt-2 opacity-80">
            Learn how our team helps engineering leads ship confidently with Lucidity.js.
          </p>
          <Link
            href={`${appConfig.docsUrl}/get-started/enterprise`}
            className="mt-2 inline-block underline decoration-neutral-30"
          >
            Explore support options
          </Link>
        </article>
      </div>
    </Wrapper>
  );
}
