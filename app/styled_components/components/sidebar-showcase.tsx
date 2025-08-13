"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Calendar, Home, Inbox, Search, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function SidebarShowcase() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Sidebar</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            A composable, themeable and customizable sidebar component. The copy
            button allows you to copy the variant name to your clipboard.
          </p>
        </div>
        <CopyButton text="Default" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Default</h3>
            <div className="relative h-[400px] w-full rounded-md border overflow-hidden bg-background">
              <div className="flex h-full">
                {/* Demo Sidebar */}
                <div
                  className={`bg-sidebar text-sidebar-foreground border-r transition-all duration-300 ${
                    isOpen ? "w-64" : "w-0"
                  } overflow-hidden`}
                >
                  <div className="flex h-full flex-col">
                    {/* Sidebar Header */}
                    <div className="border-b p-4">
                      <h2 className="text-lg font-semibold">Application</h2>
                    </div>

                    {/* Sidebar Content */}
                    <div className="flex-1 overflow-auto p-4">
                      <div className="space-y-2">
                        <div className="px-2 py-1 text-xs font-medium text-muted-foreground">
                          Navigation
                        </div>
                        <nav className="space-y-1">
                          {items.map((item) => (
                            <a
                              key={item.title}
                              href={item.url}
                              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    {/* Sidebar Footer */}
                    <div className="border-t p-4">
                      <div className="text-xs text-muted-foreground">
                        v1.0.0
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                  <div className="border-b p-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(!isOpen)}
                      className="h-8 w-8 p-0"
                    >
                      <Menu className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1 p-4">
                    <h1 className="text-2xl font-bold mb-2">Main Content</h1>
                    <p className="text-muted-foreground">
                      This is the main content area. Use the trigger button to
                      toggle the sidebar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
