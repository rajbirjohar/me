import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Entry from '@/components/Entry'
import TimeAgo from 'react-timeago'

export default function Entries() {
  const { data, error } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  })
  if (error) {
    return <p>Oops. Looks like my database is not being fetched right now.</p>
  }
  if (!data) {
    return <p>Loading entries...</p>
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
