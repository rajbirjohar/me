import Prose from "@/core/atoms/Prose";
import Animate from "@/core/organisms/Animate";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Projects</title>
      </Head>
      <section>
        <Prose>
          <Animate>
            <h1>Projects</h1>
          </Animate>
          <Animate>
            <p>
              <em>Stay tuned.</em>
            </p>
          </Animate>
        </Prose>
      </section>
    </>
  );
}
