"use client";

import styles from "./styles.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip";
import { format } from "date-fns";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // A known new moon date for our calculation
  const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14));
  const msPerDay = 24 * 60 * 60 * 1000;
  const synodicMonth = 29.53058867; // days

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  /**
   * Calculates the moon phase data.
   *
   * Returns an object with:
   *  - index: phase index (0–7)
   *  - phase: phase name (e.g., "Full Moon")
   *  - phaseValue: raw phase value (0–1) to help determine waxing vs waning
   *  - illumination: percent illuminated (0–100)
   */
  const moonPhase = (date: Date) => {
    const moonPhases = [
      "New Moon",
      "Waxing Crescent",
      "First Quarter",
      "Waxing Gibbous",
      "Full Moon",
      "Waning Gibbous",
      "Last Quarter",
      "Waning Crescent",
    ];

    // Calculate how many days have passed since the known new moon.
    const daysSinceKnownNewMoon =
      (date.getTime() - knownNewMoon.getTime()) / msPerDay;

    // Calculate the raw phase (0 to 1)
    const phase =
      (((daysSinceKnownNewMoon % synodicMonth) + synodicMonth) % synodicMonth) /
      synodicMonth;

    // Illumination (0 to 100%)
    const illumination = (1 - Math.cos(2 * Math.PI * phase)) / 2;

    // Determine a phase index for labeling
    let phaseIndex;
    if (phase < 0.0625) {
      phaseIndex = 0;
    } else if (phase < 0.1875) {
      phaseIndex = 1;
    } else if (phase < 0.3125) {
      phaseIndex = 2;
    } else if (phase < 0.4375) {
      phaseIndex = 3;
    } else if (phase < 0.5625) {
      phaseIndex = 4;
    } else if (phase < 0.6875) {
      phaseIndex = 5;
    } else if (phase < 0.8125) {
      phaseIndex = 6;
    } else if (phase < 0.9375) {
      phaseIndex = 7;
    } else {
      phaseIndex = 0;
    }

    return {
      index: phaseIndex,
      phase: moonPhases[phaseIndex],
      phaseValue: phase, // added raw phase value
      illumination: parseFloat((illumination * 100).toFixed(2)),
    };
  };

  /**
   * Returns the nearest solstice or equinox.
   */
  const nearestSolsticeOrEquinox = (date: Date) => {
    const year = date.getFullYear();
    const events = [
      { name: "March Equinox", date: new Date(Date.UTC(year, 2, 20, 0, 0)) },
      { name: "June Solstice", date: new Date(Date.UTC(year, 5, 21, 0, 0)) },
      {
        name: "September Equinox",
        date: new Date(Date.UTC(year, 8, 23, 0, 0)),
      },
      {
        name: "December Solstice",
        date: new Date(Date.UTC(year, 11, 21, 0, 0)),
      },
      // For edge cases (e.g. December)
      {
        name: "March Equinox",
        date: new Date(Date.UTC(year + 1, 2, 20, 0, 0)),
      },
      {
        name: "June Solstice",
        date: new Date(Date.UTC(year + 1, 5, 21, 0, 0)),
      },
      {
        name: "September Equinox",
        date: new Date(Date.UTC(year + 1, 8, 23, 0, 0)),
      },
      {
        name: "December Solstice",
        date: new Date(Date.UTC(year + 1, 11, 21, 0, 0)),
      },
    ];

    let nearestEvent = events[0];
    for (let event of events) {
      if (
        Math.abs(date.getTime() - event.date.getTime()) <
        Math.abs(date.getTime() - nearestEvent.date.getTime())
      ) {
        nearestEvent = event;
      }
    }
    return nearestEvent;
  };

  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      rotate: 90,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        opacity: {
          delay: 0.2,
        },
      },
    },
    exit: {
      opacity: 0,
      rotate: -90,
      transition: {
        duration: 0.5,
        opacity: {
          duration: 0.3,
        },
      },
    },
  };

  // Use the current date (or a fixed date for testing)
  const currentDate = new Date(Date.now());
  const currentMoonPhase = moonPhase(currentDate);

  if (!mounted) return null;

  return (
    <div className={styles.theme}>
      <Tooltip>
        <TooltipTrigger className={styles.trigger} asChild>
          <div className={styles.anchor}>
            <AnimatePresence mode="sync" initial={false}>
              {theme === "light" ? (
                <motion.button
                  className={styles.button}
                  onClick={toggleTheme}
                  aria-label="Toggle Dark Mode"
                  key="sun"
                  data-theme="light"
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              ) : (
                <motion.button
                  key="moon"
                  data-theme="dark"
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={styles.button}
                  // Always show the lit (moon) color as the background
                  style={{
                    backgroundColor: "var(--moon)",
                  }}
                  onClick={toggleTheme}
                  aria-label="Toggle Light Mode"
                >
                  {/* 
                    The dark overlay covers the unlit portion.
                    Its width is determined by (100 - illumination)%.
                    It’s anchored to the left when waxing (phaseValue < 0.5) 
                    and to the right when waning.
                  */}
                  <div
                    className={styles.phase}
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      width: `${100 - currentMoonPhase.illumination}%`,
                      ...(currentMoonPhase.phaseValue < 0.5
                        ? { left: 0 }
                        : { right: 0 }),
                      backgroundColor: "#111",
                      borderRadius: "50%",
                      transition:
                        "width 0.5s ease, left 0.5s ease, right 0.5s ease",
                    }}
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </TooltipTrigger>
        <TooltipContent side="left">
          {theme === "light" ? (
            <>
              {nearestSolsticeOrEquinox(new Date()).name} |{" "}
              {format(nearestSolsticeOrEquinox(new Date()).date, "MMMM d, y")}
            </>
          ) : (
            <>
              {currentMoonPhase.phase} | {currentMoonPhase.illumination}%
              Illuminated
            </>
          )}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export { Theme };
