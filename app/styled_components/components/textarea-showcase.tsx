import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

export function TextareaShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Type your message here." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Label</CardTitle>
          <CopyButton text="With Label" />
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Text</CardTitle>
          <CopyButton text="With Text" />
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2">Your message</Label>
            <Textarea placeholder="Type your message here." id="message-2" />
            <p className="text-sm text-muted-foreground">
              Your message will be copied to the support team.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Disabled</CardTitle>
          <CopyButton text="Disabled" />
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Type your message here." disabled />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Button</CardTitle>
          <CopyButton text="With Button" />
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send message</Button>
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
            <div className="grid w-full gap-1.5">
              <Label htmlFor="small">Small</Label>
              <Textarea
                placeholder="Small textarea"
                id="small"
                className="min-h-[60px]"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="medium">Medium (Default)</Label>
              <Textarea placeholder="Medium textarea" id="medium" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="large">Large</Label>
              <Textarea
                placeholder="Large textarea"
                id="large"
                className="min-h-[120px]"
              />
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
          <form className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="content">Message</Label>
              <Textarea
                placeholder="Enter your message here..."
                id="content"
                className="min-h-[100px]"
              />
              <p className="text-xs text-muted-foreground">
                Maximum 500 characters
              </p>
            </div>
            <div className="flex gap-2">
              <Button type="submit">Send</Button>
              <Button type="button" variant="outline">
                Save Draft
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Resizable</CardTitle>
          <CopyButton text="Resizable" />
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="resizable">Resizable Textarea</Label>
            <Textarea
              placeholder="This textarea can be resized"
              id="resizable"
              className="resize"
            />
            <p className="text-sm text-muted-foreground">
              You can resize this textarea by dragging the corner.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Non-resizable</CardTitle>
          <CopyButton text="Non-resizable" />
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="non-resizable">Fixed Size Textarea</Label>
            <Textarea
              placeholder="This textarea cannot be resized"
              id="non-resizable"
              className="resize-none"
            />
            <p className="text-sm text-muted-foreground">
              This textarea has a fixed size and cannot be resized.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
