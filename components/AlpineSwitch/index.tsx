import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import css from "./styles.module.css";
import { useEffect, useState } from "react";

export default function AlpineSwitch(props: {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}) {
  const duration = 0.7;

  const x: Variants = {
    checked: {
      scale: 1,
    },
    unchecked: {
      scale: 0,
    },
  };

  const alpine: Variants = {
    checked: {
      scale: 0,
    },
    unchecked: {
      scale: 1,
    },
  };

  const scaleX = useMotionValue(props.isChecked ? 1 : 0);
  const scaleAlpine = useMotionValue(props.isChecked ? 0 : 1);
  const pathLengthX = useTransform(scaleX, [0.6, 1], [0, 1]);
  const pathLengthAlpine = useTransform(scaleAlpine, [0.6, 1], [0, 1]);
  return (
    <motion.button
      className={css.switch}
      data-testid="menu-switch"
      aria-describedby="menuSwitcher"
      onClick={() => props.setIsChecked(!props.isChecked)}
      title="Menu toggle"
      initial={false}
      animate={props.isChecked ? "checked" : "unchecked"}
      transition={{ duration }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
          variants={alpine}
          custom={props.isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthAlpine,
            scale: scaleAlpine,
          }}
        />
        <motion.path
          d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z"
          variants={alpine}
          custom={props.isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthAlpine,
            scale: scaleAlpine,
          }}
        />
        <motion.path
          d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"
          variants={alpine}
          custom={props.isChecked}
          transition={{ duration }}
          style={{
            pathLength: pathLengthAlpine,
            scale: scaleAlpine,
          }}
        />
        <motion.path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
          transition={{ duration }}
          variants={x}
          custom={props.isChecked}
          style={
            {
              // pathLength: pathLengthX,
              // scale: pathLengthX,
            }
          }
        />
        <motion.line
          x1="18"
          y1="6"
          x2="6"
          y2="18"
          transition={{ duration }}
          variants={x}
          custom={props.isChecked}
          style={
            {
              // pathLength: pathLengthX,
              // scale: pathLengthX,
            }
          }
        />
        <motion.line
          x1="6"
          y1="6"
          x2="18"
          y2="18"
          transition={{ duration }}
          variants={x}
          custom={props.isChecked}
          style={
            {
              // pathLength: pathLengthX,
              // scale: pathLengthX,
            }
          }
        />
      </motion.svg>
    </motion.button>
  );
}
