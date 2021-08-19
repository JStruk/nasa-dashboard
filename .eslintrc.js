const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 2020,
  sourceType: 'module',
}

const rules = {
  'no-use-before-define': 'off',
  'react/react-in-jsx-scope': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
}

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  globals: {
    Sfdc: 'readonly',
    JSX: 'readonly',
  },
  plugins: ['react'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions,
  rules,
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      plugins: ['react', '@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions,
      rules,
    },
  ],
}
