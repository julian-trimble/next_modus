"use client";

import * as React from "react";
import { TreeView, type TreeDataItem } from "../../../components/treeview";

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

export default function TreeViewDemo() {
  const [selectedItem, setSelectedItem] = React.useState<
    TreeDataItem | undefined
  >();
  const [expandAll, setExpandAll] = React.useState(false);

  // Sample tree data with Modus Icons
  const sampleTreeData: TreeDataItem[] = [
    {
      id: "1",
      name: "Documents",
      icon: () => <i className="modus-icons">folder_closed</i>,
      openIcon: () => <i className="modus-icons">folder_open</i>,
      children: [
        {
          id: "1-1",
          name: "Projects",
          icon: () => <i className="modus-icons">folder_project</i>,
          children: [
            {
              id: "1-1-1",
              name: "Website Redesign",
              icon: () => <i className="modus-icons">file</i>,
              actions: (
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">edit</i>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">share</i>
                  </Button>
                </div>
              ),
            },
            {
              id: "1-1-2",
              name: "Mobile App",
              icon: () => <i className="modus-icons">mobile_app_version</i>,
              actions: (
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">edit</i>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">share</i>
                  </Button>
                </div>
              ),
            },
          ],
        },
        {
          id: "1-2",
          name: "Reports",
          icon: () => <i className="modus-icons">file_bar_graph</i>,
          children: [
            {
              id: "1-2-1",
              name: "Monthly Report.pdf",
              icon: () => <i className="modus-icons">file_type_pdf</i>,
              actions: (
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">download</i>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">share</i>
                  </Button>
                </div>
              ),
            },
            {
              id: "1-2-2",
              name: "Annual Report.xlsx",
              icon: () => <i className="modus-icons">file_type_xls</i>,
              actions: (
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">download</i>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">share</i>
                  </Button>
                </div>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Images",
      icon: () => <i className="modus-icons">image</i>,
      children: [
        {
          id: "2-1",
          name: "Screenshots",
          icon: () => <i className="modus-icons">screenshot</i>,
          children: [
            {
              id: "2-1-1",
              name: "desktop-screenshot.png",
              icon: () => <i className="modus-icons">image</i>,
              actions: (
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">visibility_on</i>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">download</i>
                  </Button>
                </div>
              ),
            },
          ],
        },
        {
          id: "2-2",
          name: "Logos",
          icon: () => <i className="modus-icons">palette</i>,
          children: [
            {
              id: "2-2-1",
              name: "company-logo.svg",
              icon: () => <i className="modus-icons">image</i>,
              actions: (
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">visibility_on</i>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <i className="modus-icons">download</i>
                  </Button>
                </div>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "Settings",
      icon: () => <i className="modus-icons">settings</i>,
      children: [
        {
          id: "3-1",
          name: "User Preferences",
          icon: () => <i className="modus-icons">user_account</i>,
          actions: (
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <i className="modus-icons">edit</i>
              </Button>
            </div>
          ),
        },
        {
          id: "3-2",
          name: "System Config",
          icon: () => <i className="modus-icons">gears</i>,
          actions: (
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <i className="modus-icons">edit</i>
              </Button>
            </div>
          ),
        },
      ],
    },
  ];

  const basicUsageCode = `import { TreeView, type TreeDataItem } from "@/components/treeview"

function MyTreeView() {
  const [selectedItem, setSelectedItem] = useState<TreeDataItem | undefined>()
  
  const treeData: TreeDataItem[] = [
    {
      id: "1",
      name: "Documents",
      icon: () => <i className="modus-icons">folder_closed</i>,
      openIcon: () => <i className="modus-icons">folder_open</i>,
      children: [
        {
          id: "1-1",
          name: "Projects",
          icon: () => <i className="modus-icons">folder_project</i>,
          children: [
            {
              id: "1-1-1",
              name: "Website Redesign",
              icon: () => <i className="modus-icons">file</i>,
              actions: (
                <Button variant="ghost" size="sm">
                  <i className="modus-icons">edit</i>
                </Button>
              ),
            },
          ],
        },
      ],
    },
  ]

  return (
    <TreeView
      data={treeData}
      onSelectChange={setSelectedItem}
      defaultNodeIcon={() => <i className="modus-icons">folder_closed</i>}
      defaultLeafIcon={() => <i className="modus-icons">file</i>}
    />
  )
}`;

  const customIconsCode = `const treeDataWithCustomIcons: TreeDataItem[] = [
  {
    id: "1",
    name: "Documents",
    icon: () => <i className="modus-icons">folder_closed</i>,
    openIcon: () => <i className="modus-icons">folder_open</i>,
    selectedIcon: () => <i className="modus-icons">folder_personal</i>,
    children: [
      {
        id: "1-1",
        name: "PDF Files",
        icon: () => <i className="modus-icons">file_type_pdf</i>,
      },
      {
        id: "1-2",
        name: "Excel Files",
        icon: () => <i className="modus-icons">file_type_xls</i>,
      },
      {
        id: "1-3",
        name: "Images",
        icon: () => <i className="modus-icons">image</i>,
      },
    ],
  },
]`;

  const dragDropCode = `const treeDataWithDragDrop: TreeDataItem[] = [
  {
    id: "1",
    name: "Draggable Folder",
    icon: () => <i className="modus-icons">folder_closed</i>,
    draggable: true,
    droppable: true,
    children: [
      {
        id: "1-1",
        name: "Draggable File",
        icon: () => <i className="modus-icons">file</i>,
        draggable: true,
        droppable: false,
      },
    ],
  },
]

function TreeViewWithDragDrop() {
  const handleDocumentDrag = (sourceItem: TreeDataItem, targetItem: TreeDataItem) => {
    console.log('Dragged:', sourceItem.name, 'to:', targetItem.name)
    // Handle drag and drop logic here
  }

  return (
    <TreeView
      data={treeDataWithDragDrop}
      onDocumentDrag={handleDocumentDrag}
    />
  )
}`;

  const projectStructureCode = `components/
├── treeview/
│   └── tree-view.tsx                 # Main tree view component
├── ui/
│   ├── accordion.tsx
│   ├── button.tsx
│   └── ...
└── ...

Usage:
import { TreeView, type TreeDataItem } from "@/components/treeview"`;

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tree View</h1>
        <p className="text-lg text-muted-foreground">
          A hierarchical tree view component with drag-and-drop support, custom
          icons using Modus Icons, and interactive actions for file and folder
          management interfaces.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        {/* Basic Tree View Example */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Interactive File System Tree
          </h3>
          <p className="text-muted-foreground">
            A complete tree view with file and folder icons, expandable nodes,
            and interactive actions.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>
                Click on items to select them, expand folders to see their
                contents, and use the action buttons.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setExpandAll(!expandAll)}
                  variant="outline"
                >
                  <i className="modus-icons mr-2">
                    {expandAll ? "collapse" : "expand"}
                  </i>
                  {expandAll ? "Collapse All" : "Expand All"}
                </Button>
                {selectedItem && (
                  <Badge variant="secondary">
                    Selected: {selectedItem.name}
                  </Badge>
                )}
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <TreeView
                  data={sampleTreeData}
                  onSelectChange={setSelectedItem}
                  expandAll={expandAll}
                  defaultNodeIcon={() => (
                    <i className="modus-icons">folder_closed</i>
                  )}
                  defaultLeafIcon={() => <i className="modus-icons">file</i>}
                />
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
            The tree view component is located in the{" "}
            <InlineCode>@/components/treeview</InlineCode> directory.
          </p>
          <CodeBlock title="Project Structure" language="text">
            {projectStructureCode}
          </CodeBlock>
        </div>

        {/* Custom Icons */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Custom Icons with Modus Icons
          </h3>
          <p className="text-muted-foreground">
            Use different Modus Icons for different file types and states.
          </p>
          <CodeBlock title="Custom icons example">{customIconsCode}</CodeBlock>
        </div>

        {/* Drag and Drop */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Drag and Drop Support</h3>
          <p className="text-muted-foreground">
            Enable drag and drop functionality for reorganizing tree items.
          </p>
          <CodeBlock title="Drag and drop example">{dragDropCode}</CodeBlock>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock title="components/my-tree-view.tsx">
          {basicUsageCode}
        </CodeBlock>
      </div>

      {/* API Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">TreeView</h3>
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
                      <InlineCode>data</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>TreeDataItem[] | TreeDataItem</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      The tree data to display
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onSelectChange</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>
                        (item: TreeDataItem | undefined) =&gt; void
                      </InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Callback when selection changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>expandAll</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>false</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Whether to expand all nodes by default
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>defaultNodeIcon</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>React.ComponentType</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Default icon for folder nodes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>defaultLeafIcon</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>React.ComponentType</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Default icon for leaf nodes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onDocumentDrag</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>
                        (source: TreeDataItem, target: TreeDataItem) =&gt; void
                      </InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Callback when drag and drop occurs
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>initialSelectedItemId</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      ID of initially selected item
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">TreeDataItem</h3>
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
                      Unique identifier for the item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>name</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Display name for the item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>icon</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>React.ComponentType</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Icon component to display
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>selectedIcon</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>React.ComponentType</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Icon to show when item is selected
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>openIcon</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>React.ComponentType</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Icon to show when node is expanded
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>children</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>TreeDataItem[]</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Child items for this node
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>actions</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>React.ReactNode</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Action buttons to show on hover/selection
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>draggable</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Whether item can be dragged
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>droppable</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Whether item can accept drops
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>disabled</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Whether item is disabled
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
                      Callback when item is clicked
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
