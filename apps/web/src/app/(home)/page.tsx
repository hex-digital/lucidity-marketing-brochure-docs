import Image from 'next/image';
import { architecturePoints } from '@/app/(home)/content/architecturePoints';
import { directorFaqs } from '@/app/(home)/content/directorFaqs';
import { directorsGrid } from '@/app/(home)/content/directorsGrid';
import { docsPoints } from '@/app/(home)/content/docsPoints';
import { enterprisePoints } from '@/app/(home)/content/enterprisePoints';
import { featureCards } from '@/app/(home)/content/featuresGrid';
import { generalFaqs } from '@/app/(home)/content/generalFaqs';
import { stats } from '@/app/(home)/content/stats';
import { techPoints } from '@/app/(home)/content/techPoints';
import { Wrapper } from '@/components/layout/Wrapper/Wrapper';
import { Link } from '@/components/Link';
import { BrandAnimation } from '@/components/ui/BrandAnimation/BrandAnimation';
import { Button } from '@/components/ui/Buttons/Button';
import { ContentGrid } from '@/components/ui/ContentGrid/ContentGrid';
import { Eyebrow } from '@/components/ui/Eyebrow/Eyebrow';
import { FAQ } from '@/components/ui/FAQ/FAQ';
import { FeatureGallery } from '@/components/ui/FeatureGallery/FeatureGallery';
import { Hero } from '@/components/ui/Hero/Hero';
import { LogoGrid } from '@/components/ui/LogoGrid/LogoGrid';
import { StatsRow } from '@/components/ui/StatsRow/StatsRow';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <BrandAnimation />
      <div className="relative z-base-content">
        <Hero />
        <LogoGrid />
        <Wrapper className="items-center">
          <div className="flex flex-col gap-4 items-center relative z-base-content">
            <Eyebrow label="What you get" />
            <h2 className="text-page-title-l-desktop text-center">
              6 months of development.
              <br />
              Ready on day one.
            </h2>
            <p className="text-center max-w-[600px] mt-6">
              Lucidity.js is built on a modern, battle-tested stack, the same tools trusted by
              engineering teams at some of the world's leading organisations. No experimental
              dependencies, no niche frameworks. Just the right tools,
              configured&nbsp;properly.
            </p>
          </div>
          <StatsRow stats={stats} />
          <ContentGrid content={featureCards} />
          <Button
            href="/features"
            targetAppName="docs"
            icon={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            And so much more
          </Button>
        </Wrapper>

        <div className="bg-surface-dark relative z-base-content">
          <Wrapper>
            <div className="grid md:grid-cols-2 gap-15">
              <div className="flex flex-col gap-10">
                <div>
                  <Eyebrow label="Enterprise" className="mb-6" variant="iris-haze" />
                  <h2 className="text-page-title-l-desktop mt-6">
                    Designed for teams that need it to work from the&nbsp;start.
                  </h2>
                </div>
                <div className="prose">
                  <p>
                    Lucidity.js is built for engineering and product teams at organisations
                    where content infrastructure is business-critical.
                  </p>
                  <p>
                    <strong>What's included:</strong>
                  </p>
                  <ul>
                    <li>
                      The full source code is yours to own, modify and deploy indefinitely
                    </li>
                    <li>One year of updates, bug fixes, and compatibility releases</li>
                    <li>GitHub access for tracking issues</li>
                    <li>A dedicated Technical Account Manager (TAM)</li>
                    <li>A Slack Connect channel with our support engineers</li>
                    <li>Onboarding sessions to get you set up</li>
                    <li>Monthly check-in sessions</li>
                  </ul>

                  <p>
                    <strong>Available separately:</strong>
                  </p>
                  <ul>
                    <li>Forward deployed engineers to ship alongside your team</li>
                    <li>Architecture and review sessions</li>
                    <li>Migration and launch support</li>
                    <li>Training and enablement</li>
                  </ul>
                </div>
                <Button href="/sales" className="w-fit">
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
                src="/images/cms-view-2-dark.jpg"
                width={1200}
                height={700}
                alt="Screenshot of Sanity studio showing multi-lang pages"
              />
            </div>
          </Wrapper>
        </div>

        <Wrapper className="z-base-content">
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

        <Wrapper className="z-base-content">
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
          <div className="flex flex-col gap-4 items-center z-base-content">
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

        <Wrapper className="z-base-content">
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
              <Button href="/get-started" targetAppName="docs" variant="secondary" icon={true}>
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

        <div id="talk-to-sales" className="bg-surface-dark relative z-base-content">
          <Wrapper className="items-center">
            <div className="flex flex-col gap-4 items-center">
              <Eyebrow label="Get Started" variant="mist-dew" />
              <h2 className="text-page-title-l-desktop text-center">
                Let’s talk about what you’re building
              </h2>
              <p className="text-center max-w-[600px] mt-4 mb-6">
                We'll take the time to understand your stack, your team, and your editorial
                requirements, and give you an honest view of whether Lucidity.js is the right
                fit.
              </p>

              <Button href="/sales" className="w-fit">
                Talk to sales
              </Button>
              {/*<form*/}
              {/*  action="/api/contact"*/}
              {/*  method="post"*/}
              {/*  className="mt-4 grid w-full max-w-[600px] grid-cols-1 gap-4 md:grid-cols-2"*/}
              {/*>*/}
              {/*  <label className="flex flex-col gap-2 text-page-eyebrow uppercase">*/}
              {/*    Full name**/}
              {/*    <input*/}
              {/*      name="fullName"*/}
              {/*      type="text"*/}
              {/*      required*/}
              {/*      className="rounded-[3px] border border-neutral-10/40 bg-transparent px-3 py-3 text-page-paragraph normal-case"*/}
              {/*    />*/}
              {/*  </label>*/}

              {/*  <label className="flex flex-col gap-2 text-page-eyebrow uppercase">*/}
              {/*    Company name**/}
              {/*    <input*/}
              {/*      name="companyName"*/}
              {/*      type="text"*/}
              {/*      required*/}
              {/*      className="rounded-[3px] border border-neutral-10/40 bg-transparent px-3 py-3 text-page-paragraph normal-case"*/}
              {/*    />*/}
              {/*  </label>*/}

              {/*  <label className="flex flex-col gap-2 text-page-eyebrow uppercase">*/}
              {/*    Email**/}
              {/*    <input*/}
              {/*      name="email"*/}
              {/*      type="email"*/}
              {/*      required*/}
              {/*      className="rounded-[3px] border border-neutral-10/40 bg-transparent px-3 py-3 text-page-paragraph normal-case"*/}
              {/*    />*/}
              {/*  </label>*/}

              {/*  <label className="flex flex-col gap-2 text-page-eyebrow uppercase">*/}
              {/*    Telephone*/}
              {/*    <input*/}
              {/*      name="telephone"*/}
              {/*      type="tel"*/}
              {/*      className="rounded-[3px] border border-neutral-10/40 bg-transparent px-3 py-3 text-page-paragraph normal-case"*/}
              {/*    />*/}
              {/*  </label>*/}

              {/*  <button*/}
              {/*    type="submit"*/}
              {/*    className="md:col-span-2 mt-2 w-fit rounded-[3px] bg-neutral-10 px-5 py-[0.9375rem] text-page-eyebrow uppercase text-neutral-70 mx-auto cursor-pointer"*/}
              {/*  >*/}
              {/*    Talk to sales*/}
              {/*  </button>*/}
              {/*</form>*/}
            </div>
          </Wrapper>

          <Wrapper className="items-center">
            <div className="flex flex-col gap-4 items-center">
              <Eyebrow label="FAQs" variant="rose-blush" />
              <h2 className="text-page-title-l-desktop text-center">Common questions</h2>
              <p className="text-center max-w-[600px] mt-6">
                Not seeing what you need?{' '}
                <Link href="/sales" className="border-b-1">
                  Talk to us directly.
                </Link>
              </p>
            </div>

            <FAQ items={generalFaqs} />
          </Wrapper>
        </div>
      </div>
    </>
  );
}
