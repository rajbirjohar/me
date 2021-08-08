import React from 'react'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/client'
import styles from '@/styles/guestbook.module.css'
import { motion } from 'framer-motion'

export default function EntryForm(props) {
  const [entry, setEntry] = React.useState('')
  const [session, loading] = useSession()

  const [filled] = React.useState({
    entry: false,
  })
  const handleChangeEntry = (e) => {
    setEntry(e.target.value)
    filled.name = session.user.name
    filled.entry = e.target.value !== ''
  }
  const submitForm = (name, email) => {
    if (Object.values(filled).every((e) => e)) {
      const data = [name, email, entry]
      sendData(data)
      toast.success('Awesome. You signed!', {
        icon: '👏',
        background: '#61d345',
      })
    } else {
      toast.error('Please fill out your message.')
    }
    setEntry('')
  }

  const sendData = async (entryData) => {
    console.log(entryData)
    const response = await fetch('/api/entry/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entry_data: entryData }),
    })
    const data = await response.json()
    console.log(data.entry_data)
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
        onClick={() => submitForm(props.name, props.email)}
      >
        Sign Entry
      </motion.button>
    </form>
  )
}
