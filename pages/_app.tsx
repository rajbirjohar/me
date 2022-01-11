import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
// router

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ThemeProvider disableTransitionOnChange enableSystem>
        <Toaster
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--mono-900)',
            },
          }}
        />
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
