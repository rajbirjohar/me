import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { IconHome } from "@tabler/icons";
import { useIsScrolling } from "@/hooks/useIsScrolling";
import { inter } from "core/templates/Layout";
import Focused from "core/molecules/Focused";
import LightDarkSwitch from "core/molecules/LightDarkSwitch";
import ExpandSwitch from "core/molecules/ExpandSwitch";
import css from "./styles.module.css";

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
        href="/journals"
        onClick={props.onClick}
        label="Navigate to the journals page to read some of my writings."
      >
        Journals
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
              <button className={css.home} aria-label="Home">
                <IconHome height={28} width={28} />
              </button>
            </Link>
            <ExpandSwitch isChecked={isOpen} setIsChecked={setIsOpen} />
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
