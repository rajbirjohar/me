import useSWR from 'swr'
import Fetcher from '@/lib/fetcher'

export default function TheOfficeQuote() {
  const { data } = useSWR('/api/theoffice', Fetcher)

  return (
    <div>
      <h4>How About a Quote from The Office?</h4>
      {data?.id ? (
        <blockquote key={data?.id}>
          {data?.quote}{' '}
          <cite>
            — {data?.firstName} {data?.lastName}
          </cite>
        </blockquote>
      ) : (
        <p>Creed must be up to something since there should be one here.</p>
      )}
    </div>
  )
}
