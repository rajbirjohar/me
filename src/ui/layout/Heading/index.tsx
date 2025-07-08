import styles from "./styles.module.css";

export const Heading = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.intro}>{children}</section>;
};
