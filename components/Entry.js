import React from 'react'
import toast from 'react-hot-toast'
import styles from '@/styles/guestbook.module.css'

export default function Entry({ name, entry, timestamp, entryId }) {
  const deleteEntry = async (event) => {
    const body = {
      entry_Id: entryId,
    }
    const res = await fetch('/api/entry/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.status === 200) {
      toast.success('Comment Deleted!')
    } else {
      toast.error('Something went wrong.')
    }
  }

  return (
    <div>
      <p>
        {entry}
        <br />
        <span className={styles.author}>
          {name} about {timestamp}
        </span>
      </p>
      {/* Still need to figure out how to delete */}
      {/* <a className={styles.delete} onClick={deleteEntry}>
        Delete
      </a> */}
    </div>
  )
}
