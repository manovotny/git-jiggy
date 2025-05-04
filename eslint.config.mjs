import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  {
    extends: ["js/recommended"],
    files: ["index.mjs"],
    ignores: ["**/.json"],
    plugins: {
      js,
    },
  },
]);
