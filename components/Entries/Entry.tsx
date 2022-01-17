import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import ModEntryForm from './ModEntryForm'
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/guestbook.module.css'

const Divider = () => {
  return <span className={styles.divider}> / </span>
}

export default function Entry({ user, entry, timestamp, entryId }) {
  const { data: session } = useSession()
  const [modify, showModify] = useState(false)

  const deleteEntry = async (event) => {
    const response = await fetch('/api/entry/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entryId: entryId }),
    })
    await response.json()
    if (response.status === 200) {
      toast.success('Deleted entry.', {
        icon: '✌️',
      })
    } else {
      toast.error('Uh oh. Something went wrong.')
    }
  }

  return (
    <motion.div layout>
      <AnimatePresence exitBeforeEnter>
        {modify ? (
          <ModEntryForm
            entryId={entryId}
            entry={entry}
            user={user}
            showModify={showModify}
            modify={modify}
          />
        ) : (
          <motion.p
            layout="position"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween' }}
          >
            {entry}
            <br />
            <span className={styles.author}>
              {user}
              <Divider />
              {timestamp}
              {session && session.user.name === user && (
                <>
                  <Divider />
                  <a
                    className={styles.modify}
                    onClick={() => showModify(!modify)}
                  >
                    Modify
                  </a>
                  <Divider />
                  <a className={styles.delete} onClick={deleteEntry}>
                    Delete
                  </a>
                </>
              )}
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
