import React from 'react'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import Layout from '@/components/Layout'
import styles from '@/styles/guestbook.module.css'
import EntryForm from '@/components/EntryForm'
import Entries from '../components/Entries'

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
            <button className={styles.loginbutton} onClick={() => signIn()}>
              Sign in with Github
            </button>
            <p>
              Immortalize your place on this very cool website and post a
              message for future visitors. Your name and email are only used to
              display your comments.
            </p>
          </div>
        )}
        {session && (
          <div>
            <p>
              Hey <b>{session.user.name}!</b>
            </p>
            <button className={styles.button} onClick={() => signOut()}>
              Sign out
            </button>
            <p>
              Immortalize your place on this very cool website and post a
              message for future visitors. Your name and email are only used to
              display your comments.
            </p>
            <EntryForm name={session.user.name} email={session.user.email} />
          </div>
        )}
      </section>
      <h2>Signatures</h2>
      <Entries />
    </Layout>
  )
}
