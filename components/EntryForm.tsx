import React from 'react'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import styles from '@/styles/guestbook.module.css'
import { motion } from 'framer-motion'

export default function EntryForm() {
  const [entry, setEntry] = React.useState('')
  const { data: session, status } = useSession()

  const [filled] = React.useState({
    name: session.user.name,
    entry: false,
  })
  const handleChangeEntry = (e) => {
    setEntry(e.target.value)
    filled.entry = e.target.value !== ''
  }
  const submitForm = (name, email) => {
    if (Object.values(filled).every((e) => e)) {
      const data = [name, email, entry]
      sendData(data)
    } else {
      toast.error('Please fill out your message.')
    }
    setEntry('')
  }

  const sendData = async (entryData) => {
    const response = await fetch('/api/entry/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entry_data: entryData }),
    })
    const data = await response.json()
    if (response.status === 200) {
      toast.success('Awesome. You signed!', {
        icon: '👏',
      })
    }
    return data.entry_data
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.inputWrapper}>
      <input
        aria-label="Entry Input"
        name="Entry"
        value={entry}
        onChange={handleChangeEntry}
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
        onClick={() => submitForm(session.user.name, session.user.email)}
      >
        Sign Entry
      </motion.button>
    </form>
  )
}
