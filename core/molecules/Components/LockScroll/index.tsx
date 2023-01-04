import { useDisableScroll } from "@/hooks/useDisableScroll";
import { useState } from "react";
import css from "./styles.module.css";

export default function LockButton() {
  const [lock, setLock] = useState(false);
  useDisableScroll(lock);

  return (
    <button onClick={() => setLock(!lock)} className={css.button}>
      {lock ? "Unlock Me" : "Lock Me"}
    </button>
  );
}
