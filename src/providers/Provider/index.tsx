"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "../../ui/core/Tooltip";

export const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider>
			<TooltipProvider>{children}</TooltipProvider>
		</ThemeProvider>
	);
};
