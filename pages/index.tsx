import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Layout from '@/components/Layout'
import profilePic from '@/public/assets/profile.jpeg'
import styles from '@/styles/index.module.css'
import toast from 'react-hot-toast'
import TimeAgo from 'react-timeago'

export default function Projects() {
  const { data } = useSWR('/api/github', fetcher)
  const loading = !data
  function copyEmail() {
    navigator.clipboard.writeText('hello@rajbir.io')
    toast.success(
      "Copied my email. Fire up your favorite mail app and let's talk.",
      { duration: 4500 }
    )
    // Should probably error check but there is nearly
    // no way this simple function can produce an error.
  }

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
            Currently studying Computer Science but loving web development. Say
            hello at <a onClick={copyEmail}>hello@rajbir.io</a>.
          </p>
          <p>
            Feel free to sign my <Link href="/guestbook">Guestbook</Link> while
            you&#39;re here.
          </p>
          <p>
            Lasted edited about
            {loading ? (
              <>...</>
            ) : (
              <>
                {' '}
                <TimeAgo date={data.portfolioLastUpdated} />.
              </>
            )}
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
