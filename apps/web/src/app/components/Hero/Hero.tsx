import { Button } from '@/app/components/Buttons/Button';
import { Wrapper } from '@/app/components/Wrapper/Wrapper';

export function Hero() {
  return (
    <div className="w-full overflow-hidden mt-[60px]">
      <Wrapper className="relative z-6">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 relative md:h-[600px]">
          <div className="hero-content flex flex-col gap-10 md:max-w-150">
            <h1 className="text-display-title-desktop">
              The best start your Sanity project <br className="hidden md:block" /> can get.
            </h1>
            <p className="max-w-[50ch] md:max-w-[450px]">
              Lucidity.js is an enterprise-grade monorepo framework for engineering teams
              building on Next.js and Sanity. Multisite, multi-lang, visual editing, caching,
              security and 40+ features, all from day one.
            </p>
            <p className="max-w-[50ch] md:max-w-[450px]">
              <strong>Cut 6 months off your delivery timeline</strong> with a codebase
              that&apos;s documented and ready to extend.
            </p>
            <div className="flex gap-4 mt-2 mb-8">
              <Button
                href="mailto:dev@hexdigital.com?subject=Lucidity.js%20-%20Let's%20talk%20about%20what%20you're%20building"
                variant="primary"
                className="w-fit"
              >
                Talk to sales
              </Button>
              <Button
                href="https://lucidityjs-docs.hexlabs.uk/get-started"
                variant="secondary"
              >
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
              className="relative z-20 md:absolute rounded-md max-w-none w-full md:w-[50vw] md:left-[25%] md:top-[-4vw]"
              loading="eager"
            />
            <img
              src="/images/cms-view-2-dark.jpg"
              alt="Render of Lucidity.js' studio in Sanity"
              width={720}
              height={464}
              className="relative z-19 hidden md:block md:absolute rounded-md max-w-none md:w-[50vw] md:left-[5%] md:top-[0vw]"
              loading="eager"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
