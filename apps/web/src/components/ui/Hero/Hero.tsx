import { Wrapper } from '@/components/layout/Wrapper/Wrapper';
import { Button } from '@/components/ui/Buttons/Button';
import { appConfig } from '@/config/app';

export function Hero() {
  return (
    <div className="w-full overflow-hidden mt-[60px]">
      <Wrapper className="relative z-base-content">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 relative md:h-[600px]">
          <div className="hero-content flex flex-col gap-10 md:max-w-150">
            <h1 className="text-display-title-desktop">
              The best start your Sanity project <br className="hidden md:block" /> can get.
            </h1>
            <p className="max-w-[50ch] md:max-w-[450px]">
              Lucidity.js is the best way to start any enterprise-grade Sanity project.
              Multi-site, multi-language, editorial experience, security, and 40+ features, all
              from day one.
            </p>
            <p className="max-w-[50ch] md:max-w-[450px]">
              <strong>Cut 6 months off your delivery timeline</strong> with a codebase
              that&apos;s built for high-performance and huge scale.
            </p>
            <div className="flex gap-4 mt-2 mb-8">
              <Button href="/sales" className="w-fit">
                Talk to sales
              </Button>
              <Button href={`${appConfig.docsUrl}/get-started`} variant="secondary">
                View the docs
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/codebase-view-2-dark.jpg"
              alt="Lucidity.js dashboard preview"
              width={750}
              height={480}
              className="relative z-hero-image-primary md:absolute rounded-md max-w-none w-full md:w-[50vw] md:left-[25%] md:top-[-4vw]"
              loading="eager"
            />
            <img
              src="/images/cms-view-2-dark.jpg"
              alt="Render of Lucidity.js' studio in Sanity"
              width={720}
              height={464}
              className="relative z-hero-image-secondary hidden md:block md:absolute rounded-md max-w-none md:w-[50vw] md:left-[5%] md:top-[0vw]"
              loading="eager"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
