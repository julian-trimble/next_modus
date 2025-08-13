"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleCopy}>
      {copied ? (
        <CheckIcon className="h-4 w-4 text-accent-foreground" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
    </Button>
  );
}
