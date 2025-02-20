import type { Metadata } from "next";
import { STIX_Two_Text, Geist_Mono, Geist } from "next/font/google";
import styles from "./layout.module.css";
import type { Viewport } from "next";
import { cn } from "@/lib/cn";
import "./globals.css";
import { Provider } from "@/ui/Provider";
import { Theme } from "@/ui/Theme";

const serif = STIX_Two_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--serif",
});
const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--sans",
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
        <body className={cn(serif.variable, mono.variable, sans.variable)}>
          <main className={styles.main}>{children}</main>
          <Theme />
        </body>
      </Provider>
    </html>
  );
}
