import { MultizoneLink, type MultizoneLinkProps } from '../components/Link';
import type { AppName } from '../config/apps';

export function createMultizoneLink(appName: AppName) {
  return function AppAwareLink(props: Omit<MultizoneLinkProps, 'appName'>) {
    return <MultizoneLink appName={appName} {...props} />;
  };
}
