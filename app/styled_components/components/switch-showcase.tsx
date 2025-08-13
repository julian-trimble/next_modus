"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function SwitchShowcase() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);
  const [marketing, setMarketing] = React.useState(false);

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch
              id="airplane-mode"
              checked={isChecked}
              onCheckedChange={setIsChecked}
            />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Labels</CardTitle>
          <CopyButton text="With Labels" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications" className="text-base">
                  Email Notifications
                </Label>
                <div className="text-sm text-muted-foreground">
                  Receive emails about your account activity.
                </div>
              </div>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing" className="text-base">
                  Marketing Emails
                </Label>
                <div className="text-sm text-muted-foreground">
                  Receive emails about new products and features.
                </div>
              </div>
              <Switch
                id="marketing"
                checked={marketing}
                onCheckedChange={setMarketing}
              />
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
            <div className="flex items-center space-x-2">
              <Switch id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="text-muted-foreground">
                Disabled (Off)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-on" disabled checked />
              <Label htmlFor="disabled-on" className="text-muted-foreground">
                Disabled (On)
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Form Example</CardTitle>
          <CopyButton text="Form Example" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Privacy Settings</h3>
              <p className="text-sm text-muted-foreground">
                Manage how your information is displayed to other users.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">
                    Profile Visibility
                  </Label>
                  <div className="text-sm text-muted-foreground">
                    Make your profile visible to other users
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">
                    Show Activity Status
                  </Label>
                  <div className="text-sm text-muted-foreground">
                    Let others see when you&apos;re online
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Data Collection</Label>
                  <div className="text-sm text-muted-foreground">
                    Allow us to collect usage data for improvements
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Controlled State</CardTitle>
          <CopyButton text="Controlled State" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="controlled"
                checked={isChecked}
                onCheckedChange={setIsChecked}
              />
              <Label htmlFor="controlled">
                Dark Mode ({isChecked ? "On" : "Off"})
              </Label>
            </div>
            <div className="text-sm text-muted-foreground">
              Current state: {isChecked ? "Enabled" : "Disabled"}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
