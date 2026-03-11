import { GLOB_SRC } from '../globs.js';
import { ensurePackages /*, interopDefault*/ } from '../utils.js';
import { globalIgnores } from 'eslint/config';

/**
 * NOTE: `eslint-config-next/typescript` is specifically not included as all its rules are already covered by our typescript config
 *
 * @param {OptionsTypeScriptParserOptions & OptionsTypeScriptWithTypes & OptionsOverrides & OptionsFiles} options
 * @returns {TypedFlatConfigItem[]}
 */
export async function nextjs(options = {}) {
  const { files = [GLOB_SRC], overrides = {} } = options;

  await ensurePackages(['eslint-config-next', 'eslint-plugin-jsx-a11y']);

  // const [pluginNextCoreWebVitals, pluginReactJsxA11y] = await Promise.all([
  //   interopDefault(import('eslint-config-next/core-web-vitals')),
  //   interopDefault(import('eslint-plugin-jsx-a11y')),
  // ]);

  // const clonedPluginNextCoreWebVitals = pluginNextCoreWebVitals;
  // clonedPluginNextCoreWebVitals[0].rules = {
  //   ...clonedPluginNextCoreWebVitals[0].rules,
  //   ...pluginReactJsxA11y.configs.strict.rules,
  // };

  return [
    // ...clonedPluginNextCoreWebVitals,
    {
      name: 'eslint-plugin/nextjs/rules',
      files,
      rules: {
        '@next/next/no-img-element': 'off',
        // overrides
        ...overrides,
      },
    },
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  ];
}
