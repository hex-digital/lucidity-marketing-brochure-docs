import { appConfig } from '@/config/app';
import { SectionLink } from '@/components/SectionLinksBar/SectionLink';

export function SectionLinksBar() {
  return (
    <div className="[grid-area:header]">
      <div className="hidden border-b bg-fd-background lg:block">
        <div className="mx-auto flex w-full items-center gap-2 px-4 py-3">
          {appConfig.sectionLinks.map((link) => (
            <SectionLink key={link.url} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
