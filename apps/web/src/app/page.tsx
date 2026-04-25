import Image from 'next/image';
import { BrandAnimation } from '@/app/components/BrandAnimation/BrandAnimation';
import { Button } from '@/app/components/Buttons/Button';
import { ContentGrid } from '@/app/components/ContentGrid/ContentGrid';
import { Eyebrow } from '@/app/components/Eyebrow/Eyebrow';
import { FAQ } from '@/app/components/FAQ/FAQ';
import { FeatureGallery } from '@/app/components/FeatureGallery/FeatureGallery';
import { Header } from '@/app/components/Header/Header';
import { Hero } from '@/app/components/Hero/Hero';
import { LogoGrid } from '@/app/components/LogoGrid/LogoGrid';
import { StatsRow } from '@/app/components/StatsRow/StatsRow';
import { Wrapper } from '@/app/components/Wrapper/Wrapper';
import { architecturePoints } from '@/app/content/architecturePoints';
import { directorFaqs } from '@/app/content/directorFaqs';
import { directorsGrid } from '@/app/content/directorsGrid';
import { docsPoints } from '@/app/content/docsPoints';
import { enterprisePoints } from '@/app/content/enterprisePoints';
import { featureCards } from '@/app/content/featuresGrid';
import { generalFaqs } from '@/app/content/generalFaqs';
import { stats } from '@/app/content/stats';
import { techPoints } from '@/app/content/techPoints';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <BrandAnimation />
      <div className="relative z-4">
        <Header />
        <Hero />
        <LogoGrid />
        <Wrapper className="items-center">
          <div className="flex flex-col gap-4 items-center relative z-4">
            <Eyebrow label="What you get" />
            <h2 className="text-page-title-l-desktop text-center">
              A year of development.
              <br />
              Ready on day one.
            </h2>
            <p className="text-center max-w-[600px] mt-6">
              Lucidity.js is built on a modern, battle-tested stack, the same tools trusted by
              engineering teams at some of the world's leading organisations. No experimental
              dependencies, no niche frameworks. Just the right tools, configured properly.
            </p>
          </div>
          <StatsRow stats={stats} />
          <ContentGrid content={featureCards} />
          <Button
            href="https://lucidityjs-docs.hexlabs.uk/get-started"
            icon={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            And so much more
          </Button>
        </Wrapper>

        <div className="bg-surface-dark relative z-4">
          <Wrapper>
            <div className="grid md:grid-cols-2 gap-15">
              <div className="flex flex-col gap-10">
                <div>
                  <Eyebrow label="Enterprise" className="mb-6" variant="iris-haze" />
                  <h2 className="text-page-title-l-desktop mt-6">
                    Designed for teams that need it to work from the start.
                  </h2>
                </div>
                <div className="prose">
                  <p>
                    Lucidity.js is built for engineering and product teams at organisations
                    where content infrastructure is business-critical. Pricing is tailored to
                    your team size and onboarding requirements.
                  </p>
                  <p>
                    <strong>What's included:</strong>
                  </p>
                  <ul>
                    <li>
                      The full source code is yours to own, modify and deploy indefinitely
                    </li>
                    <li>One year of updates, bug fixes, and compatibility releases</li>
                    <li>GitHub access for raising issues and tracking fixes</li>
                  </ul>

                  <p>
                    <strong>Available separately:</strong>
                  </p>
                  <ul>
                    <li>
                      The full source code is yours to own, modify and deploy indefinitely
                    </li>
                    <li>One year of updates, bug fixes, and compatibility releases</li>
                    <li>GitHub access for raising issues and tracking fixes</li>
                  </ul>
                </div>
                <Button href="#talk-to-sales" variant="primary" className="w-fit">
                  Talk to sales
                </Button>
              </div>

              <div className="flex flex-col gap-8">
                {enterprisePoints &&
                  enterprisePoints.map((item) => (
                    <div
                      key={item.key}
                      className="flex flex-col gap-5 border-b-2 pb-8"
                      style={{ borderColor: `var(${item.borderColor})` }}
                    >
                      <h4 className="text-post-subtitle-desktop">{item.heading}</h4>
                      <p>{item.content}</p>
                    </div>
                  ))}
              </div>
            </div>
          </Wrapper>

          <Wrapper>
            <div className="flex flex-col gap-4">
              <Eyebrow label="Features" variant="haze-mist" />
              <h2 className="text-page-title-l-desktop">
                40+ features.
                <br />
                All pre-configured.
              </h2>
              <p className="max-w-[600px] mt-6">
                Everything your team needs to run a content lead product at scale.
              </p>
            </div>

            <FeatureGallery />
          </Wrapper>

          <Wrapper>
            <div className="flex flex-col gap-4">
              <Eyebrow label="Spotlight / Multisite" variant="mist-dew" />
              <h2 className="text-page-title-l-desktop">
                One codebase.
                <br />
                Unlimited sites.
              </h2>
              <div className="prose max-w-[600px]">
                <p>
                  For global organisations, multi-brand companies, and non-profits managing
                  regional sites, the challenge isn't building one good site. It's maintaining
                  all of them without the work multiplying every time you add another.
                </p>

                <p>
                  Most teams solve this the hard way. A new site means a new codebase, a new
                  deployment, and a new set of engineering problems to solve from scratch. Over
                  time that compounds: more repos to maintain, more inconsistencies to manage,
                  and more engineering time spent keeping everything in sync rather than
                  improving the product.
                </p>

                <p>
                  Lucidity.js is built so that doesn't happen. Every site you run shares the
                  same component library, design system, and CMS tooling. Your editorial teams
                  work independently in their own content environment, with their own workflows
                  and access controls, but the underlying platform is one thing your
                  engineering team maintains once.
                </p>

                <p>
                  Adding a new site isn't an engineering project. It's a configuration
                  decision.
                </p>
              </div>
              <Image
                src="/images/cms-view-2-light.jpg"
                width={1200}
                height={700}
                alt="Screenshot of Sanity studio showing multi-lang pages"
              />
            </div>
          </Wrapper>
        </div>

        <Wrapper className="z-4">
          <div className="grid md:grid-cols-2 gap-15">
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow label="Tech stack" className="mb-6" variant="rose-blush" />
                <h2 className="text-page-title-l-desktop mt-6">
                  Industry-standard tools. <br />
                  Enterprise-grade from the ground up.
                </h2>
              </div>
              <p>
                Lucidity.js is built on a modern, battle-tested stack — the same tools trusted
                by engineering teams at some of the world's leading organisations. No
                experimental dependencies, no niche frameworks. Just the right tools,
                configured properly.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {techPoints &&
                techPoints.map((item) => (
                  <div
                    key={item.key}
                    className="flex flex-col gap-5 border-b-2 pb-8"
                    style={{ borderColor: `var(${item.borderColor})` }}
                  >
                    <h4 className="text-post-subtitle-desktop">{item.heading}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
            </div>
          </div>
        </Wrapper>

        <Wrapper className="z-4">
          <div className="grid md:grid-cols-2 gap-15">
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow label="Enterprise" className="mb-6" variant="blush-iris" />
                <h2 className="text-page-title-l-desktop mt-6">
                  Built through iteration, not theory.
                </h2>
              </div>
              <p>
                Lucidity.js’s architecture has been shaped through repeated builds for complex
                organisations. Each structural decision reflects what consistently worked,
                refined over time through real-world use. You’re not inheriting a clever idea,
                you’re inheriting a system that’s been continuously improved to handle
                challenges your team may not have even encountered yet.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {architecturePoints &&
                architecturePoints.map((item) => (
                  <div key={item.key} className="flex gap-5 pb-8">
                    <div
                      className="text-neutral-70 max-w-[50px] w-full h-[50px] flex justify-center items-center rounded-full"
                      style={{ backgroundColor: `var(${item.bulletColor})` }}
                    >
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.28 9.936L7.128 8.784L9.192 6.72L10.392 5.712L10.368 5.64L8.064 5.784H0V4.152H8.064L10.368 4.296L10.392 4.224L9.192 3.216L7.128 1.152L8.28 0L13.248 4.968L8.28 9.936Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-post-subtitle-desktop h-[50px] flex flex-col justify-center">
                        {item.heading}
                      </h4>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Wrapper>

        <Wrapper className="items-center ">
          <div className="flex flex-col gap-4 items-center z-4">
            <Eyebrow label="Convince your director" variant="iris-haze" />
            <h2 className="text-page-title-l-desktop text-center">
              The business case, <br />
              plainly started.
            </h2>
            <p className="text-center max-w-[600px] mt-6">
              Lucidity.js isn't just a technical decision — it affects timelines, headcount,
              editorial velocity, and long-term maintainability. Here's what that looks like in
              concrete terms.
            </p>
            <p className="text-center max-w-[600px] opacity-60">
              These figures are useful context for conversations with engineering directors,
              heads of product, and CTOs.
            </p>
          </div>
          <ContentGrid content={directorsGrid} />

          <h3 className="text-page-title-s-desktop">
            Answers to likely concerns and questions
          </h3>

          <FAQ items={directorFaqs} />
        </Wrapper>

        <Wrapper className="z-4">
          <div className="grid md:grid-cols-2 gap-15">
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow label="Documentation" className="mb-6" variant="haze-mist" />
                <h2 className="text-page-title-l-desktop mt-6">
                  Documentation written for real engineering teams.
                </h2>
              </div>
              <p>
                Lucidity.js is built on a modern, battle-tested stack, the same tools trusted
                by engineering teams at some of the world's leading organisations. No
                experimental dependencies, no niche frameworks. Just the right tools,
                configured properly.
              </p>
              <Button href="#" variant="secondary" icon={true}>
                View the docs
              </Button>
            </div>

            <div className="flex flex-col gap-8">
              {docsPoints &&
                docsPoints.map((item) => (
                  <div key={item.key} className="flex gap-5 pb-8">
                    <div
                      className="text-neutral-70 max-w-[50px] w-full h-[50px] flex justify-center items-center rounded-full"
                      style={{ backgroundColor: `var(${item.bulletColor})` }}
                    >
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.28 9.936L7.128 8.784L9.192 6.72L10.392 5.712L10.368 5.64L8.064 5.784H0V4.152H8.064L10.368 4.296L10.392 4.224L9.192 3.216L7.128 1.152L8.28 0L13.248 4.968L8.28 9.936Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-post-subtitle-desktop h-[50px] flex flex-col justify-center">
                        {item.heading}
                      </h4>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Wrapper>

        <div id="talk-to-sales" className="bg-surface-dark relative z-4">
          <Wrapper className="items-center">
            <div className="flex flex-col gap-4 items-center">
              <Eyebrow label="Get Started" variant="mist-dew" />
              <h2 className="text-page-title-l-desktop text-center">
                Let’s talk about what you’re building
              </h2>
              <p className="text-center max-w-[600px] mt-6">
                We'll take the time to understand your stack, your team, and your editorial
                requirements, and give you an honest view of whether Lucidity.js is the right
                fit.
              </p>
              <form
                action="/api/contact"
                method="post"
                className="mt-4 grid w-full max-w-[600px] grid-cols-1 gap-4 md:grid-cols-2"
              >
                <label className="flex flex-col gap-2 text-page-eyebrow uppercase">
                  Full name*
                  <input
                    name="fullName"
                    type="text"
                    required
                    className="rounded-[3px] border border-neutral-10/40 bg-transparent px-3 py-3 text-page-paragraph normal-case"
                  />
                </label>

                <label className="flex flex-col gap-2 text-page-eyebrow uppercase">
                  Company name*
                  <input
                    name="companyName"
                    type="text"
                    required
                    className="rounded-[3px] border border-neutral-10/40 bg-transparent px-3 py-3 text-page-paragraph normal-case"
                  />
                </label>

                <label className="flex flex-col gap-2 text-page-eyebrow uppercase">
                  Email*
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-[3px] border border-neutral-10/40 bg-transparent px-3 py-3 text-page-paragraph normal-case"
                  />
                </label>

                <label className="flex flex-col gap-2 text-page-eyebrow uppercase">
                  Telephone
                  <input
                    name="telephone"
                    type="tel"
                    className="rounded-[3px] border border-neutral-10/40 bg-transparent px-3 py-3 text-page-paragraph normal-case"
                  />
                </label>

                <button
                  type="submit"
                  className="md:col-span-2 mt-2 w-fit rounded-[3px] bg-neutral-10 px-5 py-[0.9375rem] text-page-eyebrow uppercase text-neutral-70 mx-auto cursor-pointer"
                >
                  Talk to sales
                </button>
              </form>
            </div>
          </Wrapper>

          <Wrapper className="items-center">
            <div className="flex flex-col gap-4 items-center">
              <Eyebrow label="FAQs" variant="rose-blush" />
              <h2 className="text-page-title-l-desktop text-center">Common questions</h2>
              <p className="text-center max-w-[600px] mt-6">
                Not seeing what you need?{' '}
                <a href="#talk-to-sales" rel="noreferrer noopener" className="border-b-1">
                  Talk to us directly.
                </a>
              </p>
            </div>

            <FAQ items={generalFaqs} />
          </Wrapper>

          <Wrapper className="items-center">
            <div className="flex flex-col gap-4 items-center">
              <Eyebrow label="About the creators" variant="blush-iris" />
              <h3 className="sr-only">Hex Digital Ltd</h3>

              <svg
                width="350"
                height="134"
                viewBox="0 0 350 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[150px] h-auto mt-4"
              >
                <path
                  d="M330.82 99.6787C342.327 99.6788 349.228 107.013 349.229 116.793C349.229 126.573 342.327 133.72 330.82 133.72C319.122 133.72 312.215 126.573 312.215 116.793C312.215 107.013 319.314 99.6787 330.82 99.6787ZM150.357 38.7432C164.357 38.7432 175.866 43.257 184.494 52.2842C193.318 61.4996 197.729 73.1604 197.729 87.4561C197.729 102.499 193.319 113.973 184.303 121.682C175.483 129.583 164.357 133.533 151.127 133.533C125.81 133.533 112.193 120.556 107.398 102.499L137.316 102.499C139.428 107.577 143.838 110.024 150.55 110.024C158.799 110.024 165.316 104.755 167.426 94.9756L106.248 94.9756L105.864 86.1367C105.864 72.2197 109.892 60.7498 117.946 51.9082C126.001 43.0689 136.743 38.7432 150.357 38.7432ZM29.5342 44.5723C33.3722 40.811 39.7011 38.9326 48.3311 38.9326C75.1803 38.9326 88.6054 52.6595 88.6055 80.3057L88.6055 131.651L59.0713 131.651L59.0713 82.375C59.0713 70.153 53.893 64.132 43.5371 64.1318C34.1376 64.1318 29.5343 68.8336 29.5342 78.0488L29.5342 131.651L5.8309e-06 131.651L5.85733e-06 4.0196e-08L29.5342 3.4294e-08L29.5342 44.5723ZM253.726 63.7559L271.562 40.623L305.509 40.623L270.795 85.7598L306.468 131.651L272.715 131.651L253.918 107.578L235.507 131.651L201.562 131.651L236.85 85.7598L201.942 40.623L235.893 40.623L253.726 63.7559ZM151.127 60.9375C142.878 60.9376 137.891 65.073 135.974 73.5361L166.659 73.5361C164.55 65.261 158.606 60.9375 151.127 60.9375Z"
                  fill="#FAFAF8"
                />
              </svg>

              <p className="text-center max-w-[600px] mt-6">
                We are Hex Digital, a London-based digital agency focused on brand, website,
                and product delivery for organisations with complex digital needs.
              </p>
              <p className="text-center max-w-[600px] mt-6">
                We are one of the very first Sanity-certified partners, and we're home to one
                of only a few Sanity-selected MVPs. This means we have privileged access to
                Sanity engineers and support engineers, and an insight into the Sanity roadmap.
              </p>
            </div>
          </Wrapper>
        </div>

        <Wrapper className="items-center">
          <div className="flex flex-col gap-4 items-center">
            <Image src="./logo.svg" width={221} height={38} alt="Lucidity.js logo" />
          </div>

          <ul className="flex flex-col items-center md:flex-row gap-[10px]">
            <li>
              <a
                href="http://www.hexdigital.com"
                target="_blank"
                rel="noreferrer noopener"
                title="Visit Hex Digital Ltd"
                className="text-page-eyebrow uppercase"
              >
                About Hex Digital
              </a>
            </li>
            <li className="hidden md:block">•</li>
            <li>
              <a
                href="http://www.hexdigital.com"
                target="_blank"
                rel="noreferrer noopener"
                title="Lucidity.js licence"
                className="text-page-eyebrow uppercase"
              >
                Lucidity.js Licence
              </a>
            </li>
            <li className="hidden md:block">•</li>
            <li>
              <a
                href="https://www.hexdigital.com/privacy-policy"
                target="_blank"
                rel="noreferrer noopener"
                title="Privaacy Policy"
                className="text-page-eyebrow uppercase"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </Wrapper>
      </div>
    </>
  );
}
