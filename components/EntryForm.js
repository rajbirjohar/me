import React from 'react'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/client'
import styles from '@/styles/guestbook.module.css'
import { motion } from 'framer-motion'

export default function EntryForm(props) {
  const [error, setError] = React.useState(false)
  const [entry, setEntry] = React.useState('')
  const [submit_triggered, triggerSubmit] = React.useState(false)
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
    triggerSubmit(true)
    if (Object.values(filled).every((e) => e)) {
      setError(false)
      const data = [name, email, entry]
      sendData(data)
      toast.success('Awesome. You signed!', {
        icon: '👏',
        background: '#61d345',
      })
    } else {
      setError(true)
      toast.error('Please fill out your message.')
    }
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
    <div className={styles.inputWrapper}>
      <input
        aria-label="Entry Input"
        name="Entry"
        value={entry}
        onChange={handleChangeEntry}
        type="text"
        placeholder="Your message here..."
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
        Sign Message
      </motion.button>
    </div>
  )
}
