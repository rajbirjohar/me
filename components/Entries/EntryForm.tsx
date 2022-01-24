import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
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
      user: user,
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
      toast.success('Thanks for signing.', {
        icon: '🎉',
      })
      reset({ entry: '', user: user, email: email })
    } else {
      toast.error('Uh oh. Something went wrong.', {
        icon: '😔',
      })
    }
    return data.entryData
  }

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <div className={styles.inputheader}>
        <label>Entry:</label>
        {errors.entry && (
          <>
            {errors.entry.type === 'required' && (
              <span className={styles.error}>Field required</span>
            )}
            {errors.entry.type === 'maxLength' && (
              <span className={styles.error}>Too many characters</span>
            )}
          </>
        )}
      </div>
      <input
        {...register('entry', { required: true, maxLength: 200 })}
        type="text"
        autoComplete="off"
        placeholder="What do you want to say?"
      />
      <span className={styles.actions}>
        <button type="submit" className={styles.primary}>
          Sign Entry
        </button>
      </span>
    </form>
  )
}
