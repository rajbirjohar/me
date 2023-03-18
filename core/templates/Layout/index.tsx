import css from "./styles.module.css";
import Page from "@/core/organisms/Page";
import Header from "@/core/organisms/Header";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { wrapper } from "@/utils/animations";

export default function Layout(props: { children: React.ReactNode }) {
  const { asPath } = useRouter();

  return (
    <main className={css.main}>
      <Page>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={asPath}
            variants={wrapper}
            animate="in"
            initial="out"
            exit="out"
          >
            {props.children}
          </motion.div>
        </AnimatePresence>
      </Page>
    </main>
  );
}
