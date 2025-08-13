import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Horizontal</CardTitle>
          <CopyButton text="Horizontal" />
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-96 rounded-md border">
            <div className="flex w-max space-x-4 p-4 min-w-max">
              {Array.from({ length: 20 }).map((_, i) => (
                <figure key={i} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <div className="h-[150px] w-[150px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                      Image {i + 1}
                    </div>
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Photo by{" "}
                    <span className="font-semibold text-foreground">
                      User {i + 1}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Both Directions</CardTitle>
          <CopyButton text="Both Directions" />
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-72 w-72 rounded-md border">
            <div className="p-4 w-max">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Large Content Area
              </h4>
              <div className="grid grid-cols-8 gap-2 w-max">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-16 w-16 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold shrink-0"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Wide Table (Horizontal)</CardTitle>
          <CopyButton text="Wide Table (Horizontal)" />
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full max-w-md rounded-md border">
            <div className="p-4">
              <table className="w-max min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">Name</th>
                    <th className="text-left p-2 font-medium">Email</th>
                    <th className="text-left p-2 font-medium">Department</th>
                    <th className="text-left p-2 font-medium">Position</th>
                    <th className="text-left p-2 font-medium">Start Date</th>
                    <th className="text-left p-2 font-medium">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">Employee {i + 1}</td>
                      <td className="p-2">employee{i + 1}@company.com</td>
                      <td className="p-2">Engineering</td>
                      <td className="p-2">Software Developer</td>
                      <td className="p-2">2023-0{(i % 9) + 1}-15</td>
                      <td className="p-2">${(50 + i * 5).toFixed(0)}k</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Text Content</CardTitle>
          <CopyButton text="Text Content" />
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">
              Lorem Ipsum
            </h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
