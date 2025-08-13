"use client";

import * as React from "react";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { FloatingToolbar, ToolbarSection } from "@/components/toolbars/floating-toolbar";
import { CodeGenerator } from "./code-generator";

// Modus Icon Component
const ModusIcon = ({
   name,
   className = "",
}: {
   name: string;
   className?: string;
}) => <i className={`modus-icons ${className}`}>{name}</i>;

interface ToolbarConfig {
   position: "top" | "bottom" | "contained";
   orientation: "horizontal" | "vertical";
   variant: "floating";
   showTooltips: boolean;
}

interface ToolbarPreviewSectionProps {
   sections: ToolbarSection[];
   config: ToolbarConfig;
   onConfigChange: (config: Partial<ToolbarConfig>) => void;
   onExportCode: () => void;
   onCopyCode: () => void;
}

export function ToolbarPreviewSection({
   sections,
   config,
   onConfigChange,
   onExportCode,
   onCopyCode,
}: ToolbarPreviewSectionProps) {
   return (
      <div className="w-full space-y-6">
         {/* Prominent Toolbar Preview Container */}
         <Card className="w-full border-2 border-primary/20 shadow-lg">
            <CardHeader className="pb-4">
               <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <ModusIcon name="apps" className="text-primary" />
                  Toolbar Preview
               </CardTitle>
               <CardDescription className="text-base">
                  Real-time preview of your toolbar configuration with full-width display
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               {/* Full-Width Preview Container */}
               <div className="w-full">
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 min-h-[120px] bg-muted/20 relative overflow-hidden">
                     {/* Preview Label */}
                     <div className="absolute top-2 left-2 text-xs text-muted-foreground font-medium bg-background/80 px-2 py-1 rounded">
                        Preview Area
                     </div>

                     {/* Centered Toolbar Display */}
                     <div className="flex items-center justify-center h-full min-h-[80px]">
                        <FloatingToolbar
                           sections={sections}
                           position="contained"
                           orientation={config.orientation}
                           variant={config.variant}
                           showTooltips={config.showTooltips}
                           onAction={(actionId) => {
                              // Preview action feedback could be added here
                              console.log(`Preview action: ${actionId}`);
                           }}
                        />
                     </div>
                  </div>
               </div>

               {/* Visual Separator */}
               <Separator className="my-6" />

               {/* Toolbar Configuration Controls */}
               <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                     <ModusIcon name="settings" className="text-muted-foreground" />
                     <Label className="text-base font-medium">Toolbar Configuration</Label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {/* Position Control */}
                     <div className="space-y-2">
                        <Label htmlFor="toolbar-position" className="text-sm font-medium">
                           Position
                        </Label>
                        <Select
                           value={config.position}
                           onValueChange={(value) =>
                              onConfigChange({
                                 position: value as "top" | "bottom" | "contained",
                              })
                           }
                        >
                           <SelectTrigger id="toolbar-position">
                              <SelectValue />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="top">Top</SelectItem>
                              <SelectItem value="bottom">Bottom</SelectItem>
                              <SelectItem value="contained">Contained</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>

                     {/* Orientation Control */}
                     <div className="space-y-2">
                        <Label htmlFor="toolbar-orientation" className="text-sm font-medium">
                           Orientation
                        </Label>
                        <Select
                           value={config.orientation}
                           onValueChange={(value) =>
                              onConfigChange({
                                 orientation: value as "horizontal" | "vertical",
                              })
                           }
                        >
                           <SelectTrigger id="toolbar-orientation">
                              <SelectValue />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="horizontal">Horizontal</SelectItem>
                              <SelectItem value="vertical">Vertical</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>

                     {/* Tooltips Toggle */}
                     <div className="space-y-2">
                        <Label htmlFor="show-tooltips" className="text-sm font-medium">
                           Tooltips
                        </Label>
                        <div className="flex items-center space-x-2 h-10">
                           <Switch
                              id="show-tooltips"
                              checked={config.showTooltips}
                              onCheckedChange={(checked) =>
                                 onConfigChange({ showTooltips: checked })
                              }
                           />
                           <Label htmlFor="show-tooltips" className="text-sm text-muted-foreground">
                              {config.showTooltips ? "Enabled" : "Disabled"}
                           </Label>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Visual Separator */}
               <Separator className="my-6" />

               {/* Code Export Actions */}
               <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                     <ModusIcon name="code" className="text-muted-foreground" />
                     <Label className="text-base font-medium">Export & Code Generation</Label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                     <Button onClick={onCopyCode} variant="outline" className="flex-1">
                        <ModusIcon name="copy" className="mr-2" />
                        Copy Code
                     </Button>
                     <Button onClick={onExportCode} className="flex-1">
                        <ModusIcon name="download" className="mr-2" />
                        Export Config
                     </Button>
                     <div className="flex-1">
                        <CodeGenerator sections={sections} config={config} />
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}