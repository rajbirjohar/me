"use client";

import styles from "./styles.module.scss";
import { useToast } from "@/core/ui/Toast/useToast";
import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CopyText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const buttonClasses = classNames(styles.trigger, className);

  const { toast } = useToast();

  function copyTextToClipboard() {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copied to clipboard. 🎉",
    });
  }

  return (
    <button onClick={copyTextToClipboard} className={buttonClasses}>
      {text}
    </button>
  );
}
