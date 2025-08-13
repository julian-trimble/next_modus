import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function ResizableShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Horizontal</CardTitle>
          <CopyButton text="Horizontal" />
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border md:min-w-[450px]"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Vertical</CardTitle>
          <CopyButton text="Vertical" />
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="vertical"
            className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
          >
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Header</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Complex Layout</CardTitle>
          <CopyButton text="Complex Layout" />
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
          >
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Sidebar</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Header</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Handle</CardTitle>
          <CopyButton text="With Handle" />
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border md:min-w-[450px]"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>
    </div>
  );
}
