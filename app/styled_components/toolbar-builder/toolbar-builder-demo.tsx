"use client";

import * as React from "react";
import { useState } from "react";
import {
  FloatingToolbar,
  ToolbarSection,
  ToolbarAction,
} from "@/components/toolbars/floating-toolbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { CodeGenerator } from "./code-generator";

// Modus Icon Component
const ModusIcon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => <i className={`modus-icons ${className}`}>{name}</i>;

// All available Modus Icons
const ALL_MODUS_ICONS = [
  "accessibility",
  "accessibility_circle",
  "add",
  "add_bold",
  "add_circle",
  "add_heavy",
  "address",
  "advanced_instructions",
  "alarm_add",
  "alarm_off",
  "alarm_on",
  "alert",
  "alert_outlined",
  "align_bottom",
  "align_center_horiz",
  "align_center_vert",
  "align_left",
  "align_right",
  "align_top",
  "angle_90",
  "antenna",
  "apps",
  "arc",
  "arrow_back",
  "arrow_down",
  "arrow_down_circle",
  "arrow_expand_diagonal_left",
  "arrow_expand_diagonal_right",
  "arrow_left",
  "arrow_left_circle",
  "arrow_next",
  "arrow_right",
  "arrow_right_circle",
  "arrow_up",
  "arrow_up_circle",
  "artificial_intelligence",
  "backup_restore_cloud",
  "backup_restore_file",
  "bar_graph",
  "bar_graph_line",
  "bar_graph_square",
  "barcode",
  "battery_0_horizontal",
  "battery_0_vertical",
  "battery_25_horizontal",
  "battery_25_vertical",
  "battery_50_horizontal",
  "battery_50_vertical",
  "battery_75_horizontal",
  "battery_75_vertical",
  "battery_100_horizontal",
  "battery_100_vertical",
  "bell",
  "bell_off",
  "bell_outlined",
  "bluetooth",
  "bluetooth_off",
  "bookmark",
  "bookmark_outlined",
  "calculator",
  "calendar",
  "calendar_add",
  "calendar_check",
  "calendar_day",
  "calendar_month",
  "calendar_week",
  "camera",
  "camera_off",
  "cancel",
  "chat",
  "chat_circle",
  "check",
  "check_bold",
  "check_circle",
  "chevron_down",
  "chevron_left",
  "chevron_right",
  "chevron_up",
  "circle",
  "clipboard",
  "clock",
  "close",
  "cloud",
  "cloud_download",
  "cloud_upload",
  "code",
  "copy",
  "cut",
  "delete",
  "download",
  "edit",
  "email",
  "eye",
  "eye_off",
  "file",
  "file_add",
  "file_check",
  "file_copy",
  "file_delete",
  "file_download",
  "file_edit",
  "file_image",
  "file_pdf",
  "file_text",
  "file_upload",
  "filter",
  "folder",
  "folder_add",
  "folder_open",
  "heart",
  "heart_outlined",
  "help",
  "help_circle",
  "home",
  "image",
  "info",
  "info_circle",
  "link",
  "list_bulleted",
  "list_numbered",
  "lock",
  "lock_open",
  "map",
  "menu",
  "microphone",
  "microphone_off",
  "more_horizontal",
  "more_vertical",
  "music",
  "notification",
  "palette",
  "pause",
  "phone",
  "pin",
  "play",
  "plus",
  "print",
  "refresh",
  "ruler",
  "save",
  "search",
  "settings",
  "share",
  "star",
  "star_outlined",
  "stop",
  "tag",
  "text_bold",
  "text_italic",
  "text_underlined",
  "text_strikethrough",
  "text_centered",
  "thumbs_up",
  "thumbs_down",
  "time",
  "trash",
  "upload",
  "user",
  "video",
  "video_off",
  "volume_high",
  "volume_low",
  "volume_mute",
  "warning",
  "warning_circle",
  "wifi",
  "wifi_off",
  "zoom_in",
  "zoom_out",
  "color_picker",
  "lightbulb_on",
  "lightbulb_off",
];

// Pre-built toolbar templates
const TOOLBAR_TEMPLATES = {
  textEditor: {
    name: "Text Editor",
    description: "Classic rich text editor toolbar",
    sections: [
      {
        id: "formatting",
        items: [
          {
            id: "bold",
            label: "Bold",
            icon: <ModusIcon name="text_bold" />,
            shortcut: "Ctrl+B",
            type: "toggle" as const,
          },
          {
            id: "italic",
            label: "Italic",
            icon: <ModusIcon name="text_italic" />,
            shortcut: "Ctrl+I",
            type: "toggle" as const,
          },
          {
            id: "underline",
            label: "Underline",
            icon: <ModusIcon name="text_underlined" />,
            shortcut: "Ctrl+U",
            type: "toggle" as const,
          },
        ],
      },
      {
        id: "alignment",
        items: [
          {
            id: "align-left",
            label: "Align Left",
            icon: <ModusIcon name="align_left" />,
            type: "button" as const,
          },
          {
            id: "align-center",
            label: "Align Center",
            icon: <ModusIcon name="text_centered" />,
            type: "button" as const,
          },
          {
            id: "align-right",
            label: "Align Right",
            icon: <ModusIcon name="align_right" />,
            type: "button" as const,
          },
        ],
      },
      {
        id: "lists",
        items: [
          {
            id: "bulleted-list",
            label: "Bulleted List",
            icon: <ModusIcon name="list_bulleted" />,
            type: "button" as const,
          },
          {
            id: "numbered-list",
            label: "Numbered List",
            icon: <ModusIcon name="list_numbered" />,
            type: "button" as const,
          },
        ],
      },
    ],
  },
  fileManager: {
    name: "File Manager",
    description: "File operations and navigation",
    sections: [
      {
        id: "file-ops",
        items: [
          {
            id: "new-file",
            label: "New File",
            icon: <ModusIcon name="file_add" />,
            shortcut: "Ctrl+N",
            type: "button" as const,
          },
          {
            id: "open",
            label: "Open",
            icon: <ModusIcon name="folder_open" />,
            shortcut: "Ctrl+O",
            type: "button" as const,
          },
          {
            id: "save",
            label: "Save",
            icon: <ModusIcon name="save" />,
            shortcut: "Ctrl+S",
            type: "button" as const,
          },
        ],
      },
      {
        id: "edit-ops",
        items: [
          {
            id: "copy",
            label: "Copy",
            icon: <ModusIcon name="copy" />,
            shortcut: "Ctrl+C",
            type: "button" as const,
          },
          {
            id: "cut",
            label: "Cut",
            icon: <ModusIcon name="cut" />,
            shortcut: "Ctrl+X",
            type: "button" as const,
          },
          {
            id: "delete",
            label: "Delete",
            icon: <ModusIcon name="delete" />,
            shortcut: "Del",
            type: "button" as const,
          },
        ],
      },
    ],
  },
  mediaPlayer: {
    name: "Media Player",
    description: "Audio/video player controls",
    sections: [
      {
        id: "playback",
        items: [
          {
            id: "play",
            label: "Play",
            icon: <ModusIcon name="play" />,
            shortcut: "Space",
            type: "toggle" as const,
          },
          {
            id: "pause",
            label: "Pause",
            icon: <ModusIcon name="pause" />,
            type: "button" as const,
          },
          {
            id: "stop",
            label: "Stop",
            icon: <ModusIcon name="stop" />,
            type: "button" as const,
          },
        ],
      },
      {
        id: "volume",
        items: [
          {
            id: "volume-low",
            label: "Volume Low",
            icon: <ModusIcon name="volume_low" />,
            type: "button" as const,
          },
          {
            id: "volume-high",
            label: "Volume High",
            icon: <ModusIcon name="volume_high" />,
            type: "button" as const,
          },
          {
            id: "volume-mute",
            label: "Mute",
            icon: <ModusIcon name="volume_mute" />,
            type: "toggle" as const,
          },
        ],
      },
    ],
  },
  navigation: {
    name: "Navigation",
    description: "Page and section navigation",
    sections: [
      {
        id: "navigation",
        items: [
          {
            id: "home",
            label: "Home",
            icon: <ModusIcon name="home" />,
            type: "button" as const,
          },
          {
            id: "back",
            label: "Back",
            icon: <ModusIcon name="arrow_back" />,
            shortcut: "Alt+Left",
            type: "button" as const,
          },
          {
            id: "forward",
            label: "Forward",
            icon: <ModusIcon name="arrow_next" />,
            shortcut: "Alt+Right",
            type: "button" as const,
          },
          {
            id: "refresh",
            label: "Refresh",
            icon: <ModusIcon name="refresh" />,
            shortcut: "F5",
            type: "button" as const,
          },
        ],
      },
    ],
  },
};

// Icon Picker Component
const IconPicker = ({
  selectedIcon,
  onIconSelect,
}: {
  selectedIcon: string;
  onIconSelect: (icon: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIcons = ALL_MODUS_ICONS.filter((icon) =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Search Icons</Label>
        <Input
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <ScrollArea className="h-48 w-full border rounded-md p-2">
        <div className="grid grid-cols-6 gap-2">
          {filteredIcons.map((icon) => (
            <Button
              key={icon}
              variant={selectedIcon === icon ? "default" : "ghost"}
              size="sm"
              className="w-full h-12 flex flex-col items-center justify-center p-1"
              onClick={() => onIconSelect(icon)}
              title={icon}
            >
              <ModusIcon name={icon} className="text-base" />
            </Button>
          ))}
        </div>
      </ScrollArea>

      {selectedIcon && (
        <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
          <ModusIcon name={selectedIcon} />
          <span className="text-sm font-mono">{selectedIcon}</span>
        </div>
      )}
    </div>
  );
};

// Toolbar Item Configuration Component
const ToolbarItemConfig = ({
  item,
  onUpdate,
  onDelete,
}: {
  item: ToolbarAction;
  onUpdate: (updates: Partial<ToolbarAction>) => void;
  onDelete: () => void;
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">Configure Item</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDelete}
            className="text-destructive hover:text-destructive"
          >
            <ModusIcon name="delete" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="item-label">Label</Label>
          <Input
            id="item-label"
            value={item.label}
            onChange={(e) => onUpdate({ label: e.target.value })}
            placeholder="Button label"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="item-shortcut">Keyboard Shortcut</Label>
          <Input
            id="item-shortcut"
            value={item.shortcut || ""}
            onChange={(e) => onUpdate({ shortcut: e.target.value })}
            placeholder="Ctrl+B"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="item-type">Item Type</Label>
          <Select
            value={item.type || "button"}
            onValueChange={(value) =>
              onUpdate({ type: value as ToolbarAction["type"] })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="button">Button</SelectItem>
              <SelectItem value="toggle">Toggle</SelectItem>
              <SelectItem value="dropdown">Dropdown</SelectItem>
              <SelectItem value="select">Select</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Icon</Label>
          <IconPicker
            selectedIcon={
              item.icon && React.isValidElement(item.icon)
                ? (item.icon.props as { name?: string })?.name || ""
                : ""
            }
            onIconSelect={(icon) =>
              onUpdate({ icon: <ModusIcon name={icon} /> })
            }
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="item-disabled"
            checked={!item.disabled}
            onCheckedChange={(checked) => onUpdate({ disabled: !checked })}
          />
          <Label htmlFor="item-disabled">Enabled</Label>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ToolbarBuilderDemo() {
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
      ],
    },
  ]);

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [toolbarConfig, setToolbarConfig] = useState<{
    position: "top" | "bottom" | "contained";
    orientation: "horizontal" | "vertical";
    variant: "floating";
    showTooltips: boolean;
  }>({
    position: "top",
    orientation: "horizontal",
    variant: "floating",
    showTooltips: true,
  });

  const selectedItem = sections
    .flatMap((section) => section.items)
    .find((item) => item.id === selectedItemId);

  const addNewItem = (sectionId: string) => {
    const newItemId = `item-${Date.now()}`;
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: [
                ...section.items,
                {
                  id: newItemId,
                  label: "New Item",
                  icon: <ModusIcon name="add" />,
                  type: "button" as const,
                },
              ],
            }
          : section
      )
    );
    setSelectedItemId(newItemId);
  };

  const addNewSection = () => {
    const newSectionId = `section-${Date.now()}`;
    setSections((prev) => [
      ...prev,
      {
        id: newSectionId,
        items: [],
      },
    ]);
  };

  const updateItem = (itemId: string, updates: Partial<ToolbarAction>) => {
    setSections((prev) =>
      prev.map((section) => ({
        ...section,
        items: section.items.map((item) =>
          item.id === itemId ? { ...item, ...updates } : item
        ),
      }))
    );
  };

  const deleteItem = (itemId: string) => {
    setSections((prev) =>
      prev.map((section) => ({
        ...section,
        items: section.items.filter((item) => item.id !== itemId),
      }))
    );
    setSelectedItemId(null);
  };

  const loadTemplate = (templateKey: keyof typeof TOOLBAR_TEMPLATES) => {
    const template = TOOLBAR_TEMPLATES[templateKey];
    setSections(
      template.sections.map((section, index) => ({
        ...section,
        id: `section-${Date.now()}-${index}`,
        items: section.items.map((item, itemIndex) => ({
          ...item,
          id: `${item.id}-${Date.now()}-${itemIndex}`,
        })),
      }))
    );
    setSelectedItemId(null);
    toast.success(`${template.name} template loaded!`);
  };

  const exportConfig = () => {
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

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Toolbar Builder</h1>
        <p className="text-muted-foreground">
          Create custom toolbars with drag-and-drop functionality, Modus Icons,
          and flexible configuration options.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel - Toolbar Structure */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Toolbar Structure
                <Button onClick={addNewSection} size="sm">
                  <ModusIcon name="add" className="mr-2" />
                  Add Section
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sections.map((section, sectionIndex) => (
                <div key={section.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Section {sectionIndex + 1}</Badge>
                    <Button
                      onClick={() => addNewItem(section.id)}
                      size="sm"
                      variant="ghost"
                    >
                      <ModusIcon name="add" />
                    </Button>
                  </div>

                  <div className="space-y-1 pl-4">
                    {section.items.map((item) => (
                      <Button
                        key={item.id}
                        variant={
                          selectedItemId === item.id ? "default" : "ghost"
                        }
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSelectedItemId(item.id)}
                      >
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </Button>
                    ))}
                  </div>

                  {sectionIndex < sections.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Center Panel - Preview */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Real-time preview of your toolbar configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Toolbar Configuration */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Position</Label>
                  <Select
                    value={toolbarConfig.position}
                    onValueChange={(value) =>
                      setToolbarConfig((prev) => ({
                        ...prev,
                        position: value as "top" | "bottom" | "contained",
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="top">Top</SelectItem>
                      <SelectItem value="bottom">Bottom</SelectItem>
                      <SelectItem value="contained">Contained</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Orientation</Label>
                  <Select
                    value={toolbarConfig.orientation}
                    onValueChange={(value) =>
                      setToolbarConfig((prev) => ({
                        ...prev,
                        orientation: value as "horizontal" | "vertical",
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="horizontal">Horizontal</SelectItem>
                      <SelectItem value="vertical">Vertical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="show-tooltips"
                  checked={toolbarConfig.showTooltips}
                  onCheckedChange={(checked) =>
                    setToolbarConfig((prev) => ({
                      ...prev,
                      showTooltips: checked,
                    }))
                  }
                />
                <Label htmlFor="show-tooltips">Show Tooltips</Label>
              </div>

              {/* Templates Section */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Quick Templates</Label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(TOOLBAR_TEMPLATES).map(([key, template]) => (
                    <Button
                      key={key}
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        loadTemplate(key as keyof typeof TOOLBAR_TEMPLATES)
                      }
                      className="flex flex-col h-auto p-3 text-xs"
                    >
                      <span className="font-medium">{template.name}</span>
                      <span className="text-muted-foreground text-[10px] mt-1">
                        {template.description}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Preview Container */}
              <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 min-h-[200px] relative">
                <div className="text-center text-muted-foreground mb-4">
                  Toolbar Preview
                </div>

                <div className="flex justify-center">
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
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={exportConfig} className="flex-1">
                  <ModusIcon name="download" className="mr-2" />
                  Export Config
                </Button>
                <CodeGenerator sections={sections} config={toolbarConfig} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Item Configuration */}
        <div className="space-y-4">
          {selectedItem ? (
            <ToolbarItemConfig
              item={selectedItem}
              onUpdate={(updates) => updateItem(selectedItem.id, updates)}
              onDelete={() => deleteItem(selectedItem.id)}
            />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Item Configuration</CardTitle>
                <CardDescription>
                  Select an item from the toolbar structure to configure it
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground py-8">
                <ModusIcon name="settings" className="text-4xl mb-2" />
                <p>No item selected</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
