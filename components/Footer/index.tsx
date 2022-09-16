import ExternalLink from "../ExternalLink";
import Heading from "../Heading";
import css from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <nav className={css.nav}>
        <Heading title={"Elsewhere"} subtitle="Let's go for a walk" />
        <div className={css.actions}>
          <ExternalLink
            title="Github"
            href="https://github.com/rajbirjohar"
            type="external"
          />
          <ExternalLink
            title="LinkedIn"
            href="https://www.linkedin.com/in/rajbirjohar/"
            type="external"
          />
          <ExternalLink
            title="Instagram"
            href="https://www.instagram.com/rajbir.johar/"
            type="external"
          />
        </div>
      </nav>
    </footer>
  );
}
