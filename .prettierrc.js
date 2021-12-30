module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
};
