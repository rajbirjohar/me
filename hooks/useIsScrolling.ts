import { useEffect, useState } from "react";

/**
 * useIsScrolling
 *
 * Determines if the user is currently scrolling.
 *
 * @param threshhold Determines how many pixels from the top to consider when scrolling is true.
 * @returns boolean
 */
export const useIsScrolling = (threshhold: number) => {
  const [value, setValue] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setValue(window.scrollY > threshhold);
    });
    return window.removeEventListener("scroll", () => {});
  }, [setValue, threshhold]);
  return [value];
};
