import Header from "@/core/common/Header";
import styles from "./layout.module.scss";
import "@/app/globals.scss";
import { Lora } from "next/font/google";
import { Providers } from "@/providers";
import { Toaster } from "@/core/ui/Toaster";
import Footer from "@/core/common/Footer";
import { Metadata } from "next";

const font = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rajbir Johar",
    template: "%s | Rajbir Johar",
  },
  description: "Engineer and designer building interfaces for brilliant ideas.",
  openGraph: {
    title: "Rajbir Johar",
    description:
      "Engineer and designer building interfaces for brilliant ideas.",
    url: "https://rajbir.io",
    siteName: "Rajbir Johar",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Rajbir Johar",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "xOT4jg1dSc7lACQF3ib2f5tmF6rm88QQ5vhZI6Wi_aA",
  },
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
