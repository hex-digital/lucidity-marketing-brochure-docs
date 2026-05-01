import { appMap, defaultAppName, type App, type AppName } from '../config/apps';

/**
 * Given a zone and a URL, return the URL with the zone's base path prepended.
 * @param zone - The zone to get the base path for.
 * @param url - The URL to prepend the base path to.
 * @returns The URL with the zone's base path prepended.
 */
export function zoneUrl(zone: AppName, url: string): string {
  const app = appMap.get(zone);

  if (!app || !app.path) {
    return url;
  }

  return `${app.baseUrl}${app.path}${url}`;
}

/**
 * Given a path, find the app zone that owns it.
 */
export function appForPathname(pathname: string): [AppName, App | undefined] {
  const apps = appMap.entries();

  for (const [appName, app] of apps) {
    const basePath = app.path;
    if (!basePath) {
      continue;
    }

    if (pathname === basePath || pathname.startsWith(`${basePath}/`)) {
      return [appName, app];
    }
  }

  return [defaultAppName, appMap.get(defaultAppName)];
}

export function pathInZone(pathname: string, appName: AppName): boolean {
  const [targetAppName] = appForPathname(pathname);

  /** Check if we're in the same zone */
  return targetAppName === appName;
}
