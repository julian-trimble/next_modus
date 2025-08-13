"use client";
import React from "react";
import { CopyButton } from "@/components/copy-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import all 32 calendar components
import Calendar01 from "@/components/calendars/calendar-01";
import Calendar02 from "@/components/calendars/calendar-02";
import Calendar03 from "@/components/calendars/calendar-03";
import Calendar04 from "@/components/calendars/calendar-04";
import Calendar05 from "@/components/calendars/calendar-05";
import Calendar06 from "@/components/calendars/calendar-06";
import Calendar07 from "@/components/calendars/calendar-07";
import Calendar08 from "@/components/calendars/calendar-08";
import Calendar09 from "@/components/calendars/calendar-09";
import Calendar10 from "@/components/calendars/calendar-10";
import Calendar11 from "@/components/calendars/calendar-11";
import Calendar12 from "@/components/calendars/calendar-12";
import Calendar13 from "@/components/calendars/calendar-13";
import Calendar14 from "@/components/calendars/calendar-14";
import Calendar15 from "@/components/calendars/calendar-15";
import Calendar16 from "@/components/calendars/calendar-16";
import Calendar17 from "@/components/calendars/calendar-17";
import Calendar18 from "@/components/calendars/calendar-18";
import Calendar19 from "@/components/calendars/calendar-19";
import Calendar20 from "@/components/calendars/calendar-20";
import Calendar21 from "@/components/calendars/calendar-21";
import Calendar22 from "@/components/calendars/calendar-22";
import Calendar23 from "@/components/calendars/calendar-23";
import Calendar24 from "@/components/calendars/calendar-24";
import Calendar25 from "@/components/calendars/calendar-25";
import Calendar26 from "@/components/calendars/calendar-26";
import Calendar27 from "@/components/calendars/calendar-27";
import Calendar28 from "@/components/calendars/calendar-28";
import Calendar29 from "@/components/calendars/calendar-29";
import Calendar30 from "@/components/calendars/calendar-30";
import Calendar31 from "@/components/calendars/calendar-31";
import Calendar32 from "@/components/calendars/calendar-32";

// Calendar configurations with descriptions
const calendarConfigs = [
  {
    id: "calendar-01",
    title: "Basic Single Selection",
    description:
      "Simple calendar with single date selection and default styling",
    component: Calendar01,
    copyText: "Calendar01",
  },
  {
    id: "calendar-02",
    title: "Two Month Display",
    description:
      "Calendar showing two months side by side for better navigation",
    component: Calendar02,
    copyText: "Calendar02",
  },
  {
    id: "calendar-03",
    title: "Multiple Date Selection",
    description: "Select multiple dates with a maximum limit of 5 dates",
    component: Calendar03,
    copyText: "Calendar03",
  },
  {
    id: "calendar-04",
    title: "Date Range Selection",
    description: "Select a date range with start and end dates",
    component: Calendar04,
    copyText: "Calendar04",
  },
  {
    id: "calendar-05",
    title: "Range with Two Months",
    description: "Date range selection across two months for better visibility",
    component: Calendar05,
    copyText: "Calendar05",
  },
  {
    id: "calendar-06",
    title: "Range with Minimum Days",
    description: "Date range selection with minimum 5 days requirement",
    component: Calendar06,
    copyText: "Calendar06",
  },
  {
    id: "calendar-07",
    title: "Range with Min/Max Limits",
    description: "Date range with minimum 2 and maximum 20 nights constraint",
    component: Calendar07,
    copyText: "Calendar07",
  },
  {
    id: "calendar-08",
    title: "Disabled Past Dates",
    description: "Calendar with past dates disabled for future bookings",
    component: Calendar08,
    copyText: "Calendar08",
  },
  {
    id: "calendar-09",
    title: "Weekends Disabled",
    description:
      "Range selection with weekends disabled for business days only",
    component: Calendar09,
    copyText: "Calendar09",
  },
  {
    id: "calendar-10",
    title: "Appointment Card",
    description:
      "Calendar wrapped in a card with appointment booking interface",
    component: Calendar10,
    copyText: "Calendar10",
  },
  {
    id: "calendar-11",
    title: "Limited Month Range",
    description: "Calendar restricted to specific months (June-July only)",
    component: Calendar11,
    copyText: "Calendar11",
  },
  {
    id: "calendar-12",
    title: "Multilingual Support",
    description: "Calendar with language switching between English and Spanish",
    component: Calendar12,
    copyText: "Calendar12",
  },
  {
    id: "calendar-13",
    title: "Dropdown Navigation",
    description: "Calendar with configurable dropdown navigation options",
    component: Calendar13,
    copyText: "Calendar13",
  },
  {
    id: "calendar-14",
    title: "Booked Dates Display",
    description: "Calendar showing booked dates with strikethrough styling",
    component: Calendar14,
    copyText: "Calendar14",
  },
  {
    id: "calendar-15",
    title: "Week Numbers",
    description: "Calendar displaying week numbers for better date reference",
    component: Calendar15,
    copyText: "Calendar15",
  },
  {
    id: "calendar-16",
    title: "Date and Time Picker",
    description: "Calendar combined with time input fields for scheduling",
    component: Calendar16,
    copyText: "Calendar16",
  },
  {
    id: "calendar-17",
    title: "Compact Date Time",
    description:
      "Compact version of date and time picker with inline time inputs",
    component: Calendar17,
    copyText: "Calendar17",
  },
  {
    id: "calendar-18",
    title: "Large Cell Calendar",
    description: "Calendar with larger cells and ghost button variant",
    component: Calendar18,
    copyText: "Calendar18",
  },
  {
    id: "calendar-19",
    title: "Quick Date Presets",
    description: "Calendar with preset buttons for common date selections",
    component: Calendar19,
    copyText: "Calendar19",
  },
  {
    id: "calendar-20",
    title: "Time Slot Booking",
    description: "Calendar with time slot selection for appointment booking",
    component: Calendar20,
    copyText: "Calendar20",
  },
  {
    id: "calendar-21",
    title: "Pricing Calendar",
    description:
      "Calendar displaying different prices for weekdays and weekends",
    component: Calendar21,
    copyText: "Calendar21",
  },
  {
    id: "calendar-22",
    title: "Popover Date Picker",
    description: "Date picker in a popover with dropdown navigation",
    component: Calendar22,
    copyText: "Calendar22",
  },
  {
    id: "calendar-23",
    title: "Popover Range Picker",
    description: "Date range picker in a popover for compact interfaces",
    component: Calendar23,
    copyText: "Calendar23",
  },
  {
    id: "calendar-24",
    title: "Date and Time Inline",
    description: "Inline date and time picker with separate inputs",
    component: Calendar24,
    copyText: "Calendar24",
  },
  {
    id: "calendar-25",
    title: "Vertical Date Time",
    description: "Vertical layout for date and time selection",
    component: Calendar25,
    copyText: "Calendar25",
  },
  {
    id: "calendar-26",
    title: "Check-in/Check-out",
    description: "Hotel-style check-in and check-out date picker with times",
    component: Calendar26,
    copyText: "Calendar26",
  },
  {
    id: "calendar-27",
    title: "Analytics Calendar",
    description:
      "Calendar integrated with analytics chart for data visualization",
    component: Calendar27,
    copyText: "Calendar27",
  },
  {
    id: "calendar-28",
    title: "Input with Calendar",
    description: "Text input with calendar popup for flexible date entry",
    component: Calendar28,
    copyText: "Calendar28",
  },
  {
    id: "calendar-29",
    title: "Natural Language",
    description: "Calendar with natural language parsing (e.g., 'in 2 days')",
    component: Calendar29,
    copyText: "Calendar29",
  },
  {
    id: "calendar-30",
    title: "Smart Date Formatting",
    description: "Calendar with intelligent date range formatting",
    component: Calendar30,
    copyText: "Calendar30",
  },
  {
    id: "calendar-31",
    title: "Event Calendar",
    description: "Calendar with event display and scheduling capabilities",
    component: Calendar31,
    copyText: "Calendar31",
  },
  {
    id: "calendar-32",
    title: "Mobile Drawer",
    description: "Calendar optimized for mobile with drawer interface",
    component: Calendar32,
    copyText: "Calendar32",
  },
];

export function CalendarShowcase() {
  return (
    <div className="space-y-8">
      {calendarConfigs.map((config) => {
        const CalendarComponent = config.component;
        return (
          <Card key={config.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="space-y-1">
                <CardTitle className="text-lg">{config.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {config.description}
                </p>
              </div>
              <CopyButton text={config.copyText} />
            </CardHeader>
            <CardContent className="pt-0 pb-8">
              <div className="flex justify-center">
                <CalendarComponent />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
