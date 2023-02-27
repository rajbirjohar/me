import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@/templates/Layout";
import Footer from "@/organisms/Footer";
import Meta from "@/atoms/Meta";
import "@/styles/globals.css";
import "@/styles/prism.css";
import { Inter } from "@next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider enableColorScheme enableSystem>
        <Meta />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </>
  );
}
