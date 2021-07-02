import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Layout from '@/components/Layout'
import profilePic from '@/public/assets/profile.jpeg'
import styles from '@/styles/index.module.css'
import toast, { Toaster } from 'react-hot-toast'
import TimeAgo from 'react-timeago'
import { motion } from 'framer-motion'

export default function Projects() {
  const { data } = useSWR('/api/github', fetcher)
  const loading = !data
  function copyEmail() {
    navigator.clipboard.writeText('hello@rajbir.io')
    toast.success('Copied!')
  }

  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Home</title>
      </Head>
      <Toaster />
      <section className={styles.hero}>
        <div className={styles.profilePic}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src="/assets/profile.jpeg"
            alt="Picture of Rajbir Johar"
            className={styles.rounded}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Hey there, I&#39;m Rajbir.</h1>
          <p>
            Frontend Developer based in Southern California, typing on bespoke
            keyboards, playing through <i>Ratchet and Clank: Rift Apart</i>, and
            perfecting the grilled cheese.
          </p>
          <p>
            Currently studying Computer Science but loving web development.
            Shoot me a message at <a onClick={copyEmail}>hello@rajbir.io</a>.
          </p>
          <p>
            Lasted edited about
            {loading ? (
              <>...</>
            ) : (
              <>
                {' '}
                <TimeAgo date={data.portfolioLastUpdated} />.
              </>
            )}
          </p>
        </div>
      </section>
    </Layout>
  )
}
