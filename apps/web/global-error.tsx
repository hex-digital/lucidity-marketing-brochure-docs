'use client';

import type NextError from 'next/error';
import { useEffect } from 'react';
import { captureException } from '@sentry/nextjs';
import { fonts } from '@pkg/brand/fonts';

interface GlobalErrorProperties {
  readonly error: NextError & { digest?: string };
  readonly reset: () => void;
}

const GlobalError = ({ error, reset }: GlobalErrorProperties) => {
  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <html lang="en" className={fonts.inter.className}>
      <body>
        <h1>Oops, something went wrong</h1>
        <button type="reset" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
};

export default GlobalError;
