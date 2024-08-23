// typescript
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    'prettier-plugin-embed',
    'prettier-plugin-sql',

    // prettier-plugin-import-sort should be place after prettier-plugin-embed
    'prettier-plugin-import-sort',

    // https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
    // MUST come last
    'prettier-plugin-tailwindcss',
  ],
  language: 'postgresql',
  keywordCase: 'upper',
  expressionWidth: 1000,
};
