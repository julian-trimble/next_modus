"use client";

import * as React from "react";
import {
  FloatingToolbar,
  createDefaultToolbarSections,
  createVerticalToolbarSections,
} from "../../../components/toolbars/floating-toolbar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock, InlineCode } from "@/components/ui/code-block";

export default function FloatingToolbarDemo() {
  const [activeStates, setActiveStates] = React.useState<
    Record<string, boolean>
  >({});
  const [fontSize, setFontSize] = React.useState("12");

  const defaultSections = React.useMemo(() => {
    const sections = createDefaultToolbarSections();
    const viewSection = sections.find((s) => s.id === "view");
    if (viewSection) {
      const fontSizeItem = viewSection.items.find((i) => i.id === "font-size");
      if (fontSizeItem) {
        fontSizeItem.value = fontSize;
        fontSizeItem.onValueChange = setFontSize;
      }
    }
    return sections;
  }, [fontSize]);

  const handleAction = (actionId: string) => {
    if (["bold", "italic", "underline", "strikethrough"].includes(actionId)) {
      setActiveStates((prev) => ({
        ...prev,
        [actionId]: !prev[actionId],
      }));
    }

    if (["align-left", "align-center", "align-right"].includes(actionId)) {
      setActiveStates((prev) => ({
        ...prev,
        "align-left": actionId === "align-left",
        "align-center": actionId === "align-center",
        "align-right": actionId === "align-right",
      }));
    }
  };

  const basicUsageCode = `import { FloatingToolbar, createDefaultToolbarSections } from "@/components/toolbars"

function MyEditor() {
  const [activeStates, setActiveStates] = useState({})
  
  const handleAction = (actionId: string) => {
    console.log('Action:', actionId)
    // Handle toolbar actions
  }

  return (
    <FloatingToolbar
      sections={createDefaultToolbarSections()}
      position="top"
      onAction={handleAction}
      activeStates={activeStates}
      showTooltips={true}
    />
  )
}`;

  const customSectionsCode = `const customSections = [
  {
    id: "formatting",
    items: [
      {
        id: "bold",
        label: "Bold",
        icon: <i className="modus-icons">text_bold</i>,
        shortcut: "Ctrl+B",
        type: "toggle"
      },
      {
        id: "colors",
        label: "Text Color",
        icon: <i className="modus-icons">palette</i>,
        type: "dropdown",
        items: [
          { id: "black", label: "Black" },
          { id: "red", label: "Red" },
          { id: "blue", label: "Blue" }
        ]
      }
    ]
  }
]`;

  const positioningCode = `// Floating toolbar (default)
<FloatingToolbar position="top" sections={sections} />

// Fixed toolbar (full width)
<FloatingToolbar 
  position="contained" 
  variant="fixed"
  sections={sections} 
/>

// Vertical toolbar
<FloatingToolbar 
  position="contained" 
  orientation="vertical"
  sections={createVerticalToolbarSections()} 
/>

// Bottom positioning (fixed to viewport)
<FloatingToolbar position="bottom" sections={sections} />

// Contained positioning (relative to parent)
<FloatingToolbar position="contained" sections={sections} />

// Custom positioning
<FloatingToolbar 
  position="custom" 
  customPosition={{ top: "20px", right: "20px" }}
  sections={sections} 
/>`;

  const projectStructureCode = `components/
├── toolbars/
│   ├── floating-toolbar.tsx          # Main toolbar component
│   └── index.ts                      # Export file
├── ui/
│   ├── button.tsx
│   ├── dropdown-menu.tsx
│   ├── toggle.tsx
│   ├── select.tsx
│   ├── separator.tsx
│   ├── tooltip.tsx
│   └── ...
└── ...

Usage:
import { FloatingToolbar, createDefaultToolbarSections } from "@/components/toolbars"`;

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Floating Toolbar</h1>
        <p className="text-lg text-muted-foreground">
          A customizable floating toolbar component with Modus icons, supporting
          buttons, toggles, dropdowns, and selects.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        {/* Default Toolbar Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Default Text Editor Toolbar</h3>
          <p className="text-muted-foreground">
            A complete toolbar with text formatting, alignment, lists, insert
            options, and view controls.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>
                Try the toolbar below. It&apos;s contained within this card to
                demonstrate positioning.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <p className="text-sm text-muted-foreground">
                  Interactive toolbar demo - click buttons to see active states
                </p>
              </div>

              <div className="relative rounded-lg border bg-muted/50 p-8 min-h-[300px] overflow-hidden">
                <div className="flex flex-col items-center justify-center h-full space-y-16">
                  <p className="text-muted-foreground text-center">
                    Content area with floating toolbar
                  </p>
                  <div className="space-y-4 text-center">
                    <h4 className="font-semibold">Active States:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {Object.entries(activeStates).map(
                        ([key, value]) =>
                          value && (
                            <Badge key={key} variant="secondary">
                              {key}
                            </Badge>
                          )
                      )}
                      {Object.keys(activeStates).length === 0 && (
                        <span className="text-muted-foreground text-sm">
                          Click toolbar buttons to see active states
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contained Floating Toolbar */}
                <FloatingToolbar
                  sections={defaultSections}
                  position="contained"
                  onAction={handleAction}
                  activeStates={activeStates}
                  showTooltips={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vertical Toolbar Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Vertical Toolbar</h3>
          <p className="text-muted-foreground">
            A compact vertical toolbar with 7 essential buttons for
            space-efficient layouts.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Vertical Toolbar Demo</CardTitle>
              <CardDescription>
                A vertical toolbar positioned on the left side of the content
                area.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative rounded-lg border bg-muted/50 p-8 min-h-[400px] overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Content area with vertical toolbar
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Active States:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {Object.entries(activeStates).map(
                          ([key, value]) =>
                            value && (
                              <Badge key={key} variant="secondary">
                                {key}
                              </Badge>
                            )
                        )}
                        {Object.keys(activeStates).length === 0 && (
                          <span className="text-muted-foreground text-sm">
                            Click toolbar buttons to see active states
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical Floating Toolbar */}
                <FloatingToolbar
                  sections={createVerticalToolbarSections()}
                  position="contained"
                  orientation="vertical"
                  onAction={handleAction}
                  activeStates={activeStates}
                  showTooltips={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fixed Toolbar Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Fixed Toolbar</h3>
          <p className="text-muted-foreground">
            A fixed toolbar that takes the full width of its container, perfect
            for app headers.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Fixed Toolbar Demo</CardTitle>
              <CardDescription>
                A fixed toolbar positioned at the top of the content area,
                spanning full width.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative rounded-lg border bg-muted/50 min-h-[300px] overflow-hidden">
                {/* Fixed Toolbar */}
                <FloatingToolbar
                  sections={defaultSections}
                  position="contained"
                  variant="fixed"
                  onAction={handleAction}
                  activeStates={activeStates}
                  showTooltips={false}
                />

                <div className="pt-16 p-8 flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Content area with fixed toolbar above
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Active States:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {Object.entries(activeStates).map(
                          ([key, value]) =>
                            value && (
                              <Badge key={key} variant="secondary">
                                {key}
                              </Badge>
                            )
                        )}
                        {Object.keys(activeStates).length === 0 && (
                          <span className="text-muted-foreground text-sm">
                            Click toolbar buttons to see active states
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Component Location */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Component Location
          </h2>
          <p className="text-muted-foreground">
            The floating toolbar component is located in the{" "}
            <InlineCode>@/components/toolbars</InlineCode> directory.
          </p>
          <CodeBlock title="Project Structure" language="text">
            {projectStructureCode}
          </CodeBlock>
        </div>

        {/* Custom Configuration */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Custom Configuration</h3>
          <p className="text-muted-foreground">
            Create custom toolbar sections with different item types.
          </p>
          <CodeBlock title="Custom sections example">
            {customSectionsCode}
          </CodeBlock>

          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2">
              Vertical Toolbar Configuration
            </h4>
            <p className="text-muted-foreground mb-3">
              Use the pre-configured vertical toolbar with 7 essential buttons.
            </p>
            <CodeBlock title="Vertical toolbar example">
              {`import { FloatingToolbar, createVerticalToolbarSections } from "@/components/toolbars"

function MyVerticalToolbar() {
  return (
    <FloatingToolbar
      sections={createVerticalToolbarSections()}
      position="contained"
      orientation="vertical"
      onAction={handleAction}
      activeStates={activeStates}
      showTooltips={true}
    />
  )
}`}
            </CodeBlock>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2">
              Fixed Toolbar Configuration
            </h4>
            <p className="text-muted-foreground mb-3">
              Use the fixed variant for toolbars that should take the full width
              of their container.
            </p>
            <CodeBlock title="Fixed toolbar example">
              {`import { FloatingToolbar, createDefaultToolbarSections } from "@/components/toolbars"

function MyFixedToolbar() {
  return (
    <FloatingToolbar
      sections={createDefaultToolbarSections()}
      position="contained"
      variant="fixed"
      onAction={handleAction}
      activeStates={activeStates}
      showTooltips={true}
    />
  )
}`}
            </CodeBlock>
          </div>
        </div>

        {/* Positioning */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Positioning</h3>
          <p className="text-muted-foreground">
            The toolbar supports multiple positioning options.
          </p>
          <CodeBlock title="Positioning examples">{positioningCode}</CodeBlock>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock title="components/my-editor.tsx">{basicUsageCode}</CodeBlock>
      </div>

      {/* API Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">FloatingToolbar</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>sections</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>ToolbarSection[]</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>[]</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Array of toolbar sections to display
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>position</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>
                        &quot;top&quot; | &quot;bottom&quot; |
                        &quot;custom&quot; | &quot;contained&quot;
                      </InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>&quot;top&quot;</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Toolbar positioning
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>orientation</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>
                        &quot;horizontal&quot; | &quot;vertical&quot;
                      </InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>&quot;horizontal&quot;</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Toolbar layout orientation
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>variant</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>
                        &quot;floating&quot; | &quot;fixed&quot;
                      </InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>&quot;floating&quot;</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Toolbar display variant - floating has rounded corners and
                      shadow, fixed takes full container width
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onAction</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>(actionId: string) =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Callback when toolbar action is triggered
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>activeStates</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>Record&lt;string, boolean&gt;</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>{"{}"}</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Active states for toolbar items
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showTooltips</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Whether to show tooltips
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>responsive</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Enable responsive behavior
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">ToolbarAction</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>id</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Unique identifier for the action
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>label</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Label for the action (shown in tooltip)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>icon</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>React.ReactNode</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Icon to display
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>type</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>
                        &quot;button&quot; | &quot;toggle&quot; |
                        &quot;dropdown&quot; | &quot;select&quot;
                      </InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Type of toolbar item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>shortcut</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Keyboard shortcut (optional)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
