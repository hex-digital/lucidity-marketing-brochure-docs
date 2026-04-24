import Image from 'next/image';
import { Eyebrow } from '@/app/components/Eyebrow/Eyebrow';
import { Wrapper } from '@/app/components/Wrapper/Wrapper';

export function LogoGrid() {
  return (
    <Wrapper padding="medium" className="flex flex-col justify-center items-center gap-10 z-4">
      <Eyebrow variant="rose-blush" label="Built with Lucidity" />
      <div className="flex flex-col items-center md:flex-wrap gap-15">
        <Image src="/logos/ci.svg" alt="Conservation International" width={244} height={78} />
        <Image src="/logos/ci.svg" alt="Conservation International" width={244} height={78} />
        <Image src="/logos/ci.svg" alt="Conservation International" width={244} height={78} />
        <Image src="/logos/ci.svg" alt="Conservation International" width={244} height={78} />
      </div>
    </Wrapper>
  );
}
