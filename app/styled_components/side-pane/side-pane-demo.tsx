"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  SidePane,
  createDefaultSidePaneConfig,
} from "../../../components/panes/side-pane";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock, InlineCode } from "@/components/ui/code-block";

export default function SidePaneDemo() {
  const [isPaneOpen, setIsPaneOpen] = React.useState(true);
  const [actionClicked, setActionClicked] = React.useState<string | null>(null);

  const defaultConfig = React.useMemo(() => {
    const config = createDefaultSidePaneConfig();
    // Add onClick handlers to actions
    config.actions = config.actions.map((action) => ({
      ...action,
      onClick: () => {
        setActionClicked(action.id);
        setTimeout(() => setActionClicked(null), 2000);
      },
    }));
    return config;
  }, []);

  const basicUsageCode = `import { SidePane, createDefaultSidePaneConfig } from "@/components/panes"

function MyApp() {
  const [isPaneOpen, setIsPaneOpen] = useState(true)
  const config = createDefaultSidePaneConfig()
  
  const handleAction = (actionId: string) => {
    console.log('Action:', actionId)
    // Handle pane actions
  }

  return (
    <div className="relative">
      <SidePane
        title="My Document"
        isOpen={isPaneOpen}
        onToggle={() => setIsPaneOpen(!isPaneOpen)}
        onEdit={() => console.log('Edit')}
        onClose={() => setIsPaneOpen(false)}
        actions={config.actions}
        details={config.details}
        showTooltips={true}
      >
        <div className="p-4">
          <p>Custom content goes here</p>
        </div>
      </SidePane>
      
      {/* Your main content */}
      <div className="mr-80">
        <h1>Main Content</h1>
      </div>
    </div>
  )
}`;

  const customConfigCode = `const customConfig = {
  actions: [
    {
      id: "save",
      label: "Save",
      icon: <i className="modus-icons">save_disk</i>,
      onClick: () => console.log('Save'),
    },
    {
      id: "share",
      label: "Share",
      icon: <i className="modus-icons">share</i>,
      onClick: () => console.log('Share'),
    },
    {
      id: "delete",
      label: "Delete",
      icon: <i className="modus-icons">delete</i>,
      variant: "destructive",
      onClick: () => console.log('Delete'),
    },
  ],
  details: {
    version: 2,
    versionLink: "View history",
    size: "12.5 MB",
    created: "Jan 15, 2025",
    createdBy: "John Doe",
    modified: "Jan 20, 2025",
    modifiedBy: "Jane Smith",
    permissions: {
      defaultAccess: "View only",
      users: [
        { name: "Team Lead", access: "Full access" },
        { name: "Developer", access: "Edit access" }
      ]
    }
  }
}`;

  const positioningCode = `// Default positioning (right side)
<SidePane title="Document" isOpen={true} />

// Custom width
<SidePane title="Document" width="400px" />

// Collapsed by default
<SidePane title="Document" isOpen={false} />

// Without tooltips
<SidePane title="Document" showTooltips={false} />`;

  const projectStructureCode = `components/
├── panes/
│   ├── side-pane.tsx                 # Main side pane component
│   └── index.ts                      # Export file
├── ui/
│   ├── button.tsx
│   ├── separator.tsx
│   ├── tooltip.tsx
│   └── ...
└── ...

Usage:
import { SidePane, createDefaultSidePaneConfig } from "@/components/panes"`;

  return (
    <div
      className={cn(
        "space-y-12 p-8 transition-all duration-300",
        isPaneOpen ? "max-w-4xl mr-80" : "mx-auto max-w-4xl"
      )}
    >
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Side Pane</h1>
        <p className="text-lg text-muted-foreground">
          A collapsible side pane component with actions, details, and
          permissions management, perfect for document and file management
          interfaces.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        {/* Default Side Pane Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Default Document Side Pane</h3>
          <p className="text-muted-foreground">
            A complete side pane with document actions, details, and permissions
            management.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>
                Click the button below to toggle the side pane. The pane appears
                on the right side of the screen.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setIsPaneOpen(!isPaneOpen)}
                  variant="outline"
                >
                  <i className="modus-icons mr-2">
                    {isPaneOpen ? "close" : "menu"}
                  </i>
                  {isPaneOpen ? "Close" : "Open"} Side Pane
                </Button>
                {actionClicked && (
                  <Badge variant="secondary">
                    Action clicked: {actionClicked}
                  </Badge>
                )}
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
            The side pane component is located in the{" "}
            <InlineCode>@/components/panes</InlineCode> directory.
          </p>
          <CodeBlock title="Project Structure" language="text">
            {projectStructureCode}
          </CodeBlock>
        </div>

        {/* Custom Configuration */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Custom Configuration</h3>
          <p className="text-muted-foreground">
            Create custom side pane configurations with different actions and
            details.
          </p>
          <CodeBlock title="Custom configuration example">
            {customConfigCode}
          </CodeBlock>
        </div>

        {/* Positioning */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Configuration Options</h3>
          <p className="text-muted-foreground">
            The side pane supports various configuration options.
          </p>
          <CodeBlock title="Configuration examples">
            {positioningCode}
          </CodeBlock>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock title="components/my-app.tsx">{basicUsageCode}</CodeBlock>
      </div>

      {/* API Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">SidePane</h3>
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
                      <InlineCode>title</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>&quot;3D&quot;</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Title displayed in the pane header
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>isOpen</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Whether the pane is open or collapsed
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onToggle</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Callback when pane is toggled
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onEdit</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Callback when edit button is clicked
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onClose</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Callback when close button is clicked
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>actions</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>SidePaneAction[]</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>[]</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Array of action buttons to display
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>details</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>SidePaneDetails</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Details object with version, size, dates, permissions
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
                      Whether to show tooltips on action buttons
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>width</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>&quot;320px&quot;</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Width of the side pane when open
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">SidePaneAction</h3>
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
                      Icon to display (typically Modus icon)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onClick</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Callback when action is clicked
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>variant</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>
                        &quot;default&quot; | &quot;destructive&quot; |
                        &quot;outline&quot; | &quot;secondary&quot; |
                        &quot;ghost&quot;
                      </InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Button variant style
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Side Pane Component */}
      <SidePane
        title="3D"
        isOpen={isPaneOpen}
        onToggle={() => setIsPaneOpen(!isPaneOpen)}
        onEdit={() => console.log("Edit clicked")}
        onClose={() => setIsPaneOpen(false)}
        actions={defaultConfig.actions}
        details={defaultConfig.details}
        showTooltips={false}
      >
        <div className="p-4 text-center">
          <div className="mb-4">
            <i className="modus-icons text-6xl text-muted-foreground">
              folder_closed
            </i>
          </div>
          <p className="text-sm text-muted-foreground">
            This is the content area of the side pane. You can put any custom
            content here.
          </p>
        </div>
      </SidePane>
    </div>
  );
}
