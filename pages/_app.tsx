import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/index";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

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
