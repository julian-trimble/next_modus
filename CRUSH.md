# CRUSH.md

- Build/Lint/Test commands
  - Build: npm run build
  - Dev: npm run dev
  - Start: npm run start
  - Lint: npm run lint
  - Style validation: npm run validate:styles
  - Color lint: npm run lint:colors
  - Run single test: npx vitest run -t "<test-name>" (or npx jest -t "<name>")

- Code style guidelines
  - Filenames: kebab-case; Components: PascalCase; imports grouped as React/Next, 3rd party, internal
  - Types: TS strict, no any; prefer interfaces/types over loose objects
  - Imports: use path aliases (@/...), consistent ordering, no unused imports
  - CSS: CSS custom properties from @/app/globals.css; avoid inline colors
  - Modus Icons: Modus icons only; validate against official list; use aria-label for icon-only
  - UI framework: ShadCN components from /components/ui; never native elements in UI
  - Error handling: throw explicit errors, avoid swallowing; use robust boundaries
  - Documentation: JSDoc on complex logic; minimal inline comments; tests described

- Cursor rules (mandatory for new tasks)
  - Phase 1: create TODO list with todo_write before starting; one in-progress at a time
  - Phase 2-6: follow memory rules, validation, and commit guidelines

- Copilot rules
  - If present, refer to .github/copilot-instructions.md and follow prompts
