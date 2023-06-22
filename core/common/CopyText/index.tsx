"use client";

import styles from "./styles.module.scss";
import { useToast } from "@/core/ui/Toast/useToast";

export default function CopyText({ text }: { text: string }) {
  const { toast } = useToast();

  function copyTextToClipboard() {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copy to clipboard 🎉",
    });
  }

  return (
    <button onClick={copyTextToClipboard} className={styles.trigger}>
      {text}
    </button>
  );
}
