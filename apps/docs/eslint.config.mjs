import eslintPlugin from '@pkg/eslint-plugin';

const eslintConfig = eslintPlugin({
  ignores: ['.source'],
  react: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});

export default eslintConfig;
