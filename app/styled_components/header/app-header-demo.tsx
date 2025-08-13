"use client";

import * as React from "react";
import { AppHeader } from "../../../components/header";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CodeBlock, InlineCode } from "@/components/ui/code-block";

export default function AppHeaderDemo() {
  const [headerConfig, setHeaderConfig] = React.useState({
    showMenuButton: true,
    showLogo: true,
    showSearchButton: true,
    showHelpButton: true,
    showAppLauncher: true,
    showAvatar: true,
    showModeToggle: true,
    showProjectDropdown: true,
  });

  const [selectedProject, setSelectedProject] = React.useState("project-1");
  const [actionLog, setActionLog] = React.useState<string[]>([]);

  const sampleProjects = [
    {
      id: "project-1",
      name: "Website Redesign",
      description: "Complete redesign of company website",
    },
    {
      id: "project-2",
      name: "Mobile App",
      description: "iOS and Android mobile application",
    },
    {
      id: "project-3",
      name: "API Integration",
      description: "Third-party API integration project",
    },
  ];

  const logAction = (action: string) => {
    setActionLog((prev) => [
      `${new Date().toLocaleTimeString()}: ${action}`,
      ...prev.slice(0, 4),
    ]);
  };

  const handleConfigChange = (key: keyof typeof headerConfig) => {
    setHeaderConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const basicUsageCode = `import { AppHeader } from "@/components/header"

function MyApp() {
  const [selectedProject, setSelectedProject] = useState("project-1")
  
  const projects = [
    { id: "project-1", name: "Website Redesign", description: "Complete redesign" },
    { id: "project-2", name: "Mobile App", description: "iOS and Android app" },
  ]

  const handleMenuClick = () => {
    console.log("Menu clicked")
  }

  const handleSearchClick = () => {
    console.log("Search clicked")
  }

  return (
    <AppHeader
      logoText="My App"
      showProjectDropdown={true}
      projects={projects}
      selectedProject={selectedProject}
      onProjectChange={setSelectedProject}
      onMenuClick={handleMenuClick}
      onSearchClick={handleSearchClick}
      avatarFallback="JD"
    />
  )
}`;

  const customizationCode = `// Minimal header with only logo and avatar
<AppHeader
  showMenuButton={false}
  showSearchButton={false}
  showHelpButton={false}
  showAppLauncher={false}
  showModeToggle={false}
  showProjectDropdown={false}
  logoText="Simple App"
  avatarFallback="SA"
/>

// Full featured header with custom logo
<AppHeader
  logoSrc="/logo.png"
  logoAlt="Company Logo"
  logoText="Enterprise App"
  avatarSrc="/avatar.jpg"
  avatarFallback="EA"
  showProjectDropdown={true}
  projects={projects}
  selectedProject={selectedProject}
  onProjectChange={setSelectedProject}
/>

// Mobile-optimized header
<AppHeader
  showMenuButton={true}
  showSearchButton={true}
  showHelpButton={false}
  showAppLauncher={false}
  showModeToggle={true}
  showAvatar={true}
  logoText="Mobile App"
/>`;

  const responsiveCode = `// The header automatically adapts to mobile screens:
// - Menu button appears on mobile (md:hidden)
// - Logo text hides on small screens (hidden sm:inline-block)
// - Some buttons move to overflow menu on mobile
// - Project dropdown moves to mobile overflow menu
// - Uses responsive breakpoints (sm:, md:, lg:)

// Custom responsive behavior
<AppHeader
  className="lg:px-8 md:px-4 px-2"
  showMenuButton={true} // Always visible on mobile
  showSearchButton={true} // Moves to overflow on mobile
  showHelpButton={true} // Moves to overflow on mobile
  showAppLauncher={true} // Moves to overflow on mobile
/>`;

  const projectStructureCode = `components/
├── header/
│   ├── app-header.tsx               # Main header component
│   └── index.ts                     # Export file
├── ui/
│   ├── button.tsx
│   ├── avatar.tsx
│   ├── dropdown-menu.tsx
│   ├── select.tsx
│   └── ...
└── ...

Usage:
import { AppHeader } from "@/components/header"`;

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">App Header</h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive application header component with mobile
          responsiveness, optional elements, and customizable branding using
          Modus Icons.
        </p>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Interactive Demo
        </h2>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Live Header Preview</h3>
          <p className="text-muted-foreground">
            Configure the header below to see how different options affect the
            appearance and behavior.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Header Configuration</CardTitle>
              <CardDescription>
                Toggle different header elements to see how they affect the
                layout.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Configuration Controls */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(headerConfig).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Switch
                      id={key}
                      checked={value}
                      onCheckedChange={() =>
                        handleConfigChange(key as keyof typeof headerConfig)
                      }
                    />
                    <Label htmlFor={key} className="text-sm">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Label>
                  </div>
                ))}
              </div>

              {/* Live Preview */}
              <div className="space-y-4">
                <h4 className="font-semibold">Live Preview</h4>
                <div className="border rounded-lg overflow-hidden">
                  <AppHeader
                    {...headerConfig}
                    logoAlt="Demo App"
                    avatarFallback="DA"
                    projects={sampleProjects}
                    selectedProject={selectedProject}
                    onProjectChange={setSelectedProject}
                    onMenuClick={() => logAction("Menu clicked")}
                    onSearchClick={() => logAction("Search clicked")}
                    onHelpClick={() => logAction("Help clicked")}
                    onAppLauncherClick={() => logAction("App launcher clicked")}
                    onAvatarClick={() => logAction("Avatar clicked")}
                  />
                  <div className="p-4 bg-muted/50 min-h-[200px] flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <p className="text-muted-foreground">Page content area</p>
                      {actionLog.length > 0 && (
                        <div className="space-y-2">
                          <h5 className="font-medium">Action Log:</h5>
                          <div className="space-y-1">
                            {actionLog.map((log, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {log}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preset Examples */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Preset Examples</h3>
          <p className="text-muted-foreground">
            Common header configurations for different use cases.
          </p>

          <div className="space-y-6">
            {/* Minimal Header */}
            <Card>
              <CardHeader>
                <CardTitle>Minimal Header</CardTitle>
                <CardDescription>
                  Simple header with just logo and avatar, perfect for clean
                  interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <AppHeader
                    showMenuButton={false}
                    showSearchButton={false}
                    showHelpButton={false}
                    showAppLauncher={false}
                    showModeToggle={false}
                    showProjectDropdown={false}
                    logoAlt="Minimal App"
                    avatarFallback="MA"
                  />
                  <div className="p-4 bg-muted/50 h-24 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">
                      Clean, minimal interface
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full Featured Header */}
            <Card>
              <CardHeader>
                <CardTitle>Full Featured Header</CardTitle>
                <CardDescription>
                  Complete header with all features enabled, ideal for complex
                  applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <AppHeader
                    logoAlt="Enterprise App"
                    avatarFallback="EA"
                    showProjectDropdown={true}
                    projects={sampleProjects}
                    selectedProject={selectedProject}
                    onProjectChange={setSelectedProject}
                  />
                  <div className="p-4 bg-muted/50 h-24 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">
                      Feature-rich application header
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Optimized Header */}
            <Card>
              <CardHeader>
                <CardTitle>Mobile Optimized Header</CardTitle>
                <CardDescription>
                  Header optimized for mobile devices with essential features
                  only.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <AppHeader
                    showMenuButton={true}
                    showSearchButton={true}
                    showHelpButton={false}
                    showAppLauncher={false}
                    showModeToggle={true}
                    showAvatar={true}
                    showProjectDropdown={false}
                    logoAlt="Mobile App"
                    avatarFallback="MB"
                  />
                  <div className="p-4 bg-muted/50 h-24 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">
                      Mobile-first design
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Component Location */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Component Location
          </h2>
          <p className="text-muted-foreground">
            The app header component is located in the{" "}
            <InlineCode>@/components/header</InlineCode> directory.
          </p>
          <CodeBlock title="Project Structure" language="text">
            {projectStructureCode}
          </CodeBlock>
        </div>

        {/* Customization Examples */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Customization Examples</h3>
          <p className="text-muted-foreground">
            Examples of different header configurations for various use cases.
          </p>
          <CodeBlock title="Customization examples">
            {customizationCode}
          </CodeBlock>
        </div>

        {/* Responsive Design */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Responsive Design</h3>
          <p className="text-muted-foreground">
            The header automatically adapts to different screen sizes with
            mobile-first design.
          </p>
          <CodeBlock title="Responsive behavior">{responsiveCode}</CodeBlock>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock title="components/my-app.tsx">{basicUsageCode}</CodeBlock>
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">AppHeader Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>className</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Additional CSS classes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showMenuButton</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Show mobile menu button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showLogo</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Show logo and app name
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showSearchButton</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Show search button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showHelpButton</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Show help button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showAppLauncher</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Show app launcher dropdown
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showAvatar</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Show user avatar dropdown
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showModeToggle</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>true</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Show dark/light mode toggle
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>showProjectDropdown</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>boolean</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>false</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Show project selector dropdown
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>logoSrc</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Custom logo image URL
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>logoText</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>&quot;App&quot;</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Application name text
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>avatarSrc</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      User avatar image URL
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>avatarFallback</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>&quot;U&quot;</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Avatar fallback text
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>projects</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>
                        Array&lt;&#123;id: string, name: string, description?:
                        string&#125;&gt;
                      </InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>[]</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      Available projects for dropdown
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>selectedProject</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>string</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Currently selected project ID
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onProjectChange</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>(projectId: string) =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Project selection callback
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onMenuClick</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Menu button click callback
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onSearchClick</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Search button click callback
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onHelpClick</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Help button click callback
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onAppLauncherClick</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      App launcher click callback
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">
                      <InlineCode>onAvatarClick</InlineCode>
                    </td>
                    <td className="border border-border p-2">
                      <InlineCode>() =&gt; void</InlineCode>
                    </td>
                    <td className="border border-border p-2">-</td>
                    <td className="border border-border p-2">
                      Avatar click callback
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
