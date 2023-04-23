import css from "./styles.module.scss";
import Cmdk from "../Cmdk";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header className={css.header} layout>
      <nav className={css.navigation}>
        <Cmdk />
      </nav>
    </motion.header>
  );
}
