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
          Here is a collection of my best work where I demonstrate my skills as
          a <span>developer and a creator.</span> You can also see a more
          detailed view on my{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/r-jo"
          >
            Github
          </a>
          .
        </p>
        <h2>Dashboard</h2>
        <p>
          My github dashboard containing live statistics on my github profile.
          This uses Github&apos;s official REST API to access the data you see.
          Follow me and watch the numbers update.
        </p>
        <Dashboard />
        <h2>Contributed Projects</h2>
        <p>
          These projects are also pulled from my Github profile as a list of all
          the repos I created or forked.
        </p>
        <ProjectList />
      </section>
    </Layout>
  )
}
