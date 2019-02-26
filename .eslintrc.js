module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 1,
    'jsx-quotes': [2, 'prefer-double'],
    'arrow-spacing': 2,
    'semi': [2, 'never'],
    'camelcase': 2,
    'no-unused-vars': 1,
    'no-undef': 1,
    'no-console': 1,
    'eol-last': 1,
  },
  plugins: ['react', 'eslint-plugin-react'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.1',
    },
  },
}
