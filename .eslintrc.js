module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['**/*.config.js', 'webpack.*.js', '.eslintrc.js', 'dist/'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};
