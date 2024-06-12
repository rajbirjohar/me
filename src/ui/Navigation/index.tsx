"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip";
import { format } from "date-fns";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  /**
   * @function moonPhase
   * @description A function that returns the
   * current moon phase and lunar illumination
   * percentage based on the current date.
   * @param {Date} date - The current date.
   * @returns {Object} - An object containing the
   * moon phase and lunar illumination percentage.
   */
  const moonPhase = (
    date: Date
  ): {
    phase: string;
    background: string;
    illumination: string;
  } => {
    const synodicMonth = 29.53058867; // Synodic month (new moon to new moon) in days
    const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14)); // Date of known new moon (January 6, 2000)
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

    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSinceKnownNewMoon =
      (date.getTime() - knownNewMoon.getTime()) / msPerDay;

    const phase = (daysSinceKnownNewMoon % synodicMonth) / synodicMonth;
    const illumination = (1 - Math.cos(2 * Math.PI * phase)) / 2;

    let phaseIndex;
    if (phase < 0.0625) {
      phaseIndex = 0; // New Moon
    } else if (phase < 0.1875) {
      phaseIndex = 1; // Waxing Crescent
    } else if (phase < 0.3125) {
      phaseIndex = 2; // First Quarter
    } else if (phase < 0.4375) {
      phaseIndex = 3; // Waxing Gibbous
    } else if (phase < 0.5625) {
      phaseIndex = 4; // Full Moon
    } else if (phase < 0.6875) {
      phaseIndex = 5; // Waning Gibbous
    } else if (phase < 0.8125) {
      phaseIndex = 6; // Last Quarter
    } else if (phase < 0.9375) {
      phaseIndex = 7; // Waning Crescent
    } else {
      phaseIndex = 0; // New Moon
    }

    return {
      phase: moonPhases[phaseIndex],
      background: moonPhases[phaseIndex].replace(" ", "-").toLowerCase(),
      illumination: (illumination * 100).toFixed(2),
    };
  };

  /**
   * @function nearestSolsticeOrEquinox
   * @description A function that returns the nearest solstice or equinox based on the current date.
   * @param {Date} date - The current date.
   * @returns {Object} - An object containing the name of the nearest event and the date it occurs.
   */
  const nearestSolsticeOrEquinox = (
    date: Date
  ): {
    name: string;
    date: Date;
  } => {
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
    ];

    // Add events for the next year for edge cases in December
    events.push(
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
      }
    );

    // Find the nearest event
    let nearestEvent = events[0];
    for (let event of events) {
      if (
        Math.abs(date.getTime() - event.date.getTime()) <
        Math.abs(date.getTime() - nearestEvent.date.getTime())
      ) {
        nearestEvent = event;
      }
    }

    return {
      name: nearestEvent.name,
      date: nearestEvent.date,
    };
  };

  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      rotate: 90,
      // transition: {
      //   duration: 0.5,
      // },
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
  return (
    <div className={styles.navwrapper}>
      <nav className={styles.nav}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/journal">Journal</Link>
        </div>
        {mounted ? (
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
                        onClick={toggleTheme}
                        style={{
                          background: `var(--${
                            moonPhase(new Date()).background
                          }-gradient)`,
                        }}
                        aria-label="Toggle Light Mode"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </TooltipTrigger>
              <TooltipContent side="left">
                {theme === "light" ? (
                  <>
                    {nearestSolsticeOrEquinox(new Date()).name} |{" "}
                    {format(
                      nearestSolsticeOrEquinox(new Date()).date,
                      "MMMM d, y"
                    )}
                  </>
                ) : (
                  <>
                    {moonPhase(new Date()).phase} |{" "}
                    {moonPhase(new Date()).illumination}% Illuminated
                  </>
                )}
              </TooltipContent>
            </Tooltip>
          </div>
        ) : (
          <div
            style={{
              height: 44,
              width: 44,
            }}
          />
        )}
      </nav>
    </div>
  );
};

export { Navigation };
