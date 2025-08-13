"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { toast } from "sonner";

export function SonnerShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default Toast</CardTitle>
          <CopyButton text="Default Toast" />
        </CardHeader>
        <CardContent>
          <Button onClick={() => toast("Event has been created")}>
            Show Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Success Toast</CardTitle>
          <CopyButton text="Success Toast" />
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => toast.success("Profile updated successfully")}
            variant="outline"
          >
            Success Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Error Toast</CardTitle>
          <CopyButton text="Error Toast" />
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => toast.error("Something went wrong")}
            variant="destructive"
          >
            Error Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Warning Toast</CardTitle>
          <CopyButton text="Warning Toast" />
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => toast.warning("Please check your input")}
            variant="outline"
            className="border-destructive text-destructive hover:bg-muted"
          >
            Warning Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Info Toast</CardTitle>
          <CopyButton text="Info Toast" />
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => toast.info("New update available")}
            variant="outline"
            className="border-primary text-primary hover:bg-muted"
          >
            Info Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Promise Toast</CardTitle>
          <CopyButton text="Promise Toast" />
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => {
              const promise = (): Promise<{ name: string }> =>
                new Promise((resolve) => {
                  setTimeout(() => resolve({ name: "Sonner" }), 2000);
                });

              toast.promise(promise, {
                loading: "Loading...",
                success: (data: { name: string }) => {
                  return `${data.name} toast has been added`;
                },
                error: "Error",
              });
            }}
            variant="outline"
          >
            Promise Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Action Toast</CardTitle>
          <CopyButton text="Action Toast" />
        </CardHeader>
        <CardContent>
          <Button
            onClick={() =>
              toast("Event has been created", {
                action: {
                  label: "Undo",
                  onClick: () => toast("Undo action performed"),
                },
              })
            }
            variant="outline"
          >
            Action Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Rich Content Toast</CardTitle>
          <CopyButton text="Rich Content Toast" />
        </CardHeader>
        <CardContent>
          <Button
            onClick={() =>
              toast(
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">
                      Sent you a message
                    </div>
                  </div>
                </div>
              )
            }
            variant="outline"
          >
            Rich Content Toast
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Custom Duration</CardTitle>
          <CopyButton text="Custom Duration" />
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button
              onClick={() =>
                toast("This will disappear in 1 second", { duration: 1000 })
              }
              variant="outline"
              size="sm"
            >
              1s Toast
            </Button>
            <Button
              onClick={() =>
                toast("This will disappear in 5 seconds", { duration: 5000 })
              }
              variant="outline"
              size="sm"
            >
              5s Toast
            </Button>
            <Button
              onClick={() =>
                toast("This will stay until dismissed", { duration: Infinity })
              }
              variant="outline"
              size="sm"
            >
              Persistent Toast
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
