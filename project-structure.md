# Project Structure

This is a comprehensive overview of the Next.js 15 + React 19 project structure with Modus design system integration and advanced Cursor AI assistance.

## Complete Project Tree

```
.
├── .cursor/                          # Cursor AI configuration and rules
│   ├── rules/                        # Custom MDC rule files for AI assistance
│   │   ├── code-rules.mdc           # Code quality standards and best practices
│   │   ├── modus-icon-names.mdc     # Complete list of valid Modus icon names
│   │   ├── modus-icons-usage.mdc    # Modus Icons usage patterns and rules
│   │   ├── new-components.mdc       # Component development standards and templates
│   │   └── nextjs15-framework.mdc   # Next.js 15 and React 19 framework patterns
│   └── mcp.json                     # Model Context Protocol configuration
├── .git/                            # Git version control system
├── .husky/                          # Git hooks for automated validation
├── .next/                           # Next.js build output and cache
├── .vscode/                         # VS Code workspace settings
├── add_these_manually/              # Manual setup documentation
│   ├── cursor-memories-guide.md     # Guide for Cursor AI memory management
│   └── user-rule.md                 # Complete user rules and behavioral requirements
├── app/                             # Next.js 15 App Router directory
│   ├── favicon.ico                  # Application favicon
│   ├── globals.css                  # Global styles with CSS custom properties for theming
│   ├── layout.tsx                   # Root layout with theme provider and global structure
│   ├── page.tsx                     # Main landing page with project overview
│   └── styled_components/           # Component showcase and demo section
│       ├── [slug]/                  # Dynamic routing for component demos
│       │   └── page.tsx             # Dynamic component showcase renderer
│       ├── components/              # Individual component showcase implementations
│       │   ├── accordion-showcase.tsx
│       │   ├── alert-dialog-showcase.tsx
│       │   ├── alert-showcase.tsx
│       │   ├── aspect-ratio-showcase.tsx
│       │   ├── avatar-showcase.tsx
│       │   ├── badge-showcase.tsx
│       │   ├── breadcrumb-showcase.tsx
│       │   ├── button-showcase.tsx
│       │   ├── calendar-showcase.tsx
│       │   ├── card-showcase.tsx
│       │   ├── carousel-showcase.tsx
│       │   ├── chart-showcase.tsx
│       │   ├── checkbox-showcase.tsx
│       │   ├── collapsible-showcase.tsx
│       │   ├── command-showcase.tsx
│       │   ├── context-menu-showcase.tsx
│       │   ├── dialog-showcase.tsx
│       │   ├── drawer-showcase.tsx
│       │   ├── dropdown-menu-showcase.tsx
│       │   ├── floating-toolbar-showcase.tsx
│       │   ├── form-showcase.tsx
│       │   ├── hover-card-showcase.tsx
│       │   ├── input-otp-showcase.tsx
│       │   ├── input-showcase.tsx
│       │   ├── label-showcase.tsx
│       │   ├── menubar-showcase.tsx
│       │   ├── navigation-menu-showcase.tsx
│       │   ├── pagination-showcase.tsx
│       │   ├── popover-showcase.tsx
│       │   ├── progress-showcase.tsx
│       │   ├── radio-group-showcase.tsx
│       │   ├── resizable-showcase.tsx
│       │   ├── scroll-area-showcase.tsx
│       │   ├── select-showcase.tsx
│       │   ├── separator-showcase.tsx
│       │   ├── sheet-showcase.tsx
│       │   ├── sidebar-showcase.tsx
│       │   ├── skeleton-showcase.tsx
│       │   ├── slider-showcase.tsx
│       │   ├── sonner-showcase.tsx
│       │   ├── switch-showcase.tsx
│       │   ├── table-showcase.tsx
│       │   ├── tabs-showcase.tsx
│       │   ├── textarea-showcase.tsx
│       │   ├── toggle-group-showcase.tsx
│       │   ├── toggle-showcase.tsx
│       │   └── tooltip-showcase.tsx
│       ├── cursor-rules/             # Cursor AI rules demonstration page
│       │   └── page.tsx              # Documentation and examples of AI assistance rules
│       ├── floating-toolbar/         # Floating toolbar component demo
│       │   ├── floating-toolbar-demo.tsx # Interactive floating toolbar demonstration
│       │   └── page.tsx              # Floating toolbar showcase page
│       ├── header/                   # Application header component demo
│       │   ├── app-header-demo.tsx   # Interactive header demonstration
│       │   └── page.tsx              # Header showcase page
│       ├── layout.tsx                # Styled components section layout with navigation
│       ├── mcp/                      # Model Context Protocol demonstration
│       │   └── page.tsx              # MCP integration showcase
│       ├── modus-icons/              # Modus Icons comprehensive demo
│       │   └── page.tsx              # Complete Modus Icons gallery and documentation
│       ├── page.tsx                  # Styled components main page with component grid
│       ├── side-pane/                # Side pane component demo
│       │   ├── page.tsx              # Side pane showcase page
│       │   └── side-pane-demo.tsx    # Interactive side pane demonstration
│       ├── toolbar-builder/          # Advanced toolbar builder utility
│       │   ├── code-generator.tsx    # Generates TypeScript code for custom toolbars
│       │   ├── configuration-area.tsx # Toolbar configuration interface
│       │   ├── item-configuration-panel.tsx # Individual toolbar item settings
│       │   ├── page.tsx              # Toolbar builder main page
│       │   ├── toolbar-builder-demo.tsx # Interactive toolbar builder demo
│       │   ├── toolbar-controls-section.tsx # Toolbar control elements
│       │   ├── toolbar-preview-section.tsx # Live toolbar preview
│       │   └── toolbar-structure-panel.tsx # Toolbar structure management
│       └── treeview/                 # Tree view component demo
│           ├── page.tsx              # Tree view showcase page
│           └── tree-view-demo.tsx    # Interactive tree view demonstration
├── components/                       # Reusable React components library
│   ├── calendars/                    # Pre-built calendar component variations
│   │   ├── calendar-01.tsx through calendar-32.tsx # 32 different calendar implementations
│   ├── charts/                       # Chart component library
│   │   ├── area-chart-interactive.tsx
│   │   ├── area-chart-legend.tsx
│   │   ├── area-chart-stacked-expanded.tsx
│   │   ├── area-chart.tsx
│   │   ├── bar-chart-custom-label.tsx
│   │   ├── bar-chart-interactive.tsx
│   │   ├── bar-chart-mixed.tsx
│   │   ├── bar-chart-multiple.tsx
│   │   ├── bar-chart-negative.tsx
│   │   ├── bar-chart-stacked-legend.tsx
│   │   ├── index.ts               # Chart components export barrel
│   │   └── line-chart-interactive.tsx
│   ├── header/                       # Application header components
│   │   ├── app-header.tsx           # Main application header component
│   │   └── index.ts                 # Header components export barrel
│   ├── panes/                        # Panel and pane components
│   │   ├── index.ts                 # Pane components export barrel
│   │   └── side-pane.tsx            # Reusable side pane component
│   ├── toolbars/                     # Toolbar component library
│   │   ├── floating-toolbar.tsx     # Floating toolbar component
│   │   └── index.ts                 # Toolbar components export barrel
│   ├── treeview/                     # Tree view components
│   │   ├── index.ts                 # Tree view components export barrel
│   │   └── tree-view.tsx            # Reusable tree view component
│   ├── ui/                           # ShadCN UI component library (Core building blocks)
│   │   ├── accordion.tsx            # Collapsible content sections
│   │   ├── alert-dialog.tsx         # Modal alert dialogs
│   │   ├── alert.tsx                # Notification alerts
│   │   ├── aspect-ratio.tsx         # Responsive aspect ratio containers
│   │   ├── avatar.tsx               # User avatar components
│   │   ├── badge.tsx                # Status and label badges
│   │   ├── breadcrumb.tsx           # Navigation breadcrumbs
│   │   ├── button.tsx               # Interactive button components
│   │   ├── calendar.tsx             # Date picker calendar
│   │   ├── card.tsx                 # Content container cards
│   │   ├── carousel.tsx             # Image and content carousels
│   │   ├── chart.tsx                # Chart visualization components
│   │   ├── checkbox.tsx             # Form checkbox inputs
│   │   ├── code-block.tsx           # Syntax highlighted code blocks
│   │   ├── collapsible.tsx          # Expandable content sections
│   │   ├── command.tsx              # Command palette and search
│   │   ├── context-menu.tsx         # Right-click context menus
│   │   ├── dialog.tsx               # Modal dialog windows
│   │   ├── drawer.tsx               # Slide-out drawer panels
│   │   ├── dropdown-menu.tsx        # Dropdown menu components
│   │   ├── form.tsx                 # Form validation and components
│   │   ├── hover-card.tsx           # Hover-triggered information cards
│   │   ├── input-otp.tsx            # One-time password input
│   │   ├── input.tsx                # Text input components
│   │   ├── label.tsx                # Form labels
│   │   ├── menubar.tsx              # Application menu bars
│   │   ├── navigation-menu.tsx      # Multi-level navigation menus
│   │   ├── pagination.tsx           # Page navigation controls
│   │   ├── popover.tsx              # Floating content containers
│   │   ├── progress.tsx             # Progress indicators
│   │   ├── radio-group.tsx          # Radio button groups
│   │   ├── resizable.tsx            # Resizable panel components
│   │   ├── scroll-area.tsx          # Custom scrollbar areas
│   │   ├── select.tsx               # Dropdown selection components
│   │   ├── separator.tsx            # Visual divider lines
│   │   ├── sheet.tsx                # Side sheet panels
│   │   ├── sidebar.tsx              # Application sidebars
│   │   ├── skeleton.tsx             # Loading placeholder skeletons
│   │   ├── slider.tsx               # Range slider inputs
│   │   ├── sonner.tsx               # Toast notification system
│   │   ├── switch.tsx               # Toggle switch components
│   │   ├── table.tsx                # Data table components
│   │   ├── tabs.tsx                 # Tabbed content interfaces
│   │   ├── textarea.tsx             # Multi-line text inputs
│   │   ├── toggle-group.tsx         # Toggle button groups
│   │   ├── toggle.tsx               # Single toggle buttons
│   │   └── tooltip.tsx              # Informational tooltips
│   ├── copy-button.tsx              # Clipboard copy functionality
│   ├── mode-toggle.tsx              # Light/dark theme switcher
│   └── theme-provider.tsx           # Theme context provider
├── hooks/                            # Custom React hooks
│   ├── use-mobile.ts                # Mobile device detection hook
│   └── use-mobile.tsx               # Alternative mobile detection implementation
├── lib/                              # Utility functions and helpers
│   └── utils.ts                     # Common utilities (cn class merger, etc.)
├── node_modules/                     # NPM dependencies (auto-generated)
├── public/                           # Static assets served from root
│   ├── trimble_product_logos/       # Trimble product brand assets
│   │   ├── accubid-anywhere.svg
│   │   ├── allpriser.svg
│   │   ├── connect.svg
│   │   ├── construction-analytics.svg
│   │   ├── estimation-mep.svg
│   │   ├── fabshop.svg
│   │   ├── fieldlink.svg
│   │   ├── luckinslive.svg
│   │   ├── prodesign.svg
│   │   ├── stabicad.svg
│   │   ├── sysque.svg
│   │   ├── tekla.svg
│   │   ├── trade-servicelive.svg
│   │   └── trimble.svg
│   ├── demo.png                     # Application demo screenshot
│   └── modus-logo.svg               # Modus design system logo
├── components.json                   # ShadCN UI configuration
├── eslint.config.mjs                # ESLint configuration with custom rules
├── next-env.d.ts                    # Next.js TypeScript declarations
├── next.config.ts                   # Next.js configuration
├── package-lock.json                # Locked dependency versions
├── package.json                     # Project dependencies and scripts
├── postcss.config.js                # PostCSS configuration for Tailwind
├── project-structure.md             # This documentation file
├── README.md                        # Project overview and setup instructions
├── tailwind.config.js               # Tailwind CSS configuration with Modus theme
└── tsconfig.json                    # TypeScript compiler configuration
```

## Cursor AI Integration

This project leverages Cursor AI with comprehensive rule-based assistance for maintaining code quality, design system compliance, and development best practices.

### `.cursor/` Directory - AI Configuration Hub

The `.cursor/` directory contains sophisticated AI assistance rules that ensure consistent, high-quality development:

#### **`.cursor/rules/`** - MDC Rule Files

- **`code-rules.mdc`** - Enforces Next.js 15, React 19, TypeScript, and clean code standards
- **`modus-icon-names.mdc`** - Complete validated list of 400+ Modus icon names for proper rendering
- **`modus-icons-usage.mdc`** - Implementation patterns and best practices for Modus Icons
- **`new-components.mdc`** - Mandatory component development templates and standards
- **`nextjs15-framework.mdc`** - App Router patterns, Server Components, and React 19 features

#### **`mcp.json`** - Model Context Protocol

Configuration for advanced AI model interactions and context management.

### `add_these_manually/` - Setup Documentation

Essential documentation for project setup and AI configuration:

- **`cursor-memories-guide.md`** - Comprehensive guide for Cursor AI memory management and optimization
- **`user-rule.md`** - Complete behavioral requirements and development standards for AI assistance

## Core Directory Explanations

### **`@/app`** - Next.js 15 App Router

The heart of the application using Next.js 15's App Router paradigm with React 19 Server Components.

- **`globals.css`** - CSS custom properties for theming, dark mode support, and Modus design tokens
- **`layout.tsx`** - Root layout with theme provider, font loading, and global HTML structure
- **`page.tsx`** - Landing page showcasing the project's capabilities and component library
- **`styled_components/`** - Comprehensive component showcase and demonstration area
  - **Dynamic routing** with `[slug]/page.tsx` for component-specific demos
  - **Individual showcases** for each UI component with interactive examples
  - **Specialized sections** for toolbars, headers, icons, and advanced components

### **`@/components`** - Component Library

Organized component architecture following atomic design principles:

#### **`ui/`** - ShadCN UI Foundation

Core building blocks styled with Modus design system. These are the fundamental components that form the basis of all UI elements.

#### **Specialized Collections:**

- **`calendars/`** - 32 pre-built calendar variations for different use cases
- **`charts/`** - Interactive chart components for data visualization
- **`header/`** - Application header components with navigation and branding
- **`panes/`** - Side panels and drawer components for layout management
- **`toolbars/`** - Floating and fixed toolbar components
- **`treeview/`** - Hierarchical data display components

### **`@/hooks`** - Custom React Hooks

Reusable stateful logic encapsulated in custom hooks:

- **`use-mobile.ts`** - Responsive design hook for mobile device detection

### **`@/lib`** - Utilities and Helpers

Core utility functions and configuration:

- **`utils.ts`** - Contains the `cn()` function for conditional class merging using `tailwind-merge` and `clsx`

### **`@/public`** - Static Assets

Publicly accessible static files:

- **`trimble_product_logos/`** - Complete collection of Trimble product brand assets
- **Application assets** - Demo images, logos, and other static resources

## Configuration Files

### **Build and Development**

- **`next.config.ts`** - Next.js 15 configuration with optimizations
- **`tailwind.config.js`** - Tailwind CSS with Modus design system integration
- **`tsconfig.json`** - TypeScript strict mode configuration
- **`eslint.config.mjs`** - ESLint rules including custom Modus compliance checks

### **Package Management**

- **`package.json`** - Dependencies, scripts, and project metadata
- **`components.json`** - ShadCN UI configuration for component generation

## Development Standards

### **Component Architecture**

- **Maximum 300 lines** per component file
- **Maximum 50 lines** per function
- **Mandatory JSDoc** documentation
- **Accessibility first** with ARIA labels and keyboard navigation
- **Performance optimized** with proper memoization

### **Design System Compliance**

- **CSS custom properties only** - no hardcoded colors or values
- **Modus Icons exclusively** - validated against official icon list
- **ShadCN UI components** - no native HTML elements for UI
- **Responsive design** - mobile-first approach

### **Technology Stack**

- **Next.js 15** with App Router
- **React 19** with Server Components as default
- **TypeScript** in strict mode
- **Tailwind CSS** with Modus design tokens
- **ShadCN UI** component library

This project structure ensures maintainable, scalable, and design-system-compliant development with comprehensive AI assistance for code quality and best practices.
