import process from 'node:process';
import { GLOB_MARKDOWN, GLOB_TS, GLOB_TSX } from '../globs.js';
import { interopDefault, renameRules } from '../utils.js';

/**
 * @param {OptionsFiles & OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions & OptionsProjectType} options
 * @returns {Promise<TypedFlatConfigItem[]>}
 */
export async function typescript(options = {}) {
  const {
    componentExts = [],
    overrides = {},
    overridesTypeAware = {},
    parserOptions = {},
    type = 'app',
    usingNextjs = false,
  } = options;

  const files = options.files ?? [
    GLOB_TS,
    GLOB_TSX,
    ...componentExts.map((ext) => `**/*.${ext}`),
  ];

  const filesTypeAware = options.filesTypeAware ?? [GLOB_TS, GLOB_TSX];
  const ignoresTypeAware = options.ignoresTypeAware ?? [`${GLOB_MARKDOWN}/**`];
  const tsconfigPath = options?.tsconfigPath ? options.tsconfigPath : undefined;
  const isTypeAware = !!tsconfigPath;

  /** @type {TypedFlatConfigItem['rules']} */
  const typeAwareRules = {
    'dot-notation': 'off',
    'no-implied-eval': 'off',
    '@ts-eslint/no-unnecessary-condition': 'off',
    '@ts-eslint/await-thenable': 'error',
    '@ts-eslint/dot-notation': ['error', { allowKeywords: true }],
    '@ts-eslint/no-floating-promises': 'error',
    '@ts-eslint/no-for-in-array': 'error',
    '@ts-eslint/no-implied-eval': 'error',
    '@ts-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
        },
      },
    ],
    '@ts-eslint/no-unnecessary-type-assertion': 'error',
    '@ts-eslint/no-unsafe-argument': 'error',
    '@ts-eslint/no-unsafe-assignment': 'error',
    '@ts-eslint/no-unsafe-call': 'error',
    '@ts-eslint/no-unsafe-member-access': 'error',
    '@ts-eslint/no-unsafe-return': 'error',
    '@ts-eslint/promise-function-async': 'error',
    '@ts-eslint/restrict-plus-operands': 'error',
    '@ts-eslint/restrict-template-expressions': 'error',
    '@ts-eslint/return-await': ['error', 'in-try-catch'],
    '@ts-eslint/unbound-method': 'error',
  };

  /**
   * These rules are covered by the next.js plugin.
   * If next.js config enabled, these rules will not be included.
   * @type {{}}
   */
  const nextjsOverriddenRules = {
    normal: {},
    typeAware: {
      '@ts-eslint/switch-exhaustiveness-check': 'off',
    },
  };

  const [pluginTs, parserTs] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ]);

  /**
   * @param {boolean} typeAware
   * @param {string[]} files
   * @param {string[]} ignores
   * @returns {TypedFlatConfigItem}
   */
  function makeParser(typeAware, files, ignores) {
    return {
      files,
      ...(ignores ? { ignores } : {}),
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: componentExts.map((ext) => `.${ext}`),
          sourceType: 'module',
          ...(typeAware
            ? {
                projectService: {
                  allowDefaultProject: ['./*.js'],
                  defaultProject: tsconfigPath,
                },
                tsconfigRootDir: process.cwd(),
              }
            : {}),
          ...parserOptions,
        },
      },
      name: `eslint-plugin/typescript/${typeAware ? 'type-aware-parser' : 'parser'}`,
    };
  }

  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      name: 'eslint-plugin/typescript/setup',
      plugins: { '@ts-eslint': pluginTs },
    },
    // assign type-aware parser for type-aware files and type-unaware parser for the rest
    ...(isTypeAware
      ? [makeParser(false, files), makeParser(true, filesTypeAware, ignoresTypeAware)]
      : [makeParser(false, files)]),
    {
      files,
      name: 'eslint-plugin/typescript/rules',
      rules: {
        ...renameRules(pluginTs.configs['eslint-recommended'].overrides[0].rules, {
          '@typescript-eslint': '@ts-eslint',
        }),
        ...renameRules(pluginTs.configs.strict.rules, { '@typescript-eslint': '@ts-eslint' }),
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        '@ts-eslint/ban-ts-comment': [
          'error',
          { 'ts-expect-error': 'allow-with-description' },
        ],
        '@ts-eslint/consistent-type-definitions': ['error', 'interface'],
        '@ts-eslint/consistent-type-imports': [
          'error',
          {
            disallowTypeAnnotations: false,
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
          },
        ],

        '@ts-eslint/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
        '@ts-eslint/no-dupe-class-members': 'error',
        '@ts-eslint/no-dynamic-delete': 'off',
        '@ts-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
        '@ts-eslint/no-explicit-any': 'off',
        '@ts-eslint/no-extraneous-class': 'off',
        '@ts-eslint/no-import-type-side-effects': 'error',
        '@ts-eslint/no-invalid-void-type': 'off',
        '@ts-eslint/no-non-null-assertion': 'off',
        '@ts-eslint/no-redeclare': ['error', { builtinGlobals: false }],
        '@ts-eslint/no-require-imports': 'error',
        '@ts-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
          },
        ],
        '@ts-eslint/no-unused-vars': 'off', // covered by javascript ruleset
        '@ts-eslint/no-use-before-define': [
          'error',
          { classes: false, functions: false, variables: true },
        ],
        '@ts-eslint/no-useless-constructor': 'off',
        '@ts-eslint/no-wrapper-object-types': 'error',
        '@ts-eslint/triple-slash-reference': 'off',
        '@ts-eslint/unified-signatures': 'off',

        ...(type === 'lib'
          ? {
              '@ts-eslint/explicit-function-return-type': [
                'error',
                {
                  allowExpressions: true,
                  allowHigherOrderFunctions: true,
                  allowIIFEs: true,
                },
              ],
            }
          : {}),
        ...(usingNextjs ? {} : nextjsOverriddenRules.normal),
        ...overrides,
      },
    },
    ...(isTypeAware
      ? [
          {
            files: filesTypeAware,
            ignores: ignoresTypeAware,
            name: 'eslint-plugin/typescript/rules-type-aware',
            rules: {
              ...typeAwareRules,
              ...(usingNextjs ? {} : nextjsOverriddenRules.typeAware),
              ...overridesTypeAware,
            },
          },
        ]
      : []),
  ];
}
