"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-secondary/60">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <Image
            className="mx-auto dark:invert"
            src="/modus-logo.svg"
            alt="Modus Logo"
            width={240}
            height={50}
            priority
          />
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Styled Components Boilerplate and Cursor AI Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thank you for using our comprehensive Next.js boilerplate! This
              project showcases modern UI components with ShadCN, Tailwind CSS,
              based on the Modus design system styles. Cursor AI is integrated
              to assist with the development process.
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/styled_components">
                <i className="modus-icons mr-2">brush</i>
                Explore Components
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/styled_components/cursor-rules">
                <i className="modus-icons mr-2">mix</i>
                Cursor Rules
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/styled_components/modus-icons">
                <i className="modus-icons mr-2">icons_shapes</i>
                Browse Icons
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href="https://github.com/julianoczkowski/nextjs15-modus-styled"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="modus-icons mr-2">launch</i>
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">What&apos;s Included</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete toolkit for building modern, responsive, and accessible
            web applications with industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Core Framework */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">code</i>
                Modern Framework
              </CardTitle>
              <CardDescription>Latest Next.js 15 with React 19</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built on Next.js 15 App Router with React 19 features including
                Server Components and modern patterns.
              </p>
            </CardContent>
          </Card>

          {/* UI Components */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">window_template</i>
                50+ Components
              </CardTitle>
              <CardDescription>ShadCN + Custom Components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete ShadCN UI library plus 4 custom components and 32
                calendar variations ready to use.
              </p>
            </CardContent>
          </Card>

          {/* Modus Icons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">icons_shapes</i>
                Modus Icons
              </CardTitle>
              <CardDescription>Complete icon system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Full Modus icon library with search functionality and strict
                validation for consistent design.
              </p>
            </CardContent>
          </Card>

          {/* Theming */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">palette</i>
                Smart Theming
              </CardTitle>
              <CardDescription>Light & Dark modes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                CSS custom properties with automatic dark mode support and Modus
                brand colors.
              </p>
            </CardContent>
          </Card>

          {/* TypeScript */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">shield_check</i>
                Type Safety
              </CardTitle>
              <CardDescription>TypeScript strict mode</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Full TypeScript support with strict mode enabled for maximum
                type safety and developer experience.
              </p>
            </CardContent>
          </Card>

          {/* Responsive */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">mobile_app_version</i>
                Responsive Design
              </CardTitle>
              <CardDescription>Mobile-first approach</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All components are fully responsive with mobile-first design
                principles and touch-friendly interfaces.
              </p>
            </CardContent>
          </Card>

          {/* Cursor AI Integration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">mix</i>
                Cursor AI Integration
              </CardTitle>
              <CardDescription>Enhanced development experience</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive AI assistance with project rules, memories, and
                intelligent code generation for consistent development.
              </p>
            </CardContent>
          </Card>

          {/* Trimble Products */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <i className="modus-icons text-primary">trimble_logo</i>
                Trimble Products
              </CardTitle>
              <CardDescription>Enterprise solutions showcase</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Includes product logos for Tekla, Connect, FieldLink, and other
                Trimble enterprise solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trimble Product Logos Section */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              Trimble Logos Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/trimble.svg"
                  alt="Trimble"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                  priority
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/tekla.svg"
                  alt="Tekla"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/connect.svg"
                  alt="Connect"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/fieldlink.svg"
                  alt="FieldLink"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/accubid-anywhere.svg"
                  alt="AccuBid Anywhere"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/construction-analytics.svg"
                  alt="Construction Analytics"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/stabicad.svg"
                  alt="StabiCAD"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/prodesign.svg"
                  alt="ProDesign"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/fabshop.svg"
                  alt="FabShop"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/estimation-mep.svg"
                  alt="Estimation MEP"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/sysque.svg"
                  alt="Sysque"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/trade-servicelive.svg"
                  alt="Trade ServiceLive"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/luckinslive.svg"
                  alt="LuckinsLive"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Image
                  src="/trimble_product_logos/allpriser.svg"
                  alt="Allpriser"
                  width={120}
                  height={48}
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>
              <span className="font-bold">
                Built with ❤️ by Julian Oczkowski.
              </span>{" "}
              <br />
              <span className="font-medium">
                <a
                  href="mailto:julian_oczkowski@trimble.com"
                  className="text-primary"
                >
                  julian_oczkowski@trimble.com
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
