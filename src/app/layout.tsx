import type { Metadata, Viewport } from "next";
import { cn } from "@/utils/cn";
import styles from "./layout.module.css";
import "./globals.css";
import { Provider } from "@/providers/Provider";
import { Footer } from "@/ui/layout/Footer";
import Main from "@/ui/layout/Main";
import { displayNovela, novela, nudica, nudicaMono } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajbir.io"),
  title: "Rajbir Johar",
  description:
    "Rajbir is an engineer and designer based in Arizona. His work focuses on building accessible, performant, and delightful user experiences.",
  authors: [
    {
      name: "Rajbir Johar",
      url: "https://rajbir.io",
    },
  ],
  creator: "Rajbir Johar",
  publisher: "Rajbir Johar",
  keywords: [
    "Rajbir Johar",
    "Rajbir",
    "Johar",
    "Frontend",
    "Engineer",
    "Designer",
    "React",
    "Typescript",
    "Javascript",
    "HTML",
    "CSS",
    "Portfolio",
  ],
  openGraph: {
    images: "/og.png",
  },
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
      },
      {
        url: "/favicon-32x32.png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(36,31%,90%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(270,6%,11%)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          nudica.variable,
          nudicaMono.variable,
          novela.variable,
          displayNovela.variable,
        )}
      >
        <Provider>
          <Main>
            <div className={styles.content}>{children}</div>
          </Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
