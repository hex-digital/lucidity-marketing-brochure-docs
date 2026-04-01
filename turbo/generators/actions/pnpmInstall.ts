import { execSync } from 'node:child_process';

export function pnpmInstall() {
  execSync('pnpm install', {
    cwd: process.cwd(),
    stdio: 'inherit',
  });

  return 'Installed dependencies with pnpm install';
}
