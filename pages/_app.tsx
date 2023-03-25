import Layout from "@/core/templates/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora } from "@next/font/google";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { useNextCssRemovalPrevention } from "../hooks/useNextCssRemovalPrevention";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const lora = Lora({ subsets: ["latin"], variable: "--font-heading" });

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  useNextCssRemovalPrevention();
  return (
    <ThemeProvider enableSystem>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${lora.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
