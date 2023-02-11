module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['**/*.config.js', 'webpack.*.js', '.eslintrc.js', 'dist/'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  root: true,
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};
