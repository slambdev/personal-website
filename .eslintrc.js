const xoTypescript = require(`eslint-config-xo-typescript`);

const tsxGlob = `**/*.tsx`;
const xoTsxOverrides = xoTypescript.overrides.find(
  ({ files }) => files.length === 1 && files.includes(tsxGlob),
);

module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: [
    'prettier',
    'next/core-web-vitals',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'import',
    'unused-imports',
    'mui-path-imports',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      `error`,
      // Allow &: selectors for styles
      {
        selector: `objectLiteralProperty`,
        format: null,
        filter: {
          regex: /^&:.+$/.source,
          match: true,
        },
      },
      ...xoTsxOverrides.rules[`@typescript-eslint/naming-convention`].slice(1),
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'func-style': [`error`, `expression`, { allowArrowFunctions: true }],
    'react/function-component-definition': [
      `error`,
      {
        // Allow standard Template syntax
        namedComponents: `arrow-function`,
        unnamedComponents: `arrow-function`,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
  },
};
