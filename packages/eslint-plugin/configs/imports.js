import { GLOB_TS, GLOB_TSX } from '../globs.js';
import { pluginImport } from '../plugins.js';

/**
 * @returns {TypedFlatConfigItem[]}
 */
export async function imports() {
  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      name: 'eslint-plugin/imports/rules',
      plugins: { 'import-x': pluginImport },
      rules: {
        'import-x/consistent-type-specifier-style': 'off',
        'import-x/first': 'error',
        'import-x/no-duplicates': 'error',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-named-default': 'error',
        'import-x/no-self-import': 'error',
        'import-x/no-webpack-loader-syntax': 'error',
        'import-x/newline-after-import': ['error', { count: 1 }],
        'import-x/order': [
          'error',
          {
            alphabetize: { order: 'asc', caseInsensitive: true },
            groups: [
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              'object',
              'type',
            ],
            pathGroups: [
              { pattern: '@/**', group: 'internal', position: 'before' },
              { pattern: '~/**', group: 'internal', position: 'before' },
              { pattern: '@pkg/**', group: 'index', position: 'after' },
            ],
            pathGroupsExcludedImportTypes: [],
          },
        ],
      },
    },
  ];
}
