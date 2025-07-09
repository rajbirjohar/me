import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import styles from "./layout.module.css";
import type { Viewport } from "next";
import { cn } from "@/utils/cn";
import "./globals.css";
import { Provider } from "@/providers/Provider";
import { Footer } from "@/ui/layout/Footer";
import Main from "@/ui/layout/Main";

const serif = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--serif",
});

const sans = localFont({
  variable: "--sans",
  src: [
    {
      path: "./fonts/wotfard/roman/wotfard-bold-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/wotfard/roman/wotfard-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/wotfard/roman/wotfard-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/wotfard/roman/wotfard-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/wotfard/roman/wotfard-thin-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/wotfard/roman/wotfard-light-webfont.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/wotfard/roman/wotfard-extralight-webfont.woff2",
      weight: "100",
      style: "normal",
    },
  ],
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
      <body className={cn(serif.variable, mono.variable, sans.variable)}>
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
