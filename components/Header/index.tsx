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
    initial: {},
    animate: {},
  };
  const text: Variants = {
    initial: {
      width: 0,
      opacity: 0,
      transition: {
        type: "tween",
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
    <Link href={props.href} key={props.href}>
      <motion.button
        name={props.title}
        layout="size"
        variants={button}
        initial="initial"
        whileHover="animate"
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
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
      <nav className={css.nav}>
        <div className={css.links}>
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
            <NavButton
              icon={IconPrompt}
              title={"Projects"}
              href={"/projects"}
            />
            <NavButton
              icon={IconHourglass}
              title={"Experiences"}
              href={"/experiences"}
            />
            <NavButton
              icon={IconAperture}
              title={"Gallery"}
              href={"/gallery"}
            />
            <NavButton icon={IconMusic} title={"Music"} href={"/music"} />
          </LayoutGroup>
        </div>
      </nav>
    </header>
  );
}
