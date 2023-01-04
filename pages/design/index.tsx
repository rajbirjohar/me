import {
  IconArrowUpRight,
  IconBrandTwitter,
  IconMountain,
} from "@tabler/icons";
import css from "./styles.module.css";
import Head from "next/head";

const paper = [
  "--zinc-0",
  "--zinc-1",
  "--zinc-2",
  "--zinc-3",
  "--zinc-4",
  "--zinc-5",
  "--zinc-6",
  "--zinc-7",
  "--zinc-8",
  "--zinc-9",
];

const primary = [
  "--primary-0",
  "--primary-1",
  "--primary-2",
  "--primary-3",
  "--primary-4",
  "--primary-5",
  "--primary-6",
  "--primary-7",
  "--primary-8",
  "--primary-9",
];

export default function Design() {
  return (
    <>
      <Head>
        <title>Rajbir Johar | Design System</title>
      </Head>
      <header>
        <h1>Design System</h1>
      </header>
      <article>
        <section>
          <h2>Typography</h2>
          <hr />
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>
            Here&#39;s to the crazy ones. The misfits. The rebels. The
            troublemakers. The round pegs in the square holes. The ones who see
            things differently. They&#39;re not fond of rules. And they have no
            respect for the status quo. You can quote them, disagree with them,
            glorify or vilify them. About the only thing you can&#39;t do is
            ignore them. Because they change things. They push the human race
            forward. While some may see them as the crazy ones, we see genius.
            Because the people who are crazy enough to think they can change the
            world, are the ones who do.
          </p>
          <blockquote>
            Here&#39;s to the crazy ones. The misfits. The rebels. The
            troublemakers. The round pegs in the square holes. The ones who see
            things differently. They&#39;re not fond of rules. And they have no
            respect for the status quo. You can quote them, disagree with them,
            glorify or vilify them. About the only thing you can&#39;t do is
            ignore them. Because they change things. They push the human race
            forward. While some may see them as the crazy ones, we see genius.
            Because the people who are crazy enough to think they can change the
            world, are the ones who do.
          </blockquote>
          <cite>Steve Jobs, 1997</cite>
          <br />
          <strong>Strong</strong>
          <br />
          <i>Italicized</i>
          <br />
          <s>Strikethrough</s>
          <br />
          <mark>Highlight</mark>
          <br />
          <code>console.log(&#34;Hello World!&#34;);</code>
          <br />
          <a>Portfolio</a>
        </section>
        <section>
          <h2>Colors</h2>
          <hr />
          <h3>Monochromatic</h3>
          <div className={css.colors}>
            {paper.map((color) => (
              <div
                key={color}
                style={{
                  backgroundColor: `var(${color})`,
                  height: "100px",
                  width: "100px",
                }}
              />
            ))}
          </div>
          {/* <div className={css.colors}>
            {primary.map((color) => (
              <div
                key={color}
                style={{
                  backgroundColor: `var(${color})`,
                  height: "100px",
                  width: "100px",
                }}
              />
            ))}
          </div> */}
        </section>
        <section>
          <h2>Shadows</h2>
          <hr />
        </section>
        <section>
          <h2>Spacing</h2>
          <hr />
        </section>
        <section>
          <h2>Buttons</h2>
          <hr />
        </section>
        <section>
          <h2>Inputs</h2>
          <hr />
        </section>
      </article>
    </>
  );
}
