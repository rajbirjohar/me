import Ascii from "../Ascii";
import ExternalLink from "../ExternalLink";
import css from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <nav className={css.nav}>
        <h4>Elsewhere</h4>
        <p>Let&#39;s go for a walk.</p>
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
      <Ascii />
    </footer>
  );
}
