import css from "./styles.module.scss";
import Cmdk from "../Cmdk";

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <Cmdk />
      </nav>
    </header>
  );
}
