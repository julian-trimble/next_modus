"use client";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

const components = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "command",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "form",
  "hover-card",
  "input",
  "input-otp",
  "label",
  "menubar",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "sonner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toggle",
  "toggle-group",
  "tooltip",
].sort();

export default function StyledComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-6">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-lg font-semibold">UIs</h2>
            <ModeToggle />
          </div>
        </SidebarHeader>
        <SidebarContent className="px-4">
          <SidebarMenu className="space-y-1">
            {/* Section 1: Introduction & Cursor Rules */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components"}
              >
                <Link href="/styled_components">
                  <i className="modus-icons mr-2">home</i>
                  Introduction
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/cursor-rules"}
              >
                <Link href="/styled_components/cursor-rules">
                  <i className="modus-icons mr-2">mix</i>
                  Cursor Rules
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/mcp"}
              >
                <Link href="/styled_components/mcp">
                  <i className="modus-icons mr-2">server</i>
                  MCP
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Section Separator */}
            <div className="pb-4 pt-2">
              <Separator className="opacity-50" />
            </div>

            {/* Section 2: Design System */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/modus-icons"}
              >
                <Link href="/styled_components/modus-icons">
                  <i className="modus-icons mr-2">icons_shapes</i>
                  Modus Icons
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/colors"}
              >
                <Link href="/styled_components/colors">
                  <i className="modus-icons mr-2">palette</i>
                  Color System
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Section Separator */}
            <div className="pb-4 pt-2">
              <Separator className="opacity-50" />
            </div>

            {/* Section 3: Custom Components (App Header to Toolbar Builder) */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/header"}
              >
                <Link href="/styled_components/header">
                  <i className="modus-icons mr-2">window_template</i>
                  App Header
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/floating-toolbar"}
              >
                <Link href="/styled_components/floating-toolbar">
                  <i className="modus-icons mr-2">apps</i>
                  Toolbar
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/side-pane"}
              >
                <Link href="/styled_components/side-pane">
                  <i className="modus-icons mr-2">window_side_panel</i>
                  Side Pane
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/treeview"}
              >
                <Link href="/styled_components/treeview">
                  <i className="modus-icons mr-2">tree_structure</i>
                  Tree View
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/styled_components/toolbar-builder"}
              >
                <Link href="/styled_components/toolbar-builder">
                  <i className="modus-icons mr-2">gears</i>
                  WIP: Toolbar Builder
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Section Separator */}
            <div className="pb-4 pt-2">
              <Separator className="opacity-50" />
            </div>

            {/* Section 4: UI Components (Accordion to Tooltip) */}
            {components.map((component) => {
              const href = `/styled_components/${component}`;
              const isActive = pathname === href;
              return (
                <SidebarMenuItem key={component}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link href={href}>
                      {component.charAt(0).toUpperCase() +
                        component.slice(1).replace(/-/g, " ")}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <main className="min-h-screen bg-secondary/50 p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
