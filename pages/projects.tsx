import Head from 'next/head'
import Layout from '@/components/Layout'
import FeaturedProjects from '@/components/Projects/FeaturedProjects'
import ProjectList from '@/components/Projects/ProjectList'
import Dashboard from '@/components/Projects/Dashboard'

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
            href="https://github.com/rajbirjohar"
          >
            Github
          </a>
          .
        </p>
        <Dashboard />
        <h2>Featured</h2>
        <p>
          My passion written in code. My perserverance through late nights,
          early mornings, and plenty of mochas. I hope you enjoy them just as
          much as I had creating them.
        </p>
        <FeaturedProjects />
        <h2>Contributed</h2>
        <p>
          A list of the top five projects I created or contributed to sorted by
          star count. You can check them out in depth on my Github.
        </p>
        <ProjectList />
      </section>
    </Layout>
  )
}
