import styles from '@/styles/loader.module.css'

const Skeleton = () => {
  return (
    <div className={styles.guestbookskeleton}>
      <p className={styles.guestbookdummydescription}></p>
      <p className={styles.guestbookdummyauthor}>
        <span className={styles.guestbookdummytitle}></span>
      </p>
    </div>
  )
}

const Loader = () => {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  )
}

export default Loader
