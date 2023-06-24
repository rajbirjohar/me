import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import css from "./styles.module.scss";

import classNames from "classnames";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipPortal = TooltipPrimitive.Portal;

const Tooltip = ({ ...props }) => (
  <TooltipProvider>
    <TooltipPrimitive.Root {...props} />
  </TooltipProvider>
);
Tooltip.displayName = TooltipPrimitive.Tooltip.displayName;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 10, side = "bottom", ...props }, ref) => (
  <TooltipPortal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={classNames(css.tooltip, className)}
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
};
