import NextLink from 'next/link';
import { LuciditySvg } from '@/components/logos/LuciditySvg';
import { Button } from '@/components/ui/Buttons/Button';

export function Header() {
  return (
    <header className="wrapper wrapper--padding-small flex justify-between relative items-center z-navbar">
      <NextLink href="/" aria-label="Go to homepage">
        <LuciditySvg className="w-[150px] md:w-[155px]" />
      </NextLink>
      {/*<Navigation />*/}
      <Button href="/sales" className="w-fit">
        Talk to sales
      </Button>
    </header>
  );
}
