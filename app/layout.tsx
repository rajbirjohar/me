import Header from "@/core/common/Header";
import styles from "./layout.module.scss";
import "@/app/globals.scss";
import { Lora } from "next/font/google";
import { Providers } from "@/providers";
import { Toaster } from "@/core/ui/Toaster";
import Footer from "@/core/common/Footer";

const font = Lora({ subsets: ["latin"] });

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
      <body className={font.className}>
        <Providers>
          <Toaster />
          <main className={styles.main}>
            <Header />
            {children}
            <Footer />
          </main>
          <div className={styles.gradient} aria-hidden />
        </Providers>
      </body>
    </html>
  );
}
