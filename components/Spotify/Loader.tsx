import styles from '@/styles/loader.module.css'

const Skeleton = () => {
  return (
    <div className={styles.trackskeleton}>
      <div className={styles.trackdummyimage}></div>
      <div className={styles.trackdummycontent}>
        <p className={styles.trackdummytitle}></p>
      </div>
    </div>
  )
}

export const Loader = () => {
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

export const LongLoader = () => {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  )
}
