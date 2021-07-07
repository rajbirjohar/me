import Head from 'next/head'
import Layout from '@/components/Layout'
import ProjectList from '@/components/ProjectList'
import Dashboard from '@/components/Dashboard'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Projects</title>
      </Head>
      <section>
        <h1>Projects</h1>
        <p>
          A collection of my work. You can also see a more detailed view on my{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/r-jo"
          >
            Github
          </a>
          .
        </p>
        <Dashboard />
        <h2>Contributed</h2>
        <p>A list of the projects I created or contributed to.</p>
        <ProjectList />
      </section>
    </Layout>
  )
}
