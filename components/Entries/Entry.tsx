import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { ReplyIcon } from '@/components/Icons'
import styles from '@/styles/guestbook.module.css'

export default function Entry({ name, entry, timestamp, entryId }) {
  const { data: session } = useSession()
  const [newEntry, setNewEntry] = useState('')
  const [modify, showModify] = useState(false)
  const handleChange = (event) => {
    setNewEntry(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (newEntry !== '') {
      const data = { entryId, newEntry }
      sendData(data)
    } else {
      toast.error('Please fill out your message.')
    }
    setNewEntry('')
  }

  const sendData = async (newEntryData) => {
    const response = await fetch('api/entry/modify', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newEntryData: newEntryData }),
    })
    const data = await response.json()
    if (response.status === 200) {
      toast.success('Awesome. Entry modified!', {
        icon: '👏',
      })
    } else {
      toast.error('Uh oh. Something went wrong.')
    }
    return data.newEntryData
  }

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
      toast.success('Deleted entry!')
    } else {
      toast.error('Uh oh. Something went wrong.')
    }
  }
  // Render delete button only if the
  // session user equals the name of the entry

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
          {session && session.user.name === name && (
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
                <form onSubmit={handleSubmit} className={styles.inputWrapper}>
                  <input
                    aria-label="Entry Input"
                    name="newEntry"
                    value={newEntry}
                    onChange={handleChange}
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
