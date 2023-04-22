import Layout from "@/core/templates/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { useNextCssRemovalPrevention } from "../hooks/useNextCssRemovalPrevention";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  useNextCssRemovalPrevention();
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark", "afternoon", "evening"]}
    >
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
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
