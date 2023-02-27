import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import css from "./styles.module.css";
import classNames from "classnames";

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

  const focusedClasses = classNames({
    [css.link]: true,
    [css.active]:
      router.asPath === props.href ||
      router.pathname === props.href ||
      // In order to keep the link active when traversing
      // down child routes or dynamic routes.
      router.asPath.includes(props.href) ||
      router.pathname.includes(props.href),
  });

  return (
    <Link aria-label={props.label} href={props.href} className={focusedClasses}>
      <span onClick={props.onClick}>
        <span className={css.label}>{props.children}</span>
      </span>
    </Link>
  );
}
