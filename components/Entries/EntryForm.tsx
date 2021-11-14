import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import styles from '@/styles/guestbook.module.css'

export default function EntryForm() {
  const { data: session } = useSession()
  const [entry, setEntry] = useState({
    name: session.user.name,
    email: session.user.email,
    _entry: '',
  })

  const handleChange = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (entry._entry !== '') {
      sendData(entry)
    } else {
      toast.error('Please fill out your message.')
    }
    setEntry({ ...entry, _entry: '' })
  }

  const sendData = async (entryData) => {
    const response = await fetch('/api/entry/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entryData: entryData }),
    })
    const data = await response.json()
    if (response.status === 200) {
      toast.success('Awesome. You signed!', {
        icon: '👏',
      })
    } else {
      toast.error('Uh oh. Something went wrong.')
    }
    return data.entryData
  }

  return (
    <form onSubmit={handleSubmit} className={styles.inputWrapper}>
      <input
        aria-label="Entry Input"
        name="_entry"
        value={entry._entry}
        onChange={handleChange}
        type="text"
        placeholder="Your entry here..."
        className={styles.input}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.995 }}
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={styles.signbutton}
        type="submit"
      >
        Sign Entry
      </motion.button>
    </form>
  )
}
