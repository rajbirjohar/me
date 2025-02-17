import type { Metadata } from "next";
import { EB_Garamond, Geist_Mono } from "next/font/google";
import styles from "./layout.module.css";
import type { Viewport } from "next";
import { cn } from "@/lib/cn";
import "./globals.css";
import { Provider } from "@/ui/Provider";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--serif",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajbir.io"),
  title: "Rajbir Johar",
  description:
    "Rajbir is an engineer and designer based in Arizona. His work focuses on building interfaces for high potential ideas.",
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
      <Provider>
        <body className={cn(garamond.variable, mono.variable)}>
          <main className={styles.main}>{children}</main>
        </body>
      </Provider>
    </html>
  );
}
