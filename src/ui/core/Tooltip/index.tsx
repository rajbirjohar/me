"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import { cn } from "@/utils/cn";
import css from "./styles.module.css";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipPortal = TooltipPrimitive.Portal;

const Tooltip = ({ ...props }) => (
	<TooltipProvider>
		<TooltipPrimitive.Root {...props} />
	</TooltipProvider>
);
Tooltip.displayName = TooltipPrimitive.Tooltip.displayName;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TextTooltipTrigger = React.forwardRef<
	React.ComponentRef<typeof TooltipPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<TooltipTrigger
		ref={ref}
		className={cn(css.trigger, className)}
		asChild
		{...props}
	>
		<span>
			{children}
			<span className={css.asterisk}>*</span>
		</span>
	</TooltipTrigger>
));

TextTooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipContent = React.forwardRef<
	React.ComponentRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 10, side = "top", ...props }, ref) => (
	<TooltipPortal>
		<TooltipPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			side={side}
			className={cn(css.tooltip, className)}
			{...props}
		/>
	</TooltipPortal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
	TooltipProvider,
	TooltipPortal,
	TextTooltipTrigger,
};
