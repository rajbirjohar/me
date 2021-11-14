import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import { LeftArrow } from '@/components/icons/icons'
import { motion } from 'framer-motion'

export default function Custom500() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | 500</title>
      </Head>
      <section>
        <h1>Grandfather Paradox</h1>
        <p>
          <i>noun</i>
        </p>
        <p>
          A causality paradox speculated about in theories of time-travel in
          which traveling back in time would allow one to alter the conditions
          at the earlier time in such a way as to make current conditions
          impossible, as by causing the death of one&#39;s grandfather, making
          one&#39;s very existence impossible.
        </p>
        <p>I tried to retrieve something but that something went wrong.</p>
        <Link href="/" passHref>
          <motion.button
            aria-label="Go Back Home"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.995 }}
            transition={{ ease: 'easeInOut', duration: 0.015 }}
            className={styles.button}
          >
            <LeftArrow /> Back home
          </motion.button>
        </Link>
      </section>
    </Layout>
  )
}
