import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import styles from '@/styles/guestbook.module.css'

export default function ModEntryForm({
  user,
  entry,
  entryId,
  showModify,
  modify,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      entryId: entryId,
      newEntry: entry,
      user: user,
    },
  })
  const sendData = async (entryData) => {
    const response = await fetch('/api/entry/modify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entryData: entryData }),
    })
    const data = await response.json()
    if (response.status === 200) {
      toast.success('Edited entry.', {
        icon: '🎉',
      })
      reset({ newEntry: '', user: user })
      showModify(!modify)
    } else {
      toast.error('Uh oh. Something went wrong.', {
        icon: '😔',
      })
    }
    return data.entryData
  }

  return (
    <motion.form
      onSubmit={handleSubmit(sendData)}
      layout="position"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween' }}
    >
      <div className={styles.inputheader}>
        <label>New Entry:</label>
        {errors.newEntry && (
          <>
            {errors.newEntry.type === 'required' && (
              <span className={styles.error}>Field required</span>
            )}
            {errors.newEntry.type === 'maxLength' && (
              <span className={styles.error}>Too many characters</span>
            )}
          </>
        )}
      </div>
      <input
        {...register('newEntry', { required: true, maxLength: 200 })}
        type="text"
        autoComplete="off"
        placeholder="Changed your mind?"
      />
      <span className={styles.actions}>
        <button
          type="button"
          className={styles.tertiaty}
          onClick={() => showModify(!modify)}
        >
          Cancel
        </button>
        <button type="submit" className={styles.secondary}>
          Modify Entry
        </button>
      </span>
    </motion.form>
  )
}
