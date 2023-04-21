import css from "./styles.module.css";
import Cmdk from "../Cmdk";

export default function Header() {
  return (
    <header className={css.header}>
      <Cmdk />
    </header>
  );
}
