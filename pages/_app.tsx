import { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'next-auth/client'
// import { AnimatePresence } from 'framer-motion'
// router

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
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
    </Provider>
  )
}

export default App
