// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
    prettierConfig,
  {
    plugins: { import: importPlugin },
    languageOptions: {
      parserOptions: { ecmaVersion: "latest", sourceType: "module" }
    },
    settings: {
      "import/resolver": { typescript: true }
    },
    rules: {
      "no-unused-vars": "off", // TS handles this
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "import/order": ["warn", { "newlines-between": "always" }]
    }
  }
];
