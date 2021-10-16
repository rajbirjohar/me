import Head from 'next/head'
import Layout from '@/components/Layout'
import ThemeCard from '../components/ThemeCard'
import styles from '@/styles/theme.module.css'

export default function Theme() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Theme</title>
      </Head>
      <section>
        <h1 className={styles.title}>Pick Your Theme.</h1>
        <p>
          Check them all out. This is a continuous work in progress as I
          encounter more themes that speak to me and hopefully speak to you.
          Come back later for more.
        </p>
        <div className={styles.themeWrapper}>
          <ThemeCard title="System" value="system" />
          <ThemeCard title="Starlight" value="light" />
          <ThemeCard title="Midnight" value="dark" />
          <ThemeCard title="Sepia" value="sepia" />
          <ThemeCard title="Nord" value="nord" />
        </div>
      </section>
    </Layout>
  )
}
