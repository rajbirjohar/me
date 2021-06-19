import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Home</title>
      </Head>
      <section>
        <h1>Rajbir Johar</h1>
        <p>
          <span>A Frontend Developer based in Southern California.</span>
        </p>
        <p>
          I&#39;m a senior at the University of California, Riverside, studying
          Computer Science but loving web development.
        </p>
        <p>
          If I&#39;m not coding, you can catch me perfecting the art of the
          grilled cheese or building bespoke keyboards. I&apos;m typing on my
          Iron165 (my favorite board ever) with lubricated cream switches.
        </p>
        <p>
          You can also find me currently playing through{' '}
          <i>Ratchet and Clank: Rift Apart</i>. I&apos;m always up for a
          conversation. Feel free to hit me up.
        </p>
      </section>
    </Layout>
  )
}
