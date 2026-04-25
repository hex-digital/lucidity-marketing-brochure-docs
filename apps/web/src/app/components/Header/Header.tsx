import Image from 'next/image';
import { Button } from '@/app/components/Buttons/Button';

export function Header() {
  return (
    <header className="wrapper wrapper--padding-small flex justify-between relative items-center z-4">
      <Image
        src="/logo.svg"
        width={221}
        height={38}
        alt="Lucidity.js logo"
        className="w-[150px] md:w-[221px]"
      />
      {/*<Navigation />*/}
      <Button href="#talk-to-sales" variant="primary" className="w-fit">
        Talk to sales
      </Button>
    </header>
  );
}
