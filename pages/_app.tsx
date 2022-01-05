import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
// router

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ThemeProvider
        disableTransitionOnChange
        enableSystem
        themes={['light', 'dark', 'sepia', 'nord']}
      >
        <Toaster
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--fg)',
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
