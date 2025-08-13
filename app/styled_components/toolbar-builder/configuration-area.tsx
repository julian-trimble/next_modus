"use client";

import * as React from "react";
// ToolbarSection import will be added when needed in future tasks

interface ConfigurationAreaProps {
   children: React.ReactNode;
}

export function ConfigurationArea({
   children,
}: ConfigurationAreaProps) {
   return (
      <div className="configuration-area">
         {children}
      </div>
   );
}