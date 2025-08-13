import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Plus, Edit, Trash2, Info, Settings } from "lucide-react";

export function TooltipShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Different Positions</CardTitle>
          <CopyButton text="Different Positions" />
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <div className="flex justify-center items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip on top</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Tooltip on right</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Tooltip on bottom</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Tooltip on left</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Icons</CardTitle>
          <CopyButton text="With Icons" />
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add new item</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit item</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete item</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Rich Content</CardTitle>
          <CopyButton text="Rich Content" />
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Info className="h-4 w-4 mr-2" />
                    Info
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="space-y-2">
                    <p className="font-semibold">Additional Information</p>
                    <p className="text-sm">
                      This is a more detailed tooltip with multiple lines of
                      text and rich formatting.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-medium">Quick Actions</p>
                    <div className="text-xs">
                      <p>• Edit preferences</p>
                      <p>• Manage account</p>
                      <p>• View history</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Custom Delay</CardTitle>
          <CopyButton text="Custom Delay" />
        </CardHeader>
        <CardContent>
          <TooltipProvider delayDuration={100}>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Fast (100ms)</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Quick tooltip</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <TooltipProvider delayDuration={1000}>
            <div className="flex gap-4 mt-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Slow (1000ms)</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delayed tooltip</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>On Disabled Elements</CardTitle>
          <CopyButton text="On Disabled Elements" />
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-block">
                    <Button disabled>Disabled Button</Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This button is currently disabled</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-block">
                    <Button disabled variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Feature not available</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Interactive Content</CardTitle>
          <CopyButton text="Interactive Content" />
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover for options</Button>
              </TooltipTrigger>
              <TooltipContent className="p-0">
                <div className="p-3 space-y-2">
                  <p className="font-semibold text-sm">Quick Actions</p>
                  <div className="space-y-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full justify-start h-8"
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full justify-start h-8"
                    >
                      Duplicate
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full justify-start h-8 text-destructive"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Keyboard Navigation</CardTitle>
          <CopyButton text="Keyboard Navigation" />
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Use Tab to navigate and Escape to close tooltips
              </p>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">First</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Press Tab to continue</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Second</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Press Escape to close</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Third</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Accessible tooltips</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>
    </div>
  );
}
