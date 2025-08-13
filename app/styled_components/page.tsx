"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { CodeBlock } from "@/components/ui/code-block";

export default function BoilerplateOverview() {
  const projectStructureCode = `.
├── .cursor/                          # Cursor AI configuration and rules
│   ├── rules/                        # Custom MDC rule files for AI assistance
│   │   ├── 1-framework-standards.mdc # Framework requirements and patterns
│   │   ├── 2-styling-design-system.mdc # Styling & Design System standards
│   │   ├── 3-code-quality-standards.mdc # Code quality and performance
│   │   ├── 4-modus-icons-reference.mdc # Modus Icons validation reference
│   │   ├── 5-validation-workflow.mdc # Development workflow and validation
│   │   └── modus-icon-names.mdc     # Complete list of valid Modus icon names
│   └── mcp.json                     # Model Context Protocol configuration
├── add_these_manually/              # Manual setup documentation
│   ├── cursor-memories-guide.md     # Guide for Cursor AI memory management
│   └── user-rule.md                 # Complete user rules and behavioral requirements
├── app/                             # Next.js 15 App Router directory
│   ├── favicon.ico                  # Application favicon
│   ├── globals.css                  # Global styles with CSS custom properties
│   ├── layout.tsx                   # Root layout with theme provider
│   ├── page.tsx                     # Main landing page with project overview
│   └── styled_components/           # Component showcase and demo section
│       ├── [slug]/                  # Dynamic routing for component demos
│       ├── components/              # Individual component showcase (50+ components)
│       ├── cursor-rules/            # Cursor AI rules demonstration page
│       ├── floating-toolbar/        # Floating toolbar component demo
│       ├── header/                  # Application header component demo
│       ├── mcp/                     # Model Context Protocol demonstration
│       ├── modus-icons/             # Modus Icons comprehensive demo
│       ├── side-pane/               # Side pane component demo
│       ├── toolbar-builder/         # Advanced toolbar builder utility
│       └── treeview/                # Tree view component demo
├── components/                       # Reusable React components library
│   ├── calendars/                    # 32 pre-built calendar variations
│   ├── charts/                       # Chart component library
│   ├── header/                       # Application header components
│   ├── panes/                        # Panel and pane components
│   ├── toolbars/                     # Toolbar component library
│   ├── treeview/                     # Tree view components
│   ├── ui/                           # ShadCN UI component library (50+ components)
│   ├── copy-button.tsx              # Clipboard copy functionality
│   ├── mode-toggle.tsx              # Light/dark theme switcher
│   └── theme-provider.tsx           # Theme context provider
├── hooks/                            # Custom React hooks
├── lib/                              # Utility functions and helpers
├── public/                           # Static assets served from root
│   ├── trimble_product_logos/       # Trimble product brand assets
│   ├── demo.png                     # Application demo screenshot
│   └── modus-logo.svg               # Modus design system logo
├── components.json                   # ShadCN UI configuration
├── eslint.config.mjs                # ESLint configuration with custom rules
├── next.config.ts                   # Next.js configuration
├── package.json                     # Project dependencies and scripts
├── project-structure.md             # Complete project documentation
├── README.md                        # Project overview and setup instructions
├── tailwind.config.js               # Tailwind CSS with Modus theme
└── tsconfig.json                    # TypeScript compiler configuration`;

  const techStackCode = `{
  "framework": "Next.js 15",
  "react": "React 19",
  "styling": "Tailwind CSS v3",
  "components": "ShadCN/UI",
  "icons": "Modus Icons",
  "language": "TypeScript",
  "ai": "Cursor AI Integration",
  "features": [
    "App Router",
    "Server Components", 
    "Client Components",
    "CSS Custom Properties",
    "Dark/Light Theming",
    "Responsive Design",
    "AI-Assisted Development"
  ]
}`;

  const aiIntegrationCode = `# Cursor AI Configuration

## Project Rules (.cursor/rules/)
- code-rules.mdc: Quality standards & best practices
- modus-icons-usage.mdc: Icon system validation
- new-components.mdc: Component development templates
- nextjs15-framework.mdc: Framework-specific patterns

## Benefits
✅ Intelligent code generation following project patterns
✅ Automatic enforcement of Modus design system
✅ Real-time validation of icon usage
✅ Context-aware assistance across sessions
✅ Consistent architecture and naming conventions`;

  return (
    <div className="mx-auto max-w-4xl space-y-16 p-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Next.js 15 Modus Boilerplate
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          A comprehensive development boilerplate combining Next.js 15, React
          19, TypeScript, ShadCN UI, Modus Design System, and AI-powered
          development tools for modern web applications.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Next.js 15</Badge>
          <Badge variant="secondary">React 19</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">ShadCN UI</Badge>
          <Badge variant="secondary">Modus Icons</Badge>
          <Badge variant="secondary">Cursor AI</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Boilerplate Features
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-secondary-foreground">layers</i>
                Modern Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Next.js 15 with App Router</li>
                <li>• React 19 Server Components</li>
                <li>• TypeScript strict mode</li>
                <li>• Modern React patterns</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-secondary-foreground">mix</i>
                AI Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cursor AI configuration</li>
                <li>• Project-specific rules</li>
                <li>• Intelligent code generation</li>
                <li>• Quality enforcement</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-accent-foreground">palette</i>
                Design System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Modus Design System</li>
                <li>• ShadCN UI components</li>
                <li>• Dark/light mode support</li>
                <li>• CSS custom properties</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-secondary-foreground">code</i>
                Developer Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hot reload with Turbopack</li>
                <li>• ESLint configuration</li>
                <li>• Component showcases</li>
                <li>• Interactive documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-secondary-foreground">apps</i>
                Component Library
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 50+ ShadCN components</li>
                <li>• 32 calendar variations</li>
                <li>• 4 custom components</li>
                <li>• Interactive showcases</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-muted-foreground">
                  accessibility
                </i>
                Quality Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• WCAG 2.1 AA compliance</li>
                <li>• Responsive design</li>
                <li>• Performance optimized</li>
                <li>• SEO-friendly structure</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Architecture Overview */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Project Architecture
        </h2>
        <p className="text-muted-foreground">
          A well-organized, scalable structure designed for enterprise
          applications and rapid development.
        </p>
        <CodeBlock title="Project Structure" language="text">
          {projectStructureCode}
        </CodeBlock>
      </div>

      {/* Technology Stack */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Technology Stack
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock title="Tech Stack Configuration" language="json">
            {techStackCode}
          </CodeBlock>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">tune</i>
                Key Dependencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Next.js</span>
                  <Badge variant="outline">15.3.5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">React</span>
                  <Badge variant="outline">19.0.0</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">TypeScript</span>
                  <Badge variant="outline">5.x</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Tailwind CSS</span>
                  <Badge variant="outline">3.4.17</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Modus Icons</span>
                  <Badge variant="outline">1.16.0</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Integration Highlight */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Cursor AI Integration
        </h2>
        <p className="text-muted-foreground">
          Enhanced development experience with intelligent code assistance and
          project-specific rules.
        </p>
        <CodeBlock title="AI Configuration Overview" language="markdown">
          {aiIntegrationCode}
        </CodeBlock>
      </div>
    </div>
  );
}
