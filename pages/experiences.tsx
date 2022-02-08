import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Timeline from '@/components/Timeline'

export default function Life() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Life</title>
      </Head>
      <section>
        <h1>Experiences</h1>
        <p>
          There is more to life than sitting in front of a screen all day
          coding. You can learn about where I&apos;ve gone, what I&apos;ve done,
          and why I&apos;ve done it.
        </p>
        <Timeline />
      </section>
    </Layout>
  )
}
