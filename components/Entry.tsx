import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { ReplyIcon } from '@/components/icons/icons'
import styles from '@/styles/guestbook.module.css'
import { motion } from 'framer-motion'

export default function Entry({ name, entry, timestamp, entryId }) {
  const { data: session, status } = useSession()
  const [newEntry, setNewEntry] = useState('')
  const [modify, showModify] = useState(false)
  const [filled] = useState({
    newEntry: false,
  })

  const handleChangeEntry = (e) => {
    setNewEntry(e.target.value)
    filled.newEntry = e.target.value !== ''
  }
  const submitNewForm = () => {
    if (Object.values(filled).every((e) => e)) {
      const data = [entryId, newEntry]
      modifyEntry(data)
    } else {
      toast.error('Please fill out your message.')
    }
    setNewEntry('')
  }

  const modifyEntry = async (newEntryData) => {
    const response = await fetch('api/entry/modify', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newEntry_data: newEntryData }),
    })
    const data = await response.json()
    if (response.status === 200) {
      toast.success('Awesome. Entry modified!', {
        icon: '👏',
      })
    }
    return data.newEntry_data
  }
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
        toast.success('Deleted entry!')
      } else {
        toast.error('Uh oh. Something went wrong.')
      }
    }
  }
  // Render delete button only if the
  // session user equals the name of the entry
  let match = false
  if (session) {
    if (session.user.name === name) {
      match = true
    }
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
              <a className={styles.modify} onClick={() => showModify(!modify)}>
                Modify
              </a>{' '}
              /{' '}
              <a className={styles.delete} onClick={deleteEntry}>
                Delete
              </a>
              {modify && (
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className={styles.inputWrapper}
                >
                  <input
                    aria-label="Entry Input"
                    name="Entry"
                    value={newEntry}
                    onChange={handleChangeEntry}
                    type="text"
                    placeholder="Your new entry here..."
                    className={styles.input}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.995 }}
                    transition={{ ease: 'easeInOut', duration: 0.015 }}
                    className={styles.modifybutton}
                    type="submit"
                    onClick={() => submitNewForm()}
                  >
                    Modify Entry
                  </motion.button>
                </form>
              )}
            </>
          )}
        </span>
      </p>
    </div>
  )
}
