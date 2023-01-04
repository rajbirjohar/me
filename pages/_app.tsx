import "../styles/globals.css";
import "../styles/prism.css";
import type { AppProps } from "next/app";
import Layout from "../core/atoms/Layout/index";
import { ThemeProvider } from "next-themes";
import Header from "@/organisms/Header";
import Footer from "@/organisms/Footer";
import Meta from "@/atoms/Meta";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableColorScheme enableSystem>
      <Meta />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ThemeProvider>
  );
}
