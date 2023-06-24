"use client";

import { useTheme } from "next-themes";
import styles from "./styles.module.scss";
import { CogIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/core/ui/Tooltip";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={styles.theme}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setTheme("light")}
            style={{
              backgroundColor:
                theme === "light" ? "var(--button-bg)" : "transparent",
            }}
          >
            <SunIcon />
          </button>
        </TooltipTrigger>
        <TooltipContent>Light mode</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setTheme("system")}
            style={{
              backgroundColor:
                theme === "system" ? "var(--button-bg)" : "transparent",
            }}
          >
            <CogIcon />
          </button>
        </TooltipTrigger>
        <TooltipContent>System mode</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setTheme("dark")}
            style={{
              backgroundColor:
                theme === "dark" ? "var(--button-bg)" : "transparent",
            }}
          >
            <MoonStarIcon />
          </button>
        </TooltipTrigger>
        <TooltipContent>Dark mode</TooltipContent>
      </Tooltip>
    </div>
  );
}
