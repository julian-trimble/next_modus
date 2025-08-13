import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function SeparatorShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Horizontal</CardTitle>
          <CopyButton text="Horizontal" />
        </CardHeader>
        <CardContent>
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">
                Radix Primitives
              </h4>
              <p className="text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Vertical</CardTitle>
          <CopyButton text="Vertical" />
        </CardHeader>
        <CardContent>
          <div className="flex h-20 items-center space-x-4">
            <div className="flex flex-col space-y-2">
              <div className="text-sm font-medium">Profile</div>
              <div className="text-xs text-muted-foreground">
                Manage your profile
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col space-y-2">
              <div className="text-sm font-medium">Settings</div>
              <div className="text-xs text-muted-foreground">
                Configure your account
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col space-y-2">
              <div className="text-sm font-medium">Help</div>
              <div className="text-xs text-muted-foreground">
                Get help and support
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>In Lists</CardTitle>
          <CopyButton text="In Lists" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-2">
              <div className="text-sm font-medium">Recent Files</div>
              <div className="text-xs text-muted-foreground">document.pdf</div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="text-sm font-medium">Shared</div>
              <div className="text-xs text-muted-foreground">
                presentation.pptx
              </div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="text-sm font-medium">Trash</div>
              <div className="text-xs text-muted-foreground">old-file.txt</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Custom Styling</CardTitle>
          <CopyButton text="Custom Styling" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>Section 1</div>
            <Separator className="bg-destructive" />
            <div>Section 2</div>
            <Separator className="bg-primary h-1" />
            <div>Section 3</div>
            <Separator className="bg-accent" />
            <div>Section 4</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
