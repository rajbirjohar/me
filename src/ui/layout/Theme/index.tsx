"use client";

import { useTheme } from "next-themes";
import styles from "./styles.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClockIcon, EarthIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/ui/core/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/core/Tooltip";

export const Theme = () => {
  const [selectedHour, setSelectedHour] = useState<number>(
    new Date().getHours() || 0
  );
  const { setTheme } = useTheme();

  // Render 24 dots for each hour of the day.
  return (
    <div className={styles.circadian}>
      <div className={styles.hours}>
        {[...Array(24)].map((_, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <button
                className={styles.hour}
                onClick={() => {
                  setSelectedHour(index);
                  setTheme(index < 6 || index >= 18 ? "dark" : "light");
                }}
              >
                <AnimatePresence initial={false} mode="popLayout">
                  {selectedHour === index && (
                    <motion.div
                      className={styles.bubble}
                      initial={{
                        transform: "translate3D(-50%, -50%, 0)",
                        opacity: 0,
                      }}
                      animate={{
                        transform: "translate3d(-50%, -100%, 0)",
                        opacity: 1,
                      }}
                      exit={{
                        transform: "translate3D(-50%, -50%, 0)",
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0, 0.49, 0, 1.49],
                      }}
                    >
                      {index < 6 || index >= 18 ? <MoonIcon /> : <SunIcon />}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className={styles.lineholder}>
                  <div
                    className={
                      styles.line +
                      (selectedHour === index ? ` ${styles.active}` : "") +
                      (index < 6 || index >= 18 ? ` ${styles.dark}` : "")
                    }
                  />
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent>{index}:00</TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className={styles.actions}>
        <Button
          size="small"
          variant="ghost"
          onClick={() => {
            const currentHour = new Date().getHours();
            setSelectedHour(currentHour);
            setTheme(currentHour < 6 || currentHour >= 18 ? "dark" : "light");
          }}
        >
          <ClockIcon />
          Current Hour
        </Button>
        <Button
          size="small"
          variant="ghost"
          onClick={() => {
            const currentHour = new Date().getHours();
            setSelectedHour(currentHour);
            setTheme("system");
          }}
        >
          <EarthIcon />
          Defaults
        </Button>
      </div>
    </div>
  );
};
