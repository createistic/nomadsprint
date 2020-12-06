module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "no-use-before-define": ["error", { variables: false }],
    // "no-use-before-define": "off",
    // "@typescript-eslint/no-use-before-define": ["error"],
  },
};
