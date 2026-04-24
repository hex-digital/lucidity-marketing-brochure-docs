import Image from 'next/image';
import { Button } from '@/app/components/Buttons/Button';
import { Wrapper } from '@/app/components/Wrapper/Wrapper';

export function Hero() {
  return (
    <Wrapper className="relative z-6">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 relative md:h-[706px]">
        <div className="hero-content flex flex-col gap-10 max-w-150">
          <h1 className="text-display-title-desktop">
            The best start your Sanity project <br className="hidden md:block" /> can get.
          </h1>
          <p>
            Lucidity.js is an enterprise-grade monorepo framework for engineering teams
            building on Next.js and Sanity. Multisite, multi-lang, visual editing, caching,
            security and 40+ features, all from day one.
          </p>
          <p>
            Cut 6 months off your delivery timeline with a codebase that&apos;s documented and
            ready to extend.
          </p>
          <div className="flex gap-4 mt-2">
            <Button href="#" variant="primary">
              Talk to sales
            </Button>
            <Button href="#" variant="secondary">
              Request a demo
            </Button>
          </div>
        </div>
        <div className="hero-images">
          <Image
            src="https://picsum.photos/720/464"
            alt="string"
            width={720}
            height={464}
            className="relative md:absolute md:-right-1/3 z-20 w-full md:w-auto rounded-md"
            loading="eager"
          />
          <Image
            src="https://picsum.photos/720/464"
            alt="string"
            width={720}
            height={464}
            className="hidden md:block absolute top-[242px] rounded-md"
            loading="eager"
          />
        </div>
      </div>
    </Wrapper>
  );
}
