"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/mode-toggle";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Chat-related types
export interface ChatItem {
  id: string;
  message: string;
  createdAt?: string;
  isFavorite?: boolean;
  files?: Array<{ name: string; content: string }>;
  demo?: string;
}

export interface AppHeaderProps {
  className?: string;
  // Optional elements
  showMenuButton?: boolean;
  showLogo?: boolean;
  showSearchButton?: boolean;
  showHelpButton?: boolean;
  showAppLauncher?: boolean;
  showAvatar?: boolean;
  showModeToggle?: boolean;
  showProjectDropdown?: boolean;
  showHistoryDropdown?: boolean;

  // Customization
  logoSrc?: string;
  logoAlt?: string;
  avatarSrc?: string;
  avatarFallback?: string;

  // Project dropdown
  projects?: Array<{ id: string; name: string; description?: string }>;
  selectedProject?: string;
  onProjectChange?: (projectId: string) => void;

  // History dropdown
  chatHistory?: ChatItem[];
  selectedChatId?: string;
  onChatSelect?: (chatId: string) => void | Promise<void>;
  onHistoryRefresh?: () => void;
  historyLoading?: boolean;

  // Callbacks
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onHelpClick?: () => void;
  onAppLauncherClick?: () => void;
  onAvatarClick?: () => void;
}

export function AppHeader({
  className,
  showMenuButton = false,
  showLogo = true,
  showSearchButton = true,
  showHelpButton = true,
  showAppLauncher = true,
  showAvatar = true,
  showModeToggle = true,
  showProjectDropdown = false,
  showHistoryDropdown = false,
  logoSrc,
  logoAlt = "Trimble Logo",
  avatarSrc,
  avatarFallback = "U",
  projects = [],
  selectedProject,
  onProjectChange,
  chatHistory = [],
  selectedChatId,
  onChatSelect,
  onMenuClick,
  onSearchClick,
  onHelpClick,
  onAppLauncherClick,
  onAvatarClick,
}: AppHeaderProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [chatLoading, setChatLoading] = React.useState(false);
  const { theme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Debug: Log when chatHistory changes
  React.useEffect(() => {
    console.log(
      "📊 AppHeader: chatHistory updated, length:",
      chatHistory.length
    );
  }, [chatHistory]);

  // Determine which logo to use based on theme
  const getLogoSrc = () => {
    if (logoSrc) return logoSrc;

    // Use resolvedTheme to get the actual theme (light/dark) after hydration
    const currentTheme = resolvedTheme || theme;
    return currentTheme === "dark"
      ? "/trimble_product_logos/trimble.svg"
      : "/trimble_product_logos/trimble.svg";
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="flex h-14 items-center justify-between px-4 w-full">
        {/* Left section */}
        <div className="flex items-center gap-2 flex-none min-w-0">
          {showMenuButton && (
            <Button variant="ghost" size="icon" onClick={onMenuClick}>
              <i className="modus-icons">menu</i>
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}

          {showLogo && (
            <div className="flex items-center gap-2">
              <Image
                src={getLogoSrc()}
                alt={logoAlt}
                width={100}
                height={30}
                className="h-6 w-auto"
                priority
              />
            </div>
          )}
        </div>

        {/* Center section - Project Dropdown */}
        {showProjectDropdown && projects.length > 0 && (
          <div className="flex-1 max-w-xs mx-4 hidden md:block min-w-0">
            <Select value={selectedProject} onValueChange={onProjectChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select project..." />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    <div className="flex flex-col">
                      <span>{project.name}</span>
                      {project.description && (
                        <span className="text-xs text-muted-foreground">
                          {project.description}
                        </span>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Center section - History Dropdown */}
        {showHistoryDropdown && (
          <div className="flex-1 max-w-md mx-4 hidden md:block min-w-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <span className="truncate">
                      {(selectedChatId &&
                        chatHistory.find((chat) => chat.id === selectedChatId)
                          ?.message) ||
                        "Prototypes"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="modus-icons text-sm">expand_more</i>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-96 max-h-96 overflow-y-auto"
              >
                <div className="p-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {chatLoading && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <i className="modus-icons animate-spin">refresh</i>
                          <span>Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {chatHistory.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <i className="modus-icons text-2xl mb-2">history</i>
                      <p className="text-sm">No prototype history yet</p>
                    </div>
                  ) : (
                    chatHistory.map((chat) => (
                      <DropdownMenuItem
                        key={chat.id}
                        onClick={async () => {
                          if (onChatSelect) {
                            setChatLoading(true);
                            try {
                              await onChatSelect(chat.id);
                            } finally {
                              setChatLoading(false);
                            }
                          }
                        }}
                        className={`cursor-pointer p-3 ${
                          selectedChatId === chat.id ? "bg-muted" : ""
                        } ${
                          chatLoading ? "opacity-50 pointer-events-none" : ""
                        }`}
                      >
                        <div className="flex items-start gap-3 w-full">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              {chat.message}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              {chat.files && chat.files.length > 0 && (
                                <div className="flex items-center gap-1">
                                  <i className="modus-icons text-xs text-muted-foreground">
                                    code
                                  </i>
                                  <span className="text-xs text-muted-foreground">
                                    {chat.files.length} files
                                  </span>
                                </div>
                              )}
                              {chat.demo && (
                                <div className="flex items-center gap-1">
                                  <i className="modus-icons text-xs text-muted-foreground">
                                    monitor
                                  </i>
                                  <span className="text-xs text-muted-foreground">
                                    Preview
                                  </span>
                                </div>
                              )}
                              {chat.createdAt && (
                                <span className="text-xs text-muted-foreground">
                                  {new Date(
                                    chat.createdAt
                                  ).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                          </div>
                          {chat.isFavorite && (
                            <i className="modus-icons text-accent-foreground text-sm">
                              star
                            </i>
                          )}
                        </div>
                      </DropdownMenuItem>
                    ))
                  )}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Right section */}
        <div className="flex items-center gap-1 flex-none min-w-0">
          {/* Hide some buttons on mobile */}
          {showSearchButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchClick}
              className={cn(isMobile && "hidden sm:inline-flex")}
            >
              <i className="modus-icons">search</i>
              <span className="sr-only">Search</span>
            </Button>
          )}

          {showHelpButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onHelpClick}
              className={cn(isMobile && "hidden sm:inline-flex")}
            >
              <i className="modus-icons">help</i>
              <span className="sr-only">Help</span>
            </Button>
          )}

          {showAppLauncher && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onAppLauncherClick}
                  className={cn(isMobile && "hidden sm:inline-flex")}
                >
                  <i className="modus-icons">apps</i>
                  <span className="sr-only">App launcher</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <i className="modus-icons mr-2">dashboard</i>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <i className="modus-icons mr-2">settings</i>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <i className="modus-icons mr-2">help</i>
                  Help Center
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <i className="modus-icons mr-2">launch</i>
                  All Apps
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {showModeToggle && <ModeToggle />}

          {showAvatar && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                  onClick={onAvatarClick}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={avatarSrc} alt="Avatar" />
                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <i className="modus-icons mr-2">user_account</i>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <i className="modus-icons mr-2">settings</i>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <i className="modus-icons mr-2">help</i>
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <i className="modus-icons mr-2">sign_out</i>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Mobile overflow menu */}
          {isMobile &&
            (showSearchButton || showHelpButton || showAppLauncher) && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="sm:hidden">
                    <i className="modus-icons">more_vertical</i>
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {showSearchButton && (
                    <DropdownMenuItem onClick={onSearchClick}>
                      <i className="modus-icons mr-2">search</i>
                      Search
                    </DropdownMenuItem>
                  )}
                  {showHelpButton && (
                    <DropdownMenuItem onClick={onHelpClick}>
                      <i className="modus-icons mr-2">help</i>
                      Help
                    </DropdownMenuItem>
                  )}
                  {showAppLauncher && (
                    <DropdownMenuItem onClick={onAppLauncherClick}>
                      <i className="modus-icons mr-2">apps</i>
                      App Launcher
                    </DropdownMenuItem>
                  )}
                  {showProjectDropdown && projects.length > 0 && (
                    <>
                      <DropdownMenuSeparator />
                      <div className="px-2 py-1">
                        <Select
                          value={selectedProject}
                          onValueChange={onProjectChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select project..." />
                          </SelectTrigger>
                          <SelectContent>
                            {projects.map((project) => (
                              <SelectItem key={project.id} value={project.id}>
                                {project.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
        </div>
      </div>
    </header>
  );
}
