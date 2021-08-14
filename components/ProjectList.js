import React, { useState } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import ProjectCard from './ProjectCard'
import styles from '@/styles/projects.module.css'
import { SearchIcon } from '@/components/icons/icons'
import TimeAgo from 'react-timeago'

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <p className={styles.dummytitle}></p>
      <p className={styles.dummydescription}></p>
      <p className={styles.dummydescription}></p>
      <p className={styles.dummylanguage}></p>
    </div>
  )
}

export default function ProjectList() {
  const [searchValue, setSearchValue] = useState('')
  const { data, error } = useSWR('/api/github', fetcher)
  if (error)
    return (
      <p>
        Something went wrong when trying to load the projects. If this error
        persists, please contact me.
      </p>
    )
  if (!data)
    return (
      <>
        <div className={styles.searchWrapper}>
          <input
            aria-label="Disabled Searchbar"
            type="text"
            placeholder="Not yet..."
            className={styles.search}
            disabled
          />
          <svg className={styles.searchIcon}>
            <SearchIcon />
          </svg>
        </div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    )

  const filteredProjects = Object(data.repos)
    .filter(
      (project) =>
        project.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.description
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        project.language?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => Number(b.stars) - Number(a.stars))

  return (
    <>
      <div className={styles.searchWrapper}>
        <input
          aria-label="Enabled Searchbar"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search my projects"
          className={styles.search}
        />
        <svg className={styles.searchIcon}>
          <SearchIcon />
        </svg>
      </div>
      {!filteredProjects.length && (
        <p>
          What!? That&#39;s crazy. It seems like you tried to find something I
          haven&#39;t created yet.
        </p>
      )}
      {filteredProjects.map((p) => (
        <ProjectCard
          key={p.name}
          name={p.name}
          star_count={p.stars}
          pushed_date={<TimeAgo date={p.pushed} />}
          href={p.url}
          desc={p.description}
          language={p.language}
        />
      ))}
    </>
  )
}
