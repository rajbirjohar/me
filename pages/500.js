import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import { LeftArrow } from '@/components/icons/icons'

export default function Custom500() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | 500</title>
      </Head>
      <section>
        <h1>What in the 500?</h1>
        <p>
          I must have done something gravely wrong for you to find this page.
        </p>
        <Link href="/" passHref>
          <button className={styles.button}>
            <LeftArrow /> Back home
          </button>
        </Link>
      </section>
    </Layout>
  )
}
