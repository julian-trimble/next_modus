"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Label } from "@/components/ui/label";

export function SliderShowcase() {
  const [value, setValue] = React.useState([50]);
  const [rangeValue, setRangeValue] = React.useState([25, 75]);
  const [stepValue, setStepValue] = React.useState([20]);

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={value}
              onValueChange={setValue}
              max={100}
              step={1}
              className="w-[60%]"
            />
            <div className="text-sm text-muted-foreground">
              Value: {value[0]}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Label</CardTitle>
          <CopyButton text="With Label" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Label htmlFor="volume">Volume</Label>
            <Slider
              id="volume"
              value={value}
              onValueChange={setValue}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground">
              Volume: {value[0]}%
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Range Slider</CardTitle>
          <CopyButton text="Range Slider" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Label>Price Range</Label>
            <Slider
              value={rangeValue}
              onValueChange={setRangeValue}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground">
              Range: ${rangeValue[0]} - ${rangeValue[1]}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Steps</CardTitle>
          <CopyButton text="With Steps" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Label>Rating</Label>
            <Slider
              value={stepValue}
              onValueChange={setStepValue}
              max={100}
              step={10}
              className="w-full"
            />
            <div className="text-sm text-muted-foreground">
              Rating: {stepValue[0]}/100
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Disabled</CardTitle>
          <CopyButton text="Disabled" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Label>Disabled Slider</Label>
            <Slider
              value={[40]}
              max={100}
              step={1}
              className="w-full"
              disabled
            />
            <div className="text-sm text-muted-foreground">
              Value: 40 (disabled)
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Different Sizes</CardTitle>
          <CopyButton text="Different Sizes" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm">Small (25%)</Label>
              <Slider
                defaultValue={[33]}
                max={100}
                step={1}
                className="w-[25%]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Medium (50%)</Label>
              <Slider
                defaultValue={[66]}
                max={100}
                step={1}
                className="w-[50%]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Large (75%)</Label>
              <Slider
                defaultValue={[80]}
                max={100}
                step={1}
                className="w-[75%]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm">Full Width</Label>
              <Slider
                defaultValue={[90]}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
