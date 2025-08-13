import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function AspectRatioShowcase() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>16 / 9</CardTitle>
        <CopyButton text="16 / 9" />
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
      </CardContent>
    </Card>
  );
}
