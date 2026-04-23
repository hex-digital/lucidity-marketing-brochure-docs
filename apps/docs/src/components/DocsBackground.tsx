import Image from 'next/image';
import starryBg from '../../public/starry-bg.png';

export function DocsBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[64rem] dark:hidden"
        style={{
          backgroundImage:
            'radial-gradient(49.63% 57.02% at 58.99% -7.2%, color-mix(in oklab, var(--color-fd-primary) 10%, transparent) 39.4%, transparent 100%)',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block"
      >
        <Image src={starryBg} alt="" priority className="h-auto w-full" />
      </div>
    </>
  );
}
