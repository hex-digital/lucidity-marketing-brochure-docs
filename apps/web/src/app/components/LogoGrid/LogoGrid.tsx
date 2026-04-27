import { Eyebrow } from '@/app/components/Eyebrow/Eyebrow';
import { Wrapper } from '@/app/components/Wrapper/Wrapper';

export function LogoGrid() {
  const logos = [
    {
      alt: 'Conservation International',
      src: '/logos/ci.svg',
      width: 200,
      height: 78,
    },
    { alt: 'Too Good To Go', src: '/logos/tgtg.svg', width: 99, height: 78 },
    { alt: 'BirdLife International', src: '/logos/birdlife.svg', width: 99, height: 78 },
    { alt: 'Atomos', src: '/logos/atomos.svg', width: 180, height: 78 },
  ];

  return (
    <Wrapper padding="medium" className="flex flex-col justify-center items-center gap-10 z-4">
      <Eyebrow variant="rose-blush">Built with Lucidity.js</Eyebrow>

      <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-15">
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            key={logo.src}
            src={logo.src}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>
    </Wrapper>
  );
}
