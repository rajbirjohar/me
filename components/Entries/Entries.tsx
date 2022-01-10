import useSWR, { SWRConfig } from 'swr'
import TimeAgo from 'react-timeago'
import fetcher from '@/lib/fetcher'
import Entry from '@/components/Entries/Entry'
import Loader from '@/components/Entries/Loader'

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
    <div>
      {data.entries.map((entry) => (
        <Entry
          key={entry._id}
          entryId={entry._id}
          name={entry.name}
          entry={entry.entry}
          timestamp={<TimeAgo date={entry.createdAt} />}
        />
      ))}
    </div>
  )
}
