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

// Modus Icon Component
const ModusIcon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => <i className={`modus-icons ${className}`}>{name}</i>;

// Side Pane Action Interface
export interface SidePaneAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
}

// Side Pane Details Interface
export interface SidePaneDetails {
  version: number;
  versionLink?: string;
  size: string;
  created: string;
  createdBy: string;
  modified: string;
  modifiedBy: string;
  permissions: {
    defaultAccess: string;
    users: Array<{
      name: string;
      access: string;
    }>;
  };
}

// Side Pane Props Interface
export interface SidePaneProps {
  className?: string;
  title?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onEdit?: () => void;
  onClose?: () => void;
  children?: React.ReactNode;
  actions?: SidePaneAction[];
  details?: SidePaneDetails;
  showTooltips?: boolean;
  width?: string;
}

// Default Side Pane Configuration
export const createDefaultSidePaneConfig = (): {
  actions: SidePaneAction[];
  details: SidePaneDetails;
} => ({
  actions: [
    {
      id: "user",
      label: "User",
      icon: <ModusIcon name="person" />,
    },
    {
      id: "download",
      label: "Download",
      icon: <ModusIcon name="download" />,
    },
    {
      id: "export",
      label: "Export",
      icon: <ModusIcon name="export" />,
    },
    {
      id: "delete",
      label: "Delete",
      icon: <ModusIcon name="delete" />,
      variant: "destructive",
    },
    {
      id: "more",
      label: "More",
      icon: <ModusIcon name="more_horizontal" />,
    },
  ],
  details: {
    version: 1,
    versionLink: "See history",
    size: "35.2 MB",
    created: "Mar 19, 2024",
    createdBy: "Julian Oczkowski",
    modified: "May 07, 2025",
    modifiedBy: "Julian Oczkowski",
    permissions: {
      defaultAccess: "No access",
      users: [
        {
          name: "Pablo Borgstein",
          access: "Full access",
        },
      ],
    },
  },
});

const SidePane = React.forwardRef<HTMLDivElement, SidePaneProps>(
  (
    {
      className,
      title = "3D",
      isOpen = true,
      onToggle,
      onEdit,
      onClose,
      children,
      actions = [],
      details,
      showTooltips = true,
      width = "320px",
      ...props
    },
    ref
  ) => {
    const [isCollapsed, setIsCollapsed] = React.useState(!isOpen);

    // Sync internal state with prop changes
    React.useEffect(() => {
      setIsCollapsed(!isOpen);
    }, [isOpen]);

    const handleToggle = () => {
      setIsCollapsed(!isCollapsed);
      onToggle?.();
    };

    const renderAction = (action: SidePaneAction) => {
      const button = (
        <Button
          key={action.id}
          variant={action.variant || "ghost"}
          size="sm"
          onClick={action.onClick}
          disabled={action.disabled}
          className="h-8 w-8 p-0"
        >
          {action.icon}
        </Button>
      );

      if (showTooltips) {
        return (
          <Tooltip key={action.id}>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent>
              <span>{action.label}</span>
            </TooltipContent>
          </Tooltip>
        );
      }

      return button;
    };

    if (isCollapsed) {
      return (
        <div
          ref={ref}
          className={cn(
            "fixed right-8 top-8 bottom-8 w-12 bg-card border-l shadow-lg z-40 flex flex-col",
            className
          )}
          style={{ width: "48px" }}
          {...props}
        >
          <div className="p-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggle}
              className="h-8 w-8 p-0"
            >
              <ModusIcon name="chevron_left" />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "fixed right-8 top-8 bottom-8 bg-card border-l shadow-lg z-40 flex flex-col",
          className
        )}
        style={{ width }}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex items-center gap-1">
            {onEdit && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onEdit}
                className="h-8 w-8 p-0"
              >
                <ModusIcon name="edit" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose || handleToggle}
              className="h-8 w-8 p-0"
            >
              <ModusIcon name="close" />
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {children || (
            <div className="flex items-center justify-center h-48">
              <div className="text-center">
                <ModusIcon
                  name="folder_closed"
                  className="text-4xl text-muted-foreground mb-2"
                />
                <p className="text-sm text-muted-foreground">No content</p>
              </div>
            </div>
          )}
        </div>

        {/* Actions Toolbar */}
        {actions.length > 0 && (
          <>
            <Separator />
            <div className="p-2 border-b">
              <div className="flex items-center justify-between">
                {actions.map((action) => renderAction(action))}
              </div>
            </div>
          </>
        )}

        {/* Details Section */}
        {details && (
          <div className="p-4 space-y-4 border-t bg-muted/20">
            <div>
              <h3 className="font-semibold mb-3">Details</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Version</p>
                  <div className="flex items-center gap-2">
                    <span>{details.version}</span>
                    {details.versionLink && (
                      <Button
                        variant="link"
                        size="sm"
                        className="h-auto p-0 text-xs"
                      >
                        {details.versionLink}
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground">Size</p>
                  <p>{details.size}</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Created</p>
                  <p>
                    {details.created} By {details.createdBy}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">Modified</p>
                  <p>
                    {details.modified} By {details.modifiedBy}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Permissions</h4>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <ModusIcon name="edit" />
                </Button>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground">
                    Default project member access
                  </p>
                  <p className="font-medium">
                    {details.permissions.defaultAccess}
                  </p>
                </div>

                {details.permissions.users.map((user, index) => (
                  <div key={index}>
                    <p className="text-muted-foreground">{user.name}</p>
                    <p className="font-medium">{user.access}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Comment Section */}
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <ModusIcon name="add" className="mr-2" />
                Add a comment...
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

SidePane.displayName = "SidePane";

export { SidePane };
