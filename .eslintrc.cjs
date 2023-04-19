module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-tabs': 'off',
    'no-undef': 'off',
    'no-plusplus': 'off',
    'import/no-absolute-path': 'off',
    'max-len': 'off',
    'func-names': 'off',
    'camelcase': 'off',
    'eqeqeq': 'off',
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',
    'guard-for-in': 'off',
    'no-underscore-dangle' : 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
