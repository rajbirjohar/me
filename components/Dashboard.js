import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import { useState } from 'react'
import styles from '@/styles/dashboard.module.css'

const Stat = ({ title, data, caption }) => {
  return (
    <a
      href="https://github.com/r-jo"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.group}
    >
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <p>
          <span>{data}</span> {caption}
        </p>
      </div>
    </a>
  )
}

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <p className={styles.dummytitle}></p>
      <p className={styles.dummydescription}></p>
    </div>
  )
}

export default function GithubStats() {
  const [loading, setLoading] = useState(false)
  const { data } = useSWR('/api/github', fetcher)
  // <div className={styles.dashboard}>
  //   <Skeleton />
  //   <Skeleton />
  //   <Skeleton />
  //   <Skeleton />
  // </div>

  return (
    // <div className={styles.dashboard}>
    //   <Stat
    //     title="Github Stars"
    //     data={[data ? data.stars : 'Loading']}
    //     caption="stars collected."
    //   />
    //   <Stat
    //     title="Github Followers"
    //     data={[data ? data.followers : 'Loading']}
    //     caption="followers acquired."
    //   />
    //   <Stat
    //     title="Repos Starred"
    //     data={[data ? data.starred : 'Loading']}
    //     caption="repos saved."
    //   />
    //   <Stat
    //     title="Organizations"
    //     data={[data ? data.orgsCont : 'Loading']}
    //     caption="orgs contributed to."
    //   />
    // </div>
    <p>
      So far, I collected {data ? data.stars : '...'} stars, acquired{' '}
      {data ? data.followers : '...'} followers, saved{' '}
      {data ? data.starred : '...'} repos, and contributed to{' '}
      {data ? data.orgsCont : '...'} organizations. Follow me or star one of my
      repos and watch the numbers update.
    </p>
  )
}
