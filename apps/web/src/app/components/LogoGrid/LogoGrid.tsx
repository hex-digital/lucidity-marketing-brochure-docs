import Image from 'next/image';
import { Eyebrow } from '@/app/components/Eyebrow/Eyebrow';
import { Wrapper } from '@/app/components/Wrapper/Wrapper';

export function LogoGrid() {
  return (
    <Wrapper padding="medium" className="flex flex-col justify-center items-center gap-10 z-4">
      <Eyebrow variant="rose-blush" label="Built with Lucidity.js" />
      <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-15">
        <Image src="/logos/ci.svg" alt="Conservation International" width={200} height={78} />
        <Image src="/logos/tgtg.svg" alt="Too Good To Go" width={99} height={78} />
        <Image src="/logos/birdlife.svg" alt="Datazone by Birdlife" width={99} height={78} />
        <Image
          src="/logos/atomos.svg"
          className="text-white"
          alt="atomos"
          width={180}
          height={78}
        />
      </div>
    </Wrapper>
  );
}
