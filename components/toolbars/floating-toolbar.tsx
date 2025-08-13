"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Modus Icon Component
const ModusIcon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => <i className={`modus-icons ${className}`}>{name}</i>;

// Vertical toolbar configuration with 7 buttons only
export const createVerticalToolbarSections = (): ToolbarSection[] => [
  {
    id: "vertical-actions",
    items: [
      {
        id: "bold",
        label: "Bold",
        icon: <ModusIcon name="text_bold" />,
        shortcut: "Ctrl+B",
      },
      {
        id: "italic",
        label: "Italic",
        icon: <ModusIcon name="text_italic" />,
        shortcut: "Ctrl+I",
      },
      {
        id: "underline",
        label: "Underline",
        icon: <ModusIcon name="text_underlined" />,
        shortcut: "Ctrl+U",
      },
      {
        id: "align-left",
        label: "Align Left",
        icon: <ModusIcon name="align_left" />,
        shortcut: "Ctrl+Shift+L",
      },
      {
        id: "bulleted-list",
        label: "Bulleted List",
        icon: <ModusIcon name="list_bulleted" />,
        shortcut: "Ctrl+Shift+8",
      },
      {
        id: "insert-link",
        label: "Insert Link",
        icon: <ModusIcon name="link" />,
        shortcut: "Ctrl+K",
      },
      {
        id: "zoom-in",
        label: "Zoom In",
        icon: <ModusIcon name="zoom_in" />,
        shortcut: "Ctrl++",
      },
    ],
  },
];

// Default toolbar configurations
export const createDefaultToolbarSections = (): ToolbarSection[] => [
  {
    id: "text-formatting",
    items: [
      {
        id: "bold",
        label: "Bold",
        icon: <ModusIcon name="text_bold" />,
        shortcut: "Ctrl+B",
      },
      {
        id: "italic",
        label: "Italic",
        icon: <ModusIcon name="text_italic" />,
        shortcut: "Ctrl+I",
      },
      {
        id: "underline",
        label: "Underline",
        icon: <ModusIcon name="text_underlined" />,
        shortcut: "Ctrl+U",
      },
      {
        id: "strikethrough",
        label: "Strikethrough",
        icon: <ModusIcon name="text_strikethrough" />,
        shortcut: "Ctrl+Shift+X",
      },
      {
        id: "text-color",
        label: "Text Color",
        icon: <ModusIcon name="palette" />,
        type: "dropdown",
        items: [
          {
            id: "color-black",
            label: "Black",
            icon: <ModusIcon name="circle" />,
          },
          {
            id: "color-red",
            label: "Red",
            icon: <ModusIcon name="circle" />,
          },
          {
            id: "color-blue",
            label: "Blue",
            icon: <ModusIcon name="circle" />,
          },
          {
            id: "separator",
            label: "",
          },
          {
            id: "color-more",
            label: "More Colors...",
            icon: <ModusIcon name="color_picker" />,
          },
        ],
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
        shortcut: "Ctrl+Shift+L",
      },
      {
        id: "align-center",
        label: "Align Center",
        icon: <ModusIcon name="text_centered" />,
        shortcut: "Ctrl+Shift+E",
      },
      {
        id: "align-right",
        label: "Align Right",
        icon: <ModusIcon name="align_right" />,
        shortcut: "Ctrl+Shift+R",
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
        shortcut: "Ctrl+Shift+8",
      },
      {
        id: "numbered-list",
        label: "Numbered List",
        icon: <ModusIcon name="list_numbered" />,
        shortcut: "Ctrl+Shift+7",
      },
    ],
  },
  {
    id: "insert",
    items: [
      {
        id: "insert-link",
        label: "Insert Link",
        icon: <ModusIcon name="link" />,
        shortcut: "Ctrl+K",
      },
      {
        id: "insert-image",
        label: "Insert Image",
        icon: <ModusIcon name="image" />,
        shortcut: "Ctrl+Shift+I",
      },
      {
        id: "insert-table",
        label: "Insert Table",
        icon: <ModusIcon name="table" />,
        shortcut: "Ctrl+Shift+T",
      },
    ],
  },
  {
    id: "view",
    items: [
      {
        id: "font-size",
        label: "Font Size",
        type: "select",
        value: "12",
        items: [
          { id: "8", label: "8pt" },
          { id: "10", label: "10pt" },
          { id: "12", label: "12pt" },
          { id: "14", label: "14pt" },
          { id: "16", label: "16pt" },
          { id: "18", label: "18pt" },
          { id: "24", label: "24pt" },
        ],
      },
      {
        id: "zoom-in",
        label: "Zoom In",
        icon: <ModusIcon name="zoom_in" />,
        shortcut: "Ctrl++",
      },
      {
        id: "zoom-out",
        label: "Zoom Out",
        icon: <ModusIcon name="zoom_out" />,
        shortcut: "Ctrl+-",
      },
      {
        id: "zoom-center",
        label: "Zoom to Fit",
        icon: <ModusIcon name="zoom_center" />,
        shortcut: "Ctrl+0",
      },
    ],
  },
];

export interface ToolbarAction {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  type?: "button" | "toggle" | "dropdown" | "select";
  items?: ToolbarAction[]; // For dropdown/select items
  value?: string; // For select items
  onValueChange?: (value: string) => void; // For select items
}

export interface ToolbarSection {
  id: string;
  items: ToolbarAction[];
}

export interface FloatingToolbarProps {
  className?: string;
  position?: "top" | "bottom" | "custom" | "contained";
  orientation?: "horizontal" | "vertical";
  variant?: "floating" | "fixed";
  customPosition?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  sections?: ToolbarSection[];
  onAction?: (actionId: string) => void;
  activeStates?: Record<string, boolean>;
  disabledStates?: Record<string, boolean>;
  showTooltips?: boolean;
  responsive?: boolean;
}

const FloatingToolbar = React.forwardRef<HTMLDivElement, FloatingToolbarProps>(
  (
    {
      className,
      position = "top",
      orientation = "horizontal",
      variant = "floating",
      customPosition,
      sections = [],
      onAction,
      activeStates = {},
      disabledStates = {},
      showTooltips = true,
      responsive = true,
      ...props
    },
    ref
  ) => {
    const getPositionClasses = () => {
      if (position === "custom" && customPosition) {
        return "";
      }

      // Fixed variant takes full width
      if (variant === "fixed") {
        if (orientation === "vertical") {
          switch (position) {
            case "top":
              return "top-0 left-0 h-full";
            case "bottom":
              return "bottom-0 left-0 h-full";
            case "contained":
              return "top-0 left-0 h-full";
            default:
              return "top-0 left-0 h-full";
          }
        } else {
          switch (position) {
            case "top":
              return "top-0 left-0 w-full";
            case "bottom":
              return "bottom-0 left-0 w-full";
            case "contained":
              return "top-0 left-0 w-full";
            default:
              return "top-0 left-0 w-full";
          }
        }
      }

      // Floating variant (original behavior)
      if (orientation === "vertical") {
        switch (position) {
          case "top":
            return "top-4 left-4";
          case "bottom":
            return "bottom-4 left-4";
          case "contained":
            return "top-2 left-2";
          default:
            return "top-4 left-4";
        }
      }

      switch (position) {
        case "top":
          return "top-4 left-1/2 -translate-x-1/2";
        case "bottom":
          return "bottom-4 left-1/2 -translate-x-1/2";
        case "contained":
          return "top-2 left-1/2 -translate-x-1/2";
        default:
          return "top-4 left-1/2 -translate-x-1/2";
      }
    };

    const getCustomPositionStyle = () => {
      if (position === "custom" && customPosition) {
        return {
          top: customPosition.top,
          bottom: customPosition.bottom,
          left: customPosition.left,
          right: customPosition.right,
          transform: customPosition.transform,
        };
      }
      return {};
    };

    const renderToolbarItem = (item: ToolbarAction) => {
      const isActive = activeStates[item.id] || item.active || false;
      const isDisabled = disabledStates[item.id] || item.disabled || false;

      const handleClick = () => {
        if (!isDisabled) {
          item.onClick?.();
          onAction?.(item.id);
        }
      };

      // Render different item types
      const renderElement = () => {
        switch (item.type) {
          case "toggle":
            return (
              <Toggle
                pressed={isActive}
                onPressedChange={() => handleClick()}
                disabled={isDisabled}
                size="sm"
                className="h-8 w-8 p-0"
              >
                {item.icon}
              </Toggle>
            );

          case "dropdown":
            return (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={isDisabled}
                    className="h-8 w-8 p-0"
                  >
                    {item.icon}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.items?.map((subItem) => (
                    <React.Fragment key={subItem.id}>
                      {subItem.id === "separator" ? (
                        <DropdownMenuSeparator />
                      ) : (
                        <DropdownMenuItem
                          onClick={() => {
                            subItem.onClick?.();
                            onAction?.(subItem.id);
                          }}
                          disabled={
                            disabledStates[subItem.id] || subItem.disabled
                          }
                        >
                          {subItem.icon && (
                            <span className="mr-2">{subItem.icon}</span>
                          )}
                          {subItem.label}
                          {subItem.shortcut && (
                            <span className="ml-auto text-xs text-muted-foreground">
                              {subItem.shortcut}
                            </span>
                          )}
                        </DropdownMenuItem>
                      )}
                    </React.Fragment>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );

          case "select":
            return (
              <Select
                value={item.value}
                onValueChange={item.onValueChange}
                disabled={isDisabled}
              >
                <SelectTrigger className="h-8 w-auto min-w-[80px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {item.items?.map((subItem) => (
                    <SelectItem key={subItem.id} value={subItem.id}>
                      {subItem.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );

          default: // "button"
            return (
              <Button
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={handleClick}
                disabled={isDisabled}
                className="h-8 w-8 p-0"
              >
                {item.icon}
              </Button>
            );
        }
      };

      const element = renderElement();

      if (showTooltips && item.type !== "select") {
        return (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>{element}</TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col items-center gap-1">
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="text-xs text-muted-foreground">
                    {item.shortcut}
                  </span>
                )}
              </div>
            </TooltipContent>
          </Tooltip>
        );
      }

      return <div key={item.id}>{element}</div>;
    };

    return (
      <div
        ref={ref}
        className={cn(
          // Base toolbar styles
          "flex gap-1 bg-card/95 backdrop-blur-sm p-2",
          // Variant-specific styles
          variant === "floating" ? "rounded-lg border shadow-lg" : "border-b",
          // Orientation classes
          orientation === "vertical" ? "flex-col items-center" : "items-center",
          // Position classes
          position === "contained" ? "absolute" : "fixed z-50",
          getPositionClasses(),
          // Responsive behavior
          responsive &&
            orientation === "horizontal" &&
            variant === "floating" &&
            "max-w-[calc(100vw-2rem)] overflow-x-auto",
          responsive &&
            orientation === "vertical" &&
            variant === "floating" &&
            "max-h-[calc(100vh-2rem)] overflow-y-auto",
          responsive &&
            variant === "fixed" &&
            orientation === "horizontal" &&
            "overflow-x-auto",
          responsive &&
            variant === "fixed" &&
            orientation === "vertical" &&
            "overflow-y-auto",
          className
        )}
        style={getCustomPositionStyle()}
        {...props}
      >
        {sections.map((section, sectionIndex) => (
          <React.Fragment key={section.id}>
            <div
              className={cn(
                "flex gap-1",
                orientation === "vertical"
                  ? "flex-col items-center"
                  : "items-center"
              )}
            >
              {section.items.map((item) => renderToolbarItem(item))}
            </div>
            {sectionIndex < sections.length - 1 && (
              <Separator
                orientation={
                  orientation === "vertical" ? "horizontal" : "vertical"
                }
                className={orientation === "vertical" ? "w-6 my-1" : "h-6 mx-1"}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
);

FloatingToolbar.displayName = "FloatingToolbar";

export { FloatingToolbar };
