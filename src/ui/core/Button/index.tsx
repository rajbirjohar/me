"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

import { Loader } from "../Loader";
import styles from "./styles.module.css";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles.default,
      ghost: styles.ghost,
      outline: styles.outline,
    },
    icon: {
      true: styles.icon,
    },
    rounded: {
      true: styles.rounded,
    },
    size: {
      small: styles.small,
      xsmall: styles.xsmall,
    },
    fill: {
      true: styles.fill,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  variant?: "default" | "ghost" | "outline";
  icon?: boolean;
  rounded?: boolean;
  size?: "small" | "xsmall";
  fill?: boolean;
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      icon,
      rounded,
      size,
      fill,
      children,
      loading,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        disabled={loading || props.disabled}
        className={cn(
          className,
          buttonVariants({
            variant,
            icon,
            rounded,
            size,
            fill,
          })
        )}
        ref={ref}
        {...props}
        onClick={(e) => {
          // Prevent click event if button is loading
          if (loading) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          // Call the original onClick handler
          if (props.onClick) {
            props.onClick(e);
          }
        }}
      >
        {loading && (
          <span className={styles.loader}>
            <Loader />
          </span>
        )}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

type LinkButtonProps = ButtonProps & React.ComponentProps<typeof Link>;

const LinkButton = ({
  className,
  icon,
  rounded,
  size,
  fill,
  children,
  loading,
  variant = "default",
  asChild = false,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      className={cn(
        styles.button,
        className,
        buttonVariants({
          variant,
          icon,
          rounded,
          size,
          fill,
        }),
        styles.link
      )}
      {...props}
      onClick={(e) => {
        // Prevent click event if button is loading
        if (loading) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        // Call the original onClick handler
        if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {loading && (
        <span className={styles.loader}>
          <Loader />
        </span>
      )}
      {children}
    </Link>
  );
};
LinkButton.displayName = "LinkButton";

export { Button, buttonVariants, LinkButton, type ButtonProps };
