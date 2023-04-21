import Header from "@/core/organisms/Header";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useRouter } from "next/router";
import css from "./styles.module.css";
import Ascii from "@/core/atoms/Ascii";

export default function Layout(props: { children: React.ReactNode }) {
  const { asPath } = useRouter();

  const wrapper: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <main className={css.main}>
      <div className={css.page}>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            className={css.article}
            key={asPath}
            variants={wrapper}
            animate="animate"
            initial="initial"
            exit="exit"
            layout
          >
            {props.children}
          </motion.article>
        </AnimatePresence>
      </div>
      <Ascii />
    </main>
  );
}
