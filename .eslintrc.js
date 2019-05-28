module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'comma-dangle': [2, 'only-multiline'],
    'prefer-destructuring': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'curly': 'off',
    'linebreak-style': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    'import/no-dynamic-require': 'off',
    'consistent-return': 'off',
    'no-prototype-builtins': 'off',
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'vue/valid-v-on': 'off',
    'semi': [2, 'always'],

    'indent': ['error', 2],
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
      'switchCase': 1,
      'ignores': [],
    }],

    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'any',
        'component': 'any',
      },
    }],

    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error', {
        'optionalDependencies': ['test/unit/index.js'],
      }],
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
      },
    },
    {
      'files': ['*.js'],
      'rules': {
        'vue/script-indent': 'off',
      },
    },
  ],
  'parserOptions': {
    'parser': 'babel-eslint',
  },
};
