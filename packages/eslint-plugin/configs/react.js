import { isPackageExists } from 'local-pkg';
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_TS, GLOB_TSX } from '../globs.js';
import { ensurePackages, interopDefault } from '../utils.js';

const ReactRefreshAllowConstantExportPackages = ['vite'];
const ReactRouterPackages = [
  '@react-router/node',
  '@react-router/react',
  '@react-router/serve',
  '@react-router/dev',
];
const NextJsPackages = ['next'];

/**
 *
 * @param {OptionsTypeScriptParserOptions & OptionsTypeScriptWithTypes & OptionsOverrides & OptionsFiles} options
 * @returns Promise<TypedFlatConfigItem[]>
 */
export async function react(options = {}) {
  const {
    files = [GLOB_SRC],
    filesTypeAware = [GLOB_TS, GLOB_TSX],
    ignoresTypeAware = [`${GLOB_MARKDOWN}/**`],
    overrides = {},
    tsconfigPath,
    withReactCompiler = true,
    withA11y = false, // This is included with the next eslint plugin too, so if using that then keep this as false
  } = options;

  await ensurePackages([
    '@eslint-react/eslint-plugin',
    'eslint-plugin-react-hooks',
    'eslint-plugin-react-refresh',
    'eslint-plugin-react-compiler',
  ]);

  if (withA11y) {
    await ensurePackages(['eslint-plugin-jsx-a11y']);
  }

  const isTypeAware = !!tsconfigPath;

  /** @type {TypedFlatConfigItem['rules']} */
  const typeAwareRules = {
    'react-core/no-leaked-conditional-rendering': 'error',
    'react-core/no-implicit-key': 'warn',
  };

  const [
    pluginReact,
    pluginReactHooks,
    pluginReactRefresh,
    pluginReactCompiler,
    pluginReactA11y,
  ] = await Promise.all([
    interopDefault(import('@eslint-react/eslint-plugin')),
    interopDefault(import('eslint-plugin-react-hooks')),
    interopDefault(import('eslint-plugin-react-refresh')),
    withReactCompiler ? interopDefault(import('eslint-plugin-react-compiler')) : undefined,
    withA11y ? interopDefault(import('eslint-plugin-jsx-a11y')) : undefined,
  ]);

  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some((i) =>
    isPackageExists(i),
  );
  const isUsingReactRouter = ReactRouterPackages.some((i) => isPackageExists(i));
  const isUsingNext = NextJsPackages.some((i) => isPackageExists(i));

  const plugins = pluginReact.configs.all.plugins;

  return [
    {
      name: 'eslint-plugin/react/setup',
      plugins: {
        'react-core': plugins['@eslint-react'],
        'react-dom': plugins['@eslint-react/dom'],
        'react-hooks': pluginReactHooks,
        'react-hooks-extra': plugins['@eslint-react/hooks-extra'],
        'react-naming-convention': plugins['@eslint-react/naming-convention'],
        'react-refresh': pluginReactRefresh,
        'react-web-api': plugins['@eslint-react/web-api'],
      },
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      name: 'eslint-plugin/react/rules',
      rules: {
        // recommended rules from eslint-plugin-react-x https://eslint-react.xyz/docs/rules/overview#core-rules
        'react-core/no-access-state-in-setstate': 'error',
        'react-core/no-array-index-key': 'warn',
        'react-core/no-children-count': 'warn',
        'react-core/no-children-for-each': 'warn',
        'react-core/no-children-map': 'warn',
        'react-core/no-children-only': 'warn',
        'react-core/no-children-to-array': 'warn',
        'react-core/no-clone-element': 'warn',
        'react-core/jsx-no-comment-textnodes': 'warn',
        'react-core/no-component-will-mount': 'error',
        'react-core/no-component-will-receive-props': 'error',
        'react-core/no-component-will-update': 'error',
        'react-core/no-context-provider': 'warn',
        'react-core/no-create-ref': 'error',
        'react-core/no-default-props': 'error',
        'react-core/no-direct-mutation-state': 'error',
        'react-core/jsx-no-duplicate-props': 'warn',
        'react-core/no-duplicate-key': 'warn',
        'react-core/no-forward-ref': 'warn',
        'react-core/no-missing-key': 'error',
        'react-core/no-nested-component-definitions': 'error',
        'react-core/no-prop-types': 'error',
        'react-core/no-redundant-should-component-update': 'error',
        'react-core/no-set-state-in-component-did-mount': 'warn',
        'react-core/no-set-state-in-component-did-update': 'warn',
        'react-core/no-set-state-in-component-will-update': 'warn',
        'react-core/no-string-refs': 'error',
        'react-core/no-unsafe-component-will-mount': 'warn',
        'react-core/no-unsafe-component-will-receive-props': 'warn',
        'react-core/no-unsafe-component-will-update': 'warn',
        'react-core/no-unstable-context-value': 'warn',
        'react-core/no-unstable-default-props': 'warn',
        'react-core/no-unused-class-component-members': 'warn',
        'react-core/no-unused-state': 'warn',
        'react-core/no-use-context': 'warn',
        'react-core/no-useless-forward-ref': 'warn',
        'react-core/jsx-uses-vars': 'warn',

        // recommended rules from eslint-plugin-react-dom https://eslint-react.xyz/docs/rules/overview#dom-rules
        'react-dom/no-dangerously-set-innerhtml': 'warn',
        'react-dom/no-dangerously-set-innerhtml-with-children': 'error',
        'react-dom/no-find-dom-node': 'error',
        'react-dom/no-flush-sync': 'error',
        'react-dom/no-hydrate': 'error',
        'react-dom/no-missing-button-type': 'warn',
        'react-dom/no-missing-iframe-sandbox': 'warn',
        'react-dom/no-namespace': 'error',
        'react-dom/no-render': 'error',
        'react-dom/no-render-return-value': 'error',
        'react-dom/no-script-url': 'warn',
        'react-dom/no-unsafe-iframe-sandbox': 'warn',
        'react-dom/no-unsafe-target-blank': 'warn',
        'react-dom/no-use-form-state': 'error',
        'react-dom/no-void-elements-with-children': 'error',

        // recommended rules eslint-plugin-react-hooks https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks/src/rules
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',

        // recommended rules from eslint-plugin-react-hooks-extra https://eslint-react.xyz/docs/rules/overview#hooks-extra-rules
        'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
        'react-core/no-unnecessary-use-prefix': 'warn',

        // recommended rules from eslint-plugin-react-web-api https://eslint-react.xyz/docs/rules/overview#web-api-rules
        'react-web-api/no-leaked-event-listener': 'warn',
        'react-web-api/no-leaked-interval': 'warn',
        'react-web-api/no-leaked-resize-observer': 'warn',
        'react-web-api/no-leaked-timeout': 'warn',

        // preconfigured rules from eslint-plugin-react-refresh https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main/src
        'react-refresh/only-export-components': [
          'warn',
          {
            allowConstantExport: isAllowConstantExport,
            allowExportNames: [
              ...(isUsingNext
                ? [
                    'dynamic',
                    'dynamicParams',
                    'revalidate',
                    'fetchCache',
                    'runtime',
                    'preferredRegion',
                    'maxDuration',
                    'config',
                    'generateStaticParams',
                    'metadata',
                    'generateMetadata',
                    'viewport',
                    'generateViewport',
                  ]
                : []),
              ...(isUsingReactRouter ? ['meta', 'links', 'headers', 'loader', 'action'] : []),
            ],
          },
        ],

        // overrides
        ...overrides,
      },
    },

    ...(withReactCompiler ? [pluginReactCompiler.configs.recommended] : []),

    ...(withA11y
      ? [
          {
            files,
            name: 'eslint-plugin/react/jsxA11y',
            plugins: {
              'jsx-a11y': pluginReactA11y,
            },
            rules: { ...pluginReactA11y.configs.recommended.rules },
          },
        ]
      : []),

    ...(isTypeAware
      ? [
          {
            files: filesTypeAware,
            ignores: ignoresTypeAware,
            name: 'eslint-plugin/react/type-aware-rules',
            rules: {
              ...typeAwareRules,
            },
          },
        ]
      : []),
  ];
}
