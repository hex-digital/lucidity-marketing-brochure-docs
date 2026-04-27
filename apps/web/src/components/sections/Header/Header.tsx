import { LuciditySvg } from '@/components/logos/LuciditySvg';
import { TalkToSalesModal } from '@/forms/talk-to-sales/TalkToSalesModal';

export function Header() {
  return (
    <header className="wrapper wrapper--padding-small flex justify-between relative items-center z-navbar">
      <LuciditySvg className="w-[150px] md:w-[155px]" />
      {/*<Navigation />*/}
      <TalkToSalesModal triggerClassName="w-fit" />
    </header>
  );
}
