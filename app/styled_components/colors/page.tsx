"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface ColorInfo {
  name: string;
  cssVar: string;
  lightValue: string;
  darkValue: string;
  purpose: string;
  category: string;
}

const colorData: ColorInfo[] = [
  // Layout Colors
  {
    name: "Background",
    cssVar: "--background",
    lightValue: "0 0% 100%",
    darkValue: "0 0% 0%",
    purpose: "Main background color for pages and containers",
    category: "Layout",
  },
  {
    name: "Foreground",
    cssVar: "--foreground",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "0 0% 100%",
    purpose: "Primary text color for optimal readability",
    category: "Layout",
  },
  {
    name: "Card",
    cssVar: "--card",
    lightValue: "0 0% 100%",
    darkValue: "206.6667 10.8434% 16.2745%",
    purpose: "Background for card components and elevated surfaces",
    category: "Layout",
  },
  {
    name: "Card Foreground",
    cssVar: "--card-foreground",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "0 0% 100%",
    purpose: "Text color for content inside cards",
    category: "Layout",
  },
  {
    name: "Border",
    cssVar: "--border",
    lightValue: "233.3333 16.9811% 89.6078%",
    darkValue: "206.6667 7.3171% 24.1176%",
    purpose: "Subtle borders for dividers and component outlines",
    category: "Layout",
  },

  // Interactive Colors
  {
    name: "Primary",
    cssVar: "--primary",
    lightValue: "203.5583 100% 31.9608%",
    darkValue: "200.7692 99.1525% 46.2745%",
    purpose: "Main brand color for primary actions and highlights",
    category: "Interactive",
  },
  {
    name: "Primary Foreground",
    cssVar: "--primary-foreground",
    lightValue: "0 0% 100%",
    darkValue: "0 0% 0%",
    purpose: "Text color for primary buttons and elements",
    category: "Interactive",
  },
  {
    name: "Secondary",
    cssVar: "--secondary",
    lightValue: "240 21.7391% 95.4902%",
    darkValue: "212.7273 9.4017% 22.9412%",
    purpose: "Secondary actions and alternative button styles",
    category: "Interactive",
  },
  {
    name: "Secondary Foreground",
    cssVar: "--secondary-foreground",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "0 0% 100%",
    purpose: "Text color for secondary buttons and elements",
    category: "Interactive",
  },
  {
    name: "Accent",
    cssVar: "--accent",
    lightValue: "204.8276 70.7317% 91.9608%",
    darkValue: "203.5583 100% 31.9608%",
    purpose: "Subtle accent color for hover states and highlights",
    category: "Interactive",
  },
  {
    name: "Accent Foreground",
    cssVar: "--accent-foreground",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "0 0% 100%",
    purpose: "Text color for accent elements",
    category: "Interactive",
  },

  // Feedback Colors
  {
    name: "Destructive",
    cssVar: "--destructive",
    lightValue: "357 69.3069% 39.6078%",
    darkValue: "0 74.3017% 64.902%",
    purpose: "Error states, delete actions, and warning indicators",
    category: "Feedback",
  },
  {
    name: "Destructive Foreground",
    cssVar: "--destructive-foreground",
    lightValue: "0 0% 100%",
    darkValue: "0 0% 0%",
    purpose: "Text color for destructive buttons and error messages",
    category: "Feedback",
  },
  {
    name: "Success",
    cssVar: "--success",
    lightValue: "142 76% 36%",
    darkValue: "142 71% 45%",
    purpose: "Success states, confirmation messages, and positive feedback",
    category: "Feedback",
  },
  {
    name: "Success Foreground",
    cssVar: "--success-foreground",
    lightValue: "0 0% 100%",
    darkValue: "0 0% 0%",
    purpose: "Text color for success buttons and confirmation messages",
    category: "Feedback",
  },
  {
    name: "Muted",
    cssVar: "--muted",
    lightValue: "220 14.2857% 95.8824%",
    darkValue: "206.6667 10.8434% 16.2745%",
    purpose: "Subtle background for disabled or secondary content",
    category: "Feedback",
  },
  {
    name: "Muted Foreground",
    cssVar: "--muted-foreground",
    lightValue: "0 0% 32.1569%",
    darkValue: "0 0% 90.1961%",
    purpose: "Text color for secondary information and placeholders",
    category: "Feedback",
  },

  // Form Elements
  {
    name: "Input",
    cssVar: "--input",
    lightValue: "233.3333 16.9811% 89.6078%",
    darkValue: "224 6.6079% 44.5098%",
    purpose: "Background color for form inputs and text fields",
    category: "Form",
  },
  {
    name: "Ring",
    cssVar: "--ring",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "240 21.7391% 95.4902%",
    purpose: "Focus ring color for keyboard navigation and accessibility",
    category: "Form",
  },

  // Popover Elements
  {
    name: "Popover",
    cssVar: "--popover",
    lightValue: "0 0% 100%",
    darkValue: "206.6667 10.8434% 16.2745%",
    purpose: "Background for popovers, tooltips, and floating elements",
    category: "Overlay",
  },
  {
    name: "Popover Foreground",
    cssVar: "--popover-foreground",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "0 0% 100%",
    purpose: "Text color for popover content",
    category: "Overlay",
  },

  // Chart Colors
  {
    name: "Chart 1",
    cssVar: "--chart-1",
    lightValue: "38.0282, 96.3801%, 56.6667%",
    darkValue: "38.1457, 72.2488%, 59.0196%",
    purpose: "Primary chart color for data visualization",
    category: "Chart",
  },
  {
    name: "Chart 2",
    cssVar: "--chart-2",
    lightValue: "203.5583, 100%, 31.9608%",
    darkValue: "200.8696, 100%, 27.0588%",
    purpose: "Secondary chart color for data visualization",
    category: "Chart",
  },
  {
    name: "Chart 3",
    cssVar: "--chart-3",
    lightValue: "214.4444, 36.4865%, 29.0196%",
    darkValue: "212.7273, 9.4017%, 22.9412%",
    purpose: "Tertiary chart color for data visualization",
    category: "Chart",
  },
  {
    name: "Chart 4",
    cssVar: "--chart-4",
    lightValue: "214, 28.0374%, 41.9608%",
    darkValue: "214.6154, 10.8333%, 47.0588%",
    purpose: "Quaternary chart color for data visualization",
    category: "Chart",
  },
  {
    name: "Chart 5",
    cssVar: "--chart-5",
    lightValue: "232.5, 14.8148%, 89.4118%",
    darkValue: "0, 12.1951%, 91.9608%",
    purpose: "Quinary chart color for data visualization",
    category: "Chart",
  },

  // Sidebar Colors
  {
    name: "Sidebar",
    cssVar: "--sidebar",
    lightValue: "0 0% 98.8235%",
    darkValue: "206.6667 10.8434% 16.2745%",
    purpose: "Background color for sidebar navigation components",
    category: "Sidebar",
  },
  {
    name: "Sidebar Foreground",
    cssVar: "--sidebar-foreground",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "0 0% 100%",
    purpose: "Text color for sidebar content and navigation items",
    category: "Sidebar",
  },
  {
    name: "Sidebar Primary",
    cssVar: "--sidebar-primary",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "0 0% 100%",
    purpose: "Primary color for sidebar active states and highlights",
    category: "Sidebar",
  },
  {
    name: "Sidebar Primary Foreground",
    cssVar: "--sidebar-primary-foreground",
    lightValue: "0 0% 100%",
    darkValue: "0 0% 0%",
    purpose: "Text color for sidebar primary elements",
    category: "Sidebar",
  },
  {
    name: "Sidebar Accent",
    cssVar: "--sidebar-accent",
    lightValue: "204.8276 70.7317% 91.9608%",
    darkValue: "200.7692 99.1525% 46.2745%",
    purpose: "Accent color for sidebar hover states and secondary highlights",
    category: "Sidebar",
  },
  {
    name: "Sidebar Accent Foreground",
    cssVar: "--sidebar-accent-foreground",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "0 0% 100%",
    purpose: "Text color for sidebar accent elements",
    category: "Sidebar",
  },
  {
    name: "Sidebar Border",
    cssVar: "--sidebar-border",
    lightValue: "240 21.7391% 95.4902%",
    darkValue: "206.6667 7.3171% 24.1176%",
    purpose: "Border color for sidebar dividers and separators",
    category: "Sidebar",
  },
  {
    name: "Sidebar Ring",
    cssVar: "--sidebar-ring",
    lightValue: "197.1429 13.2075% 10.3922%",
    darkValue: "212.7273 9.4017% 22.9412%",
    purpose: "Focus ring color for sidebar navigation elements",
    category: "Sidebar",
  },
];

interface ColorCardProps {
  color: ColorInfo;
}

function ColorCard({ color }: ColorCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const lightHslValue =
    color.category === "Chart"
      ? `hsl(${color.lightValue})`
      : `hsl(${color.lightValue})`;
  const darkHslValue =
    color.category === "Chart"
      ? `hsl(${color.darkValue})`
      : `hsl(${color.darkValue})`;
  const cssVarValue =
    color.category === "Chart"
      ? `var(${color.cssVar})`
      : `hsl(var(${color.cssVar}))`;

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{color.name}</CardTitle>
          <Badge variant="outline" className="text-xs">
            {color.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Color Swatch */}
        <div
          className="w-full h-16 rounded-[var(--radius)] border-2 border-border shadow-sm"
          style={{
            backgroundColor:
              color.category === "Chart"
                ? `var(${color.cssVar})`
                : `hsl(var(${color.cssVar}))`,
          }}
        />

        {/* Purpose */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {color.purpose}
        </p>

        <Separator />

        {/* Color Values */}
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">CSS Variable:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(color.cssVar, "cssVar")}
                className="h-auto p-1 text-xs font-mono"
              >
                {copied === "cssVar" ? (
                  <i className="modus-icons text-primary mr-1">check_circle</i>
                ) : (
                  <i className="modus-icons mr-1">copy</i>
                )}
                {color.cssVar}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">CSS Usage:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(cssVarValue, "cssUsage")}
                className="h-auto p-1 text-xs font-mono"
              >
                {copied === "cssUsage" ? (
                  <i className="modus-icons text-primary mr-1">check_circle</i>
                ) : (
                  <i className="modus-icons mr-1">copy</i>
                )}
                {cssVarValue}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Light HSL:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(lightHslValue, "lightHsl")}
                className="h-auto p-1 text-xs font-mono"
              >
                {copied === "lightHsl" ? (
                  <i className="modus-icons text-primary mr-1">check_circle</i>
                ) : (
                  <i className="modus-icons mr-1">copy</i>
                )}
                {lightHslValue}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Dark HSL:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(darkHslValue, "darkHsl")}
                className="h-auto p-1 text-xs font-mono"
              >
                {copied === "darkHsl" ? (
                  <i className="modus-icons text-primary mr-1">check_circle</i>
                ) : (
                  <i className="modus-icons mr-1">copy</i>
                )}
                {darkHslValue}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ColorsPage() {
  const categories = Array.from(
    new Set(colorData.map((color) => color.category))
  );

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Color System</h1>
            <p className="text-muted-foreground mt-2">
              Complete color palette with CSS custom properties from globals.css
            </p>
          </div>

          <div className="bg-muted p-4 rounded-[var(--radius)]">
            <p className="text-sm text-muted-foreground">
              <i className="modus-icons mr-2">info</i>
              These colors automatically adapt to your system&apos;s dark/light
              mode preference using the theme toggle in the top navigation.
            </p>
          </div>
        </div>

        {/* Color Categories */}
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold">{category} Colors</h2>
              <Badge variant="secondary">
                {
                  colorData.filter((color) => color.category === category)
                    .length
                }{" "}
                colors
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorData
                .filter((color) => color.category === category)
                .map((color) => (
                  <ColorCard key={color.cssVar} color={color} />
                ))}
            </div>
          </div>
        ))}

        {/* Usage Guidelines */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <i className="modus-icons">lightbulb_on</i>
              Usage Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  ✅ Best Practices
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    • Always use CSS custom properties:{" "}
                    <code className="text-foreground">hsl(var(--primary))</code>
                  </li>
                  <li>
                    • Use Tailwind classes:{" "}
                    <code className="text-foreground">
                      bg-primary text-primary-foreground
                    </code>
                  </li>
                  <li>• Ensure proper contrast ratios for accessibility</li>
                  <li>• Test both light and dark modes thoroughly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-destructive mb-2">
                  ❌ Avoid
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    • Hardcoded colors:{" "}
                    <code className="text-foreground">#3b82f6</code> or{" "}
                    <code className="text-foreground">blue-500</code>
                  </li>
                  <li>
                    • RGB values:{" "}
                    <code className="text-foreground">rgb(59, 130, 246)</code>
                  </li>
                  <li>• Creating separate CSS files for colors</li>
                  <li>• Using colors without considering contrast</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
