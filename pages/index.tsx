import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/index.module.css'
import { LikeButton } from '../components/LikeButton'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar</title>
      </Head>
      <section>
        <h1 className={styles.title}>Rajbir Johar</h1>
        <p>Glad to have you.</p>
        <p>
          Frontend Developer based in Southern California. Building and typing
          on bespoke keyboards. Getting lost on canyon drives during my
          downtime. Crafting aesthetic interfaces at Inventives for mind blowing
          ideas.
        </p>
        <p>
          You should sign my <Link href="/guestbook">Guestbook</Link> while
          you&#39;re here. Tap the heart below if you like my site :).
        </p>
      </section>
    </Layout>
  )
}
