import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Ascii from "@/components/Ascii";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem>
      <Component {...pageProps} />
      {/* <Ascii /> */}
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
