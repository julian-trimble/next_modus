import React, { ComponentType, lazy, Suspense } from "react";

type ShowcaseComponents = {
  [key: string]: ComponentType<object>;
};

const showcaseComponents: ShowcaseComponents = {
  accordion: lazy(() =>
    import("../components/accordion-showcase").then((module) => ({
      default: module.AccordionShowcase,
    }))
  ),
  "alert-dialog": lazy(() =>
    import("../components/alert-dialog-showcase").then((module) => ({
      default: module.AlertDialogShowcase,
    }))
  ),
  alert: lazy(() =>
    import("../components/alert-showcase").then((module) => ({
      default: module.AlertShowcase,
    }))
  ),
  "aspect-ratio": lazy(() =>
    import("../components/aspect-ratio-showcase").then((module) => ({
      default: module.AspectRatioShowcase,
    }))
  ),
  avatar: lazy(() =>
    import("../components/avatar-showcase").then((module) => ({
      default: module.AvatarShowcase,
    }))
  ),
  badge: lazy(() =>
    import("../components/badge-showcase").then((module) => ({
      default: module.BadgeShowcase,
    }))
  ),
  breadcrumb: lazy(() =>
    import("../components/breadcrumb-showcase").then((module) => ({
      default: module.BreadcrumbShowcase,
    }))
  ),
  button: lazy(() =>
    import("../components/button-showcase").then((module) => ({
      default: module.ButtonShowcase,
    }))
  ),
  calendar: lazy(() =>
    import("../components/calendar-showcase").then((module) => ({
      default: module.CalendarShowcase,
    }))
  ),
  card: lazy(() =>
    import("../components/card-showcase").then((module) => ({
      default: module.CardShowcase,
    }))
  ),
  carousel: lazy(() =>
    import("../components/carousel-showcase").then((module) => ({
      default: module.CarouselShowcase,
    }))
  ),
  checkbox: lazy(() =>
    import("../components/checkbox-showcase").then((module) => ({
      default: module.CheckboxShowcase,
    }))
  ),
  collapsible: lazy(() =>
    import("../components/collapsible-showcase").then((module) => ({
      default: module.CollapsibleShowcase,
    }))
  ),
  command: lazy(() =>
    import("../components/command-showcase").then((module) => ({
      default: module.CommandShowcase,
    }))
  ),
  "context-menu": lazy(() =>
    import("../components/context-menu-showcase").then((module) => ({
      default: module.ContextMenuShowcase,
    }))
  ),
  dialog: lazy(() =>
    import("../components/dialog-showcase").then((module) => ({
      default: module.DialogShowcase,
    }))
  ),
  drawer: lazy(() =>
    import("../components/drawer-showcase").then((module) => ({
      default: module.DrawerShowcase,
    }))
  ),
  "dropdown-menu": lazy(() =>
    import("../components/dropdown-menu-showcase").then((module) => ({
      default: module.DropdownMenuShowcase,
    }))
  ),
  chart: lazy(() =>
    import("../components/chart-showcase").then((module) => ({
      default: module.ChartShowcase,
    }))
  ),
  form: lazy(() =>
    import("../components/form-showcase").then((module) => ({
      default: module.FormShowcase,
    }))
  ),
  "hover-card": lazy(() =>
    import("../components/hover-card-showcase").then((module) => ({
      default: module.HoverCardShowcase,
    }))
  ),
  "input-otp": lazy(() =>
    import("../components/input-otp-showcase").then((module) => ({
      default: module.InputOTPShowcase,
    }))
  ),
  input: lazy(() =>
    import("../components/input-showcase").then((module) => ({
      default: module.InputShowcase,
    }))
  ),
  label: lazy(() =>
    import("../components/label-showcase").then((module) => ({
      default: module.LabelShowcase,
    }))
  ),
  menubar: lazy(() =>
    import("../components/menubar-showcase").then((module) => ({
      default: module.MenubarShowcase,
    }))
  ),
  "navigation-menu": lazy(() =>
    import("../components/navigation-menu-showcase").then((module) => ({
      default: module.NavigationMenuShowcase,
    }))
  ),
  pagination: lazy(() =>
    import("../components/pagination-showcase").then((module) => ({
      default: module.PaginationShowcase,
    }))
  ),
  popover: lazy(() =>
    import("../components/popover-showcase").then((module) => ({
      default: module.PopoverShowcase,
    }))
  ),
  progress: lazy(() =>
    import("../components/progress-showcase").then((module) => ({
      default: module.ProgressShowcase,
    }))
  ),
  "radio-group": lazy(() =>
    import("../components/radio-group-showcase").then((module) => ({
      default: module.RadioGroupShowcase,
    }))
  ),
  resizable: lazy(() =>
    import("../components/resizable-showcase").then((module) => ({
      default: module.ResizableShowcase,
    }))
  ),
  "scroll-area": lazy(() =>
    import("../components/scroll-area-showcase").then((module) => ({
      default: module.ScrollAreaShowcase,
    }))
  ),
  select: lazy(() =>
    import("../components/select-showcase").then((module) => ({
      default: module.SelectShowcase,
    }))
  ),
  separator: lazy(() =>
    import("../components/separator-showcase").then((module) => ({
      default: module.SeparatorShowcase,
    }))
  ),
  sheet: lazy(() =>
    import("../components/sheet-showcase").then((module) => ({
      default: module.SheetShowcase,
    }))
  ),
  sidebar: lazy(() =>
    import("../components/sidebar-showcase").then((module) => ({
      default: module.SidebarShowcase,
    }))
  ),
  skeleton: lazy(() =>
    import("../components/skeleton-showcase").then((module) => ({
      default: module.SkeletonShowcase,
    }))
  ),
  slider: lazy(() =>
    import("../components/slider-showcase").then((module) => ({
      default: module.SliderShowcase,
    }))
  ),
  sonner: lazy(() =>
    import("../components/sonner-showcase").then((module) => ({
      default: module.SonnerShowcase,
    }))
  ),
  switch: lazy(() =>
    import("../components/switch-showcase").then((module) => ({
      default: module.SwitchShowcase,
    }))
  ),
  table: lazy(() =>
    import("../components/table-showcase").then((module) => ({
      default: module.TableShowcase,
    }))
  ),
  tabs: lazy(() =>
    import("../components/tabs-showcase").then((module) => ({
      default: module.TabsShowcase,
    }))
  ),
  textarea: lazy(() =>
    import("../components/textarea-showcase").then((module) => ({
      default: module.TextareaShowcase,
    }))
  ),
  "toggle-group": lazy(() =>
    import("../components/toggle-group-showcase").then((module) => ({
      default: module.ToggleGroupShowcase,
    }))
  ),
  toggle: lazy(() =>
    import("../components/toggle-showcase").then((module) => ({
      default: module.ToggleShowcase,
    }))
  ),
  tooltip: lazy(() =>
    import("../components/tooltip-showcase").then((module) => ({
      default: module.TooltipShowcase,
    }))
  ),
};

const componentDescriptions: { [key: string]: string } = {
  accordion:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
  alert: "Displays a callout for user attention.",
  "alert-dialog":
    "A modal dialog that interrupts the user with important content and expects a response.",
  "aspect-ratio": "Displays content within a desired ratio.",
  avatar: "An image element with a fallback for representing a user.",
  badge: "Displays a small amount of information, such as a status or a count.",
  breadcrumb:
    "A navigational aid that allows users to keep track of their locations within programs, documents, or websites.",
  button: "An interactive element that allows users to trigger an action.",
  calendar:
    "Explore all 32 calendar variations with different features and styling options. Each calendar maintains its own independent state.",
  card: "A container for displaying content in a structured way.",
  carousel: "A carousel with motion and swipe built using Embla.",
  checkbox:
    "A control that allows the user to select one or more options from a set.",
  collapsible: "An interactive component which hides and reveals content.",
  command: "A command menu and palette built with CMDK.",
  "context-menu": "A menu that appears upon right-clicking an element.",
  dialog:
    "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
  drawer: "A panel that slides in from the edge of the screen.",
  "dropdown-menu":
    "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
  chart:
    "A collection of chart components for data visualization including area, bar, line, pie, radar, and radial charts.",
  form: "A collection of form components and patterns including validation, different input types, and form layouts using react-hook-form and zod.",
  "hover-card": "For sighted users to preview content available behind a link.",
  "input-otp":
    "Accessible one-time password component with copy paste functionality.",
  input:
    "Displays a form input field or a component that looks like an input field.",
  label: "Renders an accessible label associated with controls.",
  menubar:
    "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
  "navigation-menu": "A collection of links for navigating websites.",
  pagination: "Pagination with page navigation, next and previous links.",
  popover: "Displays rich content in a portal, triggered by a button.",
  progress:
    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  "radio-group":
    "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  resizable:
    "Accessible resizable panel groups and layouts with keyboard support.",
  "scroll-area":
    "Augments native scroll functionality for custom, cross-browser styling.",
  select:
    "Displays a list of options for the user to pick from—triggered by a button.",
  separator: "Visually or semantically separates content.",
  sheet:
    "Extends the Dialog component to display content that complements the main content of the screen.",
  sidebar: "A composable, themeable and customizable sidebar component.",
  skeleton: "Use to show a placeholder while content is loading.",
  slider: "An input where the user selects a value from within a given range.",
  sonner:
    "An opinionated toast component for React. Based on Sonner by Emil Kowalski.",
  switch:
    "A control that allows the user to toggle between checked and not checked.",
  table: "A responsive table component.",
  tabs: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  textarea:
    "Displays a form textarea or a component that looks like a textarea.",
  "toggle-group": "A set of two-state buttons that can be toggled on or off.",
  toggle: "A two-state button that can be either on or off.",
  tooltip:
    "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
};

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Component = showcaseComponents[slug];
  const description = componentDescriptions[slug];

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <div className="flex items-center gap-3">
        <i className="modus-icons text-3xl">widgets</i>
        <h1 className="text-3xl font-bold tracking-tight">Atomic Components</h1>
      </div>
      <h1 className="text-2xl font-bold mb-2 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
      {description && (
        <p className="text-sm text-muted-foreground mb-8">
          {description} The copy button allows you to copy the variant name to
          your clipboard.
        </p>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        {Component ? <Component /> : <div>Component not found.</div>}
      </Suspense>
    </div>
  );
}
