import { appMap, type AppName } from '../config/apps';
/**
 * Given a zone and a URL, return the URL with the zone's base path prepended.
 * @param zone - The zone to get the base path for.
 * @param url - The URL to prepend the base path to.
 * @returns The URL with the zone's base path prepended.
 */
export function zoneUrl(zone: AppName, url: `/${string}`): string {
  const app = appMap.get(zone);

  if (!app || !app.path) {
    return url;
  }

  return `${app.path}${url}`;
}
