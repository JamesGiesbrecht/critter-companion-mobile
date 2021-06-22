module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    // 'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
    // 'prettier'
  ],
  rules: {
    'import/extensions': 'off',
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': 'error',
    // 'no-underscore-dangle': 'off',
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { ObjectPattern: { multiline: true } }],
    semi: ['error', 'never'],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // 'no-case-declarations': 'off',
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'prettier/prettier': [
    //   'warn',
    //   {
    //     jsxBracketSameLine: true,
    //     singleQuote: true,
    //     trailingComma: 'all',
    //     printWidth: 100,
    //     semi: false,
    //   },
    // ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
