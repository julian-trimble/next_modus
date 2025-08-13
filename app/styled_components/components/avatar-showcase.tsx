import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function AvatarShowcase() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Default</CardTitle>
        <CopyButton text="Default" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-row flex-wrap items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/nonexistent.png"
              alt="fallback"
            />
            <AvatarFallback>FB</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
}
