module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: [
    'prettier',
    'next/core-web-vitals',
    'plugin:eslint-comments/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'import',
    'unused-imports',
    'mui-path-imports',
  ],
  rules: {
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