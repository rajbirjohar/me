import styles from "./page.module.scss";
import Hello from "./Hello";
import CopyText from "@/core/common/CopyText";
import { ArrowUpRightIcon } from "lucide-react";

export const revalidate = 60;

export default async function Home() {
  return (
    <section className={styles.hero}>
      <Hello />
      <p>Engineer and designer based in Arizona.</p>
      <p>
        Currently building slick and accessible interfaces for brilliant ideas.
        Aspiring CSS wizard. Breaking things and learning along the way.
      </p>
      <p>
        Working on{" "}
        <a className={styles.link} href="https://www.snowmouse.co/">
          Snow Mouse Studio <ArrowUpRightIcon size={10} />
        </a>{" "}
        on the side.
      </p>
      <p>
        Talk to me — <CopyText text="hello@rajbir.io" />.
      </p>
    </section>
  );
}
