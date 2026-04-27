import NextLink from 'next/link';
import { Wrapper } from '@/components/layout/Wrapper/Wrapper';
import { LuciditySvg } from '@/components/logos/LuciditySvg';
import { Eyebrow } from '@/components/ui/Eyebrow/Eyebrow';

export function Footer() {
  return (
    <>
      <Wrapper className="items-center">
        <div className="flex flex-col gap-4 items-center">
          <Eyebrow label="About the creators" variant="blush-iris" />
          <h3 className="sr-only">Hex Digital Ltd</h3>

          <svg
            width="350"
            height="134"
            viewBox="0 0 350 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[150px] h-auto mt-4"
          >
            <path
              d="M330.82 99.6787C342.327 99.6788 349.228 107.013 349.229 116.793C349.229 126.573 342.327 133.72 330.82 133.72C319.122 133.72 312.215 126.573 312.215 116.793C312.215 107.013 319.314 99.6787 330.82 99.6787ZM150.357 38.7432C164.357 38.7432 175.866 43.257 184.494 52.2842C193.318 61.4996 197.729 73.1604 197.729 87.4561C197.729 102.499 193.319 113.973 184.303 121.682C175.483 129.583 164.357 133.533 151.127 133.533C125.81 133.533 112.193 120.556 107.398 102.499L137.316 102.499C139.428 107.577 143.838 110.024 150.55 110.024C158.799 110.024 165.316 104.755 167.426 94.9756L106.248 94.9756L105.864 86.1367C105.864 72.2197 109.892 60.7498 117.946 51.9082C126.001 43.0689 136.743 38.7432 150.357 38.7432ZM29.5342 44.5723C33.3722 40.811 39.7011 38.9326 48.3311 38.9326C75.1803 38.9326 88.6054 52.6595 88.6055 80.3057L88.6055 131.651L59.0713 131.651L59.0713 82.375C59.0713 70.153 53.893 64.132 43.5371 64.1318C34.1376 64.1318 29.5343 68.8336 29.5342 78.0488L29.5342 131.651L5.8309e-06 131.651L5.85733e-06 4.0196e-08L29.5342 3.4294e-08L29.5342 44.5723ZM253.726 63.7559L271.562 40.623L305.509 40.623L270.795 85.7598L306.468 131.651L272.715 131.651L253.918 107.578L235.507 131.651L201.562 131.651L236.85 85.7598L201.942 40.623L235.893 40.623L253.726 63.7559ZM151.127 60.9375C142.878 60.9376 137.891 65.073 135.974 73.5361L166.659 73.5361C164.55 65.261 158.606 60.9375 151.127 60.9375Z"
              fill="#FAFAF8"
            />
          </svg>

          <p className="text-center max-w-[600px] mt-6">
            We are Hex Digital, a London-based digital agency focused on brand, website, and
            product delivery for organisations with complex digital needs.
          </p>
          <p className="text-center max-w-[600px] mt-6">
            We are one of the very first Sanity-certified partners, and we're home to one of
            only a few Sanity-selected MVPs. This means we have privileged access to Sanity
            engineers and support engineers, and an insight into the Sanity roadmap.
          </p>
        </div>
      </Wrapper>

      <Wrapper className="items-center">
        <div className="flex flex-col gap-4 items-center">
          <NextLink href="/" aria-label="Go to homepage">
            <LuciditySvg className="w-[221px]" />
          </NextLink>
        </div>

        <ul className="flex flex-col items-center md:flex-row gap-[10px]">
          <li>
            <a
              href="https://www.hexdigital.com?utm_source=lucidity&utm_medium=marketing-site&utm_content=footer"
              target="_blank"
              rel="noreferrer noopener"
              title="Visit Hex Digital Ltd"
              className="text-page-eyebrow uppercase"
            >
              About Hex Digital
            </a>
          </li>
          <li className="hidden md:block">•</li>
          {/*<li>*/}
          {/*  <a*/}
          {/*    href="https://www.hexdigital.com?utm_source=lucidity&utm_medium=marketing-site&utm_content=footer"*/}
          {/*    target="_blank"*/}
          {/*    rel="noreferrer noopener"*/}
          {/*    title="Lucidity.js licence"*/}
          {/*    className="text-page-eyebrow uppercase"*/}
          {/*  >*/}
          {/*    Lucidity.js Licence*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="hidden md:block">•</li>*/}
          <li>
            <a
              href="https://www.hexdigital.com/privacy-policy?utm_source=lucidity&utm_medium=marketing-site&utm_content=footer-privacy"
              target="_blank"
              rel="noreferrer noopener"
              title="Privacy Policy"
              className="text-page-eyebrow uppercase"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </Wrapper>
    </>
  );
}
