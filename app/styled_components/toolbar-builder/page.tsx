"use client";

import * as React from "react";
import { useState } from "react";
import { ToolbarSection } from "@/components/toolbars/floating-toolbar";
import { FloatingToolbar } from "@/components/toolbars/floating-toolbar";
import { ToolbarControlsSection } from "./toolbar-controls-section";
import { ConfigurationArea } from "./configuration-area";
import { ToolbarStructurePanel } from "./toolbar-structure-panel";
import { ItemConfigurationPanel } from "./item-configuration-panel";
import { toast } from "sonner";

// Modus Icon Component
const ModusIcon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => <i className={`modus-icons ${className}`}>{name}</i>;

interface ToolbarConfig {
  position: "top" | "bottom" | "contained";
  orientation: "horizontal" | "vertical";
  variant: "floating";
  showTooltips: boolean;
}

export default function ToolbarBuilderPage() {
  const [sections, setSections] = useState<ToolbarSection[]>([
    {
      id: "section-1",
      items: [
        {
          id: "bold",
          label: "Bold",
          icon: <ModusIcon name="text_bold" />,
          shortcut: "Ctrl+B",
          type: "toggle",
        },
        {
          id: "italic",
          label: "Italic",
          icon: <ModusIcon name="text_italic" />,
          shortcut: "Ctrl+I",
          type: "toggle",
        },
      ],
    },
    {
      id: "section-2",
      items: [
        {
          id: "save",
          label: "Save",
          icon: <ModusIcon name="save" />,
          shortcut: "Ctrl+S",
          type: "button",
        },
      ],
    },
  ]);

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [toolbarConfig, setToolbarConfig] = useState<ToolbarConfig>({
    position: "top",
    orientation: "horizontal",
    variant: "floating",
    showTooltips: true,
  });

  const selectedItem = sections
    .flatMap((section) => section.items)
    .find((item) => item.id === selectedItemId) || null;

  const handleConfigChange = (config: Partial<ToolbarConfig>) => {
    setToolbarConfig((prev) => ({ ...prev, ...config }));
  };

  const handleExportCode = () => {
    const config = {
      sections,
      config: toolbarConfig,
    };

    const dataStr = JSON.stringify(config, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = "toolbar-config.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();

    toast.success("Toolbar configuration exported!");
  };

  const handleCopyCode = () => {
    const config = {
      sections,
      config: toolbarConfig,
    };

    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    toast.success("Configuration copied to clipboard!");
  };

  const handleTemplateLoad = (templateKey: string) => {
    toast.success(`Template "${templateKey}" loaded successfully!`);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8 mt-14">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Toolbar Builder</h1>
        <p className="text-lg text-muted-foreground">
          Create custom toolbars with drag-and-drop functionality, Modus Icons,
          and flexible configuration options.
        </p>
      </div>

      {/* Toolbar Demo Section */}


      <FloatingToolbar
        sections={sections}
        position="contained"
        orientation={toolbarConfig.orientation}
        variant={toolbarConfig.variant}
        showTooltips={toolbarConfig.showTooltips}
        onAction={(actionId) => {
          toast.info(`Action: ${actionId}`);
        }}
      />



      {/* Configuration Sections */}
      <div className="space-y-6">
        {/* Toolbar Controls Section */}
        <ToolbarControlsSection
          sections={sections}
          config={toolbarConfig}
          onConfigChange={handleConfigChange}
          onExportCode={handleExportCode}
          onCopyCode={handleCopyCode}
        />

        {/* Responsive Configuration Area */}
        <ConfigurationArea>
          <ToolbarStructurePanel
            sections={sections}
            selectedItemId={selectedItemId}
            onSectionsChange={setSections}
            onItemSelect={setSelectedItemId}
            onTemplateLoad={handleTemplateLoad}
          />
          <ItemConfigurationPanel
            selectedItem={selectedItem}
          />
        </ConfigurationArea>
      </div>
    </div>
  );
}
