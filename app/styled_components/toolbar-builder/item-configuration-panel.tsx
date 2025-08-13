"use client";

import * as React from "react";
import { ToolbarAction } from "@/components/toolbars/floating-toolbar";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

interface ItemConfigurationPanelProps {
   selectedItem: ToolbarAction | null;
}

export function ItemConfigurationPanel({
   selectedItem,
}: ItemConfigurationPanelProps) {
   return (
      <Card className="w-full">
         <CardHeader>
            <CardTitle>Item Configuration</CardTitle>
            <CardDescription>
               Configure selected toolbar items
            </CardDescription>
         </CardHeader>
         <CardContent>
            {selectedItem ? (
               <div className="text-center text-muted-foreground py-8">
                  <p>Item configuration content will be implemented in task 4</p>
                  <p className="text-sm mt-2">Selected: {selectedItem.label}</p>
               </div>
            ) : (
               <div className="text-center text-muted-foreground py-8">
                  <p>No item selected</p>
               </div>
            )}
         </CardContent>
      </Card>
   );
}