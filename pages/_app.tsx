import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@/templates/Layout";
import Header from "@/organisms/Header";
import Footer from "@/organisms/Footer";
import Meta from "@/atoms/Meta";
import "@/styles/globals.css";
import "@/styles/prism.css";

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
