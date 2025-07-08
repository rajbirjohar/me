import React from "react";
import styles from "./styles.module.css";
import { cn } from "@/utils/cn";

export const HeadingWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <section ref={ref} className={cn(styles.wrapper, className)} {...props}>
      {props.children}
    </section>
  );
});

HeadingWrapper.displayName = "HeadingWrapper";

export const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(styles.heading, "h1-display", className)}
      {...props}
    >
      {props.children}
    </h1>
  );
});

Heading.displayName = "Heading";

export const SubHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h2 ref={ref} className={cn(styles.subheading, className)} {...props}>
      {props.children}
    </h2>
  );
});

SubHeading.displayName = "SubHeading";
