import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps, GetServerSideProps } from 'next'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import clientPromise from 'lib/mongodb'
import Layout from '@/components/Layout'
import profilePic from '@/public/assets/profile.jpeg'
import styles from '@/styles/index.module.css'
import TimeAgo from 'react-timeago'

export default function Projects({ hitcount }) {
  const { data } = useSWR('/api/github', fetcher)
  const loading = !data

  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Home</title>
      </Head>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>So you found my Portfolio.</h1>
          <p>
            Glad to have you. <b>I&#39;m Rajbir.</b>
          </p>
          <p>
            Frontend Developer based in Southern California, typing on bespoke
            keyboards, playing through <i>God of War</i>, and perfecting the
            grilled cheese.
          </p>
          <p>
            Currently studying Computer Science but loving web development.
            Check out my recent project{' '}
            <a
              href="https://nexus-ucr.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              Nexus
            </a>
            .
          </p>
          <p>
            Feel free to sign my <Link href="/guestbook">Guestbook</Link> while
            you&#39;re here.
          </p>
          <p>
            This site was lasted edited about
            {loading ? (
              <>...</>
            ) : (
              <>
                {' '}
                <strong>
                  <TimeAgo date={data.portfolioLastUpdated} />
                </strong>
              </>
            )}{' '}
            and awesome people have visited a total of{' '}
            <strong>
              {hitcount.map((hitcount) => hitcount.hitcount)} times.
            </strong>
          </p>
        </div>
        <div className={styles.profilePic}>
          <Image
            src={profilePic}
            priority={true}
            placeholder="blur"
            alt="Picture of Rajbir Johar"
            className={styles.rounded}
            width={200}
            height={200}
            layout="fixed"
            quality={100}
          />
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isConnected = await clientPromise
  const db = isConnected.db(process.env.MONGODB_DB)
  const hitcount = await db.collection('hitcount').find({}).toArray()
  return {
    props: {
      hitcount: JSON.parse(JSON.stringify(hitcount)),
    },
  }
}
