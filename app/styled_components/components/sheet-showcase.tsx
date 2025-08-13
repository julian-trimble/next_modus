"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function SheetShowcase() {
  const [name, setName] = useState("Pedro Duarte");
  const [username, setUsername] = useState("@peduarte");
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default (Right)</CardTitle>
          <CopyButton text="Default (Right)" />
        </CardHeader>
        <CardContent>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Left Side</CardTitle>
          <CopyButton text="Left Side" />
        </CardHeader>
        <CardContent>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Left Sheet</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Navigate through the application.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Button variant="ghost" className="justify-start">
                  Dashboard
                </Button>
                <Button variant="ghost" className="justify-start">
                  Projects
                </Button>
                <Button variant="ghost" className="justify-start">
                  Settings
                </Button>
                <Button variant="ghost" className="justify-start">
                  Help
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Top Side</CardTitle>
          <CopyButton text="Top Side" />
        </CardHeader>
        <CardContent>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Top Sheet</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>Your recent notifications.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">
                    New message from John
                  </div>
                  <div className="text-xs text-muted-foreground">
                    2 minutes ago
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Project update</div>
                  <div className="text-xs text-muted-foreground">
                    1 hour ago
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">System maintenance</div>
                  <div className="text-xs text-muted-foreground">
                    3 hours ago
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bottom Side</CardTitle>
          <CopyButton text="Bottom Side" />
        </CardHeader>
        <CardContent>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Bottom Sheet</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Quick Actions</SheetTitle>
                <SheetDescription>
                  Perform quick actions from here.
                </SheetDescription>
              </SheetHeader>
              <div className="grid grid-cols-4 gap-4 py-4">
                <Button variant="outline" size="sm">
                  Copy
                </Button>
                <Button variant="outline" size="sm">
                  Paste
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
                <Button variant="outline" size="sm">
                  Share
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </div>
  );
}
