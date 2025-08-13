import React from "react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";
import { ChevronRightIcon, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const variants = [
  { name: "Default", variant: "default" as const },
  { name: "Secondary", variant: "secondary" as const },
  { name: "Destructive", variant: "destructive" as const },
  { name: "Outline", variant: "outline" as const },
  { name: "Ghost", variant: "ghost" as const },
  { name: "Link", variant: "link" as const },
];

export function ButtonShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-4">
            {variants.map(({ name, variant }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium">{name}</h3>
                  <CopyButton text={name} />
                </div>
                <Button variant={variant}>{name}</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Default</h3>
                <CopyButton text="Default" />
              </div>
              <Button size="default">Default</Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Small</h3>
                <CopyButton text="Small" />
              </div>
              <Button size="sm">Small</Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Large</h3>
                <CopyButton text="Large" />
              </div>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Icon</h3>
                <CopyButton text="Icon" />
              </div>
              <Button size="icon">
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icon</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">With Icon</h3>
                <CopyButton text="With Icon" />
              </div>
              <Button>
                <ChevronRightIcon className="mr-2 h-4 w-4" />
                Button
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Loading</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">Loading</h3>
                <CopyButton text="Loading" />
              </div>
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
