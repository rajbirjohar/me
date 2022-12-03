import {
  animate,
  AnimatePresence,
  LayoutGroup,
  motion,
  Variants,
} from "framer-motion";
import {
  IconAperture,
  IconArrowBarToLeft,
  IconHourglass,
  IconMusic,
  IconPrompt,
  TablerIcon,
} from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import css from "./styles.module.css";

const NavButton = (props: {
  icon: TablerIcon;
  title: string;
  href: string;
}) => {
  const button: Variants = {
    initial: {
      transition: {
        type: "tween",
      },
    },
    animate: {
      transition: {
        type: "tween",
      },
    },
  };
  const text: Variants = {
    initial: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
    animate: {
      width: "auto",
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
  };
  return (
    <Link href={props.href}>
      <motion.button
        key={props.href}
        layout
        variants={button}
        initial="initial"
        whileHover="animate"
        className={css.button}
      >
        <props.icon />
        <motion.span variants={text} className={css.label}>
          {props.title}
        </motion.span>
      </motion.button>
    </Link>
  );
};

export default function Header() {
  const router = useRouter();
  return (
    <header className={css.header}>
      <motion.nav className={css.nav}>
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            {router.pathname !== "/" && (
              <motion.span
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                exit={{
                  scale: 0,
                }}
              >
                <NavButton
                  icon={IconArrowBarToLeft}
                  title={"Back"}
                  href={"/"}
                />
              </motion.span>
            )}
          </AnimatePresence>
          <NavButton icon={IconPrompt} title={"Projects"} href={"/projects"} />
          <NavButton
            icon={IconHourglass}
            title={"Experience"}
            href={"/experiences"}
          />
          <NavButton icon={IconAperture} title={"Gallery"} href={"/gallery"} />
          <NavButton icon={IconMusic} title={"Music"} href={"/music"} />
        </LayoutGroup>
      </motion.nav>
    </header>
  );
}
