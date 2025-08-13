import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["scripts/**/*"],
  },
  {
    rules: {
      // Prevent hardcoded Tailwind colors
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Literal[value=/text-(blue|green|red|purple|orange|teal|yellow|pink|indigo|gray|slate|zinc|neutral|stone|cyan|sky|violet|fuchsia|rose|amber|lime|emerald|sapphire)-\\d+/]",
          message:
            "Use CSS custom properties from globals.css instead of hardcoded Tailwind colors. Example: use 'text-primary' instead of 'text-[color]-[number]'",
        },
        {
          selector:
            "Literal[value=/border-([lrtb]-)?(?:blue|green|red|purple|orange|teal|yellow|pink|indigo|gray|slate|zinc|neutral|stone|cyan|sky|violet|fuchsia|rose|amber|lime|emerald|sapphire)-\\d+/]",
          message:
            "Use CSS custom properties from globals.css instead of hardcoded Tailwind colors. Example: use 'border-primary' instead of 'border-[color]-[number]'",
        },
        {
          selector:
            "Literal[value=/bg-(blue|green|red|purple|orange|teal|yellow|pink|indigo|gray|slate|zinc|neutral|stone|cyan|sky|violet|fuchsia|rose|amber|lime|emerald|sapphire)-\\d+/]",
          message:
            "Use CSS custom properties from globals.css instead of hardcoded Tailwind colors. Example: use 'bg-primary' instead of 'bg-[color]-[number]'",
        },
      ],
    },
  },
];

export default eslintConfig;
