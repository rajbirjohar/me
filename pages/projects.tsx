import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ProjectList from '@/components/Projects/ProjectList'
import styles from '@/styles/projects.module.css'

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
        <h2>Now</h2>
        <div className={styles.featured}>
          {/* <Image
            src={'/assets/projects/Nexus.png'}
            alt="Nexus"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          /> */}

          <div className={styles.featuredcontent}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nexus-ucr.vercel.app"
            >
              Nexus
            </a>
            <p>
              I wanted to build a place where information gathers. A curation of
              class reviews and club bulletin board at UCR. A completely student
              driven idea.
            </p>
          </div>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://rajbir.io">
          Portfolio
        </a>
        <p>
          Resumes are boring so I made this. Here is where I grow and tend my
          everchanging garden of thoughts and ideas. Meant solely for myself and
          inspiration for others.
        </p>
        <h2>Other</h2>
        <p>
          A list of my most active projects. You can check them out in depth on
          Github.
        </p>
        <ProjectList />
      </section>
    </Layout>
  )
}
