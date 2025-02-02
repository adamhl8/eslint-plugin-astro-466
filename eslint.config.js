import astro from "eslint-plugin-astro"
import jsxA11y from "eslint-plugin-jsx-a11y"
import eslintJs from "@eslint/js"

export default [
  eslintJs.configs.recommended,
  ...astro.configs['flat/recommended'],
  ...astro.configs['jsx-a11y-recommended'],
  jsxA11y.flatConfigs.recommended,
]
