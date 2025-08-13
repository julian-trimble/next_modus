"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CopyButton } from "@/components/copy-button";

/**
 * MCPPage showcases Model Context Protocol (MCP) servers including Figma and Context7
 * configurations with detailed setup instructions and code examples.
 */
export default function MCPPage() {
  const figmaConfig = `{
  "mcpServers": {
    "Figma": {
      "url": "http://127.0.0.1:3845/sse"
    }
  }
}`;

  const context7Config = `{
  "mcpServers": {
    "Context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}`;

  const combinedConfig = `{
  "mcpServers": {
    "Context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "Figma": {
      "url": "http://127.0.0.1:3845/sse"
    }
  }
}`;

  return (
    <div className="container mx-auto max-w-6xl space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">(MCPs) in this Boilerplate</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          MCP servers extend AI assistants like Cursor with powerful
          capabilities. This project integrates Figma design tools and Context7
          documentation services for enhanced development workflows.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <i className="modus-icons text-primary">design_package</i>
              <CardTitle>Figma MCP</CardTitle>
            </div>
            <CardDescription>
              Bridge design and development with direct Figma integration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Design System</Badge>
              <Badge variant="secondary">Asset Export</Badge>
              <Badge variant="secondary">Design Tokens</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Enables AI agents to access Figma designs, extract components, and
              generate code directly from design files.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <i className="modus-icons text-primary">document</i>
              <CardTitle>Context7 MCP</CardTitle>
            </div>
            <CardDescription>
              Up-to-date documentation for accurate code generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Live Docs</Badge>
              <Badge variant="secondary">Version-Specific</Badge>
              <Badge variant="secondary">Real-time</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Provides current documentation and code examples for libraries,
              preventing outdated API suggestions and hallucinations.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Configuration Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <i className="modus-icons text-primary">settings</i>
            <CardTitle>MCP Server Configuration</CardTitle>
          </div>
          <CardDescription>
            Current project configuration as defined in{" "}
            <code>.cursor/mcp.json</code>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="current">Current Config</TabsTrigger>
              <TabsTrigger value="figma">Figma Only</TabsTrigger>
              <TabsTrigger value="context7">Context7 Only</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">
                    Combined Configuration
                  </h4>
                  <CopyButton text={combinedConfig} />
                </div>
                <pre className="bg-secondary p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{combinedConfig}</code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="figma" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">
                    Figma MCP Configuration
                  </h4>
                  <CopyButton text={figmaConfig} />
                </div>
                <pre className="bg-secondary p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{figmaConfig}</code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="context7" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">
                    Context7 MCP Configuration
                  </h4>
                  <CopyButton text={context7Config} />
                </div>
                <pre className="bg-secondary p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{context7Config}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
