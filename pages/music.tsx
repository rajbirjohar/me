import Head from 'next/head'
import RecentlyPlayedList from '@/components/RecentlyPlayedList'
import TrackList from '@/components/TrackList'
import NowPlaying from '@/components/NowPlaying'
import ArtistList from '@/components/ArtistList'
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
          Discover my usual rotation. This list consists of my favorite artists,
          loved songs, and recently played tracks that I&apos;ve been listening
          to on Spotify. Or see what I am listening to right now.
        </p>

        <h2>Now Playing</h2>
        <NowPlaying />
        <h2>Favorite Artists</h2>
        <ArtistList />
        <h2>Favorite Tracks</h2>
        <TrackList />
        <h2>Recently Played</h2>
        <RecentlyPlayedList />
      </section>
    </Layout>
  )
}
