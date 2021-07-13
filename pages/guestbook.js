import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Layout from '@/components/Layout'
import styles from '@/styles/guestbook.module.css'
import { connectToDatabase } from '../util/mongodb'
import Entry from '@/components/Entry'

export default function Page({ entries }) {
  const [session, loading] = useSession()
  const [msg, setMsg] = useState(null)

  async function submitEntry(e) {
    e.preventDefault()
    const body = {
      content: e.currentTarget.content.value,
    }
    if (!e.currentTarget.content.value) return
    e.currentTarget.content.value = ''
    const res = await fetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.ok) {
      setMsg('Posted!')
      setTimeout(() => setMsg(null), 5000)
    }
  }

  return (
    <Layout>
      <section>
        {!session && (
          <div>
            <p>Not signed in</p>
            <button className={styles.button} onClick={() => signIn()}>
              Sign in
            </button>
          </div>
        )}
        {session && (
          <div>
            <p>Signed in as {session.user.name}</p>
            <button className={styles.button} onClick={() => signOut()}>
              Sign out
            </button>
            <br />
            <div className={styles.inputWrapper}>
              <form onSubmit={submitEntry}>
                <input
                  aria-label="Enabled Searchbar"
                  name="content"
                  type="text"
                  placeholder="Your message here..."
                  className={styles.input}
                />
                <button className={styles.button} type="submit">
                  Sign
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
      <>
        {entries.map((entry) => (
          // eslint-disable-next-line react/jsx-key
          <Entry entry={entry.entry} />
        ))}
      </>
    </Layout>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()

  const entries = await db.collection('entries').find({}).limit(1000).toArray()

  return {
    props: {
      entries: JSON.parse(JSON.stringify(entries)),
    },
    revalidate: 60,
  }
}
