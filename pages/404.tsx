import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import { LeftArrow } from '@/components/icons/icons'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | 404</title>
      </Head>
      <section>
        <h1>Schrödinger&#39;s Cat</h1>
        <p>
          <i>noun</i>
        </p>
        <p>
          A cat imagined as being enclosed in a box with a radioactive source
          and a poison that will be released when the source (unpredictably)
          emits radiation, the cat being considered (according to quantum
          mechanics) to be simultaneously both dead and alive until the box is
          opened and the cat observed.
        </p>
        <p>Just like this non(-existent) page.</p>
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
