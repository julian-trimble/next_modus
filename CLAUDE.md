# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
# Development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Quality Assurance & Linting
```bash
# Full style validation (ESLint + color check) - RUN BEFORE COMMITS
npm run validate:styles

# ESLint only
npm run lint

# Color validation only (checks for hardcoded Tailwind colors)
npm run lint:colors

# Development with strict validation
npm run dev:strict
```

### Git Hooks
- **Pre-commit**: Automatically runs `npm run validate:styles` before each commit
- **Husky setup**: Auto-installed via `npm install` (prepare script)

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router (React 19)
- **UI Components**: ShadCN/UI with Radix UI primitives
- **Styling**: Tailwind CSS v3 with Modus Design System integration
- **Icons**: @trimble-oss/modus-icons (strict validation enforced)
- **Forms**: React Hook Form with Zod validation
- **Theme**: next-themes with CSS custom properties

### Project Structure
```
app/                    # Next.js 15 App Router
├── globals.css         # CSS custom properties & theming
├── layout.tsx          # Root layout with ThemeProvider
└── styled_components/  # Component showcase section
    ├── [slug]/         # Dynamic component routes
    ├── components/     # Individual component showcases
    └── modus-icons/    # Icon gallery

components/
├── ui/                 # ShadCN base components
├── calendars/          # 32 calendar variations
├── header/             # Custom app header
├── toolbars/           # Floating toolbar components
├── panes/              # Side pane components
└── treeview/           # Tree view components

.cursor/                # Cursor AI configuration
├── rules/              # MDC rule files for AI guidance
└── mcp.json           # Model Context Protocol servers
```

### Design System Enforcement

**CRITICAL**: This project enforces strict Modus Design System compliance:

#### Required Patterns
```tsx
// ✅ Use CSS custom properties only
className="bg-card text-card-foreground border-border"
className="text-primary hover:text-primary/80"
```

#### Forbidden Patterns
```tsx
// ❌ Hardcoded colors (will fail ESLint & pre-commit)
className="bg-blue-500 text-white border-red-300"
className="text-gray-900 bg-slate-100"
```

#### Icon Usage
```tsx
// ✅ Only use validated Modus icons
import { ModusIconName } from '@trimble-oss/modus-icons/react'
<ModusIconName size="24" />

// ❌ No other icon libraries allowed
import { SomeIcon } from 'lucide-react' // Will be flagged
```

### Component Development Standards

#### File Structure
- **Maximum 300 lines** per component
- **kebab-case** file names: `user-profile.tsx`
- **PascalCase** component names: `UserProfile`
- **Client components** by default ("use client" directive)
- **Server components** only for layouts/SEO pages

#### Required Patterns
```tsx
"use client"

import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

interface UserProfileProps extends ComponentProps<"div"> {
  // Props definition
}

export function UserProfile({ 
  className, 
  children, 
  ...props 
}: UserProfileProps) {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {children}
    </div>
  )
}
```

### Quality Assurance Features

#### Automated Enforcement
- **ESLint rules**: Block hardcoded Tailwind colors at build time
- **Pre-commit hooks**: Prevent commits with style violations
- **Color linting script**: Custom script checks for hardcoded colors in .tsx files
- **Husky integration**: Automatically installed on `npm install`

#### Validation Workflow
1. ESLint catches violations during development
2. Pre-commit hook runs `npm run validate:styles`
3. Custom color validation script scans `app/` and `components/` directories
4. Commit blocked if any violations found

### Cursor AI Integration

This project includes comprehensive AI assistance through `.cursor/` configuration:
- **Framework standards** for Next.js 15 + React 19
- **Styling guidelines** for Modus Design System
- **Code quality standards** with file size limits
- **Icon validation** against official Modus icon list
- **MCP servers** for Figma and Context7 integration

### Testing
No test framework is currently configured. When adding tests, check existing patterns first.

### Important Notes
- **No hardcoded colors ever** - use CSS custom properties from `globals.css`
- **Modus icons only** - validated against official icon list
- **Client components by default** for UI components
- **Mobile-first responsive design** required
- **Accessibility standards** must be met (ARIA labels, keyboard nav)
- **Git hooks work automatically** after `npm install`