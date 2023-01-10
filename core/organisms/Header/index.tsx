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
import classNames from "classnames";
import { useDisableScroll } from "../../../hooks/useDisableScroll";

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
    <div className={css.menu}>
      <div className={css.links}>
        <Link href="/" passHref aria-label="Home">
          <button className={css.home} aria-label="Home">
            <IconHome height={28} width={28} />
          </button>
        </Link>
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
      </div>
      <LightDarkSwitch />
    </div>
  );
}

const MobileMenu = motion(Menu);

/**
 * Header
 *
 * The main navigation bar that allows the user to redirect
 * to other parts of the site.
 *
 * @returns JSX.Element
 */
export default function Header(props: { sticky?: boolean }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useDisableScroll(isOpen);

  const headerClasses = classNames({
    [css.header]: true,
    [inter.className]: true,
    [css.sticky]: props.sticky,
  });

  const menu: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
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

  return (
    <>
      <header className={headerClasses}>
        <nav className={css.nav}>
          <Menu />
        </nav>
        <nav className={css.mobilenav}>
          <ExpandSwitch isChecked={isOpen} setIsChecked={setIsOpen} />
        </nav>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={css.mobilemenu}
            variants={menu}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Menu onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
