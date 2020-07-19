module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
  rules: {
    strict: 0,
    semi: 'warn',
    'no-console': 'warn',
  },
};
