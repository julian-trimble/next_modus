"use client";

import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  children,
  language = "tsx",
  title,
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={cn("relative", className)}>
      {title && (
        <div className="flex items-center justify-between rounded-t-lg border border-b-0 bg-muted px-4 py-2">
          <span className="text-sm font-medium">{title}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-6 w-6 p-0"
          >
            {copied ? (
              <i className="modus-icons text-accent-foreground">check</i>
            ) : (
              <i className="modus-icons">copy_content</i>
            )}
          </Button>
        </div>
      )}
      <div className="relative">
        {!title && (
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="absolute right-2 top-2 z-10 h-6 w-6 p-0"
          >
            {copied ? (
              <i className="modus-icons text-accent-foreground">check</i>
            ) : (
              <i className="modus-icons">copy_content</i>
            )}
          </Button>
        )}
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            borderRadius: title ? "0 0 0.5rem 0.5rem" : "0.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          }}
          codeTagProps={{
            style: {
              fontFamily:
                "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
            },
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

interface InlineCodeProps {
  children: string;
  className?: string;
}

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}
