import eslintPlugin from './index.js';

const eslintConfig = eslintPlugin({
  react: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});

export default eslintConfig;
