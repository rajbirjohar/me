import React from 'react'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'
import Layout from '@/components/Layout'
import styles from '@/styles/guestbook.module.css'
import EntryForm from '@/components/Entries/EntryForm'
import Entries from '@/components/Entries/Entries'

export default function Page() {
  const { data: session } = useSession()
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Guestbook</title>
      </Head>
      <h1>Sign My Guestbook</h1>
      <section>
        {!session && (
          <div>
            <button onClick={() => signIn('github')}>
              Sign in with Github
            </button>
          </div>
        )}
        {session && (
          <div>
            <p>
              Hello <b>{session.user.name}.</b>
            </p>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        )}
        <p>
          Immortalize your place on this very cool website and post a message
          for future visitors. Your Github username is only used to display your
          comment.
        </p>
        {session && (
          <>
            <EntryForm user={session.user.name} email={session.user.email} />
          </>
        )}
      </section>
      <h2>Signatures</h2>
      <Entries />
    </Layout>
  )
}
