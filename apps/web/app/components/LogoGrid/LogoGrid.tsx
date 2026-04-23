import {Wrapper} from "@/app/components/Wrapper/Wrapper";
import {Eyebrow} from "@/app/components/Eyebrow/Eyebrow";
import Image from "next/image";

export function LogoGrid() {
    return (
        <Wrapper padding="medium" className="flex flex-col items-center gap-10 z-4">
            <Eyebrow variant='rose-blush' label="Built with Lucidity"/>
            <div className="flex flex-wrap gap-15">
                <Image src='/logos/ci.svg' alt='Conservation International' width={244} height={78}/>
                <Image src='/logos/ci.svg' alt='Conservation International' width={244} height={78}/>
                <Image src='/logos/ci.svg' alt='Conservation International' width={244} height={78}/>
                <Image src='/logos/ci.svg' alt='Conservation International' width={244} height={78}/>
            </div>
        </Wrapper>
    )
}