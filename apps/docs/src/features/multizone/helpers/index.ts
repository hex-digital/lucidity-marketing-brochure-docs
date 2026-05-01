import { multizoneBaseStripperFactory } from '@pkg/next-multizone/helpers';

/**
 * Strip the multizone base from a path. E.G. `/docs/features` -> `/features`.
 * @param path - The path to strip the multizone base from.
 * @returns The path without the multizone base.
 */
export const pathWithoutMultizoneBase = multizoneBaseStripperFactory('docs');
