const path = require(`node:path`);
const xoTypescript = require(`eslint-config-xo-typescript`);

const tsxGlob = `**/*.tsx`;
const xoTsxOverrides = xoTypescript.overrides.find(
  ({ files }) => files.length === 1 && files.includes(tsxGlob),
);

const rootDir = process.env.PWD ?? process.cwd();

/*
 * Inspiration from:
 * https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js
 * https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
 * https://github.com/IBM/slack-wrench/blob/main/packages/eslint-config/index.js
 */
module.exports = {
  extends: [
    `xo-react/space`,
    `plugin:@next/next/recommended`,
    `plugin:@next/next/core-web-vitals`,
    `prettier`,
  ],
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  plugins: [`react`, `react-hooks`, `mui-path-imports`, `testing-library`],
  rules: {
    'react/prefer-read-only-props': `off`,
    '@next/next/no-html-link-for-pages': [
      `error`,
      path.join(rootDir, `/src/pages`),
    ],
    'mui-path-imports/mui-path-imports': `error`,
    quotes: [`error`, `backtick`],
    'react/react-in-jsx-scope': `off`,
    'react/function-component-definition': [
      `error`,
      {
        // Allow standard Template syntax
        namedComponents: `arrow-function`,
        unnamedComponents: `arrow-function`,
      },
    ],
    'no-param-reassign': [`error`, { props: true }],
  },
  overrides: [
    {
      files: [`**/*.page.tsx`, `**/*.stories.tsx`],
      rules: {
        'import/prefer-default-export': `error`,
        'import/no-default-export': `off`,
      },
    },
    {
      files: [tsxGlob],
      rules: {
        // styled component selectors
        '@typescript-eslint/restrict-template-expressions': `off`,
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
          ...xoTsxOverrides.rules[`@typescript-eslint/naming-convention`].slice(
            1,
          ),
        ],
      },
    },
    {
      files: [`**/*.spec.ts?(x)`],
      extends: [`plugin:testing-library/react`],
    },
    {
      // Config files with apis defined for us
      files: [`**/*.config.ts`],
      rules: {
        '@typescript-eslint/naming-convention': `off`,
        'import/no-default-export': `off`,
      },
    },
    {
      files: [`**/*.d.ts`],
      rules: {
        '@typescript-eslint/triple-slash-reference': `off`,
      },
    },
  ],
  settings: {
    react: {
      version: `detect`,
    },
    next: {
      rootDir,
    },
  },
};
