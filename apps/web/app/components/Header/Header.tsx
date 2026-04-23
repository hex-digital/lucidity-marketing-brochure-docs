import { Navigation } from "@/app/components/Header/Navigation";
import Image from "next/image";
import { Button } from "@/app/components/Buttons/Button";

export function Header() {
  return (
    <header className="wrapper wrapper--padding-small flex justify-between relative items-center z-4">
      <Image src="./logo.svg" width={221} height={38} alt="Lucidity logo" />
      <Navigation />
      <Button href="#" variant="primary">
        Talk to sales
      </Button>
    </header>
  );
}