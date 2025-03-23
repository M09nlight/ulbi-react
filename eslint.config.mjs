import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
// import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
// import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': eslintReactHooks,
      react: eslintReact,
      'react-refresh': eslintReactRefresh,
      // prettier: prettierPlugin,
      // i18next: i18next,
    },
  },
  {
    ignores: ['node_modules', 'build'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // i18next.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
        __IS_DEV__: true,
      },
      parserOptions: eslintReact.configs.recommended.parserOptions,
      // parserOptions: {
      //   project: ['tsconfig.json', 'tsconfig.node.json'],
      // },
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      // ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'no-empty-pattern': 'warn',
      // 'i18next/no-literal-string': [
      //   'error',
      //   { markupOnly: true },
      //   { ignoreAttribute: ['data-testid'] },
      // ],
      // 'i18next/no-unsafe-key': 'warn',

      // 'import/no-unresolved': 'off',
      // 'import/prefer-default-export': 'off',
      // 'react/require-default-props': 'off',
      // 'react/react-in-jsx-scope': 'off',
      // 'react/jsx-props-no-spreading': 'warn',
      // 'react/function-component-definition': 'off',
      // 'no-shadow': 'off',
      // 'import/extensions': 'off',
      // 'import/no-extraneous-dependencies': 'off',
      // 'no-underscore-dangle': 'off',
      // 'max-len': ['error', { ignoreComments: true, code: 100 }],
    },
  }
);
// export default [
//   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   {
//     rules: {
//       'no-unused-vars': 'warn',
//       'no-undef': 'warn',
//     },
//   },
//   ...tseslint.configs.recommended,
//   eslintReact.configs.flat.recommended,
// ];
