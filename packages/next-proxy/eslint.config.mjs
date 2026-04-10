import eslintPlugin from '@pkg/eslint-plugin';

const eslintConfig = eslintPlugin({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});

export default eslintConfig;
