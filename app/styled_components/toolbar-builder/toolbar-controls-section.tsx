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
import { CodeGenerator } from "./code-generator";
import { ToolbarSection } from "@/components/toolbars/floating-toolbar";

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

interface ToolbarControlsSectionProps {
   sections: ToolbarSection[];
   config: ToolbarConfig;
   onConfigChange: (config: Partial<ToolbarConfig>) => void;
   onExportCode: () => void;
   onCopyCode: () => void;
}

export function ToolbarControlsSection({
   sections,
   config,
   onConfigChange,
   onExportCode,
   onCopyCode,
}: ToolbarControlsSectionProps) {
   return (
      <Card className="w-full">
         <CardHeader>
            <CardTitle>Toolbar Configuration</CardTitle>
            <CardDescription>
               Configure toolbar settings and export your configuration
            </CardDescription>
         </CardHeader>
         <CardContent className="space-y-6">
            {/* Toolbar Configuration Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <Label>Orientation</Label>
                  <Select
                     value={config.orientation}
                     onValueChange={(value) =>
                        onConfigChange({
                           orientation: value as "horizontal" | "vertical",
                        })
                     }
                  >
                     <SelectTrigger>
                        <SelectValue />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="horizontal">Horizontal</SelectItem>
                        <SelectItem value="vertical">Vertical</SelectItem>
                     </SelectContent>
                  </Select>
               </div>

               <div className="flex items-center space-x-2">
                  <Switch
                     id="show-tooltips"
                     checked={config.showTooltips}
                     onCheckedChange={(checked) =>
                        onConfigChange({ showTooltips: checked })
                     }
                  />
                  <Label htmlFor="show-tooltips">Show Tooltips</Label>
               </div>
            </div>

            {/* Export Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
               <Button onClick={onExportCode} className="flex-1">
                  <ModusIcon name="download" className="mr-2" />
                  Export Config
               </Button>
               <Button onClick={onCopyCode} variant="outline" className="flex-1">
                  <ModusIcon name="copy" className="mr-2" />
                  Copy Code
               </Button>
               <CodeGenerator sections={sections} config={config} />
            </div>
         </CardContent>
      </Card>
   );
}