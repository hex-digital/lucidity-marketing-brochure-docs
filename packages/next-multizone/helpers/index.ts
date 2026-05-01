/**
 * Use this factory to create a function that can strip a multizone base from a path.
 * @param multizoneBasePath - The base path of the multizone.
 * @returns A function that can strip the multizone base from a path.
 */
export function multizoneBaseStripperFactory(multizoneBasePath: string) {
  /**
   * Strip the multizone base from a path. E.G. `/docs/features` -> `/features`.
   * @param path - The path to strip the multizone base from.
   * @returns The path without the multizone base.
   */
  return function pathWithoutMultizoneBase(path: string): string {
    if (path === multizoneBasePath || path.startsWith(`${multizoneBasePath}/`)) {
      return path.slice(multizoneBasePath.length) || '/';
    }

    return path;
  };
}
