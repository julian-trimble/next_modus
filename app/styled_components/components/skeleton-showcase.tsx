import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function SkeletonShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Card Skeleton</CardTitle>
          <CopyButton text="Card Skeleton" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>List Skeleton</CardTitle>
          <CopyButton text="List Skeleton" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Table Skeleton</CardTitle>
          <CopyButton text="Table Skeleton" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Different Sizes</CardTitle>
          <CopyButton text="Different Sizes" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Small</p>
              <Skeleton className="h-2 w-[100px]" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Medium</p>
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Large</p>
              <Skeleton className="h-6 w-[300px]" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Extra Large</p>
              <Skeleton className="h-8 w-[400px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Button Skeleton</CardTitle>
          <CopyButton text="Button Skeleton" />
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Skeleton className="h-10 w-[80px] rounded-md" />
            <Skeleton className="h-10 w-[100px] rounded-md" />
            <Skeleton className="h-10 w-[120px] rounded-md" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
