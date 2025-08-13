"use client";

import * as React from "react";
import { useState } from "react";
import {
   ToolbarSection,
} from "@/components/toolbars/floating-toolbar";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Modus Icon Component
const ModusIcon = ({
   name,
   className = "",
}: {
   name: string;
   className?: string;
}) => <i className={`modus-icons ${className}`}>{name}</i>;

// Pre-built toolbar templates
const TOOLBAR_TEMPLATES = {
   textEditor: {
      name: "Text Editor",
      description: "Classic rich text editor toolbar",
      sections: [
         {
            id: "formatting",
            items: [
               {
                  id: "bold",
                  label: "Bold",
                  icon: <ModusIcon name="text_bold" />,
                  shortcut: "Ctrl+B",
                  type: "toggle" as const,
               },
               {
                  id: "italic",
                  label: "Italic",
                  icon: <ModusIcon name="text_italic" />,
                  shortcut: "Ctrl+I",
                  type: "toggle" as const,
               },
               {
                  id: "underline",
                  label: "Underline",
                  icon: <ModusIcon name="text_underlined" />,
                  shortcut: "Ctrl+U",
                  type: "toggle" as const,
               },
            ],
         },
         {
            id: "alignment",
            items: [
               {
                  id: "align-left",
                  label: "Align Left",
                  icon: <ModusIcon name="align_left" />,
                  type: "button" as const,
               },
               {
                  id: "align-center",
                  label: "Align Center",
                  icon: <ModusIcon name="text_centered" />,
                  type: "button" as const,
               },
               {
                  id: "align-right",
                  label: "Align Right",
                  icon: <ModusIcon name="align_right" />,
                  type: "button" as const,
               },
            ],
         },
         {
            id: "lists",
            items: [
               {
                  id: "bulleted-list",
                  label: "Bulleted List",
                  icon: <ModusIcon name="list_bulleted" />,
                  type: "button" as const,
               },
               {
                  id: "numbered-list",
                  label: "Numbered List",
                  icon: <ModusIcon name="list_numbered" />,
                  type: "button" as const,
               },
            ],
         },
      ],
   },
   fileManager: {
      name: "File Manager",
      description: "File operations and navigation",
      sections: [
         {
            id: "file-ops",
            items: [
               {
                  id: "new-file",
                  label: "New File",
                  icon: <ModusIcon name="file_add" />,
                  shortcut: "Ctrl+N",
                  type: "button" as const,
               },
               {
                  id: "open",
                  label: "Open",
                  icon: <ModusIcon name="folder_open" />,
                  shortcut: "Ctrl+O",
                  type: "button" as const,
               },
               {
                  id: "save",
                  label: "Save",
                  icon: <ModusIcon name="save" />,
                  shortcut: "Ctrl+S",
                  type: "button" as const,
               },
            ],
         },
         {
            id: "edit-ops",
            items: [
               {
                  id: "copy",
                  label: "Copy",
                  icon: <ModusIcon name="copy" />,
                  shortcut: "Ctrl+C",
                  type: "button" as const,
               },
               {
                  id: "cut",
                  label: "Cut",
                  icon: <ModusIcon name="cut" />,
                  shortcut: "Ctrl+X",
                  type: "button" as const,
               },
               {
                  id: "delete",
                  label: "Delete",
                  icon: <ModusIcon name="delete" />,
                  shortcut: "Del",
                  type: "button" as const,
               },
            ],
         },
      ],
   },
   mediaPlayer: {
      name: "Media Player",
      description: "Audio/video player controls",
      sections: [
         {
            id: "playback",
            items: [
               {
                  id: "play",
                  label: "Play",
                  icon: <ModusIcon name="play" />,
                  shortcut: "Space",
                  type: "toggle" as const,
               },
               {
                  id: "pause",
                  label: "Pause",
                  icon: <ModusIcon name="pause" />,
                  type: "button" as const,
               },
               {
                  id: "stop",
                  label: "Stop",
                  icon: <ModusIcon name="stop" />,
                  type: "button" as const,
               },
            ],
         },
         {
            id: "volume",
            items: [
               {
                  id: "volume-low",
                  label: "Volume Low",
                  icon: <ModusIcon name="volume_low" />,
                  type: "button" as const,
               },
               {
                  id: "volume-high",
                  label: "Volume High",
                  icon: <ModusIcon name="volume_high" />,
                  type: "button" as const,
               },
               {
                  id: "volume-mute",
                  label: "Mute",
                  icon: <ModusIcon name="volume_mute" />,
                  type: "toggle" as const,
               },
            ],
         },
      ],
   },
   navigation: {
      name: "Navigation",
      description: "Page and section navigation",
      sections: [
         {
            id: "navigation",
            items: [
               {
                  id: "home",
                  label: "Home",
                  icon: <ModusIcon name="home" />,
                  type: "button" as const,
               },
               {
                  id: "back",
                  label: "Back",
                  icon: <ModusIcon name="arrow_back" />,
                  shortcut: "Alt+Left",
                  type: "button" as const,
               },
               {
                  id: "forward",
                  label: "Forward",
                  icon: <ModusIcon name="arrow_next" />,
                  shortcut: "Alt+Right",
                  type: "button" as const,
               },
               {
                  id: "refresh",
                  label: "Refresh",
                  icon: <ModusIcon name="refresh" />,
                  shortcut: "F5",
                  type: "button" as const,
               },
            ],
         },
      ],
   },
};

export interface ToolbarStructurePanelProps {
   sections: ToolbarSection[];
   selectedItemId: string | null;
   onSectionsChange: (sections: ToolbarSection[]) => void;
   onItemSelect: (itemId: string | null) => void;
   onTemplateLoad: (templateKey: string) => void;
}

export function ToolbarStructurePanel({
   sections = [],
   selectedItemId,
   onSectionsChange,
   onItemSelect,
   onTemplateLoad,
}: ToolbarStructurePanelProps) {
   const [expandedSections, setExpandedSections] = useState<Set<string>>(
      new Set(sections?.map((section) => section.id) || [])
   );

   const toggleSectionExpansion = (sectionId: string) => {
      setExpandedSections((prev) => {
         const newSet = new Set(prev);
         if (newSet.has(sectionId)) {
            newSet.delete(sectionId);
         } else {
            newSet.add(sectionId);
         }
         return newSet;
      });
   };

   const addNewSection = () => {
      const newSectionId = `section-${Date.now()}`;
      const newSections = [
         ...sections,
         {
            id: newSectionId,
            items: [],
         },
      ];
      onSectionsChange(newSections);
      setExpandedSections((prev) => new Set([...prev, newSectionId]));
   };

   const removeSection = (sectionId: string) => {
      const newSections = sections.filter((section) => section.id !== sectionId);
      onSectionsChange(newSections);

      // Clear selection if selected item was in removed section
      if (selectedItemId) {
         const itemExists = newSections.some((section) =>
            section.items.some((item) => item.id === selectedItemId)
         );
         if (!itemExists) {
            onItemSelect(null);
         }
      }
   };

   const addNewItem = (sectionId: string) => {
      const newItemId = `item-${Date.now()}`;
      const newSections = sections.map((section) =>
         section.id === sectionId
            ? {
               ...section,
               items: [
                  ...section.items,
                  {
                     id: newItemId,
                     label: "New Item",
                     icon: <ModusIcon name="add" />,
                     type: "button" as const,
                  },
               ],
            }
            : section
      );
      onSectionsChange(newSections);
      onItemSelect(newItemId);
   };

   const loadTemplate = (templateKey: keyof typeof TOOLBAR_TEMPLATES) => {
      const template = TOOLBAR_TEMPLATES[templateKey];
      const newSections = template.sections.map((section, index) => ({
         ...section,
         id: `section-${Date.now()}-${index}`,
         items: section.items.map((item, itemIndex) => ({
            ...item,
            id: `${item.id}-${Date.now()}-${itemIndex}`,
         })),
      }));

      onSectionsChange(newSections);
      onItemSelect(null);
      setExpandedSections(new Set(newSections.map((section) => section.id)));
      onTemplateLoad(templateKey);
      toast.success(`${template.name} template loaded!`);
   };

   return (
      <Card className="w-full">
         <CardHeader>
            <div className="flex items-center justify-between">
               <div>
                  <CardTitle>Toolbar Structure</CardTitle>
                  <CardDescription>
                     Manage sections, items, and templates
                  </CardDescription>
               </div>
               <Button onClick={addNewSection} size="sm">
                  <ModusIcon name="add" className="mr-2" />
                  Add Section
               </Button>
            </div>
         </CardHeader>
         <CardContent className="space-y-4">
            {/* Templates Section */}
            <div className="space-y-3">
               <Label className="text-sm font-medium">Quick Templates</Label>
               <div className="grid grid-cols-1 gap-2">
                  {Object.entries(TOOLBAR_TEMPLATES).map(([key, template]) => (
                     <Button
                        key={key}
                        variant="outline"
                        size="sm"
                        onClick={() =>
                           loadTemplate(key as keyof typeof TOOLBAR_TEMPLATES)
                        }
                        className="flex flex-col h-auto p-3 text-xs justify-start"
                     >
                        <span className="font-medium text-left w-full">{template.name}</span>
                        <span className="text-muted-foreground text-[10px] mt-1 text-left w-full">
                           {template.description}
                        </span>
                     </Button>
                  ))}
               </div>
            </div>

            <Separator />

            {/* Sections Structure */}
            <div className="space-y-4">
               {sections.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8">
                     <ModusIcon name="apps" className="text-4xl mb-2" />
                     <p>No sections yet</p>
                     <p className="text-xs">Add a section or load a template to get started</p>
                  </div>
               ) : (
                  sections.map((section, sectionIndex) => {
                     const isExpanded = expandedSections.has(section.id);
                     return (
                        <div key={section.id} className="space-y-2">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                 <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleSectionExpansion(section.id)}
                                    className="h-6 w-6 p-0"
                                 >
                                    <ModusIcon
                                       name={isExpanded ? "chevron_down" : "chevron_right"}
                                       className="text-xs"
                                    />
                                 </Button>
                                 <Badge variant="outline">
                                    Section {sectionIndex + 1}
                                    {section.items.length > 0 && (
                                       <span className="ml-1 text-muted-foreground">
                                          ({section.items.length})
                                       </span>
                                    )}
                                 </Badge>
                              </div>
                              <div className="flex items-center gap-1">
                                 <Button
                                    onClick={() => addNewItem(section.id)}
                                    size="sm"
                                    variant="ghost"
                                    className="h-6 w-6 p-0"
                                    title="Add Item"
                                 >
                                    <ModusIcon name="add" className="text-xs" />
                                 </Button>
                                 <Button
                                    onClick={() => removeSection(section.id)}
                                    size="sm"
                                    variant="ghost"
                                    className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                                    title="Remove Section"
                                 >
                                    <ModusIcon name="delete" className="text-xs" />
                                 </Button>
                              </div>
                           </div>

                           {isExpanded && (
                              <div className="space-y-1 pl-6">
                                 {section.items.length === 0 ? (
                                    <div className="text-center text-muted-foreground py-4 text-sm">
                                       <p>No items in this section</p>
                                       <Button
                                          onClick={() => addNewItem(section.id)}
                                          size="sm"
                                          variant="ghost"
                                          className="mt-2"
                                       >
                                          <ModusIcon name="add" className="mr-2" />
                                          Add First Item
                                       </Button>
                                    </div>
                                 ) : (
                                    section.items.map((item) => (
                                       <Button
                                          key={item.id}
                                          variant={
                                             selectedItemId === item.id ? "default" : "ghost"
                                          }
                                          size="sm"
                                          className="w-full justify-start h-8"
                                          onClick={() => onItemSelect(item.id)}
                                       >
                                          <div className="flex items-center gap-2 min-w-0">
                                             {item.icon}
                                             <span className="truncate">{item.label}</span>
                                             {item.type && item.type !== "button" && (
                                                <Badge variant="secondary" className="text-[10px] px-1 py-0">
                                                   {item.type}
                                                </Badge>
                                             )}
                                          </div>
                                       </Button>
                                    ))
                                 )}
                              </div>
                           )}

                           {sectionIndex < sections.length - 1 && (
                              <Separator className="my-2" />
                           )}
                        </div>
                     );
                  })
               )}
            </div>
         </CardContent>
      </Card>
   );
}