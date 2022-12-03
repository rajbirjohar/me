import { useEffect } from "react";

/**
 * useDisableScroll
 *
 * If value is true, lock scroll on a global level.
 *
 * @param value - Determines if we should lock scroll.
 */
export const useDisableScroll = (value: boolean) => {
  useEffect(() => {
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [value]);
};
