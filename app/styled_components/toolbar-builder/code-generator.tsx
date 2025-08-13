"use client";

import * as React from "react";
import { ToolbarSection } from "@/components/toolbars/floating-toolbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface CodeGeneratorProps {
  sections: ToolbarSection[];
  config: {
    position: string;
    orientation: string;
    variant: string;
    showTooltips: boolean;
  };
}

const ModusIcon = ({ name }: { name: string }) => (
  <i className="modus-icons">{name}</i>
);

export function CodeGenerator({ sections, config }: CodeGeneratorProps) {
  const generateCode = () => {
    const sectionsCode = sections
      .map((section, sectionIndex) => {
        const itemsCode = section.items
          .map((item, itemIndex) => {
            const iconName = React.isValidElement(item.icon)
              ? (item.icon.props as { name?: string })?.name || "add"
              : "add";

            return `      {
        id: "${item.id}",
        label: "${item.label}",
        icon: <i className="modus-icons">${iconName}</i>,${
              item.shortcut ? `\n        shortcut: "${item.shortcut}",` : ""
            }${
              item.type && item.type !== "button"
                ? `\n        type: "${item.type}",`
                : ""
            }${item.disabled ? `\n        disabled: true,` : ""}
      }${itemIndex < section.items.length - 1 ? "," : ""}`;
          })
          .join("\n");

        return `  {
    id: "${section.id}",
    items: [
${itemsCode}
    ]
  }${sectionIndex < sections.length - 1 ? "," : ""}`;
      })
      .join("\n");

    return `import React from "react";
import { FloatingToolbar } from "@/components/toolbars/floating-toolbar";

// Generated toolbar configuration
const toolbarSections = [
${sectionsCode}
];

export function MyCustomToolbar() {
  const handleAction = (actionId: string) => {
    console.log("Toolbar action:", actionId);
    // Add your action handlers here
  };

  return (
    <FloatingToolbar
      sections={toolbarSections}
      position="${config.position}"
      orientation="${config.orientation}"
      variant="${config.variant}"
      showTooltips={${config.showTooltips}}
      onAction={handleAction}
    />
  );
}

export default MyCustomToolbar;`;
  };

  const copyToClipboard = () => {
    const code = generateCode();
    navigator.clipboard
      .writeText(code)
      .then(() => {
        toast.success("Code copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy code");
      });
  };

  const downloadCode = () => {
    const code = generateCode();
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "custom-toolbar.tsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Code downloaded as custom-toolbar.tsx");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ModusIcon name="code" />
          <span className="ml-2">Generate Code</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Generated React Code</DialogTitle>
          <DialogDescription>
            Copy or download the generated React component for your toolbar
            configuration.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {sections.length} section{sections.length !== 1 ? "s" : ""}
            </Badge>
            <Badge variant="secondary">
              {sections.reduce(
                (total, section) => total + section.items.length,
                0
              )}{" "}
              items
            </Badge>
            <Badge variant="secondary">
              {config.orientation} • {config.position}
            </Badge>
          </div>

          <ScrollArea className="h-96 w-full rounded-md border p-4">
            <pre className="text-sm">
              <code>{generateCode()}</code>
            </pre>
          </ScrollArea>

          <div className="flex gap-2">
            <Button onClick={copyToClipboard} className="flex-1">
              <ModusIcon name="copy" />
              <span className="ml-2">Copy to Clipboard</span>
            </Button>
            <Button onClick={downloadCode} variant="outline" className="flex-1">
              <ModusIcon name="download" />
              <span className="ml-2">Download File</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
