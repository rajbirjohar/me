"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/info",
    text: "Info",
  },
];

export default function Header() {
  let pathname = usePathname() || "/";

  return (
    <header className={styles.header}>
      <nav>
        {links.map(({ href, text }) => {
          const active = href === pathname;
          return (
            <Link
              href={href}
              key={href}
              className={active ? styles.active : ""}
            >
              <span>{text}</span>
              {active ? (
                <>
                  <motion.div
                    className={styles.indicator}
                    layoutId="nav-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 50,
                    }}
                  />
                </>
              ) : null}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
