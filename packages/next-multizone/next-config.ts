import { appMap, type AppName } from './config/apps';
import type { NextConfig } from 'next';

const apps = appMap.entries();

export const withMultizone = <Config extends NextConfig>(
  appName: AppName,
  sourceConfig: Config,
  options: { default?: boolean } = { default: false },
): Config => {
  const app = appMap.get(appName);

  if (!app) {
    return sourceConfig;
  }

  return {
    basePath: app.path,

    ...(options.default ? defaultConfig(appName) : {}),

    ...sourceConfig,
  };
};

/** Config given only to the default app—the one that handles proxying to the other zones and serves at the root domain. */
function defaultConfig(appName: AppName) {
  return {
    async rewrites() {
      const rewrites = [];

      for (const [otherAppName, appConfig] of apps) {
        if (otherAppName === appName) {
          continue;
        }

        rewrites.push(...rewriteMultizonePaths(appConfig.origin(), appConfig.path));
      }

      return rewrites;
    },
  };
}

/**
 * Handle rewrites for proxy-based multizone hosting.
 * @param zoneOrigin - The origin of the zone to rewrite to.
 * @param basePath - The base path of the zone to rewrite to.
 * @returns The rewrites to apply.
 */
function rewriteMultizonePaths(zoneOrigin?: string, basePath?: string) {
  const origin = zoneOrigin?.trim().replace(/\/+$/, '');
  if (!origin || !basePath) {
    return [];
  }

  return [
    { source: `${basePath}`, destination: `${origin}${basePath}` },
    { source: `${basePath}/`, destination: `${origin}${basePath}/` },
    { source: `${basePath}/:path*`, destination: `${origin}${basePath}/:path*` },
  ];
}
