import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import css from "./styles.module.css";
import { inter } from "@/components/Layout";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement;
}

/**
 * ActiveLink
 *
 * Used for the main navigation links within the Header
 * component. The links appear light grey when inactive,
 * and primary when active, which means the path matches
 * the link route.
 *
 * @param href The route the link will redirect to.
 * @param children The label of the link itself.
 * @param onClick Optional onClick attachment to be fired.
 * @returns JSX.Element
 **/
export default function Focused(props: {
  href: string;
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
}): JSX.Element {
  const router = useRouter();

  return (
    <Link
      aria-label={props.label}
      href={props.href}
      className={
        router.asPath === props.href ||
        router.pathname === props.href ||
        // In order to keep the link active when traversing
        // down child routes or dynamic routes.
        router.asPath.includes(props.href) ||
        router.pathname.includes(props.href)
          ? `${css.link} ${css.active} ${inter.className}`
          : `${css.link} ${inter.className}`
      }
    >
      <span onClick={props.onClick}>
        <AnimatePresence mode="wait">
          {(router.asPath === props.href ||
            router.pathname === props.href ||
            router.asPath.includes(props.href) ||
            router.pathname.includes(props.href)) && (
            <motion.strong
              key={props.href}
              style={{
                // This rule is needed because
                // spans are an inline element
                // which means they do not respect
                // the width property which stops
                // framer motion from animating
                display: "inline-flex",
              }}
              className={css.indicator}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.15, type: "tween" }}
            >
              &#9900;
            </motion.strong>
          )}
        </AnimatePresence>
        <span className={css.label}>{props.children}</span>
      </span>
    </Link>
  );
}
