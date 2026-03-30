import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

interface HexDigitalTocAdProps {
  className?: string;
}

export function HexDigitalTocAd({ className }: HexDigitalTocAdProps) {
  return (
    <aside
      className={cn(
        'mt-auto mb-2 space-y-4 rounded-2xl border border-fd-border/80 bg-fd-background/80 p-4',
        className,
      )}
    >
      <div className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fd-muted-foreground">
          Hex Digital
        </p>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-fd-border bg-fd-muted/10">
          <Image
            src="/hex-digital-team-group.png"
            alt="Hex Digital team group photo outdoors in the city"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 320px"
          />
          <div className="absolute bottom-2 left-2 w-full max-w-[30px]">
            <Image
              src="/hex-digital-logo-white.png"
              alt="Hex Digital logo"
              width={30}
              height={30}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-semibold text-fd-foreground">
          Need a Sanity specialist?
        </h3>
        <p className="text-sm leading-6 text-fd-muted-foreground">
          Hex Digital are certified Sanity experts and a preferred partner.
          <br />
          <br /> See how we can help you build your next Sanity project.
        </p>
      </div>

      <Link
        href="https://www.hexdigital.com/specialism/sanity-cms-agency?utm_source=lucidity&utm_medium=documentation-corner-ad"
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center rounded-xl border border-fd-border bg-fd-accent px-3 py-2 font-medium text-sm text-fd-accent-foreground transition-colors hover:bg-fd-accent/80"
      >
        Talk to Hex Digital
      </Link>
    </aside>
  );
}
