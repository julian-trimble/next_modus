import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

export function ToggleGroupShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Single Selection</CardTitle>
          <CopyButton text="Single Selection" />
        </CardHeader>
        <CardContent>
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Toggle left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Toggle center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Toggle right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Multiple Selection</CardTitle>
          <CopyButton text="Multiple Selection" />
        </CardHeader>
        <CardContent>
          <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Text</CardTitle>
          <CopyButton text="With Text" />
        </CardHeader>
        <CardContent>
          <ToggleGroup type="single" defaultValue="medium">
            <ToggleGroupItem value="small">Small</ToggleGroupItem>
            <ToggleGroupItem value="medium">Medium</ToggleGroupItem>
            <ToggleGroupItem value="large">Large</ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Text and Icons</CardTitle>
          <CopyButton text="With Text and Icons" />
        </CardHeader>
        <CardContent>
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold">
              <Bold className="h-4 w-4 mr-2" />
              Bold
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <Italic className="h-4 w-4 mr-2" />
              Italic
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <Underline className="h-4 w-4 mr-2" />
              Underline
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Disabled Items</CardTitle>
          <CopyButton text="Disabled Items" />
        </CardHeader>
        <CardContent>
          <ToggleGroup type="single" defaultValue="option1">
            <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
            <ToggleGroupItem value="option2" disabled>
              Option 2 (Disabled)
            </ToggleGroupItem>
            <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Different Sizes</CardTitle>
          <CopyButton text="Different Sizes" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Small</h4>
              <ToggleGroup type="single" size="sm">
                <ToggleGroupItem value="small1">S1</ToggleGroupItem>
                <ToggleGroupItem value="small2">S2</ToggleGroupItem>
                <ToggleGroupItem value="small3">S3</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Default</h4>
              <ToggleGroup type="single">
                <ToggleGroupItem value="default1">D1</ToggleGroupItem>
                <ToggleGroupItem value="default2">D2</ToggleGroupItem>
                <ToggleGroupItem value="default3">D3</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Large</h4>
              <ToggleGroup type="single" size="lg">
                <ToggleGroupItem value="large1">L1</ToggleGroupItem>
                <ToggleGroupItem value="large2">L2</ToggleGroupItem>
                <ToggleGroupItem value="large3">L3</ToggleGroupItem>
              </ToggleGroup>
            </div>
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
            <div>
              <h4 className="text-sm font-medium mb-2">Default</h4>
              <ToggleGroup type="single" variant="default">
                <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
                <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
                <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Outline</h4>
              <ToggleGroup type="single" variant="outline">
                <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
                <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
                <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Toolbar Example</CardTitle>
          <CopyButton text="Toolbar Example" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <div className="h-6 w-px bg-border" />
            <ToggleGroup type="single">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
