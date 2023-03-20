import Link from "next/link";
import css from "./styles.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import classNames from "classnames";
import { lora } from "@/pages/_app";

const links: { href: string; label: string }[] = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "journals",
    href: "/journals",
  },
  {
    label: "projects",
    href: "/projects",
  },
];

const MotionLink = motion(Link);

export default function Header() {
  const transition = {
    type: "tween",
    ease: [0.25, 1, 0.5, 1],
    duration: 0.4,
  };
  const router = useRouter();
  let pathname = router.asPath || "/";
  if (pathname.includes("/journals/")) {
    pathname = "/journals";
  }

  return (
    <header>
      <motion.nav
        layout
        layoutRoot
        className={classNames(css.navigation, lora.className)}
      >
        {links.map((link) => (
          <MotionLink
            key={link.href}
            href={link.href}
            className={
              router.asPath === link.href
                ? `${css.link} ${css.selected}`
                : `${css.link}`
            }
          >
            <span className={css.label}>{link.label}</span>
            {pathname === link.href && (
              <motion.div
                layout
                className={css.indicator}
                transition={transition}
                layoutId="main-navigation-indicator"
              />
            )}
          </MotionLink>
        ))}
      </motion.nav>
    </header>
  );
}
