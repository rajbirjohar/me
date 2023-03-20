import { Variants, motion } from "framer-motion";

export default function Animate(props: { children: React.ReactNode }) {
  const item: Variants = {
    initial: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };
  return (
    <motion.div variants={item} style={{ minWidth: "100%" }}>
      {props.children}
    </motion.div>
  );
}
