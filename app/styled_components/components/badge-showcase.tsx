import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

const variants = [
  { name: "Default", variant: "default" as const },
  { name: "Secondary", variant: "secondary" as const },
  { name: "Destructive", variant: "destructive" as const },
  { name: "Outline", variant: "outline" as const },
];

export function BadgeShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Variants</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-end gap-4">
          {variants.map(({ name, variant }) => (
            <div key={variant} className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">{name}</h3>
                <CopyButton text={name} />
              </div>
              <Badge variant={variant}>Badge</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
