"use client";

import { AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * @function Stars
 * @description A component that renders a random star field
 * that can be used as a background for a page. The stars are
 * softly animated to give the appearance of twinkling.
 */
const StarField = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const starfield = Array.from({ length: 100 }, (_, i) => i).map((i) => {
    const size = Math.random() * 2 + 1;
    return <Star key={i} size={size} />;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {theme === "dark" ? (
        <div className={styles.stars}>{starfield}</div>
      ) : null}
    </AnimatePresence>
  );
};

const Star = ({ size }: { size: number }) => {
  // Randomly generate a position for the star

  const generateStarColor = () => {
    // Define ranges for star colors
    const hueRange = [200, 60]; // Blue to Red
    const saturationRange = [70, 100]; // Saturation range
    const lightnessRange = [70, 90]; // Lightness range

    // Randomly pick a hue within the range
    const hue = Math.random() * (hueRange[1] - hueRange[0]) + hueRange[0];
    const saturation =
      Math.random() * (saturationRange[1] - saturationRange[0]) +
      saturationRange[0];
    const lightness =
      Math.random() * (lightnessRange[1] - lightnessRange[0]) +
      lightnessRange[0];

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const style = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    // Randomly generate a duration for the animation
    // between 3 and 5 seconds
    animationDuration: `${Math.random() * 2 + 3}s`,
    // Randomly generate a color between white and bright blue
    backgroundColor: generateStarColor(),
    // Randomly generate delay for the animation
    animationDelay: `${Math.random() * 2}s`,
  };

  return <div className={styles.star} style={style} />;
};

export { StarField };
