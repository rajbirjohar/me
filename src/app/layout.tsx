import type { Metadata } from "next";
import localFont from "next/font/local";
import styles from "./layout.module.css";
import "./globals.css";
import { Navigation } from "@/ui/Navigation";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/ui/Footer";

const wotfard = localFont({
  variable: "--wotfard",
  src: [
    {
      path: "../fonts/Wotfard/WotfardRoman/wotfard-bold-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Wotfard/WotfardRoman/wotfard-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Wotfard/WotfardRoman/wotfard-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Wotfard/WotfardRoman/wotfard-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Wotfard/WotfardRoman/wotfard-thin-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Wotfard/WotfardRoman/wotfard-light-webfont.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Wotfard/WotfardRoman/wotfard-extralight-webfont.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});

const wotfardItalic = localFont({
  variable: "--wotfard-italic",
  src: [
    {
      path: "../fonts/Wotfard/WotfardItalic/wotfard-bolditalic-webfont.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Wotfard/WotfardItalic/wotfard-semibolditalic-webfont.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Wotfard/WotfardItalic/wotfard-mediumitalic-webfont.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Wotfard/WotfardItalic/wotfard-regularitalic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Wotfard/WotfardItalic/wotfard-thinitalic-webfont.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Wotfard/WotfardItalic/wotfard-lightitalic-webfont.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Wotfard/WotfardItalic/wotfard-extralightitalic-webfont.woff2",
      weight: "100",
      style: "italic",
    },
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={wotfard.className}>
        <ThemeProvider>
          <Navigation />
          <main className={styles.main}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
