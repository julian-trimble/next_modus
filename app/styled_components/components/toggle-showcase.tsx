"use client";
import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Bold, Italic, Underline } from "lucide-react";

export function ToggleShowcase() {
  const [isBoldPressed, setIsBoldPressed] = React.useState(false);
  const [isItalicPressed] = React.useState(true);

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Text</CardTitle>
          <CopyButton text="With Text" />
        </CardHeader>
        <CardContent>
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4 mr-2" />
            Bold
          </Toggle>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Controlled</CardTitle>
          <CopyButton text="Controlled" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Toggle
              pressed={isBoldPressed}
              onPressedChange={setIsBoldPressed}
              aria-label="Toggle bold"
            >
              <Bold className="h-4 w-4" />
            </Toggle>
            <span className="text-sm text-muted-foreground">
              Bold is {isBoldPressed ? "on" : "off"}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default Pressed</CardTitle>
          <CopyButton text="Default Pressed" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Toggle defaultPressed={isItalicPressed} aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <span className="text-sm text-muted-foreground">
              Starts in pressed state
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Disabled</CardTitle>
          <CopyButton text="Disabled" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Toggle disabled aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
            <Toggle disabled defaultPressed aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Different Sizes</CardTitle>
          <CopyButton text="Different Sizes" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Toggle size="sm" aria-label="Small toggle">
              <Bold className="h-3 w-3" />
            </Toggle>
            <Toggle size="default" aria-label="Default toggle">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle size="lg" aria-label="Large toggle">
              <Bold className="h-5 w-5" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Variants</CardTitle>
          <CopyButton text="Variants" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Toggle variant="default" aria-label="Default variant">
                <Bold className="h-4 w-4 mr-2" />
                Default
              </Toggle>
              <Toggle variant="outline" aria-label="Outline variant">
                <Italic className="h-4 w-4 mr-2" />
                Outline
              </Toggle>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Text Only</CardTitle>
          <CopyButton text="Text Only" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Toggle aria-label="Toggle notifications">Notifications</Toggle>
            <Toggle defaultPressed aria-label="Toggle dark mode">
              Dark Mode
            </Toggle>
            <Toggle disabled aria-label="Toggle feature">
              Feature (Disabled)
            </Toggle>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Toolbar Example</CardTitle>
          <CopyButton text="Toolbar Example" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1 p-1 rounded-md border">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Custom State Handling</CardTitle>
          <CopyButton text="Custom State Handling" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Toggle
                pressed={isBoldPressed}
                onPressedChange={(pressed) => {
                  setIsBoldPressed(pressed);
                  console.log("Bold toggle:", pressed ? "enabled" : "disabled");
                }}
                aria-label="Toggle bold with logging"
              >
                <Bold className="h-4 w-4 mr-2" />
                Bold (with logging)
              </Toggle>
            </div>
            <p className="text-sm text-muted-foreground">
              Check the console to see toggle state changes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
