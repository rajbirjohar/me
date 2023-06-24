import styles from "./layout.module.scss";

export const metadata = {
  title: "About",
  description: "Engineer and designer building interfaces for brilliant ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className={styles.article}>{children}</article>;
}
