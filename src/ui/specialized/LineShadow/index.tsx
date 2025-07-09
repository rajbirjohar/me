"use client";

import { cn } from "@/utils/cn";
import { motion, MotionProps } from "motion/react";
import styles from "./styles.module.css";
 
interface LineShadowProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string;
  as?: React.ElementType;
}
 
export function LineShadow({
  children,
  shadowColor = "var(--color-text-link)",
  className,
  as: Component = "span",
  ...props
}: LineShadowProps) {
  const MotionComponent = motion.create(Component);
  const content = typeof children === "string" ? children : null;
 
  if (!content) {
    throw new Error("LineShadow only accepts string content");
  }
 
  return (
    <MotionComponent
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(
        styles.lineshadow,
        className,
      )}
      data-text={content}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}