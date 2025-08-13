"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function ProgressShowcase() {
  const [progress, setProgress] = React.useState(13);
  const [animatedProgress, setAnimatedProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 10;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-[60%]" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Value</CardTitle>
          <CopyButton text="With Value" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Animated</CardTitle>
          <CopyButton text="Animated" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Loading...</span>
              <span>{animatedProgress}%</span>
            </div>
            <Progress value={animatedProgress} className="w-full" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Different Values</CardTitle>
          <CopyButton text="Different Values" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Small</span>
                <span>25%</span>
              </div>
              <Progress value={25} className="w-full" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Medium</span>
                <span>50%</span>
              </div>
              <Progress value={50} className="w-full" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Large</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="w-full" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Complete</span>
                <span>100%</span>
              </div>
              <Progress value={100} className="w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
