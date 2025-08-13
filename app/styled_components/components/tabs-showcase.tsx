import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function TabsShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Multiple Tabs</CardTitle>
          <CopyButton text="Multiple Tabs" />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <h3 className="text-lg font-medium">Dashboard Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium">Total Users</h4>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium">Revenue</h4>
                  <p className="text-2xl font-bold">$12,345</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <h3 className="text-lg font-medium">Analytics</h3>
              <p className="text-muted-foreground">
                View detailed analytics and insights about your application.
              </p>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <h3 className="text-lg font-medium">Reports</h3>
              <p className="text-muted-foreground">
                Generate and download various reports.
              </p>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <h3 className="text-lg font-medium">Application Settings</h3>
              <p className="text-muted-foreground">
                Configure your application settings and preferences.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Disabled Tab</CardTitle>
          <CopyButton text="Disabled Tab" />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tab1" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="tab1">Available</TabsTrigger>
              <TabsTrigger value="tab2" disabled>
                Disabled
              </TabsTrigger>
              <TabsTrigger value="tab3">Another Tab</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Available Tab</h4>
                <p className="text-muted-foreground">
                  This tab is available and can be clicked.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Disabled Tab</h4>
                <p className="text-muted-foreground">
                  This tab is disabled and cannot be accessed.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Another Tab</h4>
                <p className="text-muted-foreground">
                  This is another available tab.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
