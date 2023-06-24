import styles from "./layout.module.scss";

export const metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className={styles.article}>{children}</article>;
}
