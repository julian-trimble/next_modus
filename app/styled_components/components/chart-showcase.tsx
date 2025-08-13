"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

// Import all chart components from our charts barrel export
import {
  ChartAreaDefault,
  ChartAreaLegend,
  ChartAreaInteractive,
  ChartAreaStackedExpand,
  ChartBarMultiple,
  ChartBarInteractive,
  ChartBarStacked,
  ChartBarNegative,
  ChartBarLabelCustom,
  ChartBarMixed,
  ChartLineInteractive,
} from "@/components/charts";

/**
 * ChartShowcase displays all available chart components in a responsive grid layout
 */
export function ChartShowcase() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Area Charts Section */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <i className="modus-icons">bar_graph</i>
              Area Charts
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Area Chart - Default</CardTitle>
          <CopyButton text="ChartAreaDefault" />
        </CardHeader>
        <CardContent>
          <ChartAreaDefault />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Area Chart - Legend</CardTitle>
          <CopyButton text="ChartAreaLegend" />
        </CardHeader>
        <CardContent>
          <ChartAreaLegend />
        </CardContent>
      </Card>

      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Area Chart - Interactive</CardTitle>
            <CopyButton text="ChartAreaInteractive" />
          </CardHeader>
          <CardContent>
            <ChartAreaInteractive />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Area Chart - Stacked Expanded</CardTitle>
            <CopyButton text="ChartAreaStackedExpand" />
          </CardHeader>
          <CardContent>
            <ChartAreaStackedExpand />
          </CardContent>
        </Card>
      </div>

      {/* Bar Charts Section */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <i className="modus-icons">bar_graph_square</i>
              Bar Charts
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bar Chart - Multiple</CardTitle>
          <CopyButton text="ChartBarMultiple" />
        </CardHeader>
        <CardContent>
          <ChartBarMultiple />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bar Chart - Stacked</CardTitle>
          <CopyButton text="ChartBarStacked" />
        </CardHeader>
        <CardContent>
          <ChartBarStacked />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bar Chart - Negative</CardTitle>
          <CopyButton text="ChartBarNegative" />
        </CardHeader>
        <CardContent>
          <ChartBarNegative />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bar Chart - Custom Label</CardTitle>
          <CopyButton text="ChartBarLabelCustom" />
        </CardHeader>
        <CardContent>
          <ChartBarLabelCustom />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bar Chart - Mixed</CardTitle>
          <CopyButton text="ChartBarMixed" />
        </CardHeader>
        <CardContent>
          <ChartBarMixed />
        </CardContent>
      </Card>

      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Bar Chart - Interactive</CardTitle>
            <CopyButton text="ChartBarInteractive" />
          </CardHeader>
          <CardContent>
            <ChartBarInteractive />
          </CardContent>
        </Card>
      </div>

      {/* Line Charts Section */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Line Chart - Default</CardTitle>
            <CopyButton text="ChartLineInteractive" />
          </CardHeader>
          <CardContent>
            <ChartLineInteractive />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
