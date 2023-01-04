import { Inter } from "@next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function Layout(props: { children: React.ReactNode }) {
  return <main className={inter.className}>{props.children}</main>;
}
