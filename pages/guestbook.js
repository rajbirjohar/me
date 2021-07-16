import React from 'react'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import Layout from '@/components/Layout'
import styles from '@/styles/guestbook.module.css'
import EntryForm from '@/components/EntryForm'
import Entries from '../components/Entries'
import { motion } from 'framer-motion'

export default function Page({ entries }) {
  const [session, loading] = useSession()
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Guestbook</title>
      </Head>
      <h1>Sign My Guestbook</h1>
      <section>
        {!session && (
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.loginbutton}
              onClick={() => signIn('github')}
            >
              Sign in with Github
            </motion.button>
          </div>
        )}
        {session && (
          <div>
            <p>
              Hey <b>{session.user.name}!</b>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
              onClick={() => signOut()}
            >
              Sign out
            </motion.button>
          </div>
        )}
        <p>
          Immortalize your place on this very cool website and post a message
          for future visitors. Your Github username is only used to display your
          comment.
        </p>
        {session && (
          <>
            <EntryForm name={session.user.name} email={session.user.email} />
          </>
        )}
      </section>
      <h2>Signatures</h2>
      <Entries />
    </Layout>
  )
}
