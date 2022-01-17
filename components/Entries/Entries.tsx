import useSWR from 'swr'
import TimeAgo from 'react-timeago'
import fetcher from '@/lib/fetcher'
import Entry from '@/components/Entries/Entry'
import Loader from '@/components/Entries/Loader'
import { LayoutGroup } from 'framer-motion'

export default function Entries() {
  const { data, error } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  })
  if (error) {
    return (
      <p>
        Oops. Looks like my database is not being fetched right now. If this
        persists, please let me know.
      </p>
    )
  }
  if (!data) {
    return (
      <>
        <Loader />
      </>
    )
  }
  return (
    <LayoutGroup>
      {data.entries.map((entry) => (
        <Entry
          key={entry._id}
          entryId={entry._id}
          user={entry.name}
          entry={entry.entry}
          timestamp={<TimeAgo date={entry.createdAt} />}
        />
      ))}
    </LayoutGroup>
  )
}
