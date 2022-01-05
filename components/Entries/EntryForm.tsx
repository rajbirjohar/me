import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import styles from '@/styles/guestbook.module.css'

export default function EntryForm({ user, email }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      entry: '',
      name: user,
      email: email,
    },
  })
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
      reset({ entry: '' })
    } else {
      toast.error('Uh oh. Something went wrong.', {
        icon: '😔',
      })
    }
    return data.entryData
  }

  return (
    <form onSubmit={handleSubmit(sendData)}>
      {errors.entry && (
        <span className={styles.error}>This field is required</span>
      )}
      <div className={styles.inputWrapper}>
        <input
          {...register('entry', { required: true, maxLength: 200 })}
          type="text"
          placeholder="What do you want to say?"
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
      </div>
    </form>
  )
}
