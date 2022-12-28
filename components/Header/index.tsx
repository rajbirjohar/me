import { useState } from "react";
import Focused from "./Focused";
import css from "./styles.module.css";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { IconHome } from "@tabler/icons";
import { useIsScrolling } from "@/hooks/useIsScrolling";
import { inter } from "../Layout";
import Link from "next/link";
import LightDarkSwitch from "../LightDarkSwitch";
import AlpineSwitch from "../AlpineSwitch";

/**
 * Menu
 *
 * The main navigation menu that appears in the top right of the
 * Header and in the hidden menu on mobile screen sizes.
 *
 * @param onClick? An optional function to be executed on click.
 * @returns JSX.Element
 */
function Menu(props: { onClick?: () => void }): JSX.Element {
  return (
    <>
      <Focused
        href="/chapters"
        onClick={props.onClick}
        label="Navigate to the chapters page to read some of my writings."
      >
        Chapters
      </Focused>
      <Focused
        href="/projects"
        onClick={props.onClick}
        label="Navigate to the projects page to learn more about my projects."
      >
        Projects
      </Focused>

      <Focused
        href="/gallery"
        onClick={props.onClick}
        label="Navigate to the gallery page to view some of my photography."
      >
        Gallery
      </Focused>
      <Focused
        href="/about"
        onClick={props.onClick}
        label="Navigate to the about me page to learn more about me."
      >
        About
      </Focused>
      <LightDarkSwitch />
    </>
  );
}

/**
 * Header
 *
 * The main navigation bar that allows the user to redirect
 * to other parts of the site.
 *
 * @returns JSX.Element
 */
export default function Header(): JSX.Element {
  const menu: Variants = {
    initial: {
      height: 0,
      scale: 0.95,
    },
    animate: {
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
    exit: {
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.35,
        delay: 0.15,
        type: "tween",
      },
    },
  };
  const links: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.35,
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
        type: "tween",
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [scrolling] = useIsScrolling(50);

  return (
    <>
      <header className={`${css.header} ${inter.className}`}>
        <nav
          className={scrolling || isOpen ? `${css.nav} ${css.scroll}` : css.nav}
        >
          <div className={css.menu}>
            <Link href="/" passHref aria-label="Home">
              <button className={css.icon} aria-label="Home">
                <IconHome height={28} width={28} />
              </button>
            </Link>
            <AlpineSwitch isChecked={isOpen} setIsChecked={setIsOpen} />
            <div className={css.menuwrapper}>
              <Menu />
            </div>
          </div>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.ul
                variants={menu}
                initial="initial"
                animate="animate"
                exit="exit"
                className={css.mobilemenuwrapper}
              >
                <motion.div variants={links} className={css.mobilelinks}>
                  <Menu onClick={() => setIsOpen(false)} />
                </motion.div>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
