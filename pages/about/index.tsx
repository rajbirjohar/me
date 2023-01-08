import Head from "next/head";
import css from "./styles.module.css";
import Container from "@/templates/Container";

export default function About() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | About</title>
      </Head>
      <Container
        heading={
          <header>
            <h1>Whoami</h1>
            <p>
              I&#39;m currently an engineer specializing in frontend and UX
              development. I work at Inventives, a venture studio.
            </p>
          </header>
        }
      >
        <div className={css.article}>
          <p>
            <em
              style={{
                fontSize: "var(--font-size-sm)",
                color: "var(--secondary-fg)",
                marginBottom: "var(--space-lg)",
              }}
            >
              This space is ever changing, just like we are as humans. Tomorrow
              might not look like today so enjoy today while you can.
            </em>
          </p>

          <section>
            <h2>A Detailed View</h2>
            <h3>Career</h3>
            <p>
              I&#39;m primarily focused on designing, architecting, and
              developing interfaces. Most of my experience is founded in React,
              specifically NextJS although I thoroughly enjoy writing CSS.
            </p>
            <p>
              Having only worked six months out of college (at the time of
              writing this), I am barely starting my career in web development
              and software engineering. Although I have taught myself everything
              I know for the past four years including foundational HTML, CSS,
              and Javascript as well as React and Typescript.
            </p>
            <p>
              Recently, I am also dabbling in App development with Flutter and
              Dart.
            </p>
            <h3>Education</h3>
            <p>
              I graduated with a Bachelors in Computer Science from the
              University of California, Riverside.
            </p>
          </section>
          <section>
            <h2>Personal</h2>
            <h3>📸 Photography</h3>
            <p>
              Recently, I started shooting photography after leaving my camera
              to collect dust for a few years. I find myself shooting portraits
              the most as it gives me an opportunity to connect with people and
              let them see how I see them.
            </p>
            <h3>⌨️ Keyboards</h3>
            <p>
              I figured if I&#39;m going to be coding for the rest of my life,
              might as well invest in the tool of the trade.
            </p>
            <h3>🐎 Automotives</h3>
            <p>
              I&#39;m a sucker for a tasteful exhaust note. Feeling the revs
              through the vibrations of the steering wheel stirs up that small
              thrill seeking part of me.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
