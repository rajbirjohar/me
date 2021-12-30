import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/interests.module.css'

export default function Interests() {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Interests</title>
      </Head>
      <section>
        <h1>Interests</h1>
        <p>
          Just some of the hobbies and passions that I have right now. Thanks to
          Conley and Danial for the edits since I suck at Lightroom.
        </p>
        <Image
          className={styles.picture}
          src="/assets/car/front.jpg"
          alt="Picture of my car"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/car/front_snow.jpg"
          alt="Picture of my car"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/car/rear.jpg"
          alt="Picture of my car"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/Think65_Iron165.jpeg"
          alt="Picture of my keyboards"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/Doro65.jpeg"
          alt="Picture of my keyboards"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/Vega65_Iron165.jpeg"
          alt="Picture of my keyboards"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/Think65_Iron165_2.jpeg"
          alt="Picture of my keyboards"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/DZ65.jpeg"
          alt="Picture of my keyboards"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/GhostS1.jpeg"
          alt="Picture of my computer"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/RTX2070.jpeg"
          alt="Picture of my computer"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/Radeon.jpeg"
          alt="Picture of my computer"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
        <Image
          className={styles.picture}
          src="/assets/keyboards/AMD.jpeg"
          alt="Picture of my computer"
          layout="responsive"
          height={75}
          width={100}
          objectFit="contain"
        />
      </section>
    </Layout>
  )
}
