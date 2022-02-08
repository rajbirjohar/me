import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/interests.module.css'
import data from '../data/images.json'

export default function Interests() {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Interests</title>
      </Head>
      <section>
        <h1>Interests</h1>
        <p>
          Just some of the travels, hobbies and passions that I have right now.
          Thanks to Conley and Danial for the edits since I suck at Lightroom.
        </p>
        <blockquote>Under development</blockquote>
        {/* {data.map((image) => {
          return (
            <span key={image.src} className={styles.picture}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
                quality={50}
              />
            </span>
          )
        })} */}
      </section>
    </Layout>
  )
}
