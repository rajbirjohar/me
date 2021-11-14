import { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
// import { AnimatePresence } from 'framer-motion'
// router

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ThemeProvider
        disableTransitionOnChange
        enableSystem
        themes={['sepia', 'light', 'dark']}
      >
        <Header />
        {/* <AnimatePresence exitBeforeEnter>  key={router.route} */}
        <Component {...pageProps} />
        {/* </AnimatePresence> */}
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
