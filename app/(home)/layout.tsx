import styles from "./layout.module.scss";

export const metadata = {
  title: "Rajbir Johar",
  description: "Developer and designer based in Arizona.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className={styles.article}>{children}</article>;
}
