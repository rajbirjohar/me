import React from 'react'
import { useSession } from 'next-auth/client'
import toast from 'react-hot-toast'
import { ReplyIcon } from '../components/icons/icons'
import styles from '@/styles/guestbook.module.css'

export default function Entry({ name, entry, timestamp, entryId }) {
  const [session, loading] = useSession()
  const deleteEntry = async (event) => {
    if (session) {
      const res = await fetch('/api/entry/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ entry: entryId }),
      })
      await res.json()
      if (res.status === 200) {
        toast.success('Deleted!')
      } else {
        toast.error('Uh oh. Something went wrong.')
      }
    }
  }
  const match = () => {
    session.user.name === { name }
  }
  return (
    <div>
      <p>
        {entry}
        <br />
        <span className={styles.author}>
          <svg className={styles.replyicon}>
            <ReplyIcon />
          </svg>
          {name} / {timestamp}{' '}
          {match && (
            <>
              /{' '}
              <a className={styles.delete} onClick={deleteEntry}>
                Delete
              </a>
            </>
          )}
        </span>
      </p>
    </div>
  )
}
