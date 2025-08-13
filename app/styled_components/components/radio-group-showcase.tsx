import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function RadioGroupShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Descriptions</CardTitle>
          <CopyButton text="With Descriptions" />
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="card">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="card">Card</Label>
                <p className="text-xs text-muted-foreground">
                  Pay with a credit or debit card.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="paypal">PayPal</Label>
                <p className="text-xs text-muted-foreground">
                  Pay with your PayPal account.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="apple" id="apple" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="apple">Apple Pay</Label>
                <p className="text-xs text-muted-foreground">
                  Pay with Touch ID or Face ID.
                </p>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Disabled</CardTitle>
          <CopyButton text="Disabled" />
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" disabled />
              <Label htmlFor="option-two" className="text-muted-foreground">
                Option Two (Disabled)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Option Three</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Horizontal</CardTitle>
          <CopyButton text="Horizontal" />
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="small" className="flex">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="small" />
              <Label htmlFor="small">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="large" />
              <Label htmlFor="large">Large</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}
