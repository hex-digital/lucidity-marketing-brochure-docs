import { LuciditySvg } from '@/components/logos/LuciditySvg';
import { Button } from '@/components/ui/Buttons/Button';

export function Header() {
  return (
    <header className="wrapper wrapper--padding-small flex justify-between relative items-center z-navbar">
      <LuciditySvg className="w-[150px] md:w-[155px]" />
      {/*<Navigation />*/}
      <Button href="/sales" className="w-fit">
        Talk to sales
      </Button>
    </header>
  );
}
