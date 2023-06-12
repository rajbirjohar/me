import Header from "@/core/common/Header";
import styles from "./layout.module.scss";
import "@/app/globals.scss";
import { Inter } from "next/font/google";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rajbir Johar",
  description: "Developer and designer based in Arizona.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className={styles.main}>
            <Header />
            {children}
          </main>
          <div className={styles.gradient} aria-hidden />
        </Providers>
      </body>
    </html>
  );
}
