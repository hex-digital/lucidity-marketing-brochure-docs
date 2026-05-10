import { Wrapper } from '@/components/layout/Wrapper/Wrapper';
import { BrandAnimation } from '@/components/ui/BrandAnimation/BrandAnimation';
import { Button } from '@/components/ui/Buttons/Button';
import { ContentGrid } from '@/components/ui/ContentGrid/ContentGrid';
import { Eyebrow } from '@/components/ui/Eyebrow/Eyebrow';
import { appConfig } from '@/config/app';
import {
  aiReadyPoints,
  documentationPoints,
  foundationPoints,
  navigablePoints,
  overviewCards,
  verificationPoints,
} from './content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Built for AI',
  description:
    'Lucidity.js gives AI coding agents the foundation they need to be useful: a well-architected codebase, established conventions, and ready-to-use skills and sub-agents.',
};

export const dynamic = 'force-static';

export default function BuiltForAIPage() {
  return (
    <>
      <BrandAnimation />
      <div className="relative z-base-content">
        <Wrapper className="mt-[60px]">
          <div className="flex flex-col gap-8 max-w-[820px]">
            <Eyebrow label="Built for AI" variant="iris-haze" />
            <h1 className="text-display-title-desktop">
              The fastest way to ship great software with&nbsp;AI.
            </h1>
            <p className="max-w-[60ch] text-page-paragraph">
              Lucidity.js is an excellent foundation for AI-assisted development. A
              well-architected codebase with established rules, documented conventions, and
              ready-to-use skills gives AI agents a dramatically higher starting point than a
              greenfield project ever can.
            </p>
            <p className="max-w-[60ch] text-page-paragraph">
              <strong>You get out what you put in.</strong> Coding agents amplify whatever
              foundation you give them. Lucidity.js gives them a strong&nbsp;one.
            </p>
            <div className="flex gap-4 mt-2">
              <Button href="/sales" className="w-fit">
                Talk to sales
              </Button>
              <Button
                href={`${appConfig.docsUrl}/features/developing-with-ai-agents`}
                variant="secondary"
                icon={true}
              >
                See the AI features
              </Button>
            </div>
          </div>
        </Wrapper>

        <Wrapper className="items-center">
          <div className="flex flex-col gap-4 items-center">
            <Eyebrow label="In summary" variant="haze-mist" />
            <h2 className="text-page-title-l-desktop text-center">Three reasons it works.</h2>
            <p className="text-center max-w-[640px] mt-4">
              Each of the supporting sections below backs one of these up with concrete
              evidence from the&nbsp;codebase.
            </p>
          </div>
          <ContentGrid content={overviewCards} />
        </Wrapper>

        <div className="bg-surface-dark relative z-base-content">
          <Wrapper>
            <div className="grid md:grid-cols-2 gap-15">
              <div className="flex flex-col gap-10">
                <div>
                  <Eyebrow label="01 / Foundation" className="mb-6" variant="rose-blush" />
                  <h2 className="text-page-title-l-desktop mt-6">
                    A well-architected codebase is the single biggest lever for AI quality.
                  </h2>
                </div>
                <div className="prose">
                  <p>
                    The same code that makes Lucidity.js easy for engineers to work in makes it
                    easy for AI agents to work in. Clear structure, consistent patterns, and
                    pre-existing implementations give a coding agent the context it needs to
                    make good decisions on the first attempt — instead of inventing
                    architecture as it&nbsp;goes.
                  </p>
                  <p>
                    Greenfield AI work is rarely the constraint. The constraint is having
                    something good for the agent to read first.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {foundationPoints.map((item) => (
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
        </div>

        <Wrapper className="z-base-content">
          <div className="grid md:grid-cols-2 gap-15">
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow label="02 / Day one" className="mb-6" variant="blush-iris" />
                <h2 className="text-page-title-l-desktop mt-6">
                  Configured for coding agents from the&nbsp;start.
                </h2>
              </div>
              <p>
                You shouldn&apos;t have to retrofit your repository to make AI useful in it.
                Lucidity.js ships the AI integration layer alongside the rest of the codebase:
                an entry-point operational guide, on-demand skills, and specialist sub-agents
                for review.
              </p>
              <Button
                href={`${appConfig.docsUrl}/features/developing-with-ai-agents`}
                targetAppName="docs"
                variant="secondary"
                icon={true}
              >
                Read the docs
              </Button>
            </div>

            <div className="flex flex-col gap-8">
              {aiReadyPoints.map((item) => (
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

        <div className="bg-surface-dark relative z-base-content">
          <Wrapper>
            <div className="grid md:grid-cols-2 gap-15">
              <div className="flex flex-col gap-10">
                <div>
                  <Eyebrow label="03 / Navigation" className="mb-6" variant="iris-haze" />
                  <h2 className="text-page-title-l-desktop mt-6">
                    A repository AI can actually&nbsp;navigate.
                  </h2>
                </div>
                <p>
                  Coding agents do their best work when boundaries are explicit and tooling is
                  consistent. Lucidity.js encodes its conventions in the code itself, so an
                  agent always knows where to put new work and what rules apply to&nbsp;it.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {navigablePoints.map((item) => (
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
        </div>

        <Wrapper className="z-base-content">
          <div className="grid md:grid-cols-2 gap-15">
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow label="04 / Verification" className="mb-6" variant="haze-mist" />
                <h2 className="text-page-title-l-desktop mt-6">
                  Feedback loops agents can actually&nbsp;use.
                </h2>
              </div>
              <p>
                The fastest way for an agent to produce trustworthy code is to give it a fast,
                honest signal that something is broken. Lucidity.js standardises that signal
                across local development, pre-commit hooks, and continuous integration.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {verificationPoints.map((item) => (
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

        <Wrapper className="z-base-content">
          <div className="grid md:grid-cols-2 gap-15">
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow label="05 / Documentation" className="mb-6" variant="mist-dew" />
                <h2 className="text-page-title-l-desktop mt-6">
                  Documentation that doubles as machine-readable&nbsp;context.
                </h2>
              </div>
              <p>
                The same documentation written for engineers makes excellent input for an AI
                agent. It is structured, evidence-led, and tied to real code paths — exactly
                the kind of context an agent can ground a decision in.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {documentationPoints.map((item) => (
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

        <div className="bg-surface-dark relative z-base-content">
          <Wrapper className="items-center">
            <div className="flex flex-col gap-4 items-center">
              <Eyebrow label="Get started" variant="rose-blush" />
              <h2 className="text-page-title-l-desktop text-center">
                Give your AI agents a foundation worth&nbsp;building&nbsp;on.
              </h2>
              <p className="text-center max-w-[600px] mt-4 mb-6">
                We&apos;ll show you how Lucidity.js fits into your existing workflows, and how
                your team can be productive with it — alongside Claude Code, Cursor, and any
                other coding agent you already use.
              </p>
              <Button href="/sales" className="w-fit">
                Talk to sales
              </Button>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
}
