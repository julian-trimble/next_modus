"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CursorRulesPage() {
  // Rule 1: Framework Standards
  const frameworkStandardsContent = `# Framework Standards & Development Workflow

**MANDATORY**: Create todo list using \`todo_write\` tool before ANY development task.

## Core Requirements

- **Next.js 15 + React 19**: App Router only, client components default for UI
- **File Naming**: kebab-case files, PascalCase components (non-negotiable)
- **ShadCN Components**: Always use from \`/components/ui\` - never native HTML
- **React 19 Features**: Use \`use()\`, \`useActionState\`, \`useOptimistic\`

## Mandatory Workflow

1. 📝 **CREATE TODO LIST** (using \`todo_write\` tool) - NEVER SKIP
2. 🎯 **ANALYZE** requirements against project standards
3. 💻 **IMPLEMENT** using established patterns
4. 🔍 **REVIEW** code for quality and consistency
5. ✅ **VALIDATE** with \`npm run validate:styles\` - MANDATORY
6. ✅ **MARK TODOS COMPLETE** when finished

## Key Success Metrics

- [ ] Todo list created for every task
- [ ] ShadCN components used exclusively
- [ ] CSS custom properties only (no hardcoded colors)
- [ ] Validation passes (\`npm run validate:styles\`)
- [ ] React 19 patterns leveraged
- [ ] Components under 300 lines, functions under 50 lines`;

  // Rule 2: Styling & Design System
  const stylingDesignSystemContent = `# Styling & Design System Standards

**CRITICAL**: All styling must use CSS custom properties from \`@/app/globals.css\`.

## CSS Custom Properties (MANDATORY)

- Use \`text-primary\`, \`bg-card\`, \`border-border\` - never hardcoded colors
- Add new colors to globals.css in both \`:root\` and \`.dark\` sections
- Run \`npm run validate:styles\` to verify compliance

## Modus Icons (ONLY ICON SYSTEM ALLOWED)

- Use \`<i className="modus-icons">icon_name</i>\` pattern only
- Validate icon names against official list before using
- Common alternatives: gear→settings, user→person, trash→delete

## Accessibility & Dark Mode

- Include aria-label for icon-only buttons
- Dark mode is automatic with CSS custom properties
- Escape quotes in JSX: use \`&ldquo;\` and \`&rdquo;\`

## Key Compliance Checklist

- [ ] Only CSS custom properties used (no hardcoded colors)
- [ ] Only Modus icons used (no other icon libraries)
- [ ] Icon names validated against official list
- [ ] Proper ARIA labels for accessibility
- [ ] Validation passes (\`npm run validate:styles\`)`;

  // Rule 3: Code Quality Standards
  const codeQualityStandardsContent = `# Code Quality & Performance Standards

**MANDATORY**: Components under 300 lines, functions under 50 lines, max 5 useState calls.

## Size & Complexity Limits

- **Maximum 300 lines** per component file
- **Maximum 50 lines** per function
- **Maximum 5 useState** calls per component
- Split larger components into sub-components

## Naming Conventions

- Files: kebab-case (\`user-profile.tsx\`)
- Components: PascalCase (\`UserProfile\`)
- Functions: camelCase with verb + noun (\`fetchUserData\`)
- Booleans: question format (\`isLoading\`, \`hasPermission\`)

## Performance & Error Handling

- Use React 19 features: \`use()\`, \`useActionState\`, \`useOptimistic\`
- Dynamic imports for heavy components
- Wrap components with ErrorBoundary
- Include JSDoc for complex functions

## Quality Assurance Checklist

- [ ] Size limits: Component <300 lines, functions <50 lines
- [ ] Early returns used to avoid deep nesting
- [ ] Proper error handling and accessibility
- [ ] React 19 patterns and memoization
- [ ] \`npm run validate:styles\` passes`;

  // Rule 4: Modus Icons Reference
  const modusIconsReferenceContent = `# Modus Icons Reference & Validation

**CRITICAL**: Modus Icons are the ONLY icon system allowed. Always validate names.

## Icon Validation Process (MANDATORY)

1. **Check icon exists** in official Modus Icons collection
2. **Use correct syntax**: \`<i className="modus-icons">icon_name</i>\`
3. **Test rendering** - invalid names fail silently

## Common Icon Categories

### Navigation & Actions
\`menu\`, \`close\`, \`arrow_back\`, \`home\`, \`dashboard\`, \`search\`, \`settings\`

### CRUD Operations
\`add\`, \`edit_combination\`, \`delete\`, \`save_disk\`, \`download\`, \`upload\`

### Status & Feedback
\`check_circle\`, \`cancel_circle\`, \`warning\`, \`info\`, \`help\`, \`alert\`

### Content Types
\`file\`, \`folder_open\`, \`document\`, \`image\`, \`calendar\`, \`email\`

## Common Mistakes & Corrections

- gear → \`settings\`
- user → \`person\`
- trash → \`delete\`
- plus → \`add\`
- edit → \`edit_combination\`
- save → \`save_disk\`

## Key Rules Summary

1. **Modus Icons ONLY** - No other icon libraries allowed
2. **Validate Names** - Always verify icon exists before using
3. **Proper Syntax** - Use \`<i className="modus-icons">name</i>\` pattern
4. **Accessibility** - Include aria-label for icon-only elements`;

  // Rule 5: Validation Workflow
  const validationWorkflowContent = `# Validation & Development Workflow

**CRITICAL**: Every development task MUST follow this workflow. No exceptions.

## Mandatory Development Workflow

### Phase 1: Todo List Creation (NEVER SKIP)
📝 CREATE TODO LIST using \`todo_write\` tool before any development work

### Phase 2: Analysis & Planning
🎯 ANALYZE requirements against project standards

### Phase 3: Implementation
💻 IMPLEMENT using established patterns

### Phase 4: Code Review
🔍 REVIEW code for quality and consistency

### Phase 5: Validation (MANDATORY)
✅ VALIDATE with automated tools - REQUIRED

### Phase 6: Completion
✅ MARK TODOS COMPLETE when finished

## Critical Validation Commands

\`\`\`bash
# MANDATORY before task completion
npm run validate:styles    # Comprehensive validation (REQUIRED)
npm run lint:colors       # Color validation only
npm run lint              # ESLint validation
npm run build             # Production build check
\`\`\`

## Success Metrics

- [ ] **100% validation pass rate** - All checks pass consistently
- [ ] **Zero hardcoded colors** - CSS custom properties used exclusively
- [ ] **Valid Modus icons only** - No rendering failures
- [ ] **ShadCN components used** - No native HTML elements in UI
- [ ] **React 19 patterns** - Modern hooks and patterns utilized
- [ ] **Todo workflow followed** - Systematic task management`;

  // Updated User Rules content (keeping the existing user rule content but shortened)
  const userRuleContent = `# User Rules - Personal Workflow & Preferences

Quick reference for personal development workflow and communication guidelines.

## Rule 1: Mandatory Todo List Creation

**CRITICAL**: Always create todo list using \`todo_write\` tool before ANY development task.

\`\`\`
Requirements:
- Create detailed todo list using \`todo_write\` tool BEFORE development work
- Break down complex tasks into specific, actionable items
- Update status in real-time (mark in_progress/completed)
- Focus on one task at a time
- Never skip this step - mandatory for all development tasks
\`\`\`

## Rule 2: Communication & Progress Tracking

- Be concise and focused - avoid unnecessary repetition
- Proactively explain architectural decisions
- Ask clarifying questions when requirements are unclear
- Provide progress updates by updating todo status visibly

## Rule 3: Development Standards & Code Quality

- Follow project's file and directory structure conventions
- Use consistent naming patterns across the codebase
- Implement proper error handling and edge case management
- Write self-documenting code with clear interfaces

## Rule 4: Project Consistency & Pattern Following

- Always reference project technical standards before starting work
- Use established component templates and patterns for consistency
- Follow project styling conventions and design system
- Prioritize code quality and maintainability in all implementations

## Rule 5: Quality Assurance & Completion Standards

Before Completing Any Task:
- [ ] Todo list created and all items marked complete
- [ ] Code follows project technical standards
- [ ] Uses project's established component patterns
- [ ] Maintains consistency with project conventions
- [ ] Personal satisfaction with code quality and clarity

## Core Principles Summary

1. **Systematic Approach**: Always use todo lists for complex tasks
2. **Quality First**: Follow established patterns and standards
3. **Clear Communication**: Explain decisions and ask questions
4. **Pattern Consistency**: Leverage project conventions effectively
5. **Progress Transparency**: Keep todo lists updated for visibility`;

  // Updated Cursor Memories Guide content (shortened)
  const cursorMemoriesGuideContent = `# Cursor Memories Guide

Comprehensive guide to using Cursor Memories for maintaining project context.

## What are Cursor Memories?

Cursor Memories are automatically generated rules based on your conversations that maintain context across sessions. They help the AI remember important decisions, patterns, and preferences.

## Essential Memories for Our Project

### 1. Framework & Architecture Memory
\`\`\`markdown
**Memory: Framework Standards**
This project uses Next.js 15 with App Router exclusively, React 19 with Client Components as default for UI showcase, and TypeScript in strict mode. File naming is kebab-case for files and PascalCase for components - non-negotiable.
\`\`\`

### 2. Modus Styled Components Memory
\`\`\`markdown
**Memory: Modus Styled Component Standards**
CRITICAL: Always use Modus styled components from /components/ui over native HTML elements. Use <Button> instead of <button>, <Input> instead of <input>. All components in /components/ui are Modus styled.
\`\`\`

### 3. Styling & Design System Memory
\`\`\`markdown
**Memory: Modus Design System Standards**
All styling must use CSS custom properties from globals.css. Modus Icons are the ONLY icon system allowed using <i className="modus-icons">icon_name</i> pattern. Always validate icon names.
\`\`\`

### 4. Code Quality Memory
\`\`\`markdown
**Memory: Code Quality Standards**
Components under 300 lines, functions under 50 lines, max 5 useState calls. Use early returns, Modus styled components, proper TypeScript interfaces, and CSS custom properties.
\`\`\`

### 5. Todo List Management Memory (CRITICAL)
\`\`\`markdown
**Memory: CRITICAL - Mandatory Todo List Creation**
CRITICAL: Always create comprehensive todo list using todo_write tool before ANY development task. Break down tasks, update status real-time, focus on one task. This is non-negotiable for every development task.
\`\`\`

### 6. Validation Requirements Memory
\`\`\`markdown
**Memory: Mandatory Linting Validation**
CRITICAL: Always run \`npm run validate:styles\` before completing any task. Catches hardcoded colors and enforces CSS custom properties. Never skip validation.
\`\`\`

## How to Create New Memories

### Method 1: Explicit Request
\`\`\`
"Please remember that we always use the 'primary' variant for call-to-action buttons"
\`\`\`

### Method 2: During Code Review
\`\`\`
"Remember that we use the 'pending' state pattern for form submissions"
\`\`\`

### Method 3: Correction-Based Learning
\`\`\`
"We always use useActionState for forms. Please remember this for future tasks."
\`\`\`

## Best Practices

1. **Be Specific**: Include WHY decisions were made, not just WHAT
2. **Use Clear Language**: Make memories actionable and contextual
3. **Include Examples**: Reference specific code patterns when helpful
4. **Regular Review**: Update memories when patterns evolve
5. **Test Effectiveness**: Verify AI suggests correct approaches

## Integration Summary

- **Rules**: Foundational, version-controlled standards
- **Memories**: Dynamic, session-based learnings and preferences
- **Synergy**: Memories complement rules by capturing project-specific nuances`;

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-8">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-3xl font-bold">Getting Started with Cursor</h1>
            <p className="text-muted-foreground">
              Project rules, documentation, and AI assistance configuration
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary">Project Rules</Badge>
          <Badge variant="secondary">AI Memories</Badge>
          <Badge variant="secondary">Code Standards</Badge>
          <Badge variant="secondary">Framework Patterns</Badge>
          <Badge variant="outline">Best Practices</Badge>
        </div>
      </div>

      {/* Getting Started with Cursor - 3 Cards */}
      <div className="space-y-6">
        <div className="grid gap-6">
          {/* Card 1: Configure User Rules */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Badge variant="secondary">1</Badge>
                <span>Configure User Rules</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Open{" "}
                <strong>Cursor Settings → Rules & Memories → User Rules</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Copy content from{" "}
                <code className="bg-muted px-1 rounded">
                  add_these_manually/user-rule.md
                </code>{" "}
                and paste it in. See the &ldquo;User Rules&rdquo; tab below for
                the complete guide.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Learn About Icons */}
          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Badge variant="secondary">2</Badge>
                <span>Icons</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  Cursor should pick the correct icon names but if not, type{" "}
                  <code className="bg-muted px-1 rounded">
                    @modus-icon-names.mdc
                  </code>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Set Up Memories */}
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Badge variant="secondary">3</Badge>
                <span>Set Up Memories</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Read{" "}
                <code className="bg-muted px-1 rounded">
                  add_these_manually/cursor-memories-guide.md
                </code>{" "}
                to learn how Cursor remembers your preferences. Copy all the
                suggested memories and paste them in Cursor Settings → Rules &
                Memories → Memories or paste to chat and submit. See the
                &ldquo;Memories&rdquo; tab below for the complete guide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Documentation Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <i className="modus-icons text-primary">file</i>
            What you will find in Rules
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="framework-standards" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-7">
              <TabsTrigger value="framework-standards">Framework</TabsTrigger>
              <TabsTrigger value="styling-design">Styling</TabsTrigger>
              <TabsTrigger value="code-quality">Quality</TabsTrigger>
              <TabsTrigger value="modus-icons">Icons</TabsTrigger>
              <TabsTrigger value="validation-workflow">Validation</TabsTrigger>
              <TabsTrigger value="user-rules">User Rules</TabsTrigger>
              <TabsTrigger value="memories">Memories</TabsTrigger>
            </TabsList>

            <TabsContent
              value="framework-standards"
              className="space-y-4 h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <i className="modus-icons text-primary">layers</i>
                <h3 className="text-xl font-semibold">
                  1. Framework Standards & Development Workflow
                </h3>
              </div>
              <CodeBlock
                language="markdown"
                title=".cursor/rules/1-framework-standards.mdc"
                showLineNumbers
              >
                {frameworkStandardsContent}
              </CodeBlock>
            </TabsContent>

            <TabsContent
              value="styling-design"
              className="space-y-4 h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <i className="modus-icons text-primary">palette</i>
                <h3 className="text-xl font-semibold">
                  2. Styling & Design System Standards
                </h3>
              </div>
              <CodeBlock
                language="markdown"
                title=".cursor/rules/2-styling-design-system.mdc"
                showLineNumbers
              >
                {stylingDesignSystemContent}
              </CodeBlock>
            </TabsContent>

            <TabsContent
              value="code-quality"
              className="space-y-4 h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <i className="modus-icons text-primary">code</i>
                <h3 className="text-xl font-semibold">
                  3. Code Quality & Performance Standards
                </h3>
              </div>
              <CodeBlock
                language="markdown"
                title=".cursor/rules/3-code-quality-standards.mdc"
                showLineNumbers
              >
                {codeQualityStandardsContent}
              </CodeBlock>
            </TabsContent>

            <TabsContent
              value="modus-icons"
              className="space-y-4 h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <i className="modus-icons text-primary">icons_shapes</i>
                <h3 className="text-xl font-semibold">
                  4. Modus Icons Reference & Validation
                </h3>
              </div>
              <CodeBlock
                language="markdown"
                title=".cursor/rules/4-modus-icons-reference.mdc"
                showLineNumbers
              >
                {modusIconsReferenceContent}
              </CodeBlock>
            </TabsContent>

            <TabsContent
              value="validation-workflow"
              className="space-y-4 h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <i className="modus-icons text-primary">check_circle</i>
                <h3 className="text-xl font-semibold">
                  5. Validation & Development Workflow
                </h3>
              </div>
              <CodeBlock
                language="markdown"
                title=".cursor/rules/5-validation-workflow.mdc"
                showLineNumbers
              >
                {validationWorkflowContent}
              </CodeBlock>
            </TabsContent>

            <TabsContent
              value="user-rules"
              className="space-y-4 h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <i className="modus-icons text-primary">person</i>
                <h3 className="text-xl font-semibold">User-Specific Rules</h3>
              </div>
              <CodeBlock
                language="markdown"
                title="add_these_manually/user-rule.md"
                showLineNumbers
              >
                {userRuleContent}
              </CodeBlock>
            </TabsContent>

            <TabsContent
              value="memories"
              className="space-y-4 h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <i className="modus-icons text-primary">save_disk</i>
                <h3 className="text-xl font-semibold">Cursor Memories Guide</h3>
              </div>
              <CodeBlock
                language="markdown"
                title="add_these_manually/cursor-memories-guide.md"
                showLineNumbers
              >
                {cursorMemoriesGuideContent}
              </CodeBlock>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Benefits Section */}
      <Card className="bg-gradient-to-r from-accent/10 to-accent/20 border-accent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <i className="modus-icons text-accent-foreground">check_circle</i>
            Benefits of Cursor AI Integration
          </CardTitle>
          <CardDescription>
            How this configuration enhances your development experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Development Efficiency</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Automatic code generation following project patterns</li>
                <li>• Consistent component structure and naming</li>
                <li>• Real-time validation of Modus Icons usage</li>
                <li>• Intelligent refactoring suggestions</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Quality Assurance</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Enforced coding standards and best practices</li>
                <li>• Architectural consistency across the project</li>
                <li>• Automated accessibility and performance checks</li>
                <li>• Framework-specific pattern enforcement</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
