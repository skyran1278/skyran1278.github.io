/**
 * https://www.npmjs.com/package/eslint-config-airbnb-typescript
 * https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
 * https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint plugins vs extends
 */
module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  plugins: [
    /**
     * tells ESLint to load the plugin package you installed (@typescript-eslint/eslint-plugin).
     * This allows you to use the rules within your codebase.
     */
    '@typescript-eslint',
    // https://www.npmjs.com/package/eslint-plugin-jest
    'jest',
    // https://www.npmjs.com/package/eslint-plugin-promise
    'promise',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  //  tells our parser the relative path where your project's tsconfig.json is.
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['prettier.config.js', '.eslintrc.js'],
};
