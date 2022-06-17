import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Ascii from "@/components/Ascii";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
