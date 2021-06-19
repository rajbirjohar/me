import Head from 'next/head'
import Layout from '@/components/Layout'
import Timeline from '@/components/Timeline'
import TrackList from '@/components/TrackList'
import NowPlaying from '@/components/NowPlaying'

export default function Interests() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Interests</title>
      </Head>
      <section>
        <h1>Interests</h1>
        <p>
          There is more to life than sitting in front of a screen all day
          coding. Here you can learn about where I&apos;ve gone, what I&apos;ve
          done, and why I&apos;ve done it. I love sharing my notable experiences
          with others.
        </p>
        <p>If anything here interests you, let&apos;s talk about it.</p>
        <h2>Music</h2>
        <p>
          Discover my usual rotation. This list consists of the top ten songs
          that I&apos;ve been listening to on Spotify.
        </p>
        <TrackList />
        <hr />
        <NowPlaying />
        <h2>Experiences</h2>
        <p>
          Here are some notable memories, achievements, and failures that I
          figured would be nice to share.
        </p>
        <Timeline />
      </section>
    </Layout>
  )
}
