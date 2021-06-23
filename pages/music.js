import Head from 'next/head'
import RecentlyPlayedList from '@/components/RecentlyPlayedList'
import TrackList from '@/components/TrackList'
import NowPlaying from '@/components/NowPlaying'
import Layout from '@/components/Layout'

export default function Music() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Music</title>
      </Head>
      <section>
        <h1>Music</h1>
        <p>
          Discover my usual rotation. This list consists of the top ten and
          recently played songs that I&apos;ve been listening to on Spotify.
        </p>
        <h2>Favorite Tracks</h2>
        <TrackList />
        <h2>Recently Played</h2>
        <RecentlyPlayedList />
        <h2>Now Playing</h2>
        <NowPlaying />
      </section>
    </Layout>
  )
}
