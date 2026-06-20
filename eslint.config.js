import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "build",
      "node_modules",
      "*.config.ts",
      "*.config.js",
      // Generated shadcn/ui primitives — not hand-maintained.
      "src/components/ui/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser },
    },
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // External-sync setState in effects (e.g. matchMedia listeners) is a
      // legitimate pattern here; surface it as a warning, not a build error.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
);
