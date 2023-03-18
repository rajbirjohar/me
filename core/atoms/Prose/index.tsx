import css from "./styles.module.css";

export default function Prose(props: { children: React.ReactNode }) {
  return <div className={css.prose}>{props.children}</div>;
}
