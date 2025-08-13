# Cursor Memories Guide

A comprehensive guide to using Cursor Memories for maintaining project context and improving AI assistance quality in our Next.js 15 + React 19 + Modus design system project.

## What are Cursor Memories?

Cursor Memories are automatically generated rules based on your conversations in Chat that maintain context across sessions. According to the [Cursor documentation](https://docs.cursor.com/context/memories), memories are scoped to your project and help the AI remember important decisions, patterns, and preferences you've established.

## How Memories Work

### 1. Automatic Creation (Sidecar Observation)

- Cursor uses a background model that observes your conversations
- Automatically extracts relevant memories as you work
- **Requires user approval** before being saved for trust and control

### 2. Manual Creation (Tool Calls)

- Agent creates memories directly when you ask it to remember something
- Triggered when the AI notices important information for future sessions
- Can be created explicitly through chat commands

## Managing Memories

Access and manage memories through: **Cursor Settings → Rules**

## Add these to your Cursor

Here are 14 essential memories to establish for our project:

### 1. Framework & Architecture Memory

```markdown
**Memory: Framework Standards**
This project uses Next.js 15 with App Router exclusively (no Pages Router), React 19 with Client Components as default for UI showcase purposes, and TypeScript in strict mode. Use Server Components only for static layouts, SEO pages, and server-side data fetching. Prioritize client-side interactivity and leverage React 19 features like use(), useActionState, and useOptimistic. File naming is kebab-case for files and PascalCase for components - this is non-negotiable.
```

### 2. Modus Styled Components Memory

```markdown
**Memory: Modus Styled Component Standards**
CRITICAL: Always use Modus styled components from /components/ui and /components over native HTML elements. These are ShadCN UI components styled with Modus design system. Use <Button> (from @/components/ui/button.tsx) instead of <button>, <Input> (from @/components/ui/input.tsx) instead of <input>, and <Textarea> instead of <textarea>. Follow the mandatory component hierarchy: Form Elements (Button, Input, Textarea, Select), Layout (Card, Separator, Tabs), Feedback (Alert, Badge, Progress), Overlays (Dialog, Sheet, Popover). Never use native HTML form elements or unstyled components. All components in /components/ui are Modus styled and should be imported from their respective files.
```

### 3. Styling & Design System Memory

```markdown
**Memory: Modus Design System Standards**
All styling must use CSS custom properties from globals.css - never hardcode values or create separate CSS files. Modus Icons are the ONLY icon system allowed using <i className="modus-icons">icon_name</i> pattern. No Lucide, Heroicons, or any other icon libraries are permitted. Always validate icon names against the modus-icon-names list. Dark mode support is automatic through CSS custom properties.
```

### 4. Code Quality Memory

```markdown
**Memory: Code Quality Standards**
Components must be under 300 lines, functions under 50 lines, and maximum 5 useState calls per component. Always use early returns, avoid deep nesting, and follow the mandatory component template structure with Modus styled components from /components/ui and /components. Include JSDoc documentation, proper error handling, and accessibility attributes (ARIA labels, keyboard navigation). Performance is critical - use proper memoization and React 19 patterns.
```

### 5. Component Development Memory

```markdown
**Memory: Component Development Process**
When creating components, always start with "use client" directive and the mandatory template including Modus styled components from /components/ui and /components, proper TypeScript interfaces, CSS custom properties for styling, and the established file organization pattern. Use <Button>, <Input>, <Card>, and other Modus styled components instead of native HTML. Components should be performant, accessible, and follow the kebab-case file naming convention. Include proper error boundaries and loading states where appropriate.
```

### 6. Icon Usage Memory

```markdown
**Memory: Modus Icons Validation - Always Use @modus-icon-names.mdc**
CRITICAL: Always validate Modus icon names against the @modus-icon-names.mdc rule before using them. Many icons fail to render due to name mismatches. When selecting icons, search the complete list in @modus-icon-names.mdc to find exact names. Common mistakes include using "rocket_launch" instead of available alternatives, or assuming standard icon names exist. Always cross-reference the comprehensive icon list to ensure proper rendering. Use the search functionality to find valid alternatives when desired icon names don't exist in the official list. Common alternatives: gear→settings, user→person, trash→delete, plus→add, minus→remove, edit→edit_combination, save→save_disk. Never import other icon libraries (Lucide, Heroicons, etc.).
```

### 7. Performance & Best Practices Memory

```markdown
**Memory: Performance Standards**
Prioritize Client Components for UI showcase components with interactive features. Use Server Components only for static layouts, SEO pages, and server-side data fetching. Use dynamic imports for heavy components with proper loading states. Leverage React 19 features (use() instead of useEffect+useState, useOptimistic for UI updates). Always use Modus styled components from /components/ui and /components and CSS custom properties from globals.css. Implement proper error handling with ErrorBoundary components.
```

### 8. Linting & Validation Memory

```markdown
**Memory: Mandatory Linting Validation**
CRITICAL: Always run `npm run validate:styles` before considering any task complete. This command runs comprehensive validation including ESLint rules that catch hardcoded Tailwind colors (text-blue-500, bg-red-400, border-l-green-500, etc.) and enforces CSS custom properties usage from globals.css. Pre-commit hooks prevent committing code with violations. Never skip this validation step - it's mandatory for maintaining design system compliance and preventing hardcoded color violations. Common commands: `npm run lint:colors` (color check only), `npm run lint` (ESLint only), `npm run validate:styles` (comprehensive validation).
```

### 9. Documentation Update Memory

```markdown
**Memory: Documentation Maintenance Standards**
After major component or feature development, occasionally update @project-structure.md and @README.md to reflect new additions, architectural changes, or significant feature enhancements. This includes: adding new components to the component listings, updating directory structures when new folders are added, documenting new custom components in the "Custom Components" section, updating feature lists and tech stack information, and ensuring the project tree view reflects the current state. This keeps documentation current and helpful for new developers and project understanding.
```

### 10. **CRITICAL** Todo List Management Memory

```markdown
**Memory: CRITICAL - Mandatory Todo List Creation**
CRITICAL: Always create a comprehensive todo list using the todo_write tool before starting ANY development task. Requirements: BEFORE any development work - Create detailed todo list using `todo_write` tool, break down complex tasks into specific actionable items, update status in real-time as you work (mark in_progress/completed), focus on one task at a time - Mark only one todo as "in_progress" at any given moment, never skip this step - todo lists are mandatory for all development tasks. Every Task Must Follow: 1. 📝 CREATE TODO LIST (using todo_write tool) - NEVER SKIP, 2. 🎯 ANALYZE requirements against project standards, 3. 💻 IMPLEMENT using established patterns and best practices, 4. 🔍 REVIEW code for quality and consistency, 5. ✅ MARK TODOS COMPLETE when finished. This is non-negotiable and must be done for every single development task, no matter how small.
```

### 11. **CRITICAL** JSX Quote Escaping Memory

```markdown
**Memory: CRITICAL - JSX Quote Escaping Standards**
CRITICAL: In JSX content, always escape quotes to prevent linting errors. Use HTML entities instead of raw quotes: &ldquo; for opening quotes, &rdquo; for closing quotes, or &quot; for neutral quotes. Examples: "User Rules" → &ldquo;User Rules&rdquo;, "Settings" → &ldquo;Settings&rdquo;. Never use raw quotes (") in JSX text content as this causes linting violations. This applies to all JSX elements including <p>, <span>, <div>, and component content. Always check for quote-related linting errors and fix immediately using proper HTML entities.
```

### 12. **CRITICAL** Modus Icon Name Validation Memory

```markdown
**Memory: CRITICAL - Always Validate Modus Icon Names Before Use**
CRITICAL: Before using ANY Modus icon, ALWAYS check @modus-icon-names.mdc first to verify the icon name exists in the official list. Many icons fail to render silently due to name mismatches or assumptions about icon names. Never guess icon names or assume standard icon names exist. Always search the complete @modus-icon-names.mdc list to find the exact correct name before implementing. Common mistakes include using "gear" instead of "settings", "user" instead of "person", "trash" instead of "delete". When in doubt, search the modus-icon-names rule for alternatives. Invalid icon names result in no visual icon display, breaking the UI. This validation step is mandatory and non-negotiable for every single icon usage.
```

### 13. **Concise Summary Standards Memory**

```markdown
**Memory: Concise Summary Standards**
When providing task summaries or completion reports, keep them concise with only essential bullet points. Focus on: what was changed, key benefits, and validation status. Avoid lengthy explanations or excessive detail. Aim for 3-5 bullet points maximum that capture the core accomplishments and outcomes.
```

### 14. **CRITICAL** Color Addition Dual-File Standards Memory

```markdown
**Memory: CRITICAL - CSS Custom Properties AND Tailwind Config for Colors**
CRITICAL: When adding new colors, ALWAYS add them to BOTH @/app/globals.css AND tailwind.config.js - no exceptions. Follow this 3-step process: 1) Add to globals.css as CSS custom properties in both :root (light) and .dark (dark mode) sections using HSL format: --new-color: hsl(210 40% 98%), 2) Add to tailwind.config.js colors section using exact same name with hsl(var()) format: "new-color": "hsl(var(--new-color))", 3) Run npm run validate:styles to verify compliance. NEVER add colors to only one file - this breaks the design system because Tailwind classes won't recognize the color. Both files must be updated together. Example: globals.css gets --overlay: 0 0% 0% in both themes, tailwind.config.js gets overlay: "hsl(var(--overlay))". This ensures automatic dark/light mode support and prevents rendering issues like the overlay problem we solved.
```

## How to Create New Memories

### Method 1: Explicit Request in Chat

Simply ask the AI to remember something specific:

```
"Please remember that we always use the 'primary' variant for call-to-action buttons in this project"
```

```
"Remember that we prefer composition over prop drilling for complex state management"
```

### Method 2: During Code Review/Discussion

When discussing patterns or making decisions, explicitly state:

```
"This is important - remember that we use the 'pending' state pattern for form submissions in this project"
```

### Method 3: Correction-Based Learning

When correcting the AI's suggestions:

```
"Actually, in this project we always use useActionState for form handling instead of traditional form libraries. Please remember this for future form-related tasks."
```

### Method 4: Architecture Decisions

Document important architectural choices:

```
"Remember that we use Server Actions for all data mutations and keep client components minimal in this project"
```

## Best Practices for Memory Creation

### 1. Be Specific and Contextual

- Include WHY a decision was made, not just WHAT
- Reference project-specific constraints or requirements
- Mention related technologies or patterns

### 2. Use Clear, Actionable Language

```markdown
✅ Good: "Always use Server Components for data fetching in this Next.js 15 project"
❌ Vague: "Server Components are preferred"
```

### 3. Include Examples When Helpful

````markdown
"Remember that we use this specific error handling pattern:

```tsx
if (!data) return <ErrorDisplay error="No data found" />;
if (error) return <ErrorDisplay error={error.message} />;
```
````

````

### 4. Reference Existing Rules
```markdown
"This follows our component development standards from @new-components rule"
````

### 5. Update Memories When Patterns Evolve

- Review and update memories when architectural decisions change
- Remove outdated memories that no longer apply
- Merge related memories to avoid conflicts

## Memory Management Tips

### Regular Review

- Periodically review memories in **Cursor Settings → Rules**
- Remove or update obsolete memories
- Ensure memories don't conflict with each other

### Memory Hierarchy

1. **Project Rules** (our `.mdc` files) - Foundational standards
2. **Memories** - Session-based learnings and preferences
3. **User Rules** - Global personal preferences

### Testing Memory Effectiveness

- Ask the AI to explain project patterns to test memory retention
- Verify the AI suggests correct approaches based on established memories
- Update memories if the AI consistently misses important context

## Integration with Our Rule System

Our project uses both **Project Rules** (`.cursor/rules/*.mdc`) and **Memories**:

- **Rules**: Foundational, version-controlled standards
- **Memories**: Dynamic, session-based learnings and preferences
- **Synergy**: Memories complement rules by capturing project-specific nuances

Example workflow:

1. Rules define the foundation (Next.js 15, Modus Icons, etc.)
2. Memories capture specific preferences ("we prefer this error message format")
3. Linting enforces compliance automatically (ESLint + pre-commit hooks)
4. All systems work together to provide comprehensive AI context and quality assurance

## Common Memory Categories

### Technical Decisions

- Framework choices and configuration preferences
- Library selections and usage patterns
- Performance optimization approaches

### Team Preferences

- Code style preferences beyond what's in rules
- Preferred debugging approaches
- Team-specific terminology or naming conventions

### Project-Specific Patterns

- Custom component patterns
- Specific business logic approaches
- Integration patterns with external services

### Lessons Learned

- Solutions to previously encountered problems
- Performance bottlenecks and their solutions
- Common pitfalls to avoid

## Example Memory Creation Sessions

### Session 1: Establishing Form Patterns

```
User: "In this project, we always use Modus styled components with Server Actions and useActionState"
AI: "I'll remember that this project uses Modus styled components from /components/ui (<Button>, <Input>, <Textarea>) with Server Actions and useActionState for all form handling instead of native HTML elements or traditional form libraries."
```

### Session 2: Error Handling Preferences

```
User: "When API calls fail, we show a toast notification AND update the component state"
AI: "Noted - I'll remember that error handling in this project requires both toast notifications and component state updates for API failures."
```

### Session 3: Component Organization

```
User: "We organize our components by feature, not by type, and always use Modus styled components"
AI: "I'll remember that this project organizes components by feature (e.g., /user-profile/, /dashboard/) rather than by type (e.g., /buttons/, /inputs/), and always uses Modus styled components from /components/ui like <Button>, <Card>, <Input> instead of native HTML elements."
```

### Session 4: Validation Requirements

```
User: "Before any task is complete, always run npm run validate:styles to check for hardcoded colors and ESLint violations"
AI: "I'll remember that validation with `npm run validate:styles` is mandatory before completing any task. This ensures no hardcoded Tailwind colors slip through and maintains strict compliance with CSS custom properties from globals.css. The command includes both ESLint validation and color checking."
```

### Session 5: Todo List Workflow

```
User: "Every development task must start with creating a todo list using the todo_write tool"
AI: "I'll remember that creating a comprehensive todo list using the `todo_write` tool is CRITICAL and mandatory before starting ANY development task. I must break down tasks into specific actionable items, update status in real-time (in_progress/completed), focus on one task at a time, and follow the 5-step process: 1. CREATE TODO LIST, 2. ANALYZE requirements, 3. IMPLEMENT, 4. REVIEW, 5. MARK COMPLETE. This is non-negotiable for every development task."
```

### Session 6: Color Management Standards

```
User: "When adding new colors, always add them to globals.css as CSS custom properties - never use inline colors or hardcoded values"
AI: "I'll remember that all new colors must be added to @/app/globals.css as CSS custom properties in both :root and .dark sections using HSL values. Never use inline colors, hex codes, rgb values, or hardcoded Tailwind colors like bg-blue-500. This ensures automatic dark/light mode support and Modus design system compliance. I must always run npm run validate:styles to verify no hardcoded colors are used."
```

### Session 7: Modus Icon Validation

```
User: "Before using any Modus icon, always check @modus-icon-names.mdc first - many icons fail silently due to wrong names"
AI: "I'll remember that before using ANY Modus icon, I must ALWAYS check @modus-icon-names.mdc first to verify the icon name exists in the official list. Never guess icon names or assume standard names exist. Invalid icon names fail silently, breaking the UI. I must search the complete modus-icon-names rule to find exact correct names. Common mistakes: 'gear'→'settings', 'user'→'person', 'trash'→'delete'. This validation step is mandatory and non-negotiable for every single icon usage."
```

### Session 8: Dual-File Color Management

```
User: "When adding new colors, always add them to both globals.css AND tailwind.config.js - the overlay issue we just fixed happened because I only added to one file"
AI: "I'll remember that when adding new colors, I must ALWAYS add them to BOTH @/app/globals.css AND tailwind.config.js - no exceptions. I'll follow the 3-step process: 1) Add to globals.css as CSS custom properties in both :root and .dark sections using HSL values, 2) Add to tailwind.config.js colors section using hsl(var(--color-name)) format with exact name matching, 3) Run npm run validate:styles to verify compliance. NEVER add colors to only one file - this breaks the design system because Tailwind classes won't work. Both files must be updated together for colors to function properly."
```

By establishing these boilerplate memories and following the creation guidelines, you'll have a more intelligent and context-aware AI assistant that understands your project's specific patterns and preferences. The memories will work alongside your comprehensive rule system and automated linting validation to provide consistent, high-quality assistance with automatic quality assurance.
