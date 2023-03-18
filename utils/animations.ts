import { Variants } from "framer-motion";

export const wrapper: Variants = {
  out: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export const item: Variants = {
  out: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
