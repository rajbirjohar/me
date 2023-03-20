import Prose from "@/core/atoms/Prose";
import Signature from "@/core/atoms/Signature";
import Head from "next/head";
import css from "./styles.module.css";
import Animate from "@/core/organisms/Animate";

export default function About() {
  return (
    <>
      <Head>
        <title>Rajbir Johar</title>
      </Head>
      <section>
        <Prose>
          <Animate>
            <h2>Who Am I</h2>
          </Animate>
          <Animate>
            <p>
              Hi there! I&#39;m a <strong>Frontend Architect</strong> at
              Inventives, where I&#39;m responsible for designing, coding and
              maintaining user interfaces.
            </p>
          </Animate>
          <Animate>
            <p>
              My focus is on creating{" "}
              <strong>enjoyable user experiences</strong> and delivering{" "}
              <strong>aesthetic design language</strong> in all of my projects.
            </p>
            <hr />
          </Animate>
          <Animate>
            <p>
              I&#39;m an artist at heart and I approach my work with a unique
              perspective. I believe in the importance of{" "}
              <strong>consistency</strong>, <strong>creativity</strong> and{" "}
              <strong>continuous learning</strong> to stay at the forefront of
              my field.
            </p>
          </Animate>
          <Animate>
            <p>
              Although I spend most of my time coding, I find great joy in
              designing visually stunning and user-friendly interfaces. My
              particular expertise in CSS lets me to bring my ideas to life.
            </p>
          </Animate>
          <Animate>
            <div className={css.signaturewrapper}>
              <Signature />
            </div>
          </Animate>
        </Prose>
      </section>
    </>
  );
}
