module.exports = {
  root: true,
  env: {
    es2020: true,
    browser: true,
    node: true,
    commonjs: true,
  },
  plugins: ['prettier'],
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    // ecmaVersion: 2020,
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'react/display-name': 'off',
    'linebreak-style': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
